import { V20_SAMPLE_QUESTIONS } from "../../src/data/v20-sample-questions.js";
import type { PrivateStudyQuestion } from "./_sample-content.js";

const V20_ANSWERS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v20-lcat-001": {
    answer: "B",
    explanation: "Thirty-five per cent of 600 is 0.35 × 600 = 210 applicants. Two-thirds of 210 is 140, so 140 applicants attend.",
    takeaway: "Apply each percentage or fraction to the group it describes, in the order given."
  },
  "v20-lcat-002": {
    answer: "A",
    explanation: "The students who chose the extended hours already had higher grades and stronger study habits. That pre-existing difference offers an alternative explanation for the later grade result, so the comparison does not isolate the effect of longer opening hours.",
    takeaway: "A before-and-after association does not establish causation when the groups differ at the start."
  },
  "v20-lcat-003": {
    answer: "C",
    explanation: "A mean of 76 across five scores gives a total of 5 × 76 = 380. The four known scores total 68 + 72 + 76 + 78 = 294. The missing score is 380 − 294 = 86.",
    takeaway: "Find the total from mean × number of values, then subtract the known values."
  },
  "v20-lcat-004": {
    answer: "B",
    explanation: "The main subject is “list”, which is singular. The phrase “along with the signed form” adds information but does not change the subject, so “has been sent” is correct.",
    takeaway: "Make the verb agree with the main subject, not a nearby noun in an interrupting phrase."
  },
  "v20-lcat-005": {
    answer: "D",
    explanation: "The survey covers only weekday mornings from 7:00 to 9:00 a.m. Its percentages describe that sample and time window. They cannot establish travel patterns at other times or on weekends.",
    takeaway: "A survey’s conclusion should stay within the population and conditions actually sampled."
  },
  "v20-net-001": {
    answer: "B",
    explanation: "The expression under a real square root must be non-negative: 7 − 2x ≥ 0. Rearranging gives −2x ≥ −7; dividing by −2 reverses the inequality, so x ≤ 3.5.",
    takeaway: "For a real square-root function, set the radicand greater than or equal to zero."
  },
  "v20-net-002": {
    answer: "B",
    explanation: "The lost gravitational potential energy becomes kinetic energy: mgh = ½mv². The mass cancels, giving v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s.",
    takeaway: "When air resistance is negligible, use conservation of mechanical energy between the release point and the ground."
  },
  "v20-net-003": {
    answer: "B",
    explanation: "The left side contains four moles of gas, while the right side contains two. Increasing pressure favours the side with fewer gas molecules, so the equilibrium shifts to the right, towards ammonia.",
    takeaway: "A pressure increase favours the side with fewer moles of gas; the equilibrium constant changes only with temperature."
  },
  "v20-net-004": {
    answer: "B",
    explanation: "For i = 1, n becomes −1. At i = 2, add 2 to get 1. At i = 3, subtract 1 to get 0. At i = 4, add 4 to get 4. The program prints 4.",
    takeaway: "Trace a loop one iteration at a time and update the variable only when its condition is met."
  },
  "v20-net-005": {
    answer: "B",
    explanation: "In the interval from 0° to 180°, sin θ = 1/2 at 30° and 150°. There are therefore two solutions.",
    takeaway: "Use the unit circle and the stated interval when counting trigonometric solutions."
  },
  "v20-css-001": {
    answer: "C",
    explanation: "The proportion is 210 ÷ 500 = 0.42. Multiplying by 100 gives 42%.",
    takeaway: "Percentage = (part ÷ whole) × 100."
  },
  "v20-css-002": {
    answer: "D",
    explanation: "The Senate gives each province equal representation. The National Assembly’s seats are allocated primarily by population.",
    takeaway: "The Senate is the chamber designed to represent the federating units equally."
  },
  "v20-css-003": {
    answer: "A",
    explanation: "In the United Nations General Assembly, each member state has one vote, regardless of its population or financial contribution.",
    takeaway: "The General Assembly follows the principle of one vote per member state."
  },
  "v20-css-004": {
    answer: "D",
    explanation: "“Had the report arrived earlier” is an inverted third conditional. It can be rewritten as “If the report had arrived earlier”, with the same unreal past condition and possible result.",
    takeaway: "In formal conditional inversion, “Had + subject + past participle” can replace “If + subject + had + past participle”."
  },
  "v20-css-005": {
    answer: "C",
    explanation: "The first statement gives a sufficient route to funding eligibility: passing review leads to eligibility. It does not say that passing review is the only way to receive funding. Funding alone therefore does not prove that Proposal X passed the review.",
    takeaway: "Do not reverse a one-way implication: A implies B does not mean B implies A."
  },
  "v20-mdcat-001": {
    answer: "A",
    explanation: "A Tt × Tt cross produces TT, Tt, Tt and tt in the expected 1:2:1 genotype ratio. Only tt is short, so one-quarter of the offspring is expected to be short.",
    takeaway: "For a heterozygous monohybrid cross with complete dominance, the recessive phenotype occurs in one-quarter of offspring."
  },
  "v20-mdcat-002": {
    answer: "C",
    explanation: "A large pH change alters the ionisation of amino-acid side chains. This can disrupt ionic interactions and other bonds that help maintain the enzyme’s three-dimensional structure, changing the active site and reducing activity.",
    takeaway: "Enzymes have a pH range in which their active-site structure supports efficient catalysis."
  },
  "v20-mdcat-003": {
    answer: "B",
    explanation: "A strong monoprotic base dissociates completely, so [OH⁻] = 10⁻³ mol dm⁻³ and pOH = 3. At 25°C, pH + pOH = 14, giving pH = 11.",
    takeaway: "For a strong base, calculate pOH from hydroxide concentration, then use pH + pOH = 14 at 25°C."
  },
  "v20-mdcat-004": {
    answer: "A",
    explanation: "Wave speed is v = fλ. In the same medium, v remains constant. If frequency doubles, wavelength must halve so that the product fλ stays the same.",
    takeaway: "For a fixed wave speed, frequency and wavelength are inversely proportional."
  },
  "v20-mdcat-005": {
    answer: "D",
    explanation: "The rule says that being screened is sufficient for receiving a label. Its contrapositive is that a sample without a label has not been screened. No conclusion about contamination follows.",
    takeaway: "Use the contrapositive of an if–then rule: if P implies Q, then not Q implies not P."
  },
};

export const V20_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V20_SAMPLE_QUESTIONS.map((question) => {
  const details = V20_ANSWERS[question.id];
  if (!details) throw new Error("Missing private answer details for " + question.id);
  return { ...question, ...details };
});

if (Object.keys(V20_ANSWERS).length !== V20_SAMPLE_QUESTIONS.length) {
  throw new Error("V20 question and answer counts do not match.");
}
