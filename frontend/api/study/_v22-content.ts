import { V22_SAMPLE_QUESTIONS } from "../../src/data/v22-sample-questions.js";
import type { PrivateStudyQuestion } from "./_sample-content.js";

const V22_ANSWERS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v22-lcat-001": {
    answer: "C",
    explanation: "The original 5:3 ratio represents 8 equal parts. Each part is 48 ÷ 8 = 6, so there are 30 under-18 members and 18 adults. After six adults join, the ratio is 30:24, which simplifies to 5:4.",
    takeaway: "Convert a ratio into actual group sizes before changing one group and simplifying the new ratio."
  },
  "v22-lcat-002": {
    answer: "C",
    explanation: "First subtract the fixed fee: Rs. 1,050 − Rs. 300 = Rs. 750. Each booklet costs Rs. 25, so 750 ÷ 25 = 30 booklets.",
    takeaway: "Subtract fixed charges before dividing the remaining budget by the unit cost."
  },
  "v22-lcat-003": {
    answer: "B",
    explanation: "The panel asks for another trial because the first result did not settle the question. In this context, inconclusive means that the evidence does not support a definite decision.",
    takeaway: "Use the surrounding sentence to identify the meaning of an unfamiliar word."
  },
  "v22-lcat-004": {
    answer: "C",
    explanation: "A desk remains unavailable while its reservation is active, even when the student does not arrive. Releasing it after a short grace period makes that unused space available to someone else.",
    takeaway: "Identify the specific problem described before deciding what a policy is intended to solve."
  },
  "v22-lcat-005": {
    answer: "C",
    explanation: "For similar shapes, area changes by the square of the side-length scale factor. The new area is 24 × (3/2)² = 24 × 9/4 = 54 cm².",
    takeaway: "When all lengths are multiplied by k, the area is multiplied by k²."
  },
  "v22-lcat-006": {
    answer: "A",
    explanation: "A fall in the raw collision count can partly reflect fewer vehicles using the road. Dividing collisions by exposure (such as vehicles or vehicle-kilometres) gives a rate that is more meaningful for comparing the risk of an individual journey. A similar road helps account for wider changes that may have occurred during the year.",
    takeaway: "When exposure changes, compare rates rather than raw event counts; use a suitable comparison group when assessing an intervention."
  },
  "v22-lcat-007": {
    answer: "D",
    explanation: "The rule says that a complete form is sufficient to guarantee an acknowledgement. Its contrapositive is that an applicant who did not receive an acknowledgement did not submit a complete form.",
    takeaway: "For an implication P → Q, the logically equivalent contrapositive is not-Q → not-P."
  },
  "v22-lcat-008": {
    answer: "C",
    explanation: "With neither…nor, the verb normally agrees with the subject nearest to it. The nearest subject is the plural noun teachers, so are is correct.",
    takeaway: "In a neither…nor construction, check the number of the subject closest to the verb."
  },
  "v22-lcat-009": {
    answer: "C",
    explanation: "Evaluate the inner function first: f(2) = 3(2) − 4 = 2. Then apply g: g(2) = 2² = 4.",
    takeaway: "For a composite function g(f(x)), calculate the inner function before applying the outer function."
  },
  "v22-lcat-010": {
    answer: "B",
    explanation: "The sales increase happened after the discount, but that timing alone does not show that the discount caused it. Changes in costs, customer numbers or general demand could explain the result. A comparable café gives a reference for changes that affected businesses more broadly.",
    takeaway: "A before-and-after change is not enough to establish causation; examine alternative explanations and a relevant comparison."
  },

  "v22-net-001": {
    answer: "A",
    explanation: "For a 2 × 2 matrix, the determinant is ad − bc. Here it is (3 × 4) − (2 × 5) = 12 − 10 = 2.",
    takeaway: "For [[a, b], [c, d]], calculate ad − bc."
  },
  "v22-net-002": {
    answer: "C",
    explanation: "Differentiate term by term: f′(x) = 3x² − 4. Substituting x = 2 gives 3(4) − 4 = 8.",
    takeaway: "Apply the power rule to each polynomial term, then substitute the required value."
  },
  "v22-net-003": {
    answer: "A",
    explanation: "Snell’s law gives n₁ sin i = n₂ sin r. Taking air as n₁ = 1 and glass as n₂ = 1.5, sin r = (1 × sin 30°)/1.5 = 0.5/1.5 = 1/3.",
    takeaway: "Use Snell’s law with the refractive indices on the correct sides of the boundary."
  },
  "v22-net-004": {
    answer: "B",
    explanation: "Momentum is conserved. Initial momentum is (2 × 6) + (4 × 0) = 12 kg m/s. The joined carts have a total mass of 6 kg, so their common speed is 12 ÷ 6 = 2 m/s.",
    takeaway: "For objects that stick together, divide total initial momentum by their combined mass."
  },
  "v22-net-005": {
    answer: "C",
    explanation: "The balanced equation requires two moles of H₂ for each mole of O₂. Two moles of O₂ can react with four moles of H₂, leaving one mole of H₂ unused. Oxygen is therefore limiting, and the 2:2 ratio produces 4.0 mol of water.",
    takeaway: "Compare available amounts with the balanced-equation mole ratio to identify the limiting reagent."
  },
  "v22-net-006": {
    answer: "A",
    explanation: "Zinc loses electrons to form Zn²⁺. Oxidation occurs at the anode, so the zinc electrode is the anode in this galvanic cell.",
    takeaway: "Oxidation occurs at the anode; reduction occurs at the cathode."
  },
  "v22-net-007": {
    answer: "B",
    explanation: "Each comparison in binary search approximately halves the remaining search interval. For 31 values, the worst-case sequence can reduce 31 to 15, 7, 3, 1 and then 0, requiring at most five comparisons.",
    takeaway: "Binary search on 31 sorted items requires at most ceil(log₂(31 + 1)) = 5 comparisons."
  },
  "v22-net-008": {
    answer: "C",
    explanation: "Expand the product: (3 + 2i)(1 − i) = 3 − 3i + 2i − 2i². Since i² = −1, the final term is +2. The result is 5 − i.",
    takeaway: "Expand complex products carefully and replace every i² with −1."
  },
  "v22-net-009": {
    answer: "A",
    explanation: "Wave speed is v = fλ. Substituting 440 Hz and 0.75 m gives v = 440 × 0.75 = 330 m/s.",
    takeaway: "Multiply frequency by wavelength to obtain wave speed."
  },
  "v22-net-010": {
    answer: "B",
    explanation: "Each C=O bond is polar, but the molecule is linear and symmetrical. The two bond dipoles point in opposite directions with equal magnitude, so they cancel.",
    takeaway: "Molecular polarity depends on both bond polarity and molecular geometry."
  },

  "v22-css-001": {
    answer: "B",
    explanation: "Article 160 provides for the National Finance Commission and the distribution of specified tax proceeds and other financial resources between the federation and the provinces.",
    takeaway: "The NFC is a constitutional mechanism for fiscal distribution between the federation and provinces."
  },
  "v22-css-002": {
    answer: "C",
    explanation: "The Eighteenth Amendment, enacted in 2010, strengthened provincial autonomy and transferred a range of legislative responsibilities from the federal level to the provinces.",
    takeaway: "Associate the Eighteenth Amendment with expanded provincial autonomy and devolution."
  },
  "v22-css-003": {
    answer: "A",
    explanation: "Real output growth is calculated from the ratio of nominal and price growth factors: (1.10 ÷ 1.06) − 1 = 0.0377, or approximately 3.8%. Subtracting 6 from 10 gives a close approximation, but the ratio gives the more accurate result.",
    takeaway: "For exact real growth from nominal growth and inflation, divide the nominal growth factor by the price-level growth factor."
  },
  "v22-css-004": {
    answer: "B",
    explanation: "A permanent member can cast a veto on a substantive draft resolution of the Security Council. This is distinct from General Assembly voting and routine Secretariat administration.",
    takeaway: "The Security Council veto is a power of each permanent member over substantive Council resolutions."
  },
  "v22-css-005": {
    answer: "A",
    explanation: "Stratospheric ozone absorbs a substantial part of the Sun’s ultraviolet radiation, reducing the amount of harmful UV reaching Earth’s surface.",
    takeaway: "The ozone layer’s key protective role is absorbing much of the Sun’s harmful ultraviolet radiation."
  },
  "v22-css-006": {
    answer: "C",
    explanation: "A simple ticket count cannot show whether access improved or whether passengers moved from another route. Measuring access, journey times and ridership before and after, while comparing similar districts, helps separate the pilot’s effect from wider trends.",
    takeaway: "Evaluate public programmes with before-and-after outcomes and a reasonable comparison group."
  },
  "v22-css-007": {
    answer: "B",
    explanation: "The introductory phrase describes the person who reviewed the draft. In option B, the committee is the subject that performs both actions: reviewing the draft and approving the budget.",
    takeaway: "An introductory modifier must clearly describe the subject that follows it."
  },
  "v22-css-008": {
    answer: "C",
    explanation: "N is fixed in position one and L in position five. M and K must be consecutive, with M before K. J must be before M, so J cannot be placed after the pair. The only valid order is N, J, M, K, L; therefore M and K occupy positions three and four.",
    takeaway: "Translate ordering rules into positions, then test each arrangement before making a claim about what is necessary."
  },
  "v22-css-009": {
    answer: "B",
    explanation: "The graduate gives up the wages they would have earned by taking the paid shift. The value of the best alternative forgone is the opportunity cost of attending the course.",
    takeaway: "Opportunity cost is the value of the best alternative that is given up."
  },
  "v22-css-010": {
    answer: "B",
    explanation: "Twelve years is three half-lives. The sample halves from 80 g to 40 g, then 20 g, then 10 g.",
    takeaway: "Divide the starting quantity by two once for each elapsed half-life."
  },

  "v22-mdcat-001": {
    answer: "B",
    explanation: "The proximal convoluted tubule reabsorbs nearly all filtered glucose under normal conditions, along with much of the filtered water and useful ions.",
    takeaway: "Most filtered glucose is reabsorbed in the proximal convoluted tubule."
  },
  "v22-mdcat-002": {
    answer: "B",
    explanation: "RNA polymerase reads a DNA template strand and joins complementary RNA nucleotides to form an RNA transcript. Translation, not transcription, uses the RNA message to build a polypeptide.",
    takeaway: "Transcription copies genetic information from DNA into RNA."
  },
  "v22-mdcat-003": {
    answer: "A",
    explanation: "The primary response generates memory B cells. On later exposure to the same antigen, these cells can rapidly proliferate and differentiate into antibody-secreting cells.",
    takeaway: "Memory lymphocytes are responsible for the faster, stronger secondary immune response."
  },
  "v22-mdcat-004": {
    answer: "B",
    explanation: "When voltage-gated sodium channels open, sodium ions move into the neuron down their electrochemical gradient. This inward positive current makes the membrane potential less negative and causes depolarisation.",
    takeaway: "Rapid neuronal depolarisation is mainly caused by sodium entering the cell."
  },
  "v22-mdcat-005": {
    answer: "B",
    explanation: "The Henderson–Hasselbalch equation is pH = pKa + log([A⁻]/[HA]). Equal concentrations make the ratio one, and log(1) is zero, so pH = pKa.",
    takeaway: "When a weak acid and its conjugate base are at equal concentrations, the buffer pH equals the acid’s pKa."
  },
  "v22-mdcat-006": {
    answer: "C",
    explanation: "Potassium is +1 and oxygen is −2. For a neutral K₂Cr₂O₇ unit: 2(+1) + 2x + 7(−2) = 0. Thus 2x − 12 = 0 and each chromium has oxidation state +6.",
    takeaway: "Set the sum of oxidation states equal to the overall charge of the compound."
  },
  "v22-mdcat-007": {
    answer: "A",
    explanation: "An SN2 reaction occurs in one concerted step involving both the substrate and the nucleophile. Its rate law is second order overall: rate = k[substrate][nucleophile].",
    takeaway: "The SN2 reaction rate depends on the concentrations of both reacting species."
  },
  "v22-mdcat-008": {
    answer: "C",
    explanation: "For perpendicular motion, F = qvB. Substituting q = 2 × 10⁻⁶ C, v = 3 × 10³ m/s and B = 0.5 T gives F = 3 × 10⁻³ N.",
    takeaway: "For a moving charge perpendicular to a magnetic field, use F = qvB."
  },
  "v22-mdcat-009": {
    answer: "D",
    explanation: "Using the lens formula with distances as magnitudes, 1/f = 1/v + 1/u. Therefore 1/10 = 1/v + 1/15, so 1/v = 1/10 − 1/15 = 1/30 and v = 30 cm. The image is real and forms on the opposite side of the lens.",
    takeaway: "Apply the thin-lens formula with a consistent sign convention; an object beyond the focal point forms a real image."
  },
  "v22-mdcat-010": {
    answer: "B",
    explanation: "Insulin lowers an elevated blood glucose level, moving the variable back towards its normal range. The response opposes the initial change, which is the defining feature of negative feedback.",
    takeaway: "Negative feedback counteracts a change and helps maintain a stable internal environment."
  },
};

export const V22_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V22_SAMPLE_QUESTIONS.map((question) => {
  const details = V22_ANSWERS[question.id];
  if (!details) throw new Error("Missing private answer details for " + question.id);
  return { ...question, ...details };
});

if (Object.keys(V22_ANSWERS).length !== V22_SAMPLE_QUESTIONS.length) {
  throw new Error("V22 question and answer counts do not match.");
}
