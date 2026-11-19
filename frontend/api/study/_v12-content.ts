import type { PrivateStudyQuestion } from "./_sample-content.js";
import { V12_SAMPLE_QUESTIONS } from "../../src/data/v12-sample-questions.js";

/** Private answer keys and explanations for the 80 additional V12 questions. */
const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v12-lcat-001": {
    "answer": "C",
    "explanation": "The difference represents 7 − 4 = 3 equal parts. Each part is 24 ÷ 3 = 8, so the total is (4 + 7) × 8 = 88.",
    "takeaway": "Use the difference in ratio parts to find one part before calculating the total."
  },
  "v12-lcat-002": {
    "answer": "B",
    "explanation": "The discount is 0.12 × 2,500 = Rs. 300. Subtracting it from the marked price gives Rs. 2,200.",
    "takeaway": "Sale price = marked price × (1 − discount rate)."
  },
  "v12-lcat-003": {
    "answer": "B",
    "explanation": "Slope = (13 − 5) ÷ (6 − 2) = 8 ÷ 4 = 2.",
    "takeaway": "Slope measures vertical change divided by horizontal change."
  },
  "v12-lcat-004": {
    "answer": "C",
    "explanation": "The first term is 7 and the common difference is 4. The 12th term is 7 + 11 × 4 = 51.",
    "takeaway": "The nth term of an arithmetic sequence is a₁ + (n − 1)d."
  },
  "v12-lcat-005": {
    "answer": "B",
    "explanation": "Area = ½ × base × height = ½ × 14 × 9 = 63 cm².",
    "takeaway": "Use half the product of the base and perpendicular height for a triangle's area."
  },
  "v12-lcat-006": {
    "answer": "C",
    "explanation": "The scale factor is 20 ÷ 8 = 2.5. Multiply 3 cups by 2.5 to get 7.5 cups.",
    "takeaway": "For a direct proportion, multiply both quantities by the same scale factor."
  },
  "v12-lcat-007": {
    "answer": "B",
    "explanation": "The outcomes greater than 4 are 5 and 6. There are 2 favourable outcomes out of 6, so the probability is 2/6 = 1/3.",
    "takeaway": "Probability equals favourable outcomes divided by total equally likely outcomes."
  },
  "v12-lcat-008": {
    "answer": "B",
    "explanation": "The three actions are all expressed with the same verb form: to review, revise, and publish.",
    "takeaway": "Items in a series should use matching grammatical structures."
  },
  "v12-lcat-009": {
    "answer": "B",
    "explanation": "The different interpretations show that the instructions were not clear in only one way.",
    "takeaway": "Use the surrounding sentence to infer an unfamiliar word's meaning."
  },
  "v12-lcat-010": {
    "answer": "A",
    "explanation": "Shade and benches make outdoor movement and waiting more comfortable, especially near public transport.",
    "takeaway": "Choose the inference that is directly supported by the stated improvements."
  },
  "v12-lcat-011": {
    "answer": "A",
    "explanation": "The introductory phrase “After reviewing the draft” correctly describes Sara, the subject of the main clause.",
    "takeaway": "An introductory modifier should clearly refer to the subject that follows it."
  },
  "v12-lcat-012": {
    "answer": "B",
    "explanation": "Monthly demonstrations create repeated opportunities to receive and use feedback during the year.",
    "takeaway": "Identify the central benefit that links all the details in a passage."
  },
  "v12-lcat-013": {
    "answer": "C",
    "explanation": "The waiting began before the lecture and continued up to its start. The past perfect continuous expresses that duration before a later past event.",
    "takeaway": "Use the past perfect continuous for an activity continuing up to a point in the past."
  },
  "v12-lcat-014": {
    "answer": "A",
    "explanation": "Concise writing expresses an idea clearly in few words, so “brief” is the closest option.",
    "takeaway": "A synonym should preserve the essential meaning of the original word."
  },
  "v12-lcat-015": {
    "answer": "B",
    "explanation": "The rule applies to every architect at the firm. Since Mina is one of them, she has completed the course.",
    "takeaway": "Apply a universal rule to any individual known to belong to that group."
  },
  "v12-lcat-016": {
    "answer": "C",
    "explanation": "The rules require D before A, A before B, and B before C. Only D, A, B, C satisfies all three.",
    "takeaway": "Translate each ordering rule into a before-and-after relationship."
  },
  "v12-lcat-017": {
    "answer": "B",
    "explanation": "If verification always leads to an active account, an account that is not active cannot have been verified under this rule.",
    "takeaway": "From “if P then Q” and “not Q”, infer “not P” (modus tollens)."
  },
  "v12-lcat-018": {
    "answer": "C",
    "explanation": "The middle integer is the average of the three consecutive integers: 72 ÷ 3 = 24.",
    "takeaway": "For three consecutive integers, the middle value equals their mean."
  },
  "v12-lcat-019": {
    "answer": "B",
    "explanation": "A thermometer measures temperature; a barometer measures atmospheric pressure.",
    "takeaway": "Identify the relationship between the first pair and apply it to the second pair."
  },
  "v12-lcat-020": {
    "answer": "C",
    "explanation": "The speed is 180 ÷ 3 = 60 km/h. In 2.5 hours, the car travels 60 × 2.5 = 150 km.",
    "takeaway": "Find the rate per unit first, then multiply by the new time."
  },
  "v12-net-001": {
    "answer": "C",
    "explanation": "An antiderivative of 3x² is x³. Evaluating from 0 to 2 gives 2³ − 0³ = 8.",
    "takeaway": "Integrate first, then substitute the upper and lower limits and subtract."
  },
  "v12-net-002": {
    "answer": "B",
    "explanation": "For a 2 × 2 matrix [[a,b],[c,d]], the determinant is ad − bc. Here, 3 × 4 − 2 × 1 = 10.",
    "takeaway": "For a 2 × 2 matrix, calculate ad − bc."
  },
  "v12-net-003": {
    "answer": "B",
    "explanation": "Since 2⁵ = 32, the logarithm asks for the exponent 5.",
    "takeaway": "A logarithm gives the power to which the base must be raised."
  },
  "v12-net-004": {
    "answer": "A",
    "explanation": "The probability is (5/8) × (4/7) = 20/56 = 5/14 because the first red ball is not replaced.",
    "takeaway": "For selections without replacement, update the total and favourable counts after the first draw."
  },
  "v12-net-005": {
    "answer": "B",
    "explanation": "The dot product is 2 × 3 + 1 × (−2) = 6 − 2 = 4.",
    "takeaway": "Multiply corresponding components and add the products."
  },
  "v12-net-006": {
    "answer": "C",
    "explanation": "Using Q = CV, Q = 4 μF × 12 V = 48 μC.",
    "takeaway": "Charge stored by a capacitor equals capacitance multiplied by voltage."
  },
  "v12-net-007": {
    "answer": "D",
    "explanation": "Work = force × displacement when both are in the same direction: 15 × 4 = 60 J.",
    "takeaway": "Work is the component of force along the displacement multiplied by distance."
  },
  "v12-net-008": {
    "answer": "B",
    "explanation": "Momentum p = mv = 0.15 × 20 = 3 kg m/s.",
    "takeaway": "Linear momentum is the product of mass and velocity."
  },
  "v12-net-009": {
    "answer": "C",
    "explanation": "Pressure = force ÷ area = 800 ÷ 0.04 = 20,000 Pa.",
    "takeaway": "Pressure increases when the same force acts over a smaller area."
  },
  "v12-net-010": {
    "answer": "B",
    "explanation": "The period is the reciprocal of frequency: T = 1/2 = 0.5 s.",
    "takeaway": "Frequency and period are reciprocals."
  },
  "v12-net-011": {
    "answer": "B",
    "explanation": "In 100 g, the mole amounts are about 40/12 = 3.33, 6.7/1 = 6.7 and 53.3/16 = 3.33. The simplest ratio is 1:2:1.",
    "takeaway": "Convert mass percentages to mole amounts, then divide by the smallest mole value."
  },
  "v12-net-012": {
    "answer": "D",
    "explanation": "A catalyst speeds up both forward and reverse reactions. It does not alter their equilibrium ratio or the equilibrium constant.",
    "takeaway": "A catalyst changes reaction rate, not the equilibrium constant."
  },
  "v12-net-013": {
    "answer": "B",
    "explanation": "Oxygen is more electronegative than hydrogen, and the bent molecular geometry prevents the bond dipoles from cancelling.",
    "takeaway": "Molecular polarity depends on both bond polarity and molecular shape."
  },
  "v12-net-014": {
    "answer": "C",
    "explanation": "Positive sodium ions move to the negative cathode and gain electrons: Na⁺ + e⁻ → Na.",
    "takeaway": "Cations are reduced at the cathode by gaining electrons."
  },
  "v12-net-015": {
    "answer": "A",
    "explanation": "The alkene adds bromine across its C=C bond, causing the orange-brown bromine colour to disappear.",
    "takeaway": "Bromine water decolourisation is a common qualitative test for unsaturation."
  },
  "v12-net-016": {
    "answer": "B",
    "explanation": "Each comparison halves the remaining search interval, so the number of steps grows logarithmically with n.",
    "takeaway": "Binary search repeatedly halves a sorted search space."
  },
  "v12-net-017": {
    "answer": "A",
    "explanation": "The start value 2 is included, values increase by 2, and the stop value 8 is excluded.",
    "takeaway": "Python range includes its start but excludes its stop."
  },
  "v12-net-018": {
    "answer": "B",
    "explanation": "A primary key provides a unique identifier for each row and cannot contain duplicate key values.",
    "takeaway": "Use a primary key to distinguish every record in a table."
  },
  "v12-net-019": {
    "answer": "B",
    "explanation": "A queue follows first-in, first-out (FIFO), so the earliest added item is removed first.",
    "takeaway": "A queue is FIFO; a stack is LIFO."
  },
  "v12-net-020": {
    "answer": "B",
    "explanation": "Since 7 > 5 is True, applying not changes the result to False.",
    "takeaway": "Evaluate the comparison first, then apply the Boolean negation."
  },
  "v12-css-001": {
    "answer": "B",
    "explanation": "Constitutional supremacy means state institutions and public authorities must act within the constitution.",
    "takeaway": "A constitution establishes the legal framework that public institutions must follow."
  },
  "v12-css-002": {
    "answer": "B",
    "explanation": "The rule of law requires legal accountability and consistent application of laws, including to public officials.",
    "takeaway": "The rule of law rejects arbitrary power and unequal application of legal standards."
  },
  "v12-css-003": {
    "answer": "B",
    "explanation": "Independent courts can interpret and apply the law without improper influence from political or other powerful actors.",
    "takeaway": "Judicial independence protects impartial adjudication."
  },
  "v12-css-004": {
    "answer": "B",
    "explanation": "Article 239 requires the bill to be passed by at least two-thirds of the total membership of each House.",
    "takeaway": "Distinguish a two-thirds threshold of total membership from a majority of members present."
  },
  "v12-css-005": {
    "answer": "B",
    "explanation": "Fiscal policy uses government spending and taxation to influence aggregate demand and economic activity.",
    "takeaway": "Fiscal policy concerns the government's revenue and expenditure choices."
  },
  "v12-css-006": {
    "answer": "A",
    "explanation": "A central bank uses policy rates and other monetary instruments to influence credit conditions, inflation and economic activity.",
    "takeaway": "Monetary policy is conducted by a country's central bank."
  },
  "v12-css-007": {
    "answer": "A",
    "explanation": "The current account records trade in goods and services as well as primary and secondary income flows.",
    "takeaway": "Trade in goods and services is a core component of the current account."
  },
  "v12-css-008": {
    "answer": "B",
    "explanation": "The factory's activity creates a cost for third parties that is not fully borne by the producer or buyer.",
    "takeaway": "An externality affects people outside the transaction and is not fully reflected in market prices."
  },
  "v12-css-009": {
    "answer": "A",
    "explanation": "The HDI combines indicators of life expectancy, education and per-capita income.",
    "takeaway": "Human development assesses people's capabilities, not only economic output."
  },
  "v12-css-010": {
    "answer": "B",
    "explanation": "Local government can improve responsiveness by handling community-level services and decisions closer to residents.",
    "takeaway": "Decentralisation can make local service delivery more responsive to community needs."
  },
  "v12-css-011": {
    "answer": "C",
    "explanation": "Replacing high-emission electricity generation with low-carbon energy reduces greenhouse-gas emissions.",
    "takeaway": "Mitigation addresses the causes of climate change by reducing emissions or increasing carbon sinks."
  },
  "v12-css-012": {
    "answer": "A",
    "explanation": "Overgrazing can remove protective vegetation and expose soil to erosion, accelerating land degradation.",
    "takeaway": "Unsustainable land use can intensify desertification in vulnerable drylands."
  },
  "v12-css-013": {
    "answer": "A",
    "explanation": "A watershed links the land and waterways that drain into a common outlet, so upstream activities can affect downstream water quantity and quality.",
    "takeaway": "Watershed planning considers connected land and water processes across the whole catchment."
  },
  "v12-css-014": {
    "answer": "B",
    "explanation": "The General Assembly operates on the principle of one vote for each member state.",
    "takeaway": "The General Assembly gives each UN member state an equal vote."
  },
  "v12-css-015": {
    "answer": "B",
    "explanation": "The ICJ hears legal disputes between states, subject to the applicable basis of jurisdiction and state consent.",
    "takeaway": "The ICJ deals with disputes between states; the ICC prosecutes individuals."
  },
  "v12-css-016": {
    "answer": "B",
    "explanation": "A negative vote by any permanent member on a substantive matter prevents adoption, even if the resolution has the required overall support.",
    "takeaway": "The veto applies to substantive Security Council decisions."
  },
  "v12-css-017": {
    "answer": "A",
    "explanation": "ASEAN provides a framework for political, economic and socio-cultural cooperation among Southeast Asian member states.",
    "takeaway": "Regional organisations support cooperation among countries in a particular region."
  },
  "v12-css-018": {
    "answer": "A",
    "explanation": "Ratification is a formal act by which a state establishes its consent to be bound by a treaty, according to the applicable rules.",
    "takeaway": "Signing and ratifying a treaty are distinct legal steps."
  },
  "v12-css-019": {
    "answer": "C",
    "explanation": "The 2030 Agenda for Sustainable Development contains 17 Sustainable Development Goals.",
    "takeaway": "The SDGs are a set of 17 linked global goals adopted in 2015."
  },
  "v12-css-020": {
    "answer": "B",
    "explanation": "A budget deficit occurs when government spending is greater than government revenue during the specified period.",
    "takeaway": "A deficit is a flow measured over a period; public debt is a stock accumulated over time."
  },
  "v12-mdcat-001": {
    "answer": "B",
    "explanation": "Ribosomes read mRNA codons and join amino acids in the order specified by the genetic code.",
    "takeaway": "Translation takes place on ribosomes."
  },
  "v12-mdcat-002": {
    "answer": "A",
    "explanation": "Photolysis of water supplies electrons to photosystem II and releases protons and oxygen.",
    "takeaway": "Water is the electron source in the light reactions, and oxygen is released as a by-product."
  },
  "v12-mdcat-003": {
    "answer": "A",
    "explanation": "Alpha cells in the pancreatic islets secrete glucagon, which helps raise blood glucose concentration.",
    "takeaway": "Pancreatic alpha cells release glucagon; beta cells release insulin."
  },
  "v12-mdcat-004": {
    "answer": "A",
    "explanation": "Neither allele completely masks the other, so the heterozygote shows an intermediate phenotype.",
    "takeaway": "Incomplete dominance produces an intermediate heterozygous phenotype."
  },
  "v12-mdcat-005": {
    "answer": "C",
    "explanation": "The Aa parent produces A and a gametes, while the aa parent produces only a gametes. Half the offspring are Aa and half aa.",
    "takeaway": "Use a Punnett square to combine the possible gametes from each parent."
  },
  "v12-mdcat-006": {
    "answer": "B",
    "explanation": "Myelin insulates the axon between nodes, so the action potential is regenerated at the nodes of Ranvier and conduction is faster.",
    "takeaway": "Myelin increases conduction speed through saltatory conduction."
  },
  "v12-mdcat-007": {
    "answer": "A",
    "explanation": "Activated B lymphocytes can differentiate into plasma cells, which produce and release antibodies.",
    "takeaway": "Plasma cells are antibody-secreting derivatives of B lymphocytes."
  },
  "v12-mdcat-008": {
    "answer": "B",
    "explanation": "Xylem vessels and tracheids conduct water and mineral ions through the plant, mainly from roots toward aerial parts.",
    "takeaway": "Xylem transports water and mineral ions; phloem transports organic solutes."
  },
  "v12-mdcat-009": {
    "answer": "A",
    "explanation": "A buffer contains a conjugate acid–base pair that can consume small added amounts of H⁺ or OH⁻, limiting pH change.",
    "takeaway": "Buffers resist pH changes when small quantities of acid or base are added."
  },
  "v12-mdcat-010": {
    "answer": "B",
    "explanation": "Oxidation involves loss of electrons, while reduction involves gain of electrons.",
    "takeaway": "Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons."
  },
  "v12-mdcat-011": {
    "answer": "C",
    "explanation": "At these conditions, the molar volume of an ideal gas is approximately 22.4 L mol⁻¹.",
    "takeaway": "At 0°C and 1 atm, one mole of an ideal gas occupies about 22.4 litres."
  },
  "v12-mdcat-012": {
    "answer": "A",
    "explanation": "An ester contains the −COO− linkage between carbon-containing groups.",
    "takeaway": "Recognise the ester linkage as −COO−."
  },
  "v12-mdcat-013": {
    "answer": "A",
    "explanation": "Smaller particles expose more surface area, allowing more frequent effective collisions between reactant particles.",
    "takeaway": "Increasing the surface area of a solid reactant generally increases reaction rate."
  },
  "v12-mdcat-014": {
    "answer": "C",
    "explanation": "The hydroxide concentration is 10⁻³ mol dm⁻³, so pOH = 3. At 25°C, pH + pOH = 14, giving pH = 11.",
    "takeaway": "For a strong base, calculate pOH from [OH⁻], then use pH + pOH = 14 at 25°C."
  },
  "v12-mdcat-015": {
    "answer": "C",
    "explanation": "Centripetal force continually changes the direction of velocity and points toward the centre of the circular path.",
    "takeaway": "Centripetal force is directed toward the centre of the circle."
  },
  "v12-mdcat-016": {
    "answer": "C",
    "explanation": "Power P = 1/f when focal length is in metres. Thus P = 1/0.5 = +2 dioptres.",
    "takeaway": "Lens power is the reciprocal of focal length in metres; converging lenses have positive power."
  },
  "v12-mdcat-017": {
    "answer": "B",
    "explanation": "The upthrust is equal to the weight of the fluid displaced by the immersed object.",
    "takeaway": "Buoyant force equals the weight of displaced fluid."
  },
  "v12-mdcat-018": {
    "answer": "D",
    "explanation": "For series resistors, equivalent resistance is the sum: 2 + 4 = 6 Ω.",
    "takeaway": "Resistances add directly in a series circuit."
  },
  "v12-mdcat-019": {
    "answer": "C",
    "explanation": "Sound intensity is proportional to the square of amplitude. Doubling amplitude gives 2² = 4 times the intensity.",
    "takeaway": "For a wave in the same medium, intensity is proportional to amplitude squared."
  },
  "v12-mdcat-020": {
    "answer": "D",
    "explanation": "Q = mcΔT = 0.5 × 4,200 × 10 = 21,000 J.",
    "takeaway": "Use Q = mcΔT and ensure mass and temperature change are in the given units."
  }
};

export const V12_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V12_SAMPLE_QUESTIONS.map((question) => {
  const details = ANSWER_DETAILS[question.id];
  if (!details) throw new Error(`Missing answer details for ${question.id}`);
  return { ...question, ...details, sourceKind: "original-sample" as const };
});
