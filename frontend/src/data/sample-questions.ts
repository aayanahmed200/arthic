export interface StudyOption {
  key: string;
  text: string;
}

export interface StudyQuestionPrompt {
  id: string;
  examCode: "MDCAT";
  subjectCode: "BIO";
  topic: string;
  prompt: string;
  instruction: string;
  options: StudyOption[];
  sourceKind: "original-sample" | "licensed" | "public-domain";
}

/**
 * Original demonstration questions only. This dataset is deliberately
 * small and is not presented as licensed or official past-paper content.
 * IDs are stable so future session records can refer to a question version.
 */
export const SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  {
    id: "mdcat-bio-cell-001",
    examCode: "MDCAT",
    subjectCode: "BIO",
    topic: "Cell organelles",
    prompt: "Which organelle is the main site of aerobic respiration and produces most of a cell's ATP?",
    instruction: "Choose one answer.",
    options: [
      { key: "A", text: "Ribosome" },
      { key: "B", text: "Mitochondrion" },
      { key: "C", text: "Golgi apparatus" },
      { key: "D", text: "Lysosome" },
    ],    sourceKind: "original-sample",
  },
  {
    id: "mdcat-bio-cell-002",
    examCode: "MDCAT",
    subjectCode: "BIO",
    topic: "Cell cycle",
    prompt: "During which phase of the cell cycle is the cell's DNA replicated?",
    instruction: "Choose one answer.",
    options: [
      { key: "A", text: "G₁ phase" },
      { key: "B", text: "G₂ phase" },
      { key: "C", text: "S phase" },
      { key: "D", text: "M phase" },
    ],    sourceKind: "original-sample",
  },
  {
    id: "mdcat-bio-membrane-001",
    examCode: "MDCAT",
    subjectCode: "BIO",
    topic: "Movement across membranes",
    prompt: "Which statement best describes osmosis?",
    instruction: "Choose one answer.",
    options: [
      { key: "A", text: "The movement of solute particles from high to low concentration." },
      { key: "B", text: "The movement of water through a selectively permeable membrane down its water-potential gradient." },
      { key: "C", text: "The movement of any particle using cellular energy." },
      { key: "D", text: "The breakdown of glucose to release energy." },
    ],    sourceKind: "original-sample",
  },
];
