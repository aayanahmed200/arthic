import type { PrivateStudyQuestion } from "./_sample-content.js";
import { V14_SAMPLE_QUESTIONS } from "../../src/data/v14-sample-questions.js";

/** Server-only answer keys and explanations for the 40 V14 questions. */
const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v14-lcat-001": {
    "answer": "B",
    "explanation": "The discount is 15% of Rs. 4,000, which is Rs. 600. Subtracting the discount gives Rs. 3,400.",
    "takeaway": "Find the discount first, then subtract it from the original price."
  },
  "v14-lcat-002": {
    "answer": "C",
    "explanation": "Divide both sides by 3 to get 2x − 1 = 7. Add 1, then divide by 2: x = 4.",
    "takeaway": "Expand or simplify both sides, isolate the variable, and check the result."
  },
  "v14-lcat-003": {
    "answer": "C",
    "explanation": "The first statement directly places every research fellow among people who have completed a degree. The second statement does not prove that any of those people are research fellows.",
    "takeaway": "A universal statement supports its direct implication, not an assumed overlap between groups."
  },
  "v14-lcat-004": {
    "answer": "B",
    "explanation": "“Because” introduces the reason for postponing the vote. The other choices do not express the intended cause.",
    "takeaway": "Check whether the linking word expresses reason, contrast, condition or time."
  },
  "v14-lcat-005": {
    "answer": "A",
    "explanation": "“Concise” describes communication that expresses an idea clearly in few words. “Brief” is the closest match.",
    "takeaway": "A concise explanation is short without omitting its essential meaning."
  },
  "v14-lcat-006": {
    "answer": "B",
    "explanation": "A comparable group offers a way to see whether scores improved without the weekly tests. This helps separate the effect of the tests from other influences.",
    "takeaway": "A comparison group helps test whether an observed change is linked to an intervention."
  },
  "v14-lcat-007": {
    "answer": "B",
    "explanation": "The subject is “list,” which is singular. The phrase “of topics” does not change the subject's number, so “is” is correct.",
    "takeaway": "Match the verb to the main subject, not to a nearby noun in a prepositional phrase."
  },
  "v14-lcat-008": {
    "answer": "B",
    "explanation": "The rules create the chain S before P before Q before R. Only the second option follows every condition.",
    "takeaway": "Translate each ordering rule into one sequence before comparing the options."
  },
  "v14-lcat-009": {
    "answer": "D",
    "explanation": "There are 3 + 5 = 8 equal parts. Each part is 40 ÷ 8 = 5, so blue books total 5 × 5 = 25.",
    "takeaway": "Add ratio parts to find the size of one part, then multiply by the required ratio term."
  },
  "v14-lcat-010": {
    "answer": "C",
    "explanation": "The report describes different directions of change in two areas. It does not provide enough information to infer a city-wide total or explain why the changes occurred.",
    "takeaway": "Keep an inference within the scope of the information provided."
  },
  "v14-net-001": {
    "answer": "C",
    "explanation": "The first term is 7 and the common difference is 4. The 12th term is 7 + 11 × 4 = 51.",
    "takeaway": "Use aₙ = a₁ + (n − 1)d for an arithmetic sequence."
  },
  "v14-net-002": {
    "answer": "C",
    "explanation": "The prime outcomes are 2, 3 and 5. There are three favourable outcomes among six equally likely outcomes, giving 3/6 = 1/2.",
    "takeaway": "Count favourable outcomes and divide by the total equally likely outcomes."
  },
  "v14-net-003": {
    "answer": "C",
    "explanation": "Momentum p = mv = 2 × 3 = 6 kg m/s.",
    "takeaway": "Momentum is the product of mass and velocity."
  },
  "v14-net-004": {
    "answer": "C",
    "explanation": "Use Q = mcΔT = 0.5 × 800 × 10 = 4,000 J.",
    "takeaway": "For a temperature change, use Q = mcΔT and keep units consistent."
  },
  "v14-net-005": {
    "answer": "B",
    "explanation": "A covalent bond involves a shared pair of electrons between atoms.",
    "takeaway": "Covalent bonding involves shared electron pairs."
  },
  "v14-net-006": {
    "answer": "B",
    "explanation": "Concentration = amount ÷ volume = 0.4 ÷ 2 = 0.2 mol dm⁻³.",
    "takeaway": "Molar concentration is measured in moles per unit volume."
  },
  "v14-net-007": {
    "answer": "D",
    "explanation": "The first assignment sets x to 5. The next makes it 8, and the final assignment doubles 8 to give 16.",
    "takeaway": "Evaluate assignment statements in their execution order."
  },
  "v14-net-008": {
    "answer": "B",
    "explanation": "A code of n bits represents 2ⁿ values. Since 2⁵ = 32, five bits are required.",
    "takeaway": "For n bits, the number of distinct binary patterns is 2ⁿ."
  },
  "v14-net-009": {
    "answer": "C",
    "explanation": "Centripetal acceleration a = v²/r = 6²/2 = 18 m/s².",
    "takeaway": "Centripetal acceleration points toward the centre and has magnitude v²/r."
  },
  "v14-net-010": {
    "answer": "B",
    "explanation": "The logarithmic statement log₁₀(x) = 2.5 is equivalent to the exponential statement x = 10²·⁵.",
    "takeaway": "Convert logₐ(x) = y into the equivalent exponential form x = aʸ."
  },
  "v14-css-001": {
    "answer": "B",
    "explanation": "The Prime Minister heads the federal government and leads the Council of Ministers. The President is the head of state.",
    "takeaway": "Distinguish the head of state from the head of government."
  },
  "v14-css-002": {
    "answer": "B",
    "explanation": "A deficit occurs when government spending is greater than its revenue during the relevant period.",
    "takeaway": "A budget deficit compares total expenditure with total revenue."
  },
  "v14-css-003": {
    "answer": "B",
    "explanation": "The UN Charter gives the Security Council primary responsibility for maintaining international peace and security.",
    "takeaway": "Know the distinct responsibilities of the UN's principal organs."
  },
  "v14-css-004": {
    "answer": "B",
    "explanation": "Published decisions and independent audits make the use of public authority and funds more transparent and open to scrutiny.",
    "takeaway": "Accountability depends on transparency, review and clear responsibility."
  },
  "v14-css-005": {
    "answer": "C",
    "explanation": "Flood-warning systems help communities prepare for and reduce harm from climate impacts. The other measures reduce greenhouse-gas emissions.",
    "takeaway": "Adaptation manages climate impacts; mitigation reduces the drivers of climate change."
  },
  "v14-css-006": {
    "answer": "C",
    "explanation": "An observed association may be influenced by other factors, such as education or political interest. The survey alone does not establish a causal relationship.",
    "takeaway": "Correlation alone does not prove causation."
  },
  "v14-css-007": {
    "answer": "C",
    "explanation": "The Indus is the main river of the system and flows through Pakistan from the north towards the Arabian Sea.",
    "takeaway": "The Indus is the central river of Pakistan's river system."
  },
  "v14-css-008": {
    "answer": "B",
    "explanation": "The statement contrasts policy design with the practical capacity needed to carry it out. It argues that resources and implementation matter to success.",
    "takeaway": "A good summary captures the central relationship without adding claims."
  },
  "v14-css-009": {
    "answer": "C",
    "explanation": "The rule of law requires public power to be exercised under established law, with legal limits and accountability applying to officials as well.",
    "takeaway": "The rule of law constrains public power and applies legal standards consistently."
  },
  "v14-css-010": {
    "answer": "C",
    "explanation": "The increase is 2 million. Percentage increase = (2 ÷ 20) × 100 = 10%.",
    "takeaway": "Use the original quantity as the denominator when calculating percentage increase."
  },
  "v14-mdcat-001": {
    "answer": "B",
    "explanation": "The proximal convoluted tubule reabsorbs most filtered nutrients, including glucose and amino acids, along with a large proportion of water and ions.",
    "takeaway": "The proximal convoluted tubule is the main site of bulk reabsorption."
  },
  "v14-mdcat-002": {
    "answer": "C",
    "explanation": "In DNA, adenine pairs with thymine, while guanine pairs with cytosine.",
    "takeaway": "DNA base pairing is A–T and G–C."
  },
  "v14-mdcat-003": {
    "answer": "A",
    "explanation": "An alkene can decolourise orange-brown bromine water as bromine adds across the carbon–carbon double bond.",
    "takeaway": "Bromine water is a common qualitative test for unsaturation."
  },
  "v14-mdcat-004": {
    "answer": "B",
    "explanation": "At higher temperature, the energy distribution shifts so a larger fraction of particles can overcome the activation energy barrier during collisions.",
    "takeaway": "Higher temperature increases the fraction of collisions that can lead to reaction."
  },
  "v14-mdcat-005": {
    "answer": "C",
    "explanation": "For an object released from rest, v = u + gt = 0 + 10 × 2 = 20 m/s.",
    "takeaway": "For free fall from rest, speed after time t is approximately gt when air resistance is ignored."
  },
  "v14-mdcat-006": {
    "answer": "B",
    "explanation": "Potential difference V = W/Q, so Q = W/V = 36/12 = 3 C.",
    "takeaway": "Charge transferred is energy divided by potential difference."
  },
  "v14-mdcat-007": {
    "answer": "B",
    "explanation": "Insulin promotes glucose uptake by cells and supports storage as glycogen, reducing blood glucose concentration.",
    "takeaway": "Insulin lowers blood glucose; glucagon raises it."
  },
  "v14-mdcat-008": {
    "answer": "A",
    "explanation": "Activated B lymphocytes can differentiate into plasma cells, which secrete antibodies specific to an antigen.",
    "takeaway": "Plasma cells are antibody-secreting cells derived from B lymphocytes."
  },
  "v14-mdcat-009": {
    "answer": "B",
    "explanation": "Mass = amount × molar mass = 0.5 × 44 = 22 g.",
    "takeaway": "Convert moles to mass by multiplying by molar mass."
  },
  "v14-mdcat-010": {
    "answer": "C",
    "explanation": "Wavelength λ = speed ÷ frequency = 340/170 = 2 m.",
    "takeaway": "Use λ = v/f when wave speed and frequency are known."
  }
};

export const V14_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V14_SAMPLE_QUESTIONS.map((question) => {
  const details = ANSWER_DETAILS[question.id];
  if (!details) throw new Error(`Missing answer details for ${question.id}`);
  return { ...question, ...details, sourceKind: "original-sample" as const };
});
