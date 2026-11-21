import type { StudyQuestionPrompt } from "./sample-questions.js";
import { V18_LCAT_QUESTIONS } from "./v18-lcat-questions.js";
import { V18_NET_QUESTIONS } from "./v18-net-questions.js";
import { V18_CSS_QUESTIONS } from "./v18-css-questions.js";
import { V18_MDCAT_QUESTIONS } from "./v18-mdcat-questions.js";

export const V18_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  ...V18_LCAT_QUESTIONS,
  ...V18_NET_QUESTIONS,
  ...V18_CSS_QUESTIONS,
  ...V18_MDCAT_QUESTIONS,
];
