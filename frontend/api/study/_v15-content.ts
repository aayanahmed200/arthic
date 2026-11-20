import type { PrivateStudyQuestion } from "./_sample-content.js";
import { V15_SAMPLE_QUESTIONS } from "../../src/data/v15-sample-questions.js";

/** Server-only answer keys and explanations for V15. */
const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v15-lcat-001": {
    "answer": "B",
    "explanation": "Morning visits increased while daily visits stayed similar, which is consistent with students changing the time of their visit. The other options are not established by the information.",
    "takeaway": "A good inference explains the evidence without adding unsupported assumptions."
  },
  "v15-lcat-002": {
    "answer": "B",
    "explanation": "Subtract 7 from both sides to get 4x = 24. Dividing by 4 gives x = 6.",
    "takeaway": "Use inverse operations to isolate the variable."
  },
  "v15-lcat-003": {
    "answer": "B",
    "explanation": "The ratio has 2 + 7 = 9 parts. Each part is 27 ÷ 9 = 3 litres, so syrup is 2 × 3 = 6 litres.",
    "takeaway": "Add the ratio parts, find one part, then multiply by the required term."
  },
  "v15-lcat-004": {
    "answer": "B",
    "explanation": "To substantiate a claim is to provide evidence or reasons that support it.",
    "takeaway": "Use sentence context to select the meaning that fits."
  },
  "v15-lcat-005": {
    "answer": "A",
    "explanation": "The constraints form the sequence A before C before D before B. Only the first option follows all three conditions.",
    "takeaway": "Combine ordering rules into a single sequence before checking options."
  },
  "v15-lcat-006": {
    "answer": "B",
    "explanation": "“Each” is singular, so it takes the singular verb “has.” The plural noun “applicants” appears inside an of-phrase and does not control the verb.",
    "takeaway": "The verb agrees with the main subject, not a nearby noun."
  },
  "v15-lcat-007": {
    "answer": "A",
    "explanation": "Other changes in the local market could also affect customer numbers. Knowing whether competitors changed prices helps assess whether the discount was responsible.",
    "takeaway": "When evaluating a cause, check for other changes that occurred at the same time."
  },
  "v15-lcat-008": {
    "answer": "B",
    "explanation": "There are 10 counters in total and 2 are blue. The probability is 2/10 = 1/5.",
    "takeaway": "Probability is favourable outcomes divided by all equally likely outcomes."
  },
  "v15-lcat-009": {
    "answer": "B",
    "explanation": "A thermometer measures temperature; a barometer measures air pressure.",
    "takeaway": "Identify the relationship in the first pair and apply it to the second."
  },
  "v15-lcat-010": {
    "answer": "C",
    "explanation": "There are 30 students in total. The bus share is 18/30 × 100 = 60%.",
    "takeaway": "Divide the required group by the total, then multiply by 100."
  },
  "v15-net-001": {
    "answer": "C",
    "explanation": "Differentiate to get f′(x) = 4x + 3. Substituting x = 3 gives 12 + 3 = 15.",
    "takeaway": "Differentiate the expression first, then substitute the given value."
  },
  "v15-net-002": {
    "answer": "C",
    "explanation": "sin 30° = 1/2 and cos 60° = 1/2. Their sum is 1.",
    "takeaway": "Know the exact trigonometric values for common angles."
  },
  "v15-net-003": {
    "answer": "C",
    "explanation": "Newton's second law gives a = F/m = 12/3 = 4 m/s².",
    "takeaway": "Acceleration equals net force divided by mass."
  },
  "v15-net-004": {
    "answer": "C",
    "explanation": "Electrical power P = VI = 12 × 2 = 24 W.",
    "takeaway": "For a direct-current device, power is voltage multiplied by current."
  },
  "v15-net-005": {
    "answer": "B",
    "explanation": "One Mg²⁺ ion requires two Cl⁻ ions to balance the total charge, giving MgCl₂.",
    "takeaway": "Choose subscripts so the overall ionic compound is electrically neutral."
  },
  "v15-net-006": {
    "answer": "A",
    "explanation": "On the pH scale, lower values indicate greater acidity. Of the options, pH 2 is the most acidic.",
    "takeaway": "At a fixed temperature, a lower pH indicates a higher hydrogen-ion concentration."
  },
  "v15-net-007": {
    "answer": "B",
    "explanation": "A stack removes the most recently added item first, following last-in, first-out order.",
    "takeaway": "A stack is LIFO; a queue is FIFO."
  },
  "v15-net-008": {
    "answer": "C",
    "explanation": "10110₂ = 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 22.",
    "takeaway": "Convert binary by adding the powers of two represented by 1s."
  },
  "v15-net-009": {
    "answer": "B",
    "explanation": "Frequency is the number of cycles per second: 40 ÷ 5 = 8 Hz.",
    "takeaway": "Frequency equals the number of cycles divided by the time taken."
  },
  "v15-net-010": {
    "answer": "C",
    "explanation": "The distance is √((4−1)² + (6−2)²) = √(9 + 16) = 5.",
    "takeaway": "Use the distance formula √((x₂−x₁)² + (y₂−y₁)²)."
  },
  "v15-css-001": {
    "answer": "B",
    "explanation": "Municipal functions are generally administered through local governments operating under provincial laws and frameworks.",
    "takeaway": "Distinguish federal responsibilities from provincial and local administration."
  },
  "v15-css-002": {
    "answer": "B",
    "explanation": "An increase in demand shifts the demand curve to the right. With supply unchanged, the equilibrium price normally rises.",
    "takeaway": "A rightward shift in demand tends to increase both equilibrium price and quantity."
  },
  "v15-css-003": {
    "answer": "A",
    "explanation": "Non-interference is the principle that states should not intervene coercively in matters within another state's domestic jurisdiction.",
    "takeaway": "Separate diplomatic engagement from intervention in another state's internal affairs."
  },
  "v15-css-004": {
    "answer": "A",
    "explanation": "Publishing standards and performance information allows the public and oversight bodies to assess whether the department meets its responsibilities.",
    "takeaway": "Transparent standards make public performance easier to evaluate."
  },
  "v15-css-005": {
    "answer": "B",
    "explanation": "The Constituent Assembly adopted the Objectives Resolution on 12 March 1949.",
    "takeaway": "Learn key constitutional milestones with their dates and institutional context."
  },
  "v15-css-006": {
    "answer": "B",
    "explanation": "An environmental impact assessment examines potential effects and mitigation options before a proposed project is approved or implemented.",
    "takeaway": "Impact assessment informs decisions before a project proceeds."
  },
  "v15-css-007": {
    "answer": "A",
    "explanation": "Income, education and transport access may influence health outcomes and clinic availability. These factors could partly explain the observed association.",
    "takeaway": "Consider confounding factors before making a causal claim from observational data."
  },
  "v15-css-008": {
    "answer": "B",
    "explanation": "A decision-maker's undisclosed personal financial interest can compromise impartiality, particularly when they influence a contract awarded to their own company.",
    "takeaway": "A conflict of interest arises when private interests could improperly influence public duties."
  },
  "v15-css-009": {
    "answer": "B",
    "explanation": "The values are already in ascending order. The middle value of the five observations is 8.",
    "takeaway": "For an odd number of ordered observations, the median is the middle value."
  },
  "v15-css-010": {
    "answer": "B",
    "explanation": "The Pakistani part of the Thar Desert lies mainly in the southeastern part of Sindh, near the Indian border.",
    "takeaway": "Connect Pakistan's major physical regions with their provincial locations."
  },
  "v15-mdcat-001": {
    "answer": "A",
    "explanation": "The Golgi apparatus processes, sorts and packages proteins and lipids into vesicles for delivery to their destinations.",
    "takeaway": "The Golgi apparatus acts as a cell's processing and packaging centre."
  },
  "v15-mdcat-002": {
    "answer": "D",
    "explanation": "The left ventricle pumps oxygenated blood through the aortic valve into the aorta for distribution to the body.",
    "takeaway": "The left ventricle supplies the systemic circulation."
  },
  "v15-mdcat-003": {
    "answer": "B",
    "explanation": "The coding DNA strand has the same sequence as mRNA except that thymine (T) is replaced by uracil (U). ATG therefore corresponds to AUG.",
    "takeaway": "mRNA matches the coding DNA strand with U in place of T."
  },
  "v15-mdcat-004": {
    "answer": "A",
    "explanation": "A competitive inhibitor occupies the enzyme's active site and competes with the substrate. Increasing substrate concentration can often reduce its effect.",
    "takeaway": "Competitive inhibitors compete with substrate for the active site."
  },
  "v15-mdcat-005": {
    "answer": "B",
    "explanation": "The right side has two moles of gas, while the left side has four. Increasing pressure favours the side with fewer gas molecules, shifting equilibrium right.",
    "takeaway": "Higher pressure favours the side with fewer gaseous particles."
  },
  "v15-mdcat-006": {
    "answer": "B",
    "explanation": "Ethanol, CH₃CH₂OH, contains an –OH hydroxyl group and is classified as an alcohol.",
    "takeaway": "Alcohols contain the hydroxyl functional group, –OH."
  },
  "v15-mdcat-007": {
    "answer": "D",
    "explanation": "The change in gravitational potential energy is mgh = 2 × 10 × 3 = 60 J.",
    "takeaway": "Gravitational potential energy change is mass × gravitational field strength × height."
  },
  "v15-mdcat-008": {
    "answer": "A",
    "explanation": "For a converging lens, an object beyond 2F forms a real, inverted and diminished image between F and 2F on the opposite side.",
    "takeaway": "Beyond 2F produces a diminished real image between F and 2F."
  },
  "v15-mdcat-009": {
    "answer": "B",
    "explanation": "The cerebellum coordinates voluntary movement, posture and balance, helping movements remain smooth and accurate.",
    "takeaway": "The cerebellum is central to coordination and balance."
  },
  "v15-mdcat-010": {
    "answer": "C",
    "explanation": "The hydrogen-ion concentration is approximately 10⁻³ mol dm⁻³. Therefore pH = −log₁₀(10⁻³) = 3.",
    "takeaway": "For a strong monoprotic acid, pH is approximately −log₁₀ of its concentration."
  }
};

export const V15_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V15_SAMPLE_QUESTIONS.map((question) => {
  const details = ANSWER_DETAILS[question.id];
  if (!details) throw new Error(`Missing answer details for ${question.id}`);
  return { ...question, ...details, sourceKind: "original-sample" as const };
});
