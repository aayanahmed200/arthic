import type { PrivateStudyQuestion } from "./_sample-content.js";
import { V11_SAMPLE_QUESTIONS } from "../../src/data/v11-sample-questions.js";

/** Private answer keys and explanations for the 80 additional V11 questions. */
const ANSWER_DETAILS: Record<string, { answer: string; explanation: string; takeaway: string }> = {
  "v11-lcat-001": {
    "answer": "B",
    "explanation": "The ratio has 3 + 5 = 8 equal parts. Each part is 64 ÷ 8 = 8, so the larger quantity is 5 × 8 = 40.",
    "takeaway": "Divide the total by the sum of the ratio parts, then multiply by the required part."
  },
  "v11-lcat-002": {
    "answer": "B",
    "explanation": "The total of all five numbers is 5 × 14 = 70. The missing number is 70 − 54 = 16.",
    "takeaway": "Total = mean × number of values."
  },
  "v11-lcat-003": {
    "answer": "C",
    "explanation": "Let the number be x. (2/3)x = 48, so x = 48 × 3/2 = 72.",
    "takeaway": "To reverse multiplication by a fraction, multiply by its reciprocal."
  },
  "v11-lcat-004": {
    "answer": "B",
    "explanation": "Add 7 to both sides to obtain 4x = 28. Dividing by 4 gives x = 7.",
    "takeaway": "Keep an equation balanced by applying the same operation to both sides."
  },
  "v11-lcat-005": {
    "answer": "C",
    "explanation": "Simple interest = P × r × t = 5,000 × 0.08 × 2 = Rs. 800.",
    "takeaway": "For simple interest, use I = Prt with the rate written as a decimal."
  },
  "v11-lcat-006": {
    "answer": "D",
    "explanation": "Each term is twice the previous term plus one: 3×2+1=7, 7×2+1=15, and 15×2+1=31. The next term is 31×2+1=63.",
    "takeaway": "Look for a consistent operation connecting consecutive terms."
  },
  "v11-lcat-007": {
    "answer": "D",
    "explanation": "The task requires 5 × 12 = 60 worker-days. With ten workers, it takes 60 ÷ 10 = 6 days.",
    "takeaway": "For a fixed task, workers × time stays constant when productivity is equal."
  },
  "v11-lcat-008": {
    "answer": "B",
    "explanation": "Perimeter = 2(length + width) = 2(12 + 7) = 38 cm.",
    "takeaway": "Perimeter measures the total distance around a shape."
  },
  "v11-lcat-009": {
    "answer": "A",
    "explanation": "There are five counters altogether, of which three are red. The probability is 3/5.",
    "takeaway": "Probability = favourable outcomes ÷ total equally likely outcomes."
  },
  "v11-lcat-010": {
    "answer": "C",
    "explanation": "Ten per cent of 240 is 24. Adding 24 to 240 gives 264 books.",
    "takeaway": "An increase of r% gives a new amount of original × (1 + r/100)."
  },
  "v11-lcat-011": {
    "answer": "B",
    "explanation": "To mitigate a problem is to reduce its severity or harmful effect. It does not necessarily remove it altogether.",
    "takeaway": "Use the surrounding sentence to identify the meaning that best fits the context."
  },
  "v11-lcat-012": {
    "answer": "B",
    "explanation": "Shade trees and benches improve comfort for pedestrians and people waiting for buses. The other choices are not supported by the stated actions.",
    "takeaway": "Choose the purpose that follows directly from the evidence rather than an unsupported possibility."
  },
  "v11-lcat-013": {
    "answer": "C",
    "explanation": "“Neither” is singular in this construction, so it takes the singular verb “is.”",
    "takeaway": "Check the grammatical head of the subject rather than the nearest noun."
  },
  "v11-lcat-014": {
    "answer": "D",
    "explanation": "“Shorter” is already the comparative form of “short,” so it does not need “more.”",
    "takeaway": "Do not combine “more” with an adjective that already has an -er comparative form."
  },
  "v11-lcat-015": {
    "answer": "C",
    "explanation": "“Sparse” means thinly distributed or scarce. “Dense” describes something closely packed.",
    "takeaway": "For antonyms, identify the core meaning before selecting its opposite."
  },
  "v11-lcat-016": {
    "answer": "B",
    "explanation": "A sculptor creates a statue; a composer creates a musical composition such as a symphony.",
    "takeaway": "Identify the relationship between the first pair and apply the same relationship to the second."
  },
  "v11-lcat-017": {
    "answer": "A",
    "explanation": "Monthly demonstrations provide repeated opportunities for feedback instead of concentrating it in one event.",
    "takeaway": "A main-idea answer should capture the central benefit stated in the passage."
  },
  "v11-lcat-018": {
    "answer": "B",
    "explanation": "The rule says charging implies the light is on. If the light is off, the device cannot be charging under the stated rule.",
    "takeaway": "This is modus tollens: if P implies Q, then not Q implies not P."
  },
  "v11-lcat-019": {
    "answer": "A",
    "explanation": "The increase occurred after secure bicycle parking was introduced, so the change may have encouraged cycling. The information does not prove every individual reason.",
    "takeaway": "Use cautious language when evidence suggests a link but does not prove a single cause."
  },
  "v11-lcat-020": {
    "answer": "C",
    "explanation": "Combining P before Q with Q before R gives P before R.",
    "takeaway": "Combine ordering constraints transitively to identify what must be true."
  },
  "v11-net-001": {
    "answer": "C",
    "explanation": "The derivative is f′(x) = 3x². Substituting x = 2 gives 3 × 4 = 12.",
    "takeaway": "Apply the power rule: d(xⁿ)/dx = nxⁿ⁻¹."
  },
  "v11-net-002": {
    "answer": "B",
    "explanation": "In a 30°–60°–90° triangle, the side opposite 30° is half the hypotenuse, so sin 30° = 1/2.",
    "takeaway": "Memorise the exact values for the standard angles 30°, 45° and 60°."
  },
  "v11-net-003": {
    "answer": "C",
    "explanation": "For ax² + bx + c = 0, the sum of the roots is −b/a. Here it is −(−5)/1 = 5.",
    "takeaway": "Use the root relationships: sum = −b/a and product = c/a."
  },
  "v11-net-004": {
    "answer": "B",
    "explanation": "For perpendicular vectors, the resultant magnitude is √(3² + 4²) = √25 = 5 units.",
    "takeaway": "Use the Pythagorean theorem for perpendicular vector components."
  },
  "v11-net-005": {
    "answer": "A",
    "explanation": "Average acceleration = change in velocity ÷ time = (8 − 20) ÷ 4 = −3 m/s².",
    "takeaway": "Acceleration is signed change in velocity divided by elapsed time."
  },
  "v11-net-006": {
    "answer": "C",
    "explanation": "Ohm's law gives I = V/R = 12/6 = 2 A.",
    "takeaway": "Use V = IR and rearrange for the quantity required."
  },
  "v11-net-007": {
    "answer": "D",
    "explanation": "Wave speed = frequency × wavelength = 5 × 2 = 10 m/s.",
    "takeaway": "Use v = fλ and keep the units consistent."
  },
  "v11-net-008": {
    "answer": "B",
    "explanation": "Charles's law states that volume is directly proportional to absolute temperature at constant pressure. Doubling the Kelvin temperature doubles the volume.",
    "takeaway": "Use Kelvin temperature when applying gas-law proportionalities."
  },
  "v11-net-009": {
    "answer": "D",
    "explanation": "The molar mass is 12 + 2(16) = 44 g mol⁻¹.",
    "takeaway": "Add the atomic masses according to the subscripts in the formula."
  },
  "v11-net-010": {
    "answer": "C",
    "explanation": "Complete dissociation gives [H⁺] = 1.0 × 10⁻⁴ mol dm⁻³. Therefore pH = −log₁₀[H⁺] = 4.",
    "takeaway": "For a strong monoprotic acid, use its concentration as [H⁺] when dissociation is complete."
  },
  "v11-net-011": {
    "answer": "B",
    "explanation": "Across a period, nuclear charge increases while added electrons enter the same principal shell. The stronger attraction generally reduces atomic radius.",
    "takeaway": "Across a period, increasing effective nuclear charge generally draws electrons closer."
  },
  "v11-net-012": {
    "answer": "C",
    "explanation": "Each oxygen is −2, giving −8 in total. Since the ion charge is −2, sulfur must be +6 so that the sum is −2.",
    "takeaway": "The oxidation numbers in an ion must add up to the ion's overall charge."
  },
  "v11-net-013": {
    "answer": "B",
    "explanation": "The list contains four elements, so len returns 4.",
    "takeaway": "The len function counts the number of items in a sequence."
  },
  "v11-net-014": {
    "answer": "B",
    "explanation": "The logical AND operation is true only when both operands are true. One false operand makes the result false.",
    "takeaway": "AND requires both conditions to be true."
  },
  "v11-net-015": {
    "answer": "B",
    "explanation": "A stack removes the most recently added item first, which is the LIFO rule.",
    "takeaway": "A stack is LIFO; a queue is FIFO."
  },
  "v11-net-016": {
    "answer": "C",
    "explanation": "1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13.",
    "takeaway": "Convert binary by summing the powers of two represented by 1 bits."
  },
  "v11-net-017": {
    "answer": "B",
    "explanation": "Area = ½ × base × height = ½ × 10 × 6 = 30 cm².",
    "takeaway": "The area of a triangle is half the product of its base and perpendicular height."
  },
  "v11-net-018": {
    "answer": "D",
    "explanation": "Differentiating gives dy/dx = 4x + 3. At x = 2, this is 8 + 3 = 11.",
    "takeaway": "Differentiate each term, then substitute the specified value of x."
  },
  "v11-net-019": {
    "answer": "C",
    "explanation": "Kinetic energy = ½mv² = ½ × 2 × 25 = 25 J.",
    "takeaway": "Use KE = ½mv²; remember that speed is squared."
  },
  "v11-net-020": {
    "answer": "B",
    "explanation": "For parallel resistors, 1/R = 1/6 + 1/3 = 3/6 = 1/2, so R = 2 Ω.",
    "takeaway": "For parallel resistors, add reciprocals and then take the reciprocal."
  },
  "v11-css-001": {
    "answer": "B",
    "explanation": "The legislature debates, amends and passes laws. The executive implements them and the judiciary interprets the law.",
    "takeaway": "Remember the broad roles: legislature makes laws, executive implements them, judiciary interprets them."
  },
  "v11-css-002": {
    "answer": "B",
    "explanation": "Federalism divides governmental powers between a central authority and regional units under a constitution.",
    "takeaway": "Look for a constitutionally protected division of powers between levels of government."
  },
  "v11-css-003": {
    "answer": "B",
    "explanation": "Opportunity cost is the value of the next-best alternative sacrificed when a choice is made.",
    "takeaway": "Opportunity cost is the best alternative forgone, not every possible alternative."
  },
  "v11-css-004": {
    "answer": "A",
    "explanation": "Inflation is a sustained increase in the general level of prices, which reduces the purchasing power of money.",
    "takeaway": "Distinguish economy-wide inflation from a price change affecting one item."
  },
  "v11-css-005": {
    "answer": "B",
    "explanation": "The balance of payments records economic transactions between residents of a country and non-residents over a period.",
    "takeaway": "The balance of payments covers a country's external economic transactions."
  },
  "v11-css-006": {
    "answer": "B",
    "explanation": "Evaporation occurs when liquid water gains enough energy to enter the atmosphere as water vapour.",
    "takeaway": "Evaporation moves water from liquid surfaces into the atmosphere."
  },
  "v11-css-007": {
    "answer": "B",
    "explanation": "A census systematically collects population information, such as the number of people and selected demographic characteristics.",
    "takeaway": "A census provides a population snapshot for planning and representation."
  },
  "v11-css-008": {
    "answer": "B",
    "explanation": "The Security Council has primary responsibility within the UN system for maintaining international peace and security.",
    "takeaway": "Associate the Security Council with international peace and security."
  },
  "v11-css-009": {
    "answer": "B",
    "explanation": "A treaty is a formal international agreement between states that is governed by international law.",
    "takeaway": "Treaties create obligations for their parties under international law."
  },
  "v11-css-010": {
    "answer": "B",
    "explanation": "The Constitution of 1973 establishes a federal parliamentary framework with constitutional institutions and a division of powers.",
    "takeaway": "Know the constitutional system's federal and parliamentary features."
  },
  "v11-css-011": {
    "answer": "B",
    "explanation": "The Indus flows south through Pakistan and reaches the Arabian Sea through its delta.",
    "takeaway": "Trace the Indus southward to its delta on the Arabian Sea."
  },
  "v11-css-012": {
    "answer": "A",
    "explanation": "A progressive tax applies higher tax rates to higher levels of taxable income or value.",
    "takeaway": "Progressive taxation uses increasing rates as the tax base increases."
  },
  "v11-css-013": {
    "answer": "B",
    "explanation": "Policy evaluation compares outcomes with objectives and examines effectiveness, efficiency and unintended effects.",
    "takeaway": "Evaluation asks what changed and whether the policy achieved its aims."
  },
  "v11-css-014": {
    "answer": "B",
    "explanation": "A well-designed sampling method reduces selection bias and can represent important groups in the population.",
    "takeaway": "Representative sampling helps reduce selection bias."
  },
  "v11-css-015": {
    "answer": "A",
    "explanation": "Flood warnings and improved drainage help communities adjust to climate-related risks that may occur.",
    "takeaway": "Adaptation reduces harm from actual or expected climate impacts."
  },
  "v11-css-016": {
    "answer": "B",
    "explanation": "A contemporary letter written by a participant is direct evidence from the period being studied.",
    "takeaway": "Primary sources originate from the period or from people directly involved."
  },
  "v11-css-017": {
    "answer": "B",
    "explanation": "Democracy includes more than majority decision-making; constitutional rights and equal protection protect minorities.",
    "takeaway": "Majority rule operates alongside fundamental rights and legal protections."
  },
  "v11-css-018": {
    "answer": "B",
    "explanation": "Accountability means decision-makers are answerable for their actions and may be subject to oversight or consequences.",
    "takeaway": "Accountability links authority with responsibility and review."
  },
  "v11-css-019": {
    "answer": "A",
    "explanation": "Comparative advantage is determined by lower opportunity cost, not necessarily by greater absolute productivity.",
    "takeaway": "Compare opportunity costs to identify comparative advantage."
  },
  "v11-css-020": {
    "answer": "B",
    "explanation": "GDP measures the market value of final goods and services produced within a country's borders over a specified period.",
    "takeaway": "GDP is based on production within national borders over time."
  },
  "v11-mdcat-001": {
    "answer": "B",
    "explanation": "Each parental strand acts as a template for a new complementary strand, so each daughter molecule retains one original strand.",
    "takeaway": "Semi-conservative replication preserves one parental strand in each daughter DNA molecule."
  },
  "v11-mdcat-002": {
    "answer": "B",
    "explanation": "Haemoglobin binds oxygen reversibly in the lungs and releases it in tissues where it is needed.",
    "takeaway": "Haemoglobin is the main oxygen-carrying protein in red blood cells."
  },
  "v11-mdcat-003": {
    "answer": "B",
    "explanation": "A nephron filters blood and carries out selective reabsorption and secretion to help form urine.",
    "takeaway": "The nephron is the kidney's basic structural and functional unit."
  },
  "v11-mdcat-004": {
    "answer": "B",
    "explanation": "Alveoli have very thin walls and a large combined surface area, allowing rapid diffusion between air and blood.",
    "takeaway": "Efficient gas exchange depends on a large surface area and a short diffusion distance."
  },
  "v11-mdcat-005": {
    "answer": "B",
    "explanation": "Mitosis separates duplicated chromosomes so each daughter cell receives the same chromosome number as the parent cell.",
    "takeaway": "Mitosis maintains chromosome number in the daughter cells."
  },
  "v11-mdcat-006": {
    "answer": "B",
    "explanation": "Beta cells in the pancreatic islets release insulin, which helps lower blood glucose concentration.",
    "takeaway": "Insulin is produced by pancreatic beta cells."
  },
  "v11-mdcat-007": {
    "answer": "B",
    "explanation": "Enzymes provide an alternative reaction pathway with a lower activation-energy barrier.",
    "takeaway": "Enzymes speed reactions by lowering activation energy and are not consumed overall."
  },
  "v11-mdcat-008": {
    "answer": "B",
    "explanation": "Traits that increase reproductive success tend to become more common across generations because their carriers leave more offspring.",
    "takeaway": "Natural selection changes trait frequencies through differences in reproductive success."
  },
  "v11-mdcat-009": {
    "answer": "B",
    "explanation": "Meiosis involves two successive divisions after one DNA replication and typically produces four haploid cells.",
    "takeaway": "Meiosis halves the chromosome number to produce haploid cells."
  },
  "v11-mdcat-010": {
    "answer": "B",
    "explanation": "Voltage-gated sodium channels open and sodium ions enter the neuron, making the inside less negative.",
    "takeaway": "Rapid sodium influx causes the rising phase of a typical action potential."
  },
  "v11-mdcat-011": {
    "answer": "B",
    "explanation": "NH₃ accepts a proton to form NH₄⁺. A base and its conjugate acid differ by one proton.",
    "takeaway": "A conjugate acid is formed when a base accepts a proton."
  },
  "v11-mdcat-012": {
    "answer": "A",
    "explanation": "By Le Châtelier's principle, the system responds to added reactant by favouring the forward direction and consuming some of it.",
    "takeaway": "A system at equilibrium shifts to oppose an imposed concentration change."
  },
  "v11-mdcat-013": {
    "answer": "B",
    "explanation": "Sodium transfers an electron to chlorine, producing oppositely charged ions held together by electrostatic attraction.",
    "takeaway": "Ionic bonding is the electrostatic attraction between oppositely charged ions."
  },
  "v11-mdcat-014": {
    "answer": "B",
    "explanation": "The limiting reagent is consumed first and therefore limits how much product can form according to the balanced equation.",
    "takeaway": "Identify the limiting reagent before calculating theoretical yield."
  },
  "v11-mdcat-015": {
    "answer": "C",
    "explanation": "At 25°C, a neutral solution has equal hydrogen-ion and hydroxide-ion concentrations of 1 × 10⁻⁷ mol dm⁻³, giving pH 7.",
    "takeaway": "At 25°C, neutrality corresponds to pH 7."
  },
  "v11-mdcat-016": {
    "answer": "C",
    "explanation": "KE = ½mv² = ½ × 2 × 3² = 9 J.",
    "takeaway": "Kinetic energy depends on mass and the square of speed."
  },
  "v11-mdcat-017": {
    "answer": "B",
    "explanation": "Water has a higher refractive index than air, so light slows down and bends towards the normal when it enters at an angle.",
    "takeaway": "Light bends towards the normal when it enters a medium with a higher refractive index."
  },
  "v11-mdcat-018": {
    "answer": "C",
    "explanation": "Electrical power P = VI = 12 × 2 = 24 W.",
    "takeaway": "Use P = VI when voltage and current are known."
  },
  "v11-mdcat-019": {
    "answer": "B",
    "explanation": "Period T = 1/f = 1/50 s = 0.02 s.",
    "takeaway": "Frequency and period are reciprocals: T = 1/f."
  },
  "v11-mdcat-020": {
    "answer": "D",
    "explanation": "Density = mass ÷ volume = 2 ÷ 0.001 = 2,000 kg/m³.",
    "takeaway": "Use density = mass divided by volume and convert units consistently."
  }
};

export const V11_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = V11_SAMPLE_QUESTIONS.map((question) => {
  const details = ANSWER_DETAILS[question.id];
  if (!details) throw new Error(`Missing answer details for ${question.id}`);
  return { ...question, ...details, sourceKind: "original-sample" as const };
});
