import type { PrivateStudyQuestion } from "./_sample-content.js";
import { V13_SAMPLE_QUESTIONS } from "../../src/data/v13-sample-questions.js";

/** Server-only answer keys and explanations for the 40 V13 questions. */
const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v13-lcat-001": {
    "answer": "C",
    "explanation": "Simple interest = principal × rate × time = 12,000 × 0.05 × 2 = Rs. 1,200.",
    "takeaway": "For simple interest, use I = Prt with the rate written as a decimal."
  },
  "v13-lcat-002": {
    "answer": "C",
    "explanation": "For ax² + bx + c = 0, the product of the roots is c/a. Here it is 6/1 = 6.",
    "takeaway": "For a quadratic, the product of the roots is c/a and their sum is −b/a."
  },
  "v13-lcat-003": {
    "answer": "B",
    "explanation": "The total distance is 240 km. The times are 2 hours and 3 hours, so average speed = 240 ÷ 5 = 48 km/h.",
    "takeaway": "Average speed is total distance divided by total time, not the simple mean of the speeds."
  },
  "v13-lcat-004": {
    "answer": "C",
    "explanation": "“Neither” is singular in this construction, so it takes the singular verb “is.”",
    "takeaway": "In formal subject–verb agreement, “neither” generally takes a singular verb."
  },
  "v13-lcat-005": {
    "answer": "B",
    "explanation": "To mitigate a problem is to make it less severe. The sentence indicates that the procedure aims to reduce delays.",
    "takeaway": "Use the surrounding context to choose the meaning that fits the sentence."
  },
  "v13-lcat-006": {
    "answer": "B",
    "explanation": "An editor works with a manuscript; a curator is responsible for a collection.",
    "takeaway": "Identify the relationship between the first pair before applying it to the second."
  },
  "v13-lcat-007": {
    "answer": "B",
    "explanation": "The increase in evening visits alongside a similar weekly total is consistent with visits shifting to a different time of day. The other claims go beyond the evidence.",
    "takeaway": "A sound inference stays within what the stated evidence supports."
  },
  "v13-lcat-008": {
    "answer": "C",
    "explanation": "The first statement directly says every debate-club member belongs to the set of students. The second statement does not establish an overlap with debate-club members.",
    "takeaway": "Do not infer that two groups overlap unless the statements establish that overlap."
  },
  "v13-lcat-009": {
    "answer": "A",
    "explanation": "The rules combine to form H before J before K before L. Only the first sequence follows that order.",
    "takeaway": "Combine ordering conditions into one chain before checking the answer choices."
  },
  "v13-lcat-010": {
    "answer": "B",
    "explanation": "“Although” clearly signals a contrast between the report's detail and its omission of recent figures.",
    "takeaway": "Choose linking words that express the intended logical relationship."
  },
  "v13-net-001": {
    "answer": "C",
    "explanation": "Differentiate to obtain f′(x) = 3x² − 2. Substituting x = 2 gives 12 − 2 = 10.",
    "takeaway": "Differentiate first, then substitute the specified value."
  },
  "v13-net-002": {
    "answer": "C",
    "explanation": "For y = ax² + bx + c, the vertex has x-coordinate −b/(2a). Here that is −(−6)/(2 × 1) = 3.",
    "takeaway": "The vertex x-coordinate of ax² + bx + c is −b/(2a)."
  },
  "v13-net-003": {
    "answer": "B",
    "explanation": "Acceleration = change in velocity ÷ time = (20 − 4) ÷ 4 = 4 m/s².",
    "takeaway": "Use a = (final velocity − initial velocity) ÷ time."
  },
  "v13-net-004": {
    "answer": "B",
    "explanation": "Ohm's law gives I = V/R = 18/6 = 3 A.",
    "takeaway": "For an ohmic resistor, current is voltage divided by resistance."
  },
  "v13-net-005": {
    "answer": "C",
    "explanation": "Wave speed v = fλ = 50 × 0.4 = 20 m/s.",
    "takeaway": "Wave speed equals frequency multiplied by wavelength."
  },
  "v13-net-006": {
    "answer": "B",
    "explanation": "Amount in moles = mass ÷ molar mass = 9 ÷ 18 = 0.5 mol.",
    "takeaway": "Convert mass to moles by dividing by the molar mass."
  },
  "v13-net-007": {
    "answer": "B",
    "explanation": "Heat can be treated as a product in an exothermic reaction. Adding heat shifts equilibrium in the direction that consumes it, towards reactants.",
    "takeaway": "Increasing temperature favours the endothermic direction of an equilibrium."
  },
  "v13-net-008": {
    "answer": "B",
    "explanation": "Across a period, nuclear charge increases while added electrons enter the same principal shell. The stronger attraction generally pulls the electron cloud closer.",
    "takeaway": "Atomic radius generally decreases across a period because effective nuclear attraction increases."
  },
  "v13-net-009": {
    "answer": "C",
    "explanation": "1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13.",
    "takeaway": "Expand a binary number using powers of two, starting from 2⁰ on the right."
  },
  "v13-net-010": {
    "answer": "C",
    "explanation": "A linear search may need to inspect every item once. The number of checks therefore grows in proportion to n.",
    "takeaway": "Linear search has O(n) worst-case time complexity."
  },
  "v13-css-001": {
    "answer": "C",
    "explanation": "The Eighteenth Amendment, enacted in 2010, made major constitutional changes including the abolition of the Concurrent Legislative List and a transfer of many subjects to the provinces.",
    "takeaway": "Connect constitutional amendments with their major institutional effects, not only their numbers."
  },
  "v13-css-002": {
    "answer": "B",
    "explanation": "If prices rise but nominal income does not, the same income buys fewer goods and services. Real purchasing power falls.",
    "takeaway": "Purchasing power depends on income relative to the prices of goods and services."
  },
  "v13-css-003": {
    "answer": "B",
    "explanation": "Sovereignty describes a state's authority over its internal affairs and its independence as a political entity in the international system.",
    "takeaway": "Distinguish a state's internal authority from its external independence."
  },
  "v13-css-004": {
    "answer": "C",
    "explanation": "Mitigation reduces greenhouse-gas emissions or increases their removal. Replacing coal power with low-carbon energy directly reduces emissions.",
    "takeaway": "Mitigation addresses the causes of climate change; adaptation reduces its impacts."
  },
  "v13-css-005": {
    "answer": "B",
    "explanation": "Merit-based recruitment uses relevant qualifications and performance rather than personal connections or arbitrary preference.",
    "takeaway": "Merit means decisions are based on relevant ability and transparent criteria."
  },
  "v13-css-006": {
    "answer": "B",
    "explanation": "Other simultaneous changes could also explain the reduction. Checking for roadworks, policy changes or other confounding factors helps assess causation.",
    "takeaway": "A change occurring after a policy does not by itself prove the policy caused it."
  },
  "v13-css-007": {
    "answer": "C",
    "explanation": "The Karakoram Range lies in northern Pakistan and includes some of the world's highest peaks.",
    "takeaway": "Learn Pakistan's major physical regions by linking ranges to their broad locations."
  },
  "v13-css-008": {
    "answer": "B",
    "explanation": "A semicolon can separate two independent clauses, and “however” is followed by a comma when it functions as a conjunctive adverb.",
    "takeaway": "Use a semicolon before a conjunctive adverb joining two independent clauses."
  },
  "v13-css-009": {
    "answer": "B",
    "explanation": "Separating legislative, executive and judicial functions creates checks that limit the concentration and possible abuse of public power.",
    "takeaway": "Separation of powers distributes authority and supports institutional accountability."
  },
  "v13-css-010": {
    "answer": "C",
    "explanation": "The increase is Rs. 20 million. Percentage increase = (20 ÷ 80) × 100 = 25%.",
    "takeaway": "Calculate percentage change using the original value as the denominator."
  },
  "v13-mdcat-001": {
    "answer": "B",
    "explanation": "During metaphase, chromosomes align at the metaphase plate before sister chromatids separate in anaphase.",
    "takeaway": "Metaphase is the alignment stage; anaphase is the separation stage."
  },
  "v13-mdcat-002": {
    "answer": "C",
    "explanation": "The possible genotypes are AA, Aa, Aa and aa. One of the four equally likely outcomes is aa.",
    "takeaway": "For Aa × Aa, the genotype ratio is 1 AA : 2 Aa : 1 aa."
  },
  "v13-mdcat-003": {
    "answer": "B",
    "explanation": "Pulmonary veins return oxygenated blood from the lungs to the left atrium. The pulmonary arteries carry deoxygenated blood from the right ventricle to the lungs.",
    "takeaway": "Pulmonary veins are the exception to the usual pattern of veins carrying deoxygenated blood."
  },
  "v13-mdcat-004": {
    "answer": "B",
    "explanation": "High temperatures can disrupt interactions that maintain the enzyme's three-dimensional structure. A changed active site may no longer bind the substrate effectively.",
    "takeaway": "Enzyme activity depends on the protein's specific three-dimensional structure."
  },
  "v13-mdcat-005": {
    "answer": "C",
    "explanation": "The strong acid and strong base contain equal amounts of H⁺ and OH⁻, so they neutralise each other. The resulting sodium chloride solution is approximately neutral at 25°C.",
    "takeaway": "For equal concentrations and equal volumes of a strong monoprotic acid and strong base, the mixture is neutral."
  },
  "v13-mdcat-006": {
    "answer": "B",
    "explanation": "Across Period 3, proton number increases while added electrons enter the same principal energy level. The stronger effective nuclear attraction draws the electron cloud closer.",
    "takeaway": "Across a period, increasing effective nuclear charge generally reduces atomic radius."
  },
  "v13-mdcat-007": {
    "answer": "C",
    "explanation": "For resistors in series, equivalent resistance is the sum: 3 + 6 = 9 Ω.",
    "takeaway": "Series resistances add; parallel resistances combine using reciprocals."
  },
  "v13-mdcat-008": {
    "answer": "C",
    "explanation": "Lens power P = 1/f when focal length is in metres. P = 1/0.25 = +4 dioptres; the sign is positive for a converging lens.",
    "takeaway": "Power is the reciprocal of focal length in metres; converging lenses have positive power."
  },
  "v13-mdcat-009": {
    "answer": "B",
    "explanation": "Xylem vessels and tracheids conduct water and mineral ions through the plant, mainly from roots towards the leaves.",
    "takeaway": "Xylem transports water and mineral ions; phloem transports organic solutes."
  },
  "v13-mdcat-010": {
    "answer": "C",
    "explanation": "Ten percent of 1,000 kJ is 0.10 × 1,000 = 100 kJ.",
    "takeaway": "Apply the stated transfer percentage to the energy available at the previous trophic level."
  }
};

export const V13_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V13_SAMPLE_QUESTIONS.map((question) => {
  const details = ANSWER_DETAILS[question.id];
  if (!details) throw new Error(`Missing answer details for ${question.id}`);
  return { ...question, ...details, sourceKind: "original-sample" as const };
});
