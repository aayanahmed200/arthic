import { V19_SAMPLE_QUESTIONS } from "../../src/data/v19-sample-questions.js";
import type { PrivateStudyQuestion } from "./_sample-content.js";

const V19_ANSWERS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v19-lcat-001": {
    answer: "B",
    explanation: "Two-fifths of 180 is 180 × 2/5 = 72 morning-session applicants. Three-quarters of those submit on time: 72 × 3/4 = 54.",
    takeaway: "For a fraction of a subgroup, calculate the first group before applying the second fraction."
  },
  "v19-lcat-002": {
    answer: "A",
    explanation: "The proposal assumes that putting notices in an app makes students see them sooner. If many students disable notifications and rarely open the app, the new channel may not improve how quickly they see announcements. The other findings do not challenge that assumption.",
    takeaway: "To weaken an argument, identify the assumption linking its proposed action to the claimed result."
  },
  "v19-net-001": {
    answer: "B",
    explanation: "Evaluate the inner function first: g(1) = 2(1) + 3 = 5. Then f(5) = 5² − 1 = 24.",
    takeaway: "In a composite function, substitute into the inner function before evaluating the outer function."
  },
  "v19-net-002": {
    answer: "C",
    explanation: "Capacitance is defined by C = Q/V, so Q = CV. Using C = 4 μF and V = 12 V gives Q = 4 × 12 = 48 μC.",
    takeaway: "For a capacitor, stored charge is capacitance multiplied by potential difference."
  },
  "v19-net-003": {
    answer: "C",
    explanation: "The balanced equation requires 3 mol of Cl₂ to form 2 mol of AlCl₃. Four moles of chlorine can therefore form 4 × 2/3 = 8/3 mol of AlCl₃. This amount uses 8/3 mol of Al, which is less than the 4 mol available, so chlorine is limiting.",
    takeaway: "Use the balanced mole ratio to identify the limiting reactant and calculate the product amount."
  },
  "v19-net-004": {
    answer: "C",
    explanation: "The loop adds twice each list value: 2×2 + 2×3 + 2×5 = 4 + 6 + 10 = 20. That final total is printed.",
    takeaway: "Trace each loop iteration in order and update the accumulator."
  },
  "v19-css-001": {
    answer: "B",
    explanation: "If 60% is assigned to rural districts, 40% remains. Forty per cent of Rs. 2.4 million is 0.40 × 2.4 = Rs. 0.96 million.",
    takeaway: "The remainder is 100% minus the allocated percentage."
  },
  "v19-css-002": {
    answer: "B",
    explanation: "In option B, “the officer” is the subject who completed the reviewing action. In the other versions, the opening phrase is attached to errors or an unrelated subject, creating a dangling modifier or an illogical sentence.",
    takeaway: "An introductory participial phrase should clearly modify the person or thing that performs the action."
  },
  "v19-css-003": {
    answer: "C",
    explanation: "Multilateral diplomacy involves three or more states or parties. Unilateral action is taken by one state, while bilateral diplomacy involves two.",
    takeaway: "Bilateral means two parties; multilateral means more than two."
  },
  "v19-css-004": {
    answer: "C",
    explanation: "Calculate 65% of 200: 0.65 × 200 = 130 respondents.",
    takeaway: "Convert a percentage to a decimal and multiply by the total."
  },
  "v19-mdcat-001": {
    answer: "B",
    explanation: "Each pink plant has genotype Rr. Crossing Rr × Rr gives RR, Rr, Rr and rr. With incomplete dominance, these correspond to one red, two pink and one white offspring.",
    takeaway: "For incomplete dominance, the heterozygote has an intermediate phenotype, producing a 1:2:1 phenotypic ratio in this cross."
  },
  "v19-mdcat-002": {
    answer: "A",
    explanation: "Alpha cells in the pancreatic islets secrete glucagon. Glucagon helps raise blood glucose, particularly by promoting glycogen breakdown and glucose production in the liver.",
    takeaway: "Alpha cells release glucagon; beta cells release insulin."
  },
  "v19-mdcat-003": {
    answer: "D",
    explanation: "Biomagnification is the increase in concentration of a persistent substance at higher trophic levels. A fish-eating bird at the top of the stated food chain receives the accumulated substance from its prey and is expected to have the highest concentration.",
    takeaway: "Persistent pollutants can become most concentrated in organisms at the highest trophic levels."
  },
  "v19-mdcat-004": {
    answer: "A",
    explanation: "Ethanol undergoes dehydration when heated with a strong dehydrating acid such as concentrated sulfuric acid. At about 170°C, elimination of water produces ethene.",
    takeaway: "Dehydration removes water from ethanol to form an alkene."
  },
  "v19-mdcat-005": {
    answer: "C",
    explanation: "The reaction releases heat, so the enthalpy change is negative. Per mole, ΔH = −120 kJ ÷ 0.50 mol = −240 kJ mol⁻¹.",
    takeaway: "An exothermic reaction has a negative enthalpy change; divide the measured heat by the moles reacted."
  },
  "v19-mdcat-006": {
    answer: "B",
    explanation: "At the highest point, final vertical velocity is zero. Using v = u − gt gives 0 = 20 − 10t, so t = 2 seconds.",
    takeaway: "At maximum height in vertical projection, vertical velocity is zero."
  },
  "v19-mdcat-007": {
    answer: "B",
    explanation: "For an ideal transformer, Vs/Vp = Ns/Np. Therefore Vs = 240 × (100/500) = 48 V.",
    takeaway: "Transformer voltage ratio equals the secondary-to-primary turns ratio."
  },
  "v19-mdcat-008": {
    answer: "B",
    explanation: "The condition is one-way: if a report is accepted, its main result must have been replicated. Since replication has not occurred, the stated condition for acceptance is not met. This does not prove the result itself is false.",
    takeaway: "Translate “accepted only if replicated” into a necessary condition and apply its contrapositive."
  }
};

export const V19_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V19_SAMPLE_QUESTIONS.map((question) => {
  const details = V19_ANSWERS[question.id];
  if (!details) throw new Error("Missing private answer details for " + question.id);
  return { ...question, ...details };
});

if (Object.keys(V19_ANSWERS).length !== V19_SAMPLE_QUESTIONS.length) {
  throw new Error("V19 question and answer counts do not match.");
}
