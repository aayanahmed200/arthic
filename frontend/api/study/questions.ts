import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SAMPLE_QUESTIONS } from "../../src/data/sample-questions.js";

const DATA_VERSION = "sample-mdcat-biology-v1";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=3600");
  res.setHeader("X-Content-Type-Options", "nosniff");

  return res.status(200).json({
    dataVersion: DATA_VERSION,
    sourceKind: "original-sample",
    isOfficialPastPaper: false,
    questions: SAMPLE_QUESTIONS,
  });
}
