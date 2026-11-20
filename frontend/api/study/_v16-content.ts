import type { PrivateStudyQuestion } from "./_sample-content.js";
import { V16_SAMPLE_QUESTIONS } from "../../src/data/v16-sample-questions.js";

/** Server-only answer keys and explanations for V16. */
const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v16-lcat-001": {
    "answer": "A",
    "explanation": "A 15% discount on Rs. 800 is Rs. 120. Subtracting the discount gives Rs. 680.",
    "takeaway": "Calculate the discount first, then subtract it from the marked price."
  },
  "v16-lcat-002": {
    "answer": "A",
    "explanation": "The rules require D before A, A before B and B before C. The sequence D, A, B, C satisfies all three.",
    "takeaway": "Combine the ordering conditions into one chain."
  },
  "v16-lcat-003": {
    "answer": "B",
    "explanation": "The grammatical subject is “list,” which is singular. The phrase “of the required documents” does not change the subject’s number.",
    "takeaway": "Find the main subject rather than the noun closest to the verb."
  },
  "v16-lcat-004": {
    "answer": "A",
    "explanation": "To mitigate a problem is to reduce its severity or harmful effect.",
    "takeaway": "Use the sentence context to distinguish reduction from measurement or cause."
  },
  "v16-lcat-005": {
    "answer": "C",
    "explanation": "The probability of heads on each fair toss is 1/2. For two independent tosses, multiply 1/2 by 1/2 to get 1/4.",
    "takeaway": "For independent events that must both occur, multiply their probabilities."
  },
  "v16-lcat-006": {
    "answer": "B",
    "explanation": "Bus use rose while campus car entries fell after the route was introduced. This is consistent with some journeys shifting from cars to buses, but it does not prove every student changed travel mode.",
    "takeaway": "Prefer a conclusion that fits both observations without claiming more than the data show."
  },
  "v16-lcat-007": {
    "answer": "C",
    "explanation": "Each term increases by 4: 5, 9, 13, 17. Adding 4 to 17 gives 21.",
    "takeaway": "Check the difference between consecutive terms."
  },
  "v16-lcat-008": {
    "answer": "A",
    "explanation": "The statement says every researcher at the laboratory has an identity card. Mira belongs to that group, so the rule applies to her.",
    "takeaway": "Apply the general rule to the individual described."
  },
  "v16-lcat-009": {
    "answer": "B",
    "explanation": "A compass indicates direction; a thermometer measures temperature. The same instrument-to-measurement relationship completes the analogy.",
    "takeaway": "Identify what the first instrument measures."
  },
  "v16-lcat-010": {
    "answer": "C",
    "explanation": "45 divided by 60 is 0.75. Multiplying by 100 converts this proportion to 75%.",
    "takeaway": "Divide the number in the group by the total, then convert to a percentage."
  },
  "v16-net-001": {
    "answer": "C",
    "explanation": "Differentiating 3x² − 4x gives f′(x) = 6x − 4. At x = 2, f′(2) = 12 − 4 = 8.",
    "takeaway": "Differentiate the expression before substituting the given value."
  },
  "v16-net-002": {
    "answer": "D",
    "explanation": "tan 45° = 1 and cos 0° = 1. Their sum is 2.",
    "takeaway": "Recall the exact trigonometric values for these standard angles."
  },
  "v16-net-003": {
    "answer": "B",
    "explanation": "The components are perpendicular, so the magnitude is √(6² + 8²) = √100 = 10 units.",
    "takeaway": "Use the Pythagorean relationship for perpendicular vector components."
  },
  "v16-net-004": {
    "answer": "B",
    "explanation": "Ohm’s law gives I = V/R. Substituting 24 V and 8 Ω gives I = 24/8 = 3 A.",
    "takeaway": "Relate voltage, resistance and current using the stated circuit values."
  },
  "v16-net-005": {
    "answer": "C",
    "explanation": "Two Al³⁺ ions provide a total charge of +6, while three O²⁻ ions provide −6. The neutral formula is Al₂O₃.",
    "takeaway": "Balance the total positive and negative ionic charges."
  },
  "v16-net-006": {
    "answer": "C",
    "explanation": "An antiderivative of 3x² is x³. Evaluating from 0 to 2 gives 2³ − 0³ = 8.",
    "takeaway": "Find an antiderivative and evaluate it at both limits."
  },
  "v16-net-007": {
    "answer": "C",
    "explanation": "For an object dropped from rest, v = gt. With g = 10 m/s² and t = 2 s, the speed is 20 m/s.",
    "takeaway": "Use the constant-acceleration relationship for an object starting from rest."
  },
  "v16-net-008": {
    "answer": "B",
    "explanation": "For independent events, P(A and B) = P(A) × P(B) = 0.4 × 0.5 = 0.2.",
    "takeaway": "Independence allows the intersection probability to be found by multiplication."
  },
  "v16-net-009": {
    "answer": "C",
    "explanation": "The binary digits represent 16 + 8 + 0 + 2 + 0, which totals 26 in decimal.",
    "takeaway": "Expand the binary number using powers of two from right to left."
  },
  "v16-net-010": {
    "answer": "A",
    "explanation": "For parallel resistors, 1/R = 1/3 + 1/6 = 1/2. Therefore the equivalent resistance is 2 Ω.",
    "takeaway": "Add the reciprocals of the branch resistances, then invert the result."
  },
  "v16-css-001": {
    "answer": "A",
    "explanation": "The 18th Amendment, enacted in 2010, expanded provincial autonomy and abolished the Concurrent Legislative List, transferring a range of responsibilities to the provinces.",
    "takeaway": "Focus on the amendment’s changes to the federal–provincial division of powers."
  },
  "v16-css-002": {
    "answer": "B",
    "explanation": "The law of demand states that, other things being equal, a higher price is associated with a lower quantity demanded.",
    "takeaway": "Keep other factors constant and distinguish demand from quantity demanded."
  },
  "v16-css-003": {
    "answer": "C",
    "explanation": "“Ubiquitous” describes something present or found everywhere.",
    "takeaway": "Look for the option expressing widespread presence."
  },
  "v16-css-004": {
    "answer": "A",
    "explanation": "“Had she known” is the inverted form of “If she had known.” The result clause “she would have taken” correctly expresses the unreal past outcome.",
    "takeaway": "Check the past perfect condition and the would-have result."
  },
  "v16-css-005": {
    "answer": "A",
    "explanation": "A comparison with similar roads that did not receive new lighting helps show whether incidents changed differently where the intervention occurred.",
    "takeaway": "A comparison group helps separate a possible intervention effect from wider trends."
  },
  "v16-css-006": {
    "answer": "B",
    "explanation": "Balance of power refers to states or alliances countering one another’s capabilities so that no single state can dominate the system.",
    "takeaway": "Consider how states respond when one power becomes disproportionately strong."
  },
  "v16-css-007": {
    "answer": "B",
    "explanation": "The observations establish that employment and output both increased during the period. They do not, by themselves, establish that one caused the other.",
    "takeaway": "Separate a pattern of association from evidence of cause and effect."
  },
  "v16-css-008": {
    "answer": "A",
    "explanation": "The Senate is designed to give the provinces equal representation, rather than allocating all provincial seats by population.",
    "takeaway": "Distinguish the Senate’s federal representation from population-based representation."
  },
  "v16-css-009": {
    "answer": "B",
    "explanation": "Ad hominem reasoning attacks or dismisses the person making an argument instead of evaluating the argument’s merits.",
    "takeaway": "Ask whether the criticism addresses the proposal or the proposer."
  },
  "v16-css-010": {
    "answer": "B",
    "explanation": "There are five ordered values, so the median is the middle, third value: 8.",
    "takeaway": "For an odd number of ordered observations, select the central value."
  },
  "v16-mdcat-001": {
    "answer": "B",
    "explanation": "RNA polymerase reads the DNA template strand and joins RNA nucleotides to produce the RNA transcript.",
    "takeaway": "Distinguish the enzyme that synthesises RNA from enzymes that modify or replicate DNA."
  },
  "v16-mdcat-002": {
    "answer": "C",
    "explanation": "Molarity is moles of solute divided by solution volume in litres. 0.5 ÷ 2.0 = 0.25 mol/L.",
    "takeaway": "Divide the amount of solute by the total solution volume in litres."
  },
  "v16-mdcat-003": {
    "answer": "C",
    "explanation": "Resistances in series add directly: 3 Ω + 6 Ω = 9 Ω.",
    "takeaway": "For a series circuit, add the individual resistances."
  },
  "v16-mdcat-004": {
    "answer": "B",
    "explanation": "The aorta leaves the left ventricle and carries oxygenated blood into the systemic circulation.",
    "takeaway": "Trace the route of blood leaving the left side of the heart."
  },
  "v16-mdcat-005": {
    "answer": "B",
    "explanation": "A strong monoprotic acid at 0.01 mol/L has [H⁺] = 10⁻² mol/L. Therefore pH = −log₁₀(10⁻²) = 2.",
    "takeaway": "Convert the hydrogen-ion concentration to a power of ten before taking the negative logarithm."
  },
  "v16-mdcat-006": {
    "answer": "A",
    "explanation": "Crossing over between homologous chromosomes occurs during prophase I of meiosis, specifically in the pachytene stage.",
    "takeaway": "Recall the stage of meiosis when homologous chromosomes pair and exchange segments."
  },
  "v16-mdcat-007": {
    "answer": "C",
    "explanation": "Kinetic energy is ½mv². Substituting 2 kg and 3 m/s gives ½ × 2 × 3² = 9 J.",
    "takeaway": "Square the speed before multiplying by half the mass."
  },
  "v16-mdcat-008": {
    "answer": "C",
    "explanation": "In H₂SO₄, hydrogen contributes +2 and oxygen contributes −8. For a neutral molecule, sulfur must therefore be +6.",
    "takeaway": "Set the sum of oxidation numbers in a neutral molecule equal to zero."
  },
  "v16-mdcat-009": {
    "answer": "B",
    "explanation": "The filtrate passes from the glomerular capillaries into Bowman’s capsule, which receives the fluid at the start of the nephron.",
    "takeaway": "Identify the cup-shaped structure surrounding the glomerular capillaries."
  },
  "v16-mdcat-010": {
    "answer": "B",
    "explanation": "The period is the reciprocal of frequency: T = 1/50 s = 0.02 s.",
    "takeaway": "Use the inverse relationship between period and frequency."
  }
};

export const V16_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V16_SAMPLE_QUESTIONS.map((question) => {
  const details = ANSWER_DETAILS[question.id];
  if (!details) throw new Error(`Missing answer details for ${question.id}`);
  return { ...question, ...details, sourceKind: "original-sample" as const };
});
