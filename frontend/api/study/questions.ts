import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SAMPLE_QUESTIONS } from "./_sample-content.js";

const DATA_VERSION = "sample-mdcat-biology-v2";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=3600");
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Do not send answer keys or explanations before a student submits.
  const questions = SAMPLE_QUESTIONS.map((question) => ({
    id: question.id,
    examCode: question.examCode,
    subjectCode: question.subjectCode,
    topic: question.topic,
    prompt: question.prompt,
    instruction: question.instruction,
    options: question.options,
    sourceKind: question.sourceKind,
  }));

  return res.status(200).json({
    dataVersion: DATA_VERSION,
    sourceKind: "original-sample",
    isOfficialPastPaper: false,
    questions,
  });
}
