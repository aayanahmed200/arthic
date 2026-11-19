import type { PrivateStudyQuestion } from "./_sample-content.js";
import { V10_SAMPLE_QUESTIONS } from "../../src/data/v10-sample-questions.js";

/** Private answer details for the additional V10 question set. */
const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v10-lcat-001": {
    "answer": "C",
    "explanation": "The increase is Rs. 12. Relative to the original Rs. 80, the increase is (12 ÷ 80) × 100 = 15%.",
    "takeaway": "Calculate percentage change using the original value as the denominator."
  },
  "v10-lcat-002": {
    "answer": "C",
    "explanation": "Substitute x = 4: f(4) = 2(4²) − 3 = 32 − 3 = 29.",
    "takeaway": "Substitute the input value before simplifying a function."
  },
  "v10-lcat-003": {
    "answer": "C",
    "explanation": "Factor the expression: (x − 3)(x − 4) = 0. The roots are 3 and 4, so the larger root is 4.",
    "takeaway": "Factor a quadratic to identify its roots."
  },
  "v10-lcat-004": {
    "answer": "B",
    "explanation": "Circumference = 2πr = 2 × (22/7) × 7 = 44 cm.",
    "takeaway": "Use C = 2πr for a circle's circumference."
  },
  "v10-lcat-005": {
    "answer": "C",
    "explanation": "From x − y = 1, y = x − 1. Substituting gives 3x − 1 = 11, so x = 4 and y = 3. Their sum is 7.",
    "takeaway": "Substitute one equation into the other, then evaluate the requested expression."
  },
  "v10-lcat-006": {
    "answer": "B",
    "explanation": "The values are already in ascending order. With five values, the middle (third) value is 11.",
    "takeaway": "For an odd number of ordered observations, the median is the middle value."
  },
  "v10-lcat-007": {
    "answer": "C",
    "explanation": "Since 81 = 3⁴, the exponent x must be 4.",
    "takeaway": "Rewrite both sides using the same base to compare exponents."
  },
  "v10-lcat-008": {
    "answer": "B",
    "explanation": "Slope = (11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2.",
    "takeaway": "Slope is the change in y divided by the change in x."
  },
  "v10-lcat-009": {
    "answer": "C",
    "explanation": "The total of all four scores must be 4 × 16 = 64. The known scores sum to 44, so the missing score is 20.",
    "takeaway": "Find the required total from the mean, then subtract the known values."
  },
  "v10-lcat-010": {
    "answer": "B",
    "explanation": "There are 10 counters in total and 5 are not blue. The probability is 5/10 = 1/2.",
    "takeaway": "Count all favourable outcomes and divide by the total equally likely outcomes."
  },
  "v10-lcat-011": {
    "answer": "B",
    "explanation": "Their combined rate is 1/6 + 1/3 = 1/2 of the job per hour. The time for one whole job is 1 ÷ 1/2 = 2 hours.",
    "takeaway": "Add work rates, not completion times."
  },
  "v10-lcat-012": {
    "answer": "C",
    "explanation": "Area = 1/2 × base × height = 1/2 × 12 × 7 = 42 cm².",
    "takeaway": "Use the perpendicular height in the triangle area formula."
  },
  "v10-lcat-013": {
    "answer": "B",
    "explanation": "The report links the service changes with higher ridership, but it does not establish that every change in behaviour had one cause or that weekend use changed.",
    "takeaway": "Choose the conclusion supported by the stated evidence without adding unsupported claims."
  },
  "v10-lcat-014": {
    "answer": "B",
    "explanation": "To mitigate something is to make it less severe, harmful or intense.",
    "takeaway": "Use the surrounding sentence to determine a word's meaning."
  },
  "v10-lcat-015": {
    "answer": "A",
    "explanation": "The second sentence introduces a limitation that contrasts with the positive first sentence. “Nevertheless” signals that contrast.",
    "takeaway": "Choose a transition based on the logical relationship between the ideas."
  },
  "v10-lcat-016": {
    "answer": "C",
    "explanation": "The subject is “each”, which is singular. The correct verb is “is”.",
    "takeaway": "Identify the grammatical subject rather than the noun closest to the verb."
  },
  "v10-lcat-017": {
    "answer": "B",
    "explanation": "A semicolon correctly joins two closely related independent clauses.",
    "takeaway": "Use a semicolon between two independent clauses that are closely related."
  },
  "v10-lcat-018": {
    "answer": "B",
    "explanation": "Comparable before-and-after entry data can show whether use changed while helping account for wider trends.",
    "takeaway": "Prefer relevant, comparative evidence when evaluating a claim."
  },
  "v10-lcat-019": {
    "answer": "C",
    "explanation": "The association is consistent with a contribution from tree cover, but the other differences between districts prevent a definitive causal conclusion.",
    "takeaway": "Distinguish an observed association from proof of a single cause."
  },
  "v10-lcat-020": {
    "answer": "B",
    "explanation": "The combined view recognises the access benefit while retaining the limitation identified by the second text.",
    "takeaway": "A strong synthesis preserves the main point and qualification of each text."
  },
  "v10-net-001": {
    "answer": "C",
    "explanation": "Differentiating gives f′(x) = 3x² − 2. At x = 2, f′(2) = 12 − 2 = 10.",
    "takeaway": "Differentiate term by term, then substitute the specified input."
  },
  "v10-net-002": {
    "answer": "B",
    "explanation": "For an acute angle, the cosine is positive. Using sin²θ + cos²θ = 1 gives cos θ = √(1 − 9/25) = 4/5.",
    "takeaway": "Use the Pythagorean identity and select the positive value for an acute angle."
  },
  "v10-net-003": {
    "answer": "C",
    "explanation": "In a series circuit, resistances add: 2 Ω + 4 Ω = 6 Ω.",
    "takeaway": "For series resistors, add the individual resistances."
  },
  "v10-net-004": {
    "answer": "C",
    "explanation": "For motion from rest, s = 1/2 at² = 1/2 × 3 × 4² = 24 m.",
    "takeaway": "When initial velocity is zero, use s = 1/2 at² for constant acceleration."
  },
  "v10-net-005": {
    "answer": "C",
    "explanation": "“Each” is singular, so it takes the singular verb “is”.",
    "takeaway": "Make the verb agree with the grammatical subject."
  },
  "v10-net-006": {
    "answer": "C",
    "explanation": "The tenth term is 5 + 9(3) = 32. The sum is 10/2 × (5 + 32) = 185.",
    "takeaway": "Use the arithmetic-series formula n/2 × (first term + last term)."
  },
  "v10-net-007": {
    "answer": "B",
    "explanation": "Since 2⁻³ = 1/8, the logarithm is −3.",
    "takeaway": "A logarithm gives the exponent needed to produce its argument."
  },
  "v10-net-008": {
    "answer": "D",
    "explanation": "With “neither…nor”, the verb generally agrees with the nearer subject. “Final report” is singular, so “was” is correct.",
    "takeaway": "Check the subject nearest the verb in a “neither…nor” construction."
  },
  "v10-net-009": {
    "answer": "B",
    "explanation": "The solution has a higher water potential than the cell contents, so water enters by osmosis. The cell wall resists excessive expansion and the cell becomes turgid.",
    "takeaway": "A plant cell in a hypotonic solution gains water by osmosis."
  },
  "v10-net-010": {
    "answer": "C",
    "explanation": "RNA is synthesised complementary and antiparallel to the DNA template. The mRNA codon is 5′-AUG-3′, with uracil replacing thymine.",
    "takeaway": "Use complementary base pairing and remember that RNA contains uracil."
  },
  "v10-net-011": {
    "answer": "C",
    "explanation": "Activated B lymphocytes can differentiate into plasma cells, which secrete antibodies.",
    "takeaway": "Plasma cells are specialised for antibody secretion."
  },
  "v10-net-012": {
    "answer": "C",
    "explanation": "Molarity = amount of solute ÷ volume in dm³ = 0.20 ÷ 0.50 = 0.40 mol dm⁻³.",
    "takeaway": "Convert the volume to dm³ and divide moles by volume."
  },
  "v10-net-013": {
    "answer": "C",
    "explanation": "A catalyst lowers the activation energy for both directions. It helps equilibrium be reached faster but does not change the equilibrium constant or position.",
    "takeaway": "A catalyst changes reaction rate, not the equilibrium constant."
  },
  "v10-net-014": {
    "answer": "B",
    "explanation": "This sentence acknowledges the limited sample and presents a larger controlled study as the next step rather than claiming certainty.",
    "takeaway": "Scientific conclusions should match the strength and limits of the evidence."
  },
  "v10-net-015": {
    "answer": "C",
    "explanation": "The total is 150 thousand rupees. Dividing by four gives 37.5 thousand rupees.",
    "takeaway": "The mean is the sum of the observations divided by their number."
  },
  "v10-net-016": {
    "answer": "A",
    "explanation": "There are five equal parts. Marketing receives two parts: (2/5) × 25,000 = Rs. 10,000.",
    "takeaway": "Add ratio parts first, then multiply the total by the required fraction."
  },
  "v10-net-017": {
    "answer": "A",
    "explanation": "The three items are parallel noun phrases: costs, timelines and expected outcomes.",
    "takeaway": "Keep items in a list in the same grammatical form."
  },
  "v10-net-018": {
    "answer": "A",
    "explanation": "People who do not use the app are not represented, so the poll may not reflect the views of the wider population.",
    "takeaway": "A sample should include the population whose views the survey aims to represent."
  },
  "v10-net-019": {
    "answer": "B",
    "explanation": "Differentiating gives g′(x) = 2x + 3. Substituting x = 2 gives 7.",
    "takeaway": "Apply the power rule and then substitute the required value."
  },
  "v10-net-020": {
    "answer": "B",
    "explanation": "The introductory dependent clause is followed by a comma before the independent clause.",
    "takeaway": "Use a comma after an introductory dependent clause."
  },
  "v10-css-001": {
    "answer": "A",
    "explanation": "“Concisely” means expressing something in a brief, clear way without unnecessary detail.",
    "takeaway": "Use the meaning of the word in its sentence context."
  },
  "v10-css-002": {
    "answer": "C",
    "explanation": "In “neither…nor” constructions, the verb generally agrees with the nearer subject. “Teachers” is plural, so “are” is correct.",
    "takeaway": "Check the subject closest to the verb in a “neither…nor” sentence."
  },
  "v10-css-003": {
    "answer": "B",
    "explanation": "The report measures the material sent for recycling, not the behaviour of every household or the total amount of waste.",
    "takeaway": "Do not infer unmeasured behaviour from a change in an outcome measure."
  },
  "v10-css-004": {
    "answer": "C",
    "explanation": "The second sentence introduces a drawback that contrasts with the possible benefit.",
    "takeaway": "Use a contrast transition when the next idea qualifies the previous one."
  },
  "v10-css-005": {
    "answer": "A",
    "explanation": "The clause before the colon is complete, and the clause after it explains the decision.",
    "takeaway": "A colon can introduce an explanation after an independent clause."
  },
  "v10-css-006": {
    "answer": "C",
    "explanation": "Ten per cent of 240 is 24 and five per cent is 12. Together they make 36.",
    "takeaway": "Split a percentage into convenient parts when calculating mentally."
  },
  "v10-css-007": {
    "answer": "C",
    "explanation": "Add 5 to both sides to get 3x = 21. Divide by 3 to obtain x = 7.",
    "takeaway": "Use inverse operations to isolate the unknown."
  },
  "v10-css-008": {
    "answer": "B",
    "explanation": "There are five equal parts, each worth 45 ÷ 5 = 9. The smaller quantity is 2 × 9 = 18.",
    "takeaway": "Convert the ratio into equal parts before finding an amount."
  },
  "v10-css-009": {
    "answer": "C",
    "explanation": "The prime results are 2, 3 and 5. There are three favourable outcomes out of six, giving 3/6 = 1/2.",
    "takeaway": "List the favourable outcomes before calculating probability."
  },
  "v10-css-010": {
    "answer": "D",
    "explanation": "The fact that some careful readers are researchers does not show that any of those people are editors.",
    "takeaway": "Do not combine overlapping groups unless the statements establish that they overlap."
  },
  "v10-css-011": {
    "answer": "D",
    "explanation": "Each term is twice the previous term plus one: 31 × 2 + 1 = 63.",
    "takeaway": "Check whether a sequence follows a repeated operation."
  },
  "v10-css-012": {
    "answer": "B",
    "explanation": "Vitamin C deficiency can cause scurvy, which affects connective tissue and wound healing.",
    "takeaway": "Associate vitamin C deficiency with scurvy."
  },
  "v10-css-013": {
    "answer": "B",
    "explanation": "The Equator is the line of latitude at 0° and separates the Northern and Southern Hemispheres.",
    "takeaway": "The Equator is the reference line for latitude 0°."
  },
  "v10-css-014": {
    "answer": "B",
    "explanation": "The 1973 Constitution came into force on 14 August 1973.",
    "takeaway": "Distinguish the Constitution's commencement date from dates associated with earlier constitutional milestones."
  },
  "v10-css-015": {
    "answer": "C",
    "explanation": "The United Nations headquarters is in New York City, United States.",
    "takeaway": "Remember the principal headquarters location of major international organisations."
  },
  "v10-css-016": {
    "answer": "C",
    "explanation": "The newton (N) is the SI derived unit of force, equivalent to kg·m·s⁻².",
    "takeaway": "Use newton as the SI unit for force."
  },
  "v10-css-017": {
    "answer": "B",
    "explanation": "“کتاب” کی عام جمع “کتابیں” ہے۔",
    "takeaway": "اردو میں اسم کی جمع بناتے وقت واحد اور جمع کی صورت پہچانیں۔"
  },
  "v10-css-018": {
    "answer": "C",
    "explanation": "“غم” لفظ “خوشی” کا متضاد ہے۔",
    "takeaway": "متضاد الفاظ کے معنی ایک دوسرے کے الٹ ہوتے ہیں۔"
  },
  "v10-css-019": {
    "answer": "A",
    "explanation": "Zakat is an obligatory form of giving to eligible recipients, subject to its rules and conditions.",
    "takeaway": "Know the basic meaning of the principal acts of worship."
  },
  "v10-css-020": {
    "answer": "B",
    "explanation": "The rule of law requires that public authorities and individuals are subject to law and that legal limits are applied fairly.",
    "takeaway": "The rule of law limits arbitrary power and requires equal application of law."
  },
  "v10-mdcat-001": {
    "answer": "A",
    "explanation": "“Concurrently” means occurring at the same time.",
    "takeaway": "Use the context of the sentence to identify a precise synonym."
  },
  "v10-mdcat-002": {
    "answer": "C",
    "explanation": "The head of the subject is “list”, which is singular. The correct verb is “is”.",
    "takeaway": "Find the head noun of a subject when checking agreement."
  },
  "v10-mdcat-003": {
    "answer": "B",
    "explanation": "Repeating “Amina” makes it clear who completed the report, rather than relying on an ambiguous pronoun.",
    "takeaway": "Use a clear noun when a pronoun could refer to more than one person."
  },
  "v10-mdcat-004": {
    "answer": "B",
    "explanation": "A semicolon joins two independent clauses that are closely related.",
    "takeaway": "Use a semicolon, or a suitable conjunction, to avoid a comma splice."
  },
  "v10-mdcat-005": {
    "answer": "B",
    "explanation": "To inhibit an activity is to restrain, reduce or slow it.",
    "takeaway": "Use the surrounding scientific context to interpret technical vocabulary."
  },
  "v10-mdcat-006": {
    "answer": "B",
    "explanation": "The wording states that the evidence is compatible with the hypothesis but does not claim proof.",
    "takeaway": "Match the strength of a conclusion to the evidence available."
  },
  "v10-mdcat-007": {
    "answer": "A",
    "explanation": "The passage supports a comparison of speed and repeatability, but says nothing about cost or universal performance.",
    "takeaway": "Select only the conclusions that follow from the passage."
  },
  "v10-mdcat-008": {
    "answer": "B",
    "explanation": "Repeating the procedure follows from the variation in the initial measurements, so “As a result” is appropriate.",
    "takeaway": "Choose transitions according to cause-and-effect relationships."
  },
  "v10-mdcat-009": {
    "answer": "C",
    "explanation": "The sentence refers to records belonging to multiple patients, so the plural possessive form is “patients'”.",
    "takeaway": "Place the apostrophe after the s for a regular plural possessive."
  },
  "v10-mdcat-010": {
    "answer": "B",
    "explanation": "The passage focuses on how accessibility and visibility were associated with greater use.",
    "takeaway": "Identify the idea that connects the main details of a passage."
  },
  "v10-mdcat-011": {
    "answer": "B",
    "explanation": "The statement directly says that all Group A samples were refrigerated. It does not say that only Group A samples were refrigerated.",
    "takeaway": "A universal statement does not automatically work in the reverse direction."
  },
  "v10-mdcat-012": {
    "answer": "B",
    "explanation": "The rule states that contamination leads to a repeat test. If no repeat occurred and the rule was followed, the specimen was not contaminated.",
    "takeaway": "Use the contrapositive: if the result did not occur, the stated condition did not occur."
  },
  "v10-mdcat-013": {
    "answer": "D",
    "explanation": "The differences are 3, 5, 7 and 9. The next difference is 11, so the next term is 26 + 11 = 37.",
    "takeaway": "Compare consecutive differences to identify a growing pattern."
  },
  "v10-mdcat-014": {
    "answer": "B",
    "explanation": "Combining the two ordering statements gives A before B before C, so A must be before C.",
    "takeaway": "Combine ordering constraints transitively."
  },
  "v10-mdcat-015": {
    "answer": "A",
    "explanation": "A comparable group and prior-performance information help assess whether the change could be explained by other factors.",
    "takeaway": "A before-and-after change alone is not enough to establish causation."
  },
  "v10-mdcat-016": {
    "answer": "B",
    "explanation": "Since P is contained in Q and Q has no members in R, P cannot have members in R.",
    "takeaway": "Combine subset and exclusion statements carefully."
  },
  "v10-mdcat-017": {
    "answer": "A",
    "explanation": "“Only if” states a necessary condition for entry. Anyone who entered must therefore be wearing goggles.",
    "takeaway": "Translate “only if” into a necessary condition."
  },
  "v10-mdcat-018": {
    "answer": "B",
    "explanation": "The universal restriction applies to every member of Team X, including Sara.",
    "takeaway": "Apply a group rule to an individual known to belong to that group."
  },
  "v10-mdcat-019": {
    "answer": "B",
    "explanation": "The evidence describes only the volunteers who were surveyed. It cannot establish the preferences of a much larger population.",
    "takeaway": "Avoid generalising beyond the people actually studied."
  },
  "v10-mdcat-020": {
    "answer": "B",
    "explanation": "P must occur before R, and R must occur before S. Therefore P must occur before S.",
    "takeaway": "Combine the precedence rules to identify the required order."
  }
};

export const V10_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V10_SAMPLE_QUESTIONS.map((question) => {
  const details = ANSWER_DETAILS[question.id];
  if (!details) throw new Error(`Missing answer details for ${question.id}`);
  return { ...question, ...details };
});
