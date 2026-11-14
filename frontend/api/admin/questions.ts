import { randomUUID } from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_db.js";
import { requireAdmin } from "../_auth.js";
import { checkRateLimit } from "../_rate_limit.js";
import { parseQuestionDraft } from "../_question-bank-validation.js";

const ID_RE = /^q_[0-9a-f-]{36}$/i;
const ALLOWED_ACTIONS = new Set(["save", "publish", "unpublish", "archive"]);

function unavailable(res: VercelResponse) {
  return res.status(503).json({ error: "The question bank is not prepared yet. Run the admin student-schema setup first." });
}

const RETURNING = `id, exam_code, subject_code, topic, prompt, instruction, options,
  answer_key, explanation, takeaway, source_kind, source_note,
  version, is_published, is_archived, created_at, updated_at`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!["GET", "POST", "PATCH"].includes(req.method ?? "")) {
    res.setHeader("Allow", "GET, POST, PATCH");
    return res.status(405).json({ error: "method not allowed" });
  }
  if (!requireAdmin(req, res)) return;
  if (!process.env.POSTGRES_URL) return res.status(503).json({ error: "Postgres is not configured on the server." });
  if (!(await checkRateLimit(req, res, "admin-question-bank", 180, 60))) return;

  try {
    if (req.method === "GET") {
      const { rows } = await sql`
        SELECT id, exam_code, subject_code, topic, prompt, instruction, options,
               answer_key, explanation, takeaway, source_kind, source_note,
               version, is_published, is_archived, created_at, updated_at
        FROM question_bank
        ORDER BY updated_at DESC
        LIMIT 300
      `;
      return res.status(200).json({ questions: rows });
    }

    const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
      ? req.body as Record<string, unknown>
      : {};

    if (req.method === "POST") {
      const parsed = parseQuestionDraft(body);
      if (!parsed.ok) return res.status(400).json({ error: parsed.error });
      const id = "q_" + randomUUID();
      const q = parsed.value;
      const { rows } = await sql`
        INSERT INTO question_bank (
          id, exam_code, subject_code, topic, prompt, instruction, options,
          answer_key, explanation, takeaway, source_kind, source_note,
          version, is_published, is_archived, updated_at
        )
        VALUES (
          ${id}, ${q.examCode}, ${q.subjectCode}, ${q.topic}, ${q.prompt},
          ${q.instruction}, ${JSON.stringify(q.options)}::jsonb, ${q.answerKey},
          ${q.explanation}, ${q.takeaway}, ${q.sourceKind}, ${q.sourceNote},
          1, false, false, now()
        )
        RETURNING id, exam_code, subject_code, topic, prompt, instruction, options,
                  answer_key, explanation, takeaway, source_kind, source_note,
                  version, is_published, is_archived, created_at, updated_at
      `;
      return res.status(201).json({ question: rows[0] });
    }

    const id = typeof body.id === "string" ? body.id : "";
    const action = typeof body.action === "string" ? body.action : "";
    if (!ID_RE.test(id) || !ALLOWED_ACTIONS.has(action)) return res.status(400).json({ error: "provide a valid question ID and action." });

    if (action === "save") {
      const expectedVersion = Number(body.expectedVersion);
      if (!Number.isSafeInteger(expectedVersion) || expectedVersion < 1) return res.status(400).json({ error: "reload this question before saving it." });
      const parsed = parseQuestionDraft(body);
      if (!parsed.ok) return res.status(400).json({ error: parsed.error });
      const q = parsed.value;
      const { rows } = await sql`
        UPDATE question_bank
        SET exam_code = ${q.examCode}, subject_code = ${q.subjectCode},
            topic = ${q.topic}, prompt = ${q.prompt}, instruction = ${q.instruction},
            options = ${JSON.stringify(q.options)}::jsonb, answer_key = ${q.answerKey},
            explanation = ${q.explanation}, takeaway = ${q.takeaway},
            source_kind = ${q.sourceKind}, source_note = ${q.sourceNote},
            version = version + 1, updated_at = now()
        WHERE id = ${id} AND version = ${expectedVersion} AND is_archived = false
        RETURNING id, exam_code, subject_code, topic, prompt, instruction, options,
                  answer_key, explanation, takeaway, source_kind, source_note,
                  version, is_published, is_archived, created_at, updated_at
      `;
      if (!rows[0]) {
        const exists = await sql`SELECT version FROM question_bank WHERE id = ${id}`;
        if (!exists.rows[0]) return res.status(404).json({ error: "question not found." });
        return res.status(409).json({ error: "this question changed elsewhere. Reload it before saving." });
      }
      return res.status(200).json({ question: rows[0] });
    }

    if (action === "publish") {
      const { rows } = await sql`
        UPDATE question_bank
        SET is_published = true, is_archived = false, updated_at = now()
        WHERE id = ${id}
          AND length(trim(prompt)) > 0 AND length(trim(explanation)) > 0
          AND length(trim(takeaway)) > 0
          AND answer_key IN (SELECT jsonb_array_elements(options)->>'key')
          AND (source_kind = 'original-sample' OR source_note IS NOT NULL)
        RETURNING id, is_published, is_archived, version
      `;
      if (!rows[0]) return res.status(409).json({ error: "question is incomplete or no longer available. Save it first." });
      return res.status(200).json({ question: rows[0] });
    }
    if (action === "unpublish") {
      const { rows } = await sql`
        UPDATE question_bank SET is_published = false, updated_at = now()
        WHERE id = ${id} AND is_archived = false
        RETURNING id, is_published, is_archived, version
      `;
      if (!rows[0]) return res.status(404).json({ error: "active question not found." });
      return res.status(200).json({ question: rows[0] });
    }
    const { rows } = await sql`
      UPDATE question_bank SET is_published = false, is_archived = true, updated_at = now()
      WHERE id = ${id} AND is_archived = false
      RETURNING id, is_published, is_archived, version
    `;
    if (!rows[0]) return res.status(404).json({ error: "active question not found." });
    return res.status(200).json({ question: rows[0] });
  } catch (error) {
    const message = String((error as Error)?.message ?? "");
    if (/does not exist|undefined column/i.test(message)) return unavailable(res);
    console.error("admin question bank request failed", error);
    return res.status(500).json({ error: "question bank request failed." });
  }
}
