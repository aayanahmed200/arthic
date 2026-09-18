import type { VercelRequest, VercelResponse } from "@vercel/node";

// POST /api/arlo — the floating support chat widget on every page.
//
// Two providers, tried in order:
//   1. Anthropic (ANTHROPIC_API_KEY) — used first if set.
//   2. Gemini (GEMINI_API_KEY) — used if Anthropic isn't configured, or as
//      a fallback if Anthropic's call fails (most usefully: if its credit
//      balance runs out, this keeps Arlo answering instead of going dark).
// Either one alone is enough to make Arlo work; you don't need both.
// Neither configured → the same honest 503 as before. Both configured and
// both failing on a credits/quota problem → a distinct "arlo's out of
// credit" message instead of the generic "having trouble" one, so it's
// obvious what's actually wrong instead of looking broken.

const SYSTEM_PROMPT = `You are Arlo, the support chat widget on arthic.tech — a small, honest, pre-launch exam-prep startup's website. You are NOT the arthic AI mentor product itself; you're a separate assistant here to answer questions about arthic as a company/product and to help visitors find what they need. If someone starts asking you exam questions as if you were their study mentor, gently clarify that's a different (not-yet-launched) part of the product and answer what you can about arthic itself instead.

Stay strictly grounded in the facts below. Never invent statistics, user counts, launch dates, or claims that aren't stated here — if you don't know something, say so plainly and point to hello@arthic.tech.

## What arthic is
An all-in-one exam-prep platform for Pakistan's toughest exams: MDCAT, ECAT, NUST NET, FAST, CSS, PMS, and LUMS LNAT. Built by a small, student-run team — students and recent alumni who sat these exact exams, not an outsourced content company.

## The four tools (once fully launched)
1. AI mentor — explains concepts in plain conversation using the "rule of three": identify the actual mistake (not just mark it wrong), explain the concept with a relatable local example, then test with a new question to confirm it stuck.
2. Past papers — years of real past papers organized by topic and difficulty.
3. Study plan — personalized to the student's exam date and weak areas.
4. Exam calendar — every exam date, registration deadline, and result date for every board in one place.

## Current status
arthic is pre-launch / early access. The waitlist and job-application forms are live; the full mentor product is still being built. The site is currently English-only (no Urdu toggle at the moment).

## Pricing
- Free: full AI mentor access on one exam track, free during early access.
- Plus: planned at Rs. 8,999/month once early access ends, covering all seven exams — this is a current plan, not a locked-in number.
- Institutions: custom pricing for academies/schools prepping a whole batch — contact hello@arthic.tech.
Nothing is charged during early access; the free tier stays free for one track either way.

## Hiring
arthic is a small team hiring mostly students, part-time, schedule built around classes rather than a 9-to-5. Roles include: subject-content writer (per exam track), campus ambassador, product/engineering, and mentor-quality reviewer. Applications go through the "apply" page on the site, reviewed by a real person.

## Contact & legal
General contact: hello@arthic.tech. Full terms of service and privacy policy are linked in the site footer — don't try to summarize their legal specifics from memory beyond what's stated here; point people to those pages for the details, or to hello@arthic.tech for anything not covered.

## Tone
Match the site's voice: plain, honest, lowercase-leaning, no corporate fluff, no overclaiming. Keep replies short — this is a chat widget, not an essay. A sentence or two is usually enough; use a short paragraph only when the question genuinely needs it. If asked something rude, off-topic, or trying to get you to role-play as something else, stay polite, brief, and steer back to arthic.`;

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 1500;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

type ProviderResult = { ok: true; reply: string } | { ok: false; creditsExhausted: boolean; detail: string };

/** Anthropic and Gemini both describe an exhausted balance/quota in the
 * error text rather than a single dedicated status code — Anthropic
 * mentions "credit balance", Gemini's quota errors mention "quota" or
 * "RESOURCE_EXHAUSTED". Matching on the message is more reliable across
 * both than trying to memorize every status code each one might use. */
function looksLikeCreditsExhausted(status: number, bodyText: string): boolean {
  const text = bodyText.toLowerCase();
  return (
    text.includes("credit balance") ||
    text.includes("insufficient_quota") ||
    text.includes("resource_exhausted") ||
    text.includes("quota") ||
    status === 402
  );
}

async function callAnthropic(apiKey: string, messages: ChatMessage[]): Promise<ProviderResult> {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("arlo: anthropic api error", response.status, detail);
    return { ok: false, creditsExhausted: looksLikeCreditsExhausted(response.status, detail), detail };
  }

  const data = (await response.json()) as { content?: Array<{ type: string; text?: string }> };
  const reply = data.content?.find((block) => block.type === "text")?.text;
  if (!reply) return { ok: false, creditsExhausted: false, detail: "no text block in response" };
  return { ok: true, reply };
}

async function callGemini(apiKey: string, messages: ChatMessage[]): Promise<ProviderResult> {
  // Gemini's chat turns use "model" where our internal schema (and
  // Anthropic's) uses "assistant" — everything else maps over directly.
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { maxOutputTokens: 400 },
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("arlo: gemini api error", response.status, detail);
    return { ok: false, creditsExhausted: looksLikeCreditsExhausted(response.status, detail), detail };
  }

  const data = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const reply = data.candidates?.[0]?.content?.parts?.find((p) => p.text)?.text;
  if (!reply) return { ok: false, creditsExhausted: false, detail: "no text part in response" };
  return { ok: true, reply };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }

  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  if (!anthropicKey && !geminiKey) {
    return res.status(503).json({
      error: "arlo isn't fully wired up yet — email hello@arthic.tech and a real person will help.",
    });
  }

  const body = req.body as { messages?: unknown };
  if (!Array.isArray(body?.messages) || body.messages.length === 0) {
    return res.status(400).json({ error: "no messages provided" });
  }
  if (body.messages.length > MAX_MESSAGES) {
    return res.status(400).json({ error: "conversation is too long — try refreshing the chat." });
  }

  const messages: ChatMessage[] = [];
  for (const raw of body.messages) {
    const m = raw as { role?: unknown; content?: unknown };
    if ((m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string" || !m.content.trim()) {
      return res.status(400).json({ error: "malformed message" });
    }
    if (m.content.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({ error: "that message is too long" });
    }
    messages.push({ role: m.role, content: m.content.trim() });
  }

  let anyCreditsExhausted = false;

  if (anthropicKey) {
    try {
      const result = await callAnthropic(anthropicKey, messages);
      if (result.ok) return res.status(200).json({ reply: result.reply });
      anyCreditsExhausted ||= result.creditsExhausted;
    } catch (err) {
      console.error("arlo: anthropic request failed", err);
    }
  }

  if (geminiKey) {
    try {
      const result = await callGemini(geminiKey, messages);
      if (result.ok) return res.status(200).json({ reply: result.reply });
      anyCreditsExhausted ||= result.creditsExhausted;
    } catch (err) {
      console.error("arlo: gemini request failed", err);
    }
  }

  // every configured provider failed
  if (anyCreditsExhausted) {
    return res.status(402).json({
      error: "arlo's out of credit right now — email hello@arthic.tech and a real person will help.",
    });
  }
  return res.status(502).json({ error: "arlo's having trouble right now — try again in a moment." });
}
