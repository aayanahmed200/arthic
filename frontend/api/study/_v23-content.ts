import { V23_SAMPLE_QUESTIONS } from "../../src/data/v23-sample-questions.js";
import type { PrivateStudyQuestion } from "./_sample-content.js";

const V23_ANSWERS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v23-lcat-001": {
    answer: "B",
    explanation: "Forty per cent of 180 is 72, and one-third of 180 is 60. Together these groups contain 132 members, so 180 − 132 = 48 members prefer evening events.",
    takeaway: "Convert each share into a count, add the known groups, then subtract from the total."
  },
  "v23-lcat-002": {
    answer: "C",
    explanation: "K must be before L, and L must be immediately before M. N must be after M. The only order that satisfies all three conditions is K, L, M, N, so M is in the third slot.",
    takeaway: "Combine the ordering rules before assigning positions."
  },
  "v23-lcat-003": {
    answer: "C",
    explanation: "Both libraries recorded increases after extending their hours, which is consistent with a possible benefit. However, the North Library also held a festival, so its larger increase cannot be attributed to opening hours alone.",
    takeaway: "When two changes occur together, the observed difference cannot isolate the effect of either one."
  },
  "v23-lcat-004": {
    answer: "A",
    explanation: "People who could not use the service are absent from the survey. Their experiences may be the most important for judging accessibility, so surveying only successful users creates selection bias.",
    takeaway: "A survey of users alone may miss people who were excluded from a service."
  },

  "v23-net-001": {
    answer: "C",
    explanation: "An antiderivative of 3x² + 2 is x³ + 2x. Evaluating at the limits gives (2³ + 2·2) − (0³ + 2·0) = 8 + 4 = 12.",
    takeaway: "Find the antiderivative first, then subtract its value at the lower limit from its value at the upper limit."
  },
  "v23-net-002": {
    answer: "C",
    explanation: "For an acute angle, tan θ = opposite/adjacent = 3/4. A right triangle with those sides has hypotenuse 5 by the Pythagorean theorem, so sin θ = opposite/hypotenuse = 3/5.",
    takeaway: "Use the Pythagorean theorem to find the missing side before converting from tan to sin."
  },
  "v23-net-003": {
    answer: "B",
    explanation: "Take east as positive. The change in momentum is m(v − u) = 0.20(0 − 12) = −2.4 kg·m/s. The negative sign means west, so the impulse has magnitude 2.4 N·s towards the west.",
    takeaway: "Impulse equals change in momentum; keep the direction signs consistent."
  },
  "v23-net-004": {
    answer: "C",
    explanation: "Resistance is R = ρL/A. If the length doubles while volume LA stays constant, the cross-sectional area must halve. The new resistance is ρ(2L)/(A/2) = 4ρL/A, which is four times the original value.",
    takeaway: "When a wire is stretched at constant volume, its length and resistance change together while its cross-sectional area changes inversely."
  },
  "v23-net-005": {
    answer: "A",
    explanation: "For a balanced reaction, product concentrations appear in the numerator and reactant concentrations in the denominator, each raised to its stoichiometric coefficient. Therefore Kc = [NH₃]²/([N₂][H₂]³).",
    takeaway: "Use the balanced-equation coefficients as powers in the equilibrium expression."
  },
  "v23-net-006": {
    answer: "C",
    explanation: "In the absence of peroxides, HBr adds to propene by the usual electrophilic-addition pathway. Hydrogen adds to the carbon already bearing more hydrogen atoms, placing bromine on the middle carbon and producing 2-bromopropane.",
    takeaway: "For HBr addition to an unsymmetrical alkene under ordinary conditions, apply Markovnikov orientation."
  },
  "v23-net-007": {
    answer: "C",
    explanation: "When i is 1, the inner loop runs once. When i is 2, it runs twice; when i is 3, it runs three times. The counter therefore increases 1 + 2 + 3 = 6 times.",
    takeaway: "Count the inner-loop iterations separately for each outer-loop value."
  },
  "v23-net-008": {
    answer: "C",
    explanation: "The x² term in (1 + 2x)⁴ is obtained by choosing two of the four factors to contribute 2x. Its coefficient is C(4,2)·2² = 6·4 = 24.",
    takeaway: "In a binomial expansion, use the binomial coefficient and the power contributed by the selected term."
  },

  "v23-css-001": {
    answer: "C",
    explanation: "A low unit cost does not capture whether a programme reaches the population it is meant to serve or achieves its intended outcomes. A defensible decision compares cost with outcomes and considers whether each programme meets the distributional objectives.",
    takeaway: "Value for money combines economy, effectiveness and equity; a single cost-per-person figure is not enough."
  },

  "v23-mdcat-001": {
    answer: "B",
    explanation: "A competitive inhibitor competes with substrate for the active site. More substrate can overcome the inhibition, so the same maximum rate can eventually be reached, but a higher substrate concentration is needed to reach half of Vmax.",
    takeaway: "Competitive inhibition increases apparent Km but does not change Vmax."
  },
  "v23-mdcat-002": {
    answer: "A",
    explanation: "The sinoatrial node, located in the right atrium, normally initiates the electrical impulse that spreads across the atria and establishes the heart's rhythm.",
    takeaway: "The sinoatrial node is the heart's normal pacemaker."
  },
  "v23-mdcat-003": {
    answer: "D",
    explanation: "A catalyst provides an alternative pathway with lower activation energy for both forward and reverse reactions. It changes how quickly equilibrium is reached, not the equilibrium constant or the final equilibrium position.",
    takeaway: "A catalyst speeds the approach to equilibrium but does not change the equilibrium itself."
  },
};

export const V23_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V23_SAMPLE_QUESTIONS.map((question) => {
  const details = V23_ANSWERS[question.id];
  if (!details) throw new Error("Missing private answer details for " + question.id);
  return { ...question, ...details };
});

if (Object.keys(V23_ANSWERS).length !== V23_SAMPLE_QUESTIONS.length) {
  throw new Error("V23 question and answer counts do not match.");
}
