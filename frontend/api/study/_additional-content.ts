import { ADDITIONAL_SAMPLE_QUESTIONS } from "../../src/data/additional-sample-questions.js";
import type { PrivateStudyQuestion } from "./_sample-content.js";

const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "lcat-new-001": {
    "answer": "B",
    "explanation": "To corroborate a claim is to confirm or support it with additional evidence. Independent records provide evidence beyond the original statement.",
    "takeaway": "Corroboration strengthens a claim through independent supporting evidence."
  },
  "lcat-new-002": {
    "answer": "A",
    "explanation": "A comparable group that did not attend provides a useful reference point. Other factors can affect scores, so a simple before-and-after comparison is not enough to establish causation.",
    "takeaway": "A suitable comparison group helps test whether an intervention made a difference."
  },
  "lcat-new-003": {
    "answer": "D",
    "explanation": "An architect uses a blueprint to plan a building; a composer uses a musical score to record and organise a composition.",
    "takeaway": "Identify the function linking the first pair, then apply the same relationship."
  },
  "lcat-new-004": {
    "answer": "C",
    "explanation": "With “neither…nor”, the verb generally agrees with the nearer subject. “Instructor” is singular, so “is” is correct.",
    "takeaway": "In “neither…nor” constructions, check the subject nearest the verb."
  },
  "lcat-new-005": {
    "answer": "C",
    "explanation": "The three activities use the same grammatical form: planning, coordinating and evaluating. This makes the list balanced and clear.",
    "takeaway": "Items in a series should use matching grammatical forms."
  },
  "lcat-new-006": {
    "answer": "A",
    "explanation": "Fifteen per cent of 4,800 is 720. Subtracting the discount gives 4,800 − 720 = Rs. 4,080.",
    "takeaway": "Sale price = original price × (1 − discount rate)."
  },
  "lcat-new-007": {
    "answer": "D",
    "explanation": "The ratio has 4 + 7 = 11 equal parts. Each part is 55 ÷ 11 = 5, so the larger amount is 7 × 5 = 35.",
    "takeaway": "Add the ratio parts first, then scale each part to the given total."
  },
  "lcat-new-008": {
    "answer": "C",
    "explanation": "Divide both sides by 2 to get x − 3 = 7. Adding 3 gives x = 10.",
    "takeaway": "Use inverse operations in reverse order to isolate the variable."
  },
  "lcat-new-009": {
    "answer": "C",
    "explanation": "The total is 72 + 78 + 84 + 90 = 324. Dividing by four scores gives a mean of 81.",
    "takeaway": "Mean = sum of values ÷ number of values."
  },
  "lcat-new-010": {
    "answer": "C",
    "explanation": "Average speed is distance divided by time: 150 ÷ 2.5 = 60 kilometres per hour.",
    "takeaway": "Speed = distance ÷ time."
  },
  "lcat-new-011": {
    "answer": "B",
    "explanation": "There are five counters in total and two are blue. The probability is therefore 2/5.",
    "takeaway": "Probability = favourable outcomes ÷ all equally likely outcomes."
  },
  "lcat-new-012": {
    "answer": "D",
    "explanation": "Each term increases by 5. Adding 5 to 19 gives 24.",
    "takeaway": "Check the difference between consecutive terms in an arithmetic sequence."
  },
  "lcat-new-013": {
    "answer": "A",
    "explanation": "The first statement applies to every mentor. Since Ali is a mentor, he must have completed training.",
    "takeaway": "Apply a universal rule to the individual who meets its condition."
  },
  "lcat-new-014": {
    "answer": "D",
    "explanation": "The two conditions establish report before budget and budget before meeting. Combining them gives report, budget, meeting.",
    "takeaway": "Combine ordering constraints in sequence."
  },
  "lcat-new-015": {
    "answer": "A",
    "explanation": "The stated condition is satisfied, so its promised result follows: a technician is present.",
    "takeaway": "When the condition is true, the stated implication allows its conclusion."
  },
  "lcat-new-016": {
    "answer": "C",
    "explanation": "The increase is 100 − 80 = 20. Relative to the original 80, the increase is 20 ÷ 80 × 100 = 25%.",
    "takeaway": "Percentage increase uses the original amount as the denominator."
  },
  "lcat-new-017": {
    "answer": "D",
    "explanation": "The perimeter is twice the sum of the length and width: 2 × (12 + 7) = 38 cm.",
    "takeaway": "Perimeter of a rectangle = 2(length + width)."
  },
  "lcat-new-018": {
    "answer": "B",
    "explanation": "The fraction 10/15 simplifies to 2/3. Therefore x/6 = 2/3, so x = 4.",
    "takeaway": "Simplify the ratio or cross-multiply to solve a proportion."
  },
  "lcat-new-019": {
    "answer": "A",
    "explanation": "The two observed changes are consistent with students using refill stations instead of buying some disposable bottles. The information does not prove that every student changed behaviour.",
    "takeaway": "Choose a conclusion that fits the evidence without claiming more than it shows."
  },
  "lcat-new-020": {
    "answer": "B",
    "explanation": "Comparing similar groups, ideally with random assignment, helps reduce the influence of other factors and gives stronger evidence about the course's effect.",
    "takeaway": "A fair comparison is more informative than opinions or unrelated measurements."
  },
  "net-new-001": {
    "answer": "C",
    "explanation": "Since 2⁵ = 32, the logarithm log₂ 32 equals 5.",
    "takeaway": "A logarithm asks which exponent produces the given number."
  },
  "net-new-002": {
    "answer": "B",
    "explanation": "In the standard special-angle values, sin 30° = 1/2.",
    "takeaway": "Memorise the exact trigonometric values for 0°, 30°, 45°, 60° and 90°."
  },
  "net-new-003": {
    "answer": "C",
    "explanation": "For a 2 × 2 matrix, the determinant is ad − bc. Here it is (3 × 4) − (1 × 2) = 10.",
    "takeaway": "For [[a,b],[c,d]], determinant = ad − bc."
  },
  "net-new-004": {
    "answer": "C",
    "explanation": "Differentiating gives f′(x) = 6x − 4. Substituting x = 2 gives 12 − 4 = 8.",
    "takeaway": "Differentiate term by term, then substitute the specified value."
  },
  "net-new-005": {
    "answer": "C",
    "explanation": "Each term is multiplied by 2. The sequence continues 24, 48, so the fifth term is 48.",
    "takeaway": "Identify the common ratio and multiply repeatedly."
  },
  "net-new-006": {
    "answer": "C",
    "explanation": "The equally likely outcomes are HH, HT, TH and TT. Two of the four outcomes contain exactly one head, so the probability is 1/2.",
    "takeaway": "List the equally likely outcomes when a probability problem is small."
  },
  "net-new-007": {
    "answer": "C",
    "explanation": "Using v = u + at gives v = 5 + (2 × 4) = 13 m/s.",
    "takeaway": "For constant acceleration, final velocity = initial velocity + acceleration × time."
  },
  "net-new-008": {
    "answer": "C",
    "explanation": "Momentum is mass multiplied by velocity: p = 2 × 3 = 6 kg·m/s.",
    "takeaway": "Momentum = mass × velocity."
  },
  "net-new-009": {
    "answer": "B",
    "explanation": "Power is work done per unit time: 600 ÷ 20 = 30 watts.",
    "takeaway": "Power = work ÷ time."
  },
  "net-new-010": {
    "answer": "B",
    "explanation": "Ohm's law gives I = V/R = 12/4 = 3 A.",
    "takeaway": "Current = voltage ÷ resistance."
  },
  "net-new-011": {
    "answer": "D",
    "explanation": "Frequency is the reciprocal of period: f = 1/0.02 = 50 Hz.",
    "takeaway": "Frequency and period are reciprocals: f = 1/T."
  },
  "net-new-012": {
    "answer": "D",
    "explanation": "Wave speed is frequency multiplied by wavelength: 200 × 1.5 = 300 m/s.",
    "takeaway": "Wave speed = frequency × wavelength."
  },
  "net-new-013": {
    "answer": "A",
    "explanation": "Oxygen has eight electrons. Filling orbitals in order gives 1s² 2s² 2p⁴.",
    "takeaway": "Use the atomic number to count electrons, then fill orbitals in order."
  },
  "net-new-014": {
    "answer": "C",
    "explanation": "The amount in moles is mass divided by molar mass: 36 ÷ 18 = 2 mol.",
    "takeaway": "Moles = mass ÷ molar mass."
  },
  "net-new-015": {
    "answer": "A",
    "explanation": "Heat acts like a product in an exothermic forward reaction. Increasing temperature favours the reverse, endothermic direction, shifting equilibrium towards reactants.",
    "takeaway": "A temperature increase favours the endothermic direction."
  },
  "net-new-016": {
    "answer": "B",
    "explanation": "A polar covalent bond involves shared electrons that are attracted more strongly by one atom, creating partial charges.",
    "takeaway": "Polar covalent bonds involve unequal sharing of electrons."
  },
  "net-new-017": {
    "answer": "C",
    "explanation": "The place values are 16, 8, 4, 2 and 1. Thus 11010₂ = 16 + 8 + 2 = 26.",
    "takeaway": "Convert binary by adding the place values whose bits are 1."
  },
  "net-new-018": {
    "answer": "C",
    "explanation": "The number of operations grows in direct proportion to the number of items, so the time complexity is O(n).",
    "takeaway": "One constant-time operation per item gives linear time complexity."
  },
  "net-new-019": {
    "answer": "B",
    "explanation": "The WHERE clause keeps only rows that satisfy the specified condition.",
    "takeaway": "WHERE filters rows; ORDER BY sorts them."
  },
  "net-new-020": {
    "answer": "B",
    "explanation": "HTTPS uses TLS to protect data exchanged between the browser and server. It does not guarantee that the website's content is truthful or safe in every respect.",
    "takeaway": "HTTPS protects data in transit through TLS encryption."
  },
  "mdcat-new-001": {
    "answer": "B",
    "explanation": "Blood is filtered across the glomerular capillaries into Bowman's capsule at the start of the nephron.",
    "takeaway": "The glomerulus is the nephron's initial filtration site."
  },
  "mdcat-new-002": {
    "answer": "A",
    "explanation": "The substrate binds at the enzyme's active site, where the reaction is facilitated.",
    "takeaway": "Substrate binding occurs at an enzyme's active site."
  },
  "mdcat-new-003": {
    "answer": "C",
    "explanation": "Homologous chromosome pairs separate during anaphase I. Sister chromatids separate later, during anaphase II.",
    "takeaway": "Meiosis I separates homologous chromosomes; meiosis II separates sister chromatids."
  },
  "mdcat-new-004": {
    "answer": "B",
    "explanation": "Beta cells in the pancreatic islets secrete insulin, which helps regulate blood glucose.",
    "takeaway": "Pancreatic beta cells produce insulin."
  },
  "mdcat-new-005": {
    "answer": "C",
    "explanation": "The pulmonary artery carries blood from the right ventricle to the lungs for oxygenation.",
    "takeaway": "The pulmonary artery is an artery that carries deoxygenated blood."
  },
  "mdcat-new-006": {
    "answer": "B",
    "explanation": "AUG is the usual start codon and codes for methionine.",
    "takeaway": "AUG signals the usual start of translation."
  },
  "mdcat-new-007": {
    "answer": "B",
    "explanation": "Individuals with heritable traits that improve survival or reproductive success tend to leave more offspring, making those traits more common over generations.",
    "takeaway": "Natural selection changes trait frequencies through differential reproductive success."
  },
  "mdcat-new-008": {
    "answer": "C",
    "explanation": "Xylem conducts water and mineral ions from the roots through the plant. Phloem mainly transports organic substances such as sugars.",
    "takeaway": "Xylem carries water and mineral ions; phloem carries sugars."
  },
  "mdcat-new-009": {
    "answer": "B",
    "explanation": "A buffer contains a weak acid/base and its conjugate partner, allowing it to neutralise small additions of acid or base.",
    "takeaway": "Buffers resist pH change; they do not keep pH perfectly fixed."
  },
  "mdcat-new-010": {
    "answer": "B",
    "explanation": "Oxidation is loss of electrons, while reduction is gain of electrons.",
    "takeaway": "Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons."
  },
  "mdcat-new-011": {
    "answer": "B",
    "explanation": "Mass = moles × molar mass = 0.5 × 58.5 = 29.25 g.",
    "takeaway": "Mass in grams = amount in moles × molar mass."
  },
  "mdcat-new-012": {
    "answer": "A",
    "explanation": "An alcohol reacts with a carboxylic acid to form an ester and water, commonly in the presence of an acid catalyst.",
    "takeaway": "Esterification combines an alcohol and a carboxylic acid."
  },
  "mdcat-new-013": {
    "answer": "B",
    "explanation": "Electrons are added to the same principal shell while nuclear charge increases, so the stronger effective attraction generally draws the electron cloud closer.",
    "takeaway": "Across a period, increasing effective nuclear charge generally reduces atomic radius."
  },
  "mdcat-new-014": {
    "answer": "B",
    "explanation": "A catalyst provides an alternative reaction pathway with lower activation energy. It does not change the reaction's equilibrium constant.",
    "takeaway": "Catalysts increase reaction rate by lowering activation energy."
  },
  "mdcat-new-015": {
    "answer": "C",
    "explanation": "Electrical power is P = VI = 12 × 2 = 24 W.",
    "takeaway": "Power in a DC circuit = voltage × current."
  },
  "mdcat-new-016": {
    "answer": "B",
    "explanation": "Pressure is force divided by area: 100 ÷ 2 = 50 pascals.",
    "takeaway": "Pressure = force ÷ area."
  },
  "mdcat-new-017": {
    "answer": "D",
    "explanation": "Using Q = mcΔT gives Q = 0.5 × 4,200 × 10 = 21,000 J.",
    "takeaway": "Heat transferred = mass × specific heat capacity × temperature change."
  },
  "mdcat-new-018": {
    "answer": "A",
    "explanation": "A concave lens diverges the rays, so the image formed for a real object is virtual, upright and smaller.",
    "takeaway": "A diverging lens forms a virtual, upright, diminished image."
  },
  "mdcat-new-019": {
    "answer": "B",
    "explanation": "Wave speed = frequency × wavelength = 4 × 0.5 = 2 m/s.",
    "takeaway": "Use v = fλ to relate wave speed, frequency and wavelength."
  },
  "mdcat-new-020": {
    "answer": "B",
    "explanation": "Newton's second law gives a = F/m = 10/2 = 5 m/s².",
    "takeaway": "Acceleration = net force ÷ mass."
  },
  "css-new-001": {
    "answer": "B",
    "explanation": "Equivocal describes a statement or position that is unclear or open to more than one interpretation.",
    "takeaway": "Equivocal means ambiguous or open to multiple interpretations."
  },
  "css-new-002": {
    "answer": "B",
    "explanation": "The standard construction is “no sooner had … than …”, with the past participle “begun” after “had”.",
    "takeaway": "Use “no sooner had” followed by a past participle and “than”."
  },
  "css-new-003": {
    "answer": "B",
    "explanation": "A précis condenses a passage while preserving its main argument and essential meaning, without adding personal views.",
    "takeaway": "A précis is concise, faithful and focused on the original text's main ideas."
  },
  "css-new-004": {
    "answer": "C",
    "explanation": "Pakistan's Parliament consists of the President and the two Houses: the National Assembly and the Senate.",
    "takeaway": "The federal Parliament consists of the President and both Houses."
  },
  "css-new-005": {
    "answer": "C",
    "explanation": "The Indus Waters Treaty was signed in 1960 with the World Bank's assistance.",
    "takeaway": "The Indus Waters Treaty dates to 1960."
  },
  "css-new-006": {
    "answer": "B",
    "explanation": "The Constitution of 1973 came into force on 14 August 1973.",
    "takeaway": "The 1973 Constitution became effective on 14 August 1973."
  },
  "css-new-007": {
    "answer": "C",
    "explanation": "Tarbela Dam is located on the Indus River in Khyber Pakhtunkhwa.",
    "takeaway": "Tarbela Dam is on the Indus River."
  },
  "css-new-008": {
    "answer": "A",
    "explanation": "The Constituent Assembly adopted the Objectives Resolution on 12 March 1949.",
    "takeaway": "The Objectives Resolution was adopted on 12 March 1949."
  },
  "css-new-009": {
    "answer": "C",
    "explanation": "The UN Charter entered into force on 24 October 1945, marking the organisation's official establishment.",
    "takeaway": "The United Nations was established in 1945."
  },
  "css-new-010": {
    "answer": "B",
    "explanation": "ASEAN was established on 8 August 1967 through the Bangkok Declaration.",
    "takeaway": "ASEAN was founded in 1967."
  },
  "css-new-011": {
    "answer": "A",
    "explanation": "Inflation is a sustained increase in the general level of prices, which reduces the purchasing power of money over time.",
    "takeaway": "Inflation refers to a broad, sustained rise in prices."
  },
  "css-new-012": {
    "answer": "B",
    "explanation": "Opportunity cost is the value of the best alternative that is forgone when resources are used for a particular choice.",
    "takeaway": "Opportunity cost measures the next-best option sacrificed."
  },
  "css-new-013": {
    "answer": "B",
    "explanation": "GDP measures the market value of final goods and services produced within a country's domestic territory over a specified period.",
    "takeaway": "GDP is based on domestic production, not residents' worldwide ownership."
  },
  "css-new-014": {
    "answer": "C",
    "explanation": "Carbon dioxide absorbs and emits infrared radiation and is a major greenhouse gas whose concentration has increased through human activity.",
    "takeaway": "Carbon dioxide is a major human-influenced greenhouse gas."
  },
  "css-new-015": {
    "answer": "B",
    "explanation": "Lines of latitude run east–west and remain parallel to the Equator, measuring angular distance north or south of it.",
    "takeaway": "Latitude lines are parallel to the Equator."
  },
  "css-new-016": {
    "answer": "C",
    "explanation": "There are five ordered values, so the median is the middle, third value: 7.",
    "takeaway": "For an odd number of ordered observations, the median is the middle value."
  },
  "css-new-017": {
    "answer": "A",
    "explanation": "People at a car park are unlikely to represent the full range of public-transport users, creating selection bias.",
    "takeaway": "A sample should reflect the population the survey aims to describe."
  },
  "css-new-018": {
    "answer": "B",
    "explanation": "Clear procedures and accessible records allow the public to understand how decisions are made and scrutinise them.",
    "takeaway": "Transparency depends on accessible information and understandable procedures."
  },
  "css-new-019": {
    "answer": "B",
    "explanation": "Collective security is based on members cooperating to respond to aggression against any member, rather than treating each threat as isolated.",
    "takeaway": "Collective security makes the wider group responsible for responding to aggression."
  },
  "css-new-020": {
    "answer": "A",
    "explanation": "Pragmatic describes an approach guided by practical considerations and likely results.",
    "takeaway": "Pragmatic means practical and results-oriented."
  }
};

export const ADDITIONAL_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = ADDITIONAL_SAMPLE_QUESTIONS.map((question) => {
  const detail = ANSWER_DETAILS[question.id];
  if (!detail) throw new Error(`Missing private answer details for ${question.id}`);
  return { ...question, ...detail, sourceKind: "original-sample" };
});
