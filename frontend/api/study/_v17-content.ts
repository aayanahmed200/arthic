import type { PrivateStudyQuestion } from "./_sample-content.js";
import { V17_SAMPLE_QUESTIONS } from "../../src/data/v17-sample-questions.js";

/** Server-only answer keys and explanations for V17. */
const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v17-lcat-001": { answer:"A", explanation:"The ratio has 3 + 5 = 8 equal parts. The smaller share is 3/8 of 64, which is 24.", takeaway:"Add the ratio parts, then multiply the total by the share you need." },
  "v17-lcat-002": { answer:"B", explanation:"The increase in borrowing in distant neighbourhoods is consistent with improved access after the mobile service was introduced. It does not show that every resident used it.", takeaway:"Choose the conclusion supported by the evidence without exaggerating it." },
  "v17-lcat-003": { answer:"C", explanation:"With a neither…nor construction, the verb commonly agrees with the nearer subject. “Students” is plural, so “were” is correct.", takeaway:"For neither…nor, check the subject nearest the verb." },
  "v17-lcat-004": { answer:"A", explanation:"A 20% increase takes Rs. 1,500 to Rs. 1,800. The 20% reduction is Rs. 360, leaving Rs. 1,440.", takeaway:"Successive percentage changes apply to the changing amount, not always the original amount." },
  "v17-lcat-005": { answer:"B", explanation:"The five values are already ordered. The third value is the central observation, so the median is 11.", takeaway:"For an odd number of ordered values, the median is the middle one." },
  "v17-lcat-006": { answer:"C", explanation:"Some interns are fellows, and every fellow must submit a report. Those interns therefore submit a report.", takeaway:"Apply a universal rule to the members of the group identified in the premise." },
  "v17-lcat-007": { answer:"D", explanation:"The passage lists shade, cooling and rainwater absorption as benefits. Its purpose is to explain several environmental benefits of urban trees.", takeaway:"The main purpose should cover the central ideas across the whole passage." },
  "v17-lcat-008": { answer:"B", explanation:"The probability is (3/5) × (2/4) = 6/20 = 3/10 because the first red counter is not replaced.", takeaway:"For dependent selections without replacement, update the total and favourable counts after the first draw." },
  "v17-lcat-009": { answer:"A", explanation:"To concur is to agree with an opinion, decision or statement.", takeaway:"Use the closest synonym that preserves the word’s meaning." },
  "v17-lcat-010": { answer:"C", explanation:"Angles on a straight line add to 180°. Subtracting 117° gives 63°.", takeaway:"Supplementary angles have a total of 180°." },

  "v17-net-001": { answer:"A", explanation:"Factor the quadratic as (x − 2)(x − 3) = 0. Therefore x = 2 or x = 3.", takeaway:"Look for two factors whose product is the constant term and whose sum gives the middle coefficient." },
  "v17-net-002": { answer:"B", explanation:"The dot product is 2×3 + (−1)×4 = 6 − 4 = 2.", takeaway:"Multiply corresponding vector components and add the products." },
  "v17-net-003": { answer:"C", explanation:"Newton’s second law gives F = ma. With m = 4 kg and a = 3 m/s², F = 12 N.", takeaway:"Multiply mass by acceleration to find the net force." },
  "v17-net-004": { answer:"A", explanation:"For parallel resistors, 1/R = 1/4 + 1/12 = 3/12 + 1/12 = 1/3. Thus R = 3 Ω.", takeaway:"For parallel branches, add reciprocal resistances and invert the sum." },
  "v17-net-005": { answer:"D", explanation:"The balanced equation uses 2 moles of H₂ for every 1 mole of O₂. Four moles of H₂ therefore require 2 moles of O₂.", takeaway:"Use the coefficients in a balanced equation as mole ratios." },
  "v17-net-006": { answer:"B", explanation:"The equation shows 1 mole of CH₄ produces 2 moles of H₂O. Three moles of methane produce 6 moles of water.", takeaway:"Convert reactant moles to product moles using the balanced-equation ratio." },
  "v17-net-007": { answer:"A", explanation:"A neutral sodium atom has 11 electrons. Filling the shells gives 2 in the first, 8 in the second and 1 in the third.", takeaway:"For a neutral atom, the electron count equals the atomic number." },
  "v17-net-008": { answer:"C", explanation:"A stack removes the most recently added item first, which is the last-in, first-out rule.", takeaway:"Remember that a stack is LIFO, while a queue is FIFO." },
  "v17-net-009": { answer:"D", explanation:"Differentiating gives f′(x) = 3x² − 2. Substituting x = 2 gives 12 − 2 = 10.", takeaway:"Differentiate first, then substitute the specified input." },
  "v17-net-010": { answer:"B", explanation:"For an ideal transformer, Vs/Vp = Ns/Np = 1000/200 = 5. The secondary voltage is 5 × 12 V = 60 V.", takeaway:"Voltage ratio equals the turns ratio for an ideal transformer." },

  "v17-css-001": { answer:"C", explanation:"Article 25 states that all citizens are equal before law and are entitled to equal protection of law, subject to the Constitution’s provisions.", takeaway:"Article 25 is the constitutional equality-before-law provision." },
  "v17-css-002": { answer:"D", explanation:"Members of Pakistan’s Senate serve six-year terms, with half the members retiring every three years.", takeaway:"The Senate is a continuing chamber; its members do not all retire at once." },
  "v17-css-003": { answer:"A", explanation:"Expansionary fiscal policy uses higher government spending or lower taxes to support aggregate demand.", takeaway:"Fiscal policy works through government spending and taxation." },
  "v17-css-004": { answer:"B", explanation:"A higher policy rate generally raises borrowing costs, restraining credit and spending. This can reduce demand-side inflationary pressure, though effects take time.", takeaway:"Tighter monetary policy is commonly used to reduce inflationary pressure by moderating demand." },
  "v17-css-005": { answer:"D", explanation:"Pragmatic describes an approach focused on practical considerations and workable results rather than theory alone.", takeaway:"A pragmatic decision is guided by what can work in practice." },
  "v17-css-006": { answer:"A", explanation:"People who choose to volunteer at a meeting may differ from residents who do not attend. Their views may not represent the whole city.", takeaway:"A sample should reflect the target population, not just people who select themselves into it." },
  "v17-css-007": { answer:"C", explanation:"Reducing greenhouse-gas emissions addresses the causes of climate change and is therefore mitigation. The other options prepare for climate impacts and are adaptation.", takeaway:"Mitigation reduces causes; adaptation manages impacts." },
  "v17-css-008": { answer:"D", explanation:"Article 24 of the UN Charter gives the Security Council primary responsibility for maintaining international peace and security.", takeaway:"The Security Council is the UN body with primary peace-and-security responsibility." },
  "v17-css-009": { answer:"D", explanation:"Every Panel A member is a trained mediator, and no trained mediator is a current applicant. Therefore no Panel A member can be a current applicant.", takeaway:"Follow the chain of category membership through both premises." },
  "v17-css-010": { answer:"B", explanation:"In a progressive income-tax system, the marginal tax rate generally increases across higher taxable-income bands.", takeaway:"Progressivity concerns how the marginal rate changes as taxable income rises." },

  "v17-mdcat-001": { answer:"A", explanation:"Helicase separates the two DNA strands at the replication fork by disrupting the hydrogen bonds between complementary bases.", takeaway:"Helicase unwinds DNA; ligase joins DNA fragments." },
  "v17-mdcat-002": { answer:"C", explanation:"Ribosomes translate mRNA and join amino acids in the order specified by its codons to form a polypeptide.", takeaway:"Ribosomes are the cellular sites of translation and protein synthesis." },
  "v17-mdcat-003": { answer:"D", explanation:"O negative red blood cells lack A, B and Rh(D) antigens, which is why O negative is commonly used as the universal red-cell donor type in introductory transfusion compatibility.", takeaway:"The universal red-cell donor designation is O negative; plasma compatibility follows different rules." },
  "v17-mdcat-004": { answer:"B", explanation:"Pepsin is a stomach protease that works best in the strongly acidic conditions created by gastric hydrochloric acid.", takeaway:"Enzyme activity depends on pH; pepsin is adapted to the acidic stomach." },
  "v17-mdcat-005": { answer:"A", explanation:"During metaphase, chromosomes align at the cell’s equatorial plane before sister chromatids separate in anaphase.", takeaway:"Metaphase is the alignment stage; anaphase is the separation stage." },
  "v17-mdcat-006": { answer:"C", explanation:"A buffer contains a weak acid/base pair that can neutralise small added amounts of acid or base, limiting the change in pH.", takeaway:"Buffers resist pH change; they do not keep pH absolutely constant under every condition." },
  "v17-mdcat-007": { answer:"B", explanation:"Boyle’s law gives P₁V₁ = P₂V₂ at constant temperature. V₂ = (1.0 × 2.0)/2.0 = 1.0 L.", takeaway:"At constant temperature, pressure and volume are inversely proportional for a fixed amount of gas." },
  "v17-mdcat-008": { answer:"A", explanation:"The electric force magnitude is F = qE = (2.0 × 10⁻⁶ C)(3.0 × 10⁴ N/C) = 6.0 × 10⁻² N = 0.06 N.", takeaway:"Multiply the charge magnitude by the electric-field strength to find force magnitude." },
  "v17-mdcat-009": { answer:"C", explanation:"A converging lens has a positive focal length under the usual Cartesian convention for light travelling from left to right; a diverging lens has a negative focal length.", takeaway:"Under this convention, converging lenses have positive focal lengths." },
  "v17-mdcat-010": { answer:"D", explanation:"The proximal convoluted tubule reabsorbs nearly all filtered glucose under normal conditions, along with much of the filtered water and ions.", takeaway:"Most glucose reabsorption takes place in the proximal convoluted tubule." }
};

export const V17_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V17_SAMPLE_QUESTIONS.map((question) => {
  const answerDetails = ANSWER_DETAILS[question.id];
  if (!answerDetails) throw new Error(`Missing answer details for ${question.id}`);
  return { ...question, ...answerDetails, sourceKind: "original-sample" as const };
});
