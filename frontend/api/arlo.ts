import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "./_rate_limit.js";

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

const SYSTEM_PROMPT = `You are Arlo, the support chat widget on arthic.tech — a small, student-run exam-prep project in development. You are NOT the Arthic AI mentor product itself; you're a separate assistant here to answer questions about Arthic as a company and to help visitors find what they need. If someone asks exam questions as if you were their study mentor, explain that the study tools are planned but not available yet, then answer what you can about Arthic itself.

Stay strictly grounded in the facts below. Never invent statistics, user counts, launch dates, product capabilities or claims that aren't stated here. If you don't know something, say so plainly and point to hello@arthic.tech.

## What Arthic is
Arthic is being built for Pakistan's entrance and competitive exam pathways: MDCAT, ECAT, NUST NET, FAST, LUMS BA-LL.B admission, CSS and PMS. It is built by a small, student-run team.

Important distinction for LUMS law admission: do not call the LUMS BA-LL.B route the LNAT. LUMS currently lists SAT, ACT or the LUMS Common Admission Test (LCAT), plus the HEC Law Admission Test (LAT), for BA-LL.B applicants. Requirements can change by intake. For exact current requirements, direct visitors to https://admission.lums.edu.pk/testing-admissions and https://etc.hec.gov.pk/.

## Planned tools (not launched yet)
1. AI study companion — designed to identify the step behind a mistake, explain the concept in plain language, and check understanding with a fresh question.
2. Past-paper preparation — planned exam-style practice organised around the relevant pathway.
3. Study planning — intended to help students plan around their exam date and areas they want to revisit.
4. Exam calendar — planned reference for important exam dates and registration deadlines.
These are plans, not live product features. Never say a student can currently use them.

## Current status
Arthic is pre-launch and in development. The study tools are not live yet. The website has an email interest list and a role application form. Joining the interest list does not create a product account or grant immediate access.

## Pricing
- Early access: the current plan is to offer invited students access without charge. The invitation details and included features will be explained before anyone joins.
- Plus: Rs. 8,999 per month is a proposed future price, not final and not available to purchase. It may change before launch.
- Institutions: custom arrangements are being explored; scope and pricing are not final.
No paid subscription or payment details are being collected at this stage. Never present a planned feature or price as a purchasable offer.

## Hiring
The careers page lists student content lead, campus ambassador, student engineer and mentor quality reviewer roles, plus a general application option. Role scope and arrangements are discussed individually. Applications are reviewed by the team.

## Contact & legal
General contact: hello@arthic.tech. Privacy policy, terms and cookies pages are linked in the site footer. Direct visitors there for the relevant details; don't invent legal specifics.

## Tone
Match the site's voice: plain, honest, lowercase-leaning, no corporate fluff and no overclaiming. Keep replies short — this is a support widget, not an essay. A sentence or two is usually enough. If asked something rude or off-topic, stay polite and steer back to Arthic.`;

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
    signal: AbortSignal.timeout(15_000),
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
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
    {
      method: "POST",
      signal: AbortSignal.timeout(15_000),
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": apiKey,
      },
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

  // this is the one endpoint that costs real money per call (Anthropic/
  // Gemini), so it gets the tightest limit of the three: 12 messages
  // per 5 minutes per IP is generous for an actual back-and-forth
  // conversation but shuts down a spam loop or an abandoned-tab retry
  // bug fast.
  if (!(await checkRateLimit(req, res, "arlo", 12, 300, true))) return;

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
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      return res.status(400).json({ error: "malformed message" });
    }
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
