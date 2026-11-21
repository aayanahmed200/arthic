import { EXPANDED_SAMPLE_QUESTIONS } from "./_expanded-content.js";
import { MORE_SAMPLE_QUESTIONS } from "./_more-content.js";
import { ADDITIONAL_PRIVATE_QUESTIONS } from "./_additional-content.js";
import { FRESH_PRIVATE_QUESTIONS } from "./_fresh-content.js";
import { NEXT_PRIVATE_QUESTIONS } from "./_next-content.js";
import { V10_PRIVATE_QUESTIONS } from "./_v10-content.js";
import { V11_PRIVATE_QUESTIONS } from "./_v11-content.js";
import { V12_PRIVATE_QUESTIONS } from "./_v12-content.js";
import { V13_PRIVATE_QUESTIONS } from "./_v13-content.js";
import { V14_PRIVATE_QUESTIONS } from "./_v14-content.js";
import { V15_PRIVATE_QUESTIONS } from "./_v15-content.js";
import { V16_PRIVATE_QUESTIONS } from "./_v16-content.js";
import { V17_PRIVATE_QUESTIONS } from "./_v17-content.js";
import { V18_PRIVATE_QUESTIONS } from "./_v18-content.js";
import { V19_PRIVATE_QUESTIONS } from "./_v19-content.js";
import { classifyPracticeDifficulty, normalizeQuestionStem } from "../../src/data/question-difficulty.js";

export interface StudyOption { key: string; text: string; }

export interface PrivateStudyQuestion {
  id: string;
  examCode: "LCAT" | "NET" | "CSS" | "MDCAT";
  subjectCode: string;
  topic: string;
  prompt: string;
  instruction: string;
  options: StudyOption[];
  answer: string;
  explanation: string;
  takeaway: string;
  sourceKind: "original-sample" | "licensed" | "public-domain" | "past-paper";
  difficulty?: "EASY" | "STANDARD" | "CHALLENGING";
  sourceNote?: string;
  examYear?: number;
  examMonth?: number;
  examSession?: string;
}

/** Original Arthic sample bank with answer keys retained on the server. */
const BASE_SAMPLE_QUESTIONS: PrivateStudyQuestion[] = [
  {
    "id": "mdcat-bio-cell-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cell organelles",
    "prompt": "Which organelle is the main site of aerobic respiration in a eukaryotic cell?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Ribosome"
      },
      {
        "key": "B",
        "text": "Mitochondrion"
      },
      {
        "key": "C",
        "text": "Golgi apparatus"
      },
      {
        "key": "D",
        "text": "Lysosome"
      }
    ],
    "answer": "B",
    "explanation": "Mitochondria contain the inner-membrane machinery used in aerobic respiration.\nThe electron transport chain and ATP synthase are located in the inner mitochondrial membrane.",
    "takeaway": "Mitochondria are the main site of aerobic ATP production.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-cell-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cell cycle",
    "prompt": "During which phase of the cell cycle is nuclear DNA replicated?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "G1 phase"
      },
      {
        "key": "B",
        "text": "G2 phase"
      },
      {
        "key": "C",
        "text": "S phase"
      },
      {
        "key": "D",
        "text": "M phase"
      }
    ],
    "answer": "C",
    "explanation": "DNA replication occurs during the synthesis (S) phase of interphase.\nEach chromosome is copied, producing two sister chromatids joined at the centromere.",
    "takeaway": "S phase is the DNA-synthesis stage of interphase.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-membrane-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Movement across membranes",
    "prompt": "Which statement best describes osmosis?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Movement of solute from high to low concentration"
      },
      {
        "key": "B",
        "text": "Net movement of water across a selectively permeable membrane down its water-potential gradient"
      },
      {
        "key": "C",
        "text": "Movement of any particle using ATP"
      },
      {
        "key": "D",
        "text": "Breakdown of glucose to release energy"
      }
    ],
    "answer": "B",
    "explanation": "Osmosis is specifically the net movement of water across a selectively permeable membrane.\nThe net movement is from higher water potential towards lower water potential.",
    "takeaway": "Osmosis describes water movement across a selectively permeable membrane.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-chem-stoich-001",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical equations",
    "prompt": "In 2H₂ + O₂ → 2H₂O, how many moles of water can form from 2 moles of hydrogen when oxygen is in excess?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1 mole"
      },
      {
        "key": "B",
        "text": "1.5 moles"
      },
      {
        "key": "C",
        "text": "2 moles"
      },
      {
        "key": "D",
        "text": "4 moles"
      }
    ],
    "answer": "C",
    "explanation": "The balanced equation gives a 2:2 mole ratio between hydrogen and water.\nTherefore, 2 moles of hydrogen can form 2 moles of water when oxygen is in excess.",
    "takeaway": "Use coefficients in a balanced equation as mole ratios.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-phy-motion-001",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Newton's second law",
    "prompt": "A 2 kg object accelerates at 3 m/s². What is the net force acting on it?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1.5 N"
      },
      {
        "key": "B",
        "text": "5 N"
      },
      {
        "key": "C",
        "text": "6 N"
      },
      {
        "key": "D",
        "text": "9 N"
      }
    ],
    "answer": "C",
    "explanation": "Newton's second law is F = ma.\nSubstituting the values gives F = 2 × 3 = 6 N.",
    "takeaway": "Net force equals mass multiplied by acceleration.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-chem-acids-001",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Acids and pH",
    "prompt": "What is the approximate pH of a 0.001 mol dm⁻³ solution of a strong monoprotic acid, assuming complete dissociation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "11"
      }
    ],
    "answer": "C",
    "explanation": "A strong monoprotic acid dissociates completely, so [H⁺] is approximately 10⁻³ mol dm⁻³.\nUsing pH = −log₁₀[H⁺] gives a pH of 3.",
    "takeaway": "For a fully dissociated strong monoprotic acid, [H⁺] is approximately its concentration.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-genetics-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Inheritance",
    "prompt": "Two heterozygous tall plants (Tt × Tt) are crossed. If tallness is dominant, what is the probability of a short offspring (tt)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0%"
      },
      {
        "key": "B",
        "text": "25%"
      },
      {
        "key": "C",
        "text": "50%"
      },
      {
        "key": "D",
        "text": "75%"
      }
    ],
    "answer": "B",
    "explanation": "The possible genotypes are TT, Tt, Tt and tt.\nOne of the four equally likely outcomes is tt, giving a probability of 1/4 or 25%.",
    "takeaway": "A Tt × Tt cross gives a 1:2:1 genotype ratio.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-phy-optics-001",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Lenses",
    "prompt": "What kind of image does a concave lens form for a real object placed in front of it?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Real, inverted and enlarged"
      },
      {
        "key": "B",
        "text": "Virtual, upright and diminished"
      },
      {
        "key": "C",
        "text": "Real, upright and diminished"
      },
      {
        "key": "D",
        "text": "Virtual, inverted and enlarged"
      }
    ],
    "answer": "B",
    "explanation": "A concave lens diverges light rays.\nFor a real object, the rays appear to come from a virtual image on the same side as the object; the image is upright and smaller.",
    "takeaway": "A concave lens forms a virtual, upright and diminished image of a real object.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-verbal-main-001",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Reading comprehension",
    "prompt": "A university library extends its evening hours during examination month and adds quiet study areas. Student attendance rises during that period. What is the most reasonable main purpose of these changes?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To give students more suitable time and space to study"
      },
      {
        "key": "B",
        "text": "To replace regular university classes"
      },
      {
        "key": "C",
        "text": "To reduce the number of books in the library"
      },
      {
        "key": "D",
        "text": "To restrict access to examination staff"
      }
    ],
    "answer": "A",
    "explanation": "The changes described make the library more useful for students preparing for examinations.\nThe passage does not suggest that classes are being replaced or that access is restricted.",
    "takeaway": "For a main-purpose question, choose the option that best captures the passage as a whole.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-verbal-vocab-001",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "prompt": "The committee reached a unanimous decision. What does “unanimous” mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Made without discussion"
      },
      {
        "key": "B",
        "text": "Agreed to by everyone"
      },
      {
        "key": "C",
        "text": "Delayed until later"
      },
      {
        "key": "D",
        "text": "Based on a guess"
      }
    ],
    "answer": "B",
    "explanation": "A unanimous decision is one that all members agree with.\nThe word describes complete agreement within a group.",
    "takeaway": "Unanimous means everyone in the group agrees.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-percent-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Percentages",
    "prompt": "A book costs Rs. 2,500 and is discounted by 20%. What is its sale price?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 1,750"
      },
      {
        "key": "B",
        "text": "Rs. 2,000"
      },
      {
        "key": "C",
        "text": "Rs. 2,250"
      },
      {
        "key": "D",
        "text": "Rs. 2,300"
      }
    ],
    "answer": "B",
    "explanation": "Twenty per cent of Rs. 2,500 is Rs. 500.\nSubtracting the discount from the original price gives Rs. 2,000.",
    "takeaway": "Calculate the discount first, then subtract it from the original price.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-ratio-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Ratios",
    "prompt": "Two quantities are in the ratio 2:3 and their total is 25. What is the larger quantity?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "18"
      }
    ],
    "answer": "C",
    "explanation": "There are 2 + 3 = 5 equal parts.\nEach part is 25 ÷ 5 = 5, so the larger quantity is 3 × 5 = 15.",
    "takeaway": "Add the ratio parts, find one part, then scale up.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-logic-condition-001",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Logical deduction",
    "prompt": "Every applicant who meets a minimum requirement may sit an admission test. Sara meets that requirement. Which conclusion follows?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Sara may sit the admission test"
      },
      {
        "key": "B",
        "text": "Sara has already passed the test"
      },
      {
        "key": "C",
        "text": "Sara will receive an admission offer"
      },
      {
        "key": "D",
        "text": "Every applicant will receive the same score"
      }
    ],
    "answer": "A",
    "explanation": "The stated rule applies to every applicant who meets the minimum requirement.\nSara meets that condition, so she is eligible to sit the test; no result or offer is implied.",
    "takeaway": "Apply the given rule, but do not infer outcomes that were not stated.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-grammar-agreement-001",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "prompt": "Choose the correct verb: “Neither the teachers nor the principal ___ available today.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "are"
      },
      {
        "key": "B",
        "text": "were"
      },
      {
        "key": "C",
        "text": "is"
      },
      {
        "key": "D",
        "text": "have been"
      }
    ],
    "answer": "C",
    "explanation": "In a neither…nor construction, the verb generally agrees with the nearer subject.\n“Principal” is singular, so “is” is correct.",
    "takeaway": "Check the subject nearest the verb in a neither…nor construction.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-verbal-analogy-001",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Analogies",
    "prompt": "Choose the pair that completes the relationship: “concise : brief :: abundant : ___”.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "scarce"
      },
      {
        "key": "B",
        "text": "plentiful"
      },
      {
        "key": "C",
        "text": "fragile"
      },
      {
        "key": "D",
        "text": "distant"
      }
    ],
    "answer": "B",
    "explanation": "“Concise” and “brief” are synonyms.\nThe matching synonym for “abundant” is “plentiful”.",
    "takeaway": "Identify the relationship in the first pair before choosing the second.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-algebra-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Algebra",
    "prompt": "If 3x + 4 = 19, what is x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "answer": "C",
    "explanation": "Subtract 4 from both sides to get 3x = 15.\nDivide by 3, giving x = 5.",
    "takeaway": "Use inverse operations while keeping both sides of the equation balanced.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-linear-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Linear equations",
    "prompt": "If 3x − 7 = 11, what is the value of x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "answer": "C",
    "explanation": "Add 7 to both sides to get 3x = 18.\nDivide both sides by 3, giving x = 6.",
    "takeaway": "Keep equations balanced: use the same operation on both sides.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-calculus-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Differentiation",
    "prompt": "For f(x) = x² + 3x, what is f′(2)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "answer": "B",
    "explanation": "Differentiate term by term to get f′(x) = 2x + 3.\nSubstituting x = 2 gives 4 + 3 = 7.",
    "takeaway": "Differentiate first, then substitute the requested value of x.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-phy-kinematics-001",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Motion",
    "prompt": "An object starts from rest and accelerates uniformly at 4 m/s² for 3 seconds. What is its final speed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "7 m/s"
      },
      {
        "key": "B",
        "text": "9 m/s"
      },
      {
        "key": "C",
        "text": "12 m/s"
      },
      {
        "key": "D",
        "text": "16 m/s"
      }
    ],
    "answer": "C",
    "explanation": "For uniform acceleration, v = u + at.\nWith u = 0, a = 4 m/s² and t = 3 s, the final speed is 12 m/s.",
    "takeaway": "For constant acceleration, use v = u + at.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-cs-binary-001",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Number systems",
    "prompt": "What is the decimal value of the binary number 1010₂?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "9"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "answer": "C",
    "explanation": "The binary digits represent 1×8 + 0×4 + 1×2 + 0×1.\nAdding the place values gives 10 in decimal.",
    "takeaway": "Binary place values double from right to left: 1, 2, 4, 8, and so on.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-geometry-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Circle geometry",
    "prompt": "What is the area of a circle with radius 3 units?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3π square units"
      },
      {
        "key": "B",
        "text": "6π square units"
      },
      {
        "key": "C",
        "text": "9π square units"
      },
      {
        "key": "D",
        "text": "12π square units"
      }
    ],
    "answer": "C",
    "explanation": "The area of a circle is A = πr².\nSubstituting r = 3 gives A = π × 3² = 9π square units.",
    "takeaway": "Circle area uses the square of the radius: A = πr².",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-phy-resistance-001",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Electric circuits",
    "prompt": "Two resistors of 2 Ω and 4 Ω are connected in series. What is their equivalent resistance?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 Ω"
      },
      {
        "key": "B",
        "text": "4 Ω"
      },
      {
        "key": "C",
        "text": "6 Ω"
      },
      {
        "key": "D",
        "text": "8 Ω"
      }
    ],
    "answer": "C",
    "explanation": "In a series circuit, resistances add directly.\nThe equivalent resistance is 2 Ω + 4 Ω = 6 Ω.",
    "takeaway": "Resistors in series add; resistors in parallel use a reciprocal relationship.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-quadratic-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Quadratic equations",
    "prompt": "For x² − 5x + 6 = 0, what is the sum of the roots?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−6"
      },
      {
        "key": "B",
        "text": "−5"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "answer": "C",
    "explanation": "For ax² + bx + c = 0, the sum of the roots is −b/a.\nHere a = 1 and b = −5, so the sum is 5.",
    "takeaway": "For a quadratic equation, the sum of roots is −b/a.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-cs-lists-001",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Programming basics",
    "prompt": "A Python list starts as [1, 2, 3]. After items.append(4), what does len(items) return?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "An error"
      }
    ],
    "answer": "B",
    "explanation": "The append method adds one item to the end of the list.\nThe list then contains four elements, so len(items) returns 4.",
    "takeaway": "append adds one element; len counts the number of elements.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-english-agreement-001",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "prompt": "Choose the correct verb: “Neither the proposals nor the budget ___ acceptable.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "are"
      },
      {
        "key": "B",
        "text": "were"
      },
      {
        "key": "C",
        "text": "is"
      },
      {
        "key": "D",
        "text": "have been"
      }
    ],
    "answer": "C",
    "explanation": "With “neither…nor,” the verb generally agrees with the nearer subject.\n“Budget” is singular, so “is” is the matching verb.",
    "takeaway": "In neither…nor constructions, check the subject nearest the verb.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-logic-policy-001",
    "examCode": "CSS",
    "subjectCode": "LOGIC",
    "topic": "Logical reasoning",
    "prompt": "All public policies in this example require review. Policy X is a public policy. Which conclusion follows?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Policy X does not require review"
      },
      {
        "key": "B",
        "text": "Policy X requires review"
      },
      {
        "key": "C",
        "text": "Only Policy X requires review"
      },
      {
        "key": "D",
        "text": "Policy X has already been approved"
      }
    ],
    "answer": "B",
    "explanation": "The rule applies to every public policy.\nSince Policy X belongs to that category, it also requires review.",
    "takeaway": "A general rule applies to each item that satisfies its condition.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-general-geography-001",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "World geography",
    "prompt": "Which line of longitude is defined as 0°?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The Equator"
      },
      {
        "key": "B",
        "text": "The International Date Line"
      },
      {
        "key": "C",
        "text": "The Prime Meridian"
      },
      {
        "key": "D",
        "text": "The Tropic of Cancer"
      }
    ],
    "answer": "C",
    "explanation": "The Prime Meridian is the reference line for 0° longitude.\nIt is used as the starting point for measuring longitude east and west.",
    "takeaway": "The Equator is 0° latitude; the Prime Meridian is 0° longitude.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-analytical-evidence-001",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Evaluating arguments",
    "prompt": "A report claims that a new study programme improved student results. Which evidence would best help assess the claim?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A slogan describing the programme as innovative"
      },
      {
        "key": "B",
        "text": "A comparison of results before and after, accounting for other relevant changes"
      },
      {
        "key": "C",
        "text": "The number of colours in the programme's logo"
      },
      {
        "key": "D",
        "text": "A statement that the programme was popular"
      }
    ],
    "answer": "B",
    "explanation": "A before-and-after comparison provides relevant outcome evidence.\nConsidering other changes helps assess whether the programme itself plausibly contributed to the difference.",
    "takeaway": "Evaluate claims using relevant outcome data and consider alternative explanations.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-writing-clarity-001",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Thesis statements",
    "prompt": "Which sentence gives a clear, arguable position for an essay on public transport?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Public transport is a topic many people discuss."
      },
      {
        "key": "B",
        "text": "This essay will talk about buses and trains."
      },
      {
        "key": "C",
        "text": "Cities should prioritise reliable public transport because it improves access and can reduce congestion."
      },
      {
        "key": "D",
        "text": "There are many forms of transport around the world."
      }
    ],
    "answer": "C",
    "explanation": "The sentence makes a focused claim and gives reasons that can be supported or challenged.\nThe other options introduce the topic but do not establish an argument.",
    "takeaway": "A strong thesis makes a focused claim and signals the reasoning that will support it.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-general-federalism-001",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Political systems",
    "prompt": "What is the central feature of a federal system of government?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "All authority belongs to one local council"
      },
      {
        "key": "B",
        "text": "Powers are constitutionally divided between national and regional governments"
      },
      {
        "key": "C",
        "text": "Courts appoint all elected representatives"
      },
      {
        "key": "D",
        "text": "Regional governments have no defined responsibilities"
      }
    ],
    "answer": "B",
    "explanation": "Federal systems divide public authority between a national government and regional units.\nEach level has constitutionally defined responsibilities.",
    "takeaway": "Federalism divides authority between levels of government.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-pakistan-system-001",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Government and constitution",
    "prompt": "In Pakistan's parliamentary system, which office is the head of government?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "President"
      },
      {
        "key": "B",
        "text": "Prime Minister"
      },
      {
        "key": "C",
        "text": "Chief Justice"
      },
      {
        "key": "D",
        "text": "Speaker of the Senate"
      }
    ],
    "answer": "B",
    "explanation": "The Prime Minister leads the federal government and is the head of government.\nThe President is the head of state.",
    "takeaway": "In a parliamentary system, the Prime Minister is the head of government.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-analytical-causation-001",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Causation and evidence",
    "prompt": "Two cities report more traffic and higher air pollution in the same year. What can be concluded from this information alone?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Traffic definitely caused all of the pollution increase"
      },
      {
        "key": "B",
        "text": "Pollution caused the increase in traffic"
      },
      {
        "key": "C",
        "text": "The two changes occurred together, but more evidence is needed to establish causation"
      },
      {
        "key": "D",
        "text": "The changes must be unrelated"
      }
    ],
    "answer": "C",
    "explanation": "The observations show that the two changes occurred during the same period.\nThey do not establish that one caused the other; other factors could contribute.",
    "takeaway": "Correlation alone does not prove causation.",
    "sourceKind": "original-sample"
  }
,

  {
    "id": "lcat-verbal-inference-002",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Drawing supported inferences",
    "prompt": "A city adds a second morning bus to a busy route. Four weeks later, a passenger survey reports a lower average waiting time. Which conclusion is best supported by the information?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Surveyed passengers reported shorter average waits after the additional service began."
      },
      {
        "key": "B",
        "text": "Every passenger reached work earlier than before."
      },
      {
        "key": "C",
        "text": "The extra bus was the only reason waiting times changed."
      },
      {
        "key": "D",
        "text": "The route no longer experiences delays."
      }
    ],
    "answer": "A",
    "explanation": "The survey directly reports a lower average waiting time after the service change.\nIt does not establish that every passenger benefited or that the extra bus was the only factor involved.",
    "takeaway": "Choose the conclusion that the evidence supports, not a stronger claim than the evidence allows.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-verbal-vocab-002",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "prompt": "The new timetable is intended to mitigate delays during the morning rush. What does “mitigate” mean in this sentence?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Predict"
      },
      {
        "key": "B",
        "text": "Measure"
      },
      {
        "key": "C",
        "text": "Make less severe"
      },
      {
        "key": "D",
        "text": "Cause"
      }
    ],
    "answer": "A",
    "explanation": "To mitigate something is to reduce its seriousness, harmful effect or intensity.\nThe timetable is intended to make delays less severe, not to remove every possible delay.",
    "takeaway": "Mitigate means to make a problem or its effects less severe.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-average-002",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Averages",
    "prompt": "The mean of four numbers, 14, 18, 20 and x, is 18. What is the value of x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "16"
      },
      {
        "key": "B",
        "text": "18"
      },
      {
        "key": "C",
        "text": "20"
      },
      {
        "key": "D",
        "text": "22"
      }
    ],
    "answer": "A",
    "explanation": "A mean of 18 across four numbers requires a total of 4 × 18 = 72.\nThe known numbers total 14 + 18 + 20 = 52, so x = 72 − 52 = 20.",
    "takeaway": "Mean equals total divided by the number of values; reverse the formula to find a missing value.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-sequence-002",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Number patterns",
    "prompt": "What is the next number in the sequence 5, 9, 17, 33, …?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "49"
      },
      {
        "key": "B",
        "text": "57"
      },
      {
        "key": "C",
        "text": "63"
      },
      {
        "key": "D",
        "text": "65"
      }
    ],
    "answer": "A",
    "explanation": "The differences are 4, 8 and 16. Each difference doubles.\nThe next difference is 32, so the next term is 33 + 32 = 65.",
    "takeaway": "Check the differences between consecutive terms when looking for a number pattern.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-probability-002",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Basic probability",
    "prompt": "A bag contains 3 red counters, 2 blue counters and 1 yellow counter. One counter is selected at random. What is the probability that it is blue?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1/6"
      },
      {
        "key": "B",
        "text": "1/3"
      },
      {
        "key": "C",
        "text": "1/2"
      },
      {
        "key": "D",
        "text": "2/3"
      }
    ],
    "answer": "A",
    "explanation": "There are 3 + 2 + 1 = 6 counters in total, and 2 are blue.\nThe probability is 2/6, which simplifies to 1/3.",
    "takeaway": "For equally likely outcomes, probability is favourable outcomes divided by total possible outcomes.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-logic-condition-002",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Conditional reasoning",
    "prompt": "A school processes every application received before 5:00 pm on the same day. Application K was received at 4:30 pm. What follows from the rule?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Application K will be processed on the same day."
      },
      {
        "key": "B",
        "text": "Application K will be approved."
      },
      {
        "key": "C",
        "text": "Application K will be processed before 5:00 pm."
      },
      {
        "key": "D",
        "text": "All applications received after 5:00 pm will be rejected."
      }
    ],
    "answer": "A",
    "explanation": "The rule says every application received before 5:00 pm is processed on the same day.\nK arrived at 4:30 pm, so it meets the stated condition. Approval is not implied.",
    "takeaway": "Apply the given rule exactly; do not add consequences that the rule does not state.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-grammar-agreement-002",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "prompt": "Choose the correct verb: “Each of the candidates ___ a separate time slot.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "were given"
      },
      {
        "key": "B",
        "text": "are given"
      },
      {
        "key": "C",
        "text": "was given"
      },
      {
        "key": "D",
        "text": "have given"
      }
    ],
    "answer": "A",
    "explanation": "The subject is “each”, which is grammatically singular.\nThe correct singular passive form in this sentence is “was given”.",
    "takeaway": "Words such as each, every and either usually take a singular verb.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-reading-purpose-002",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Identifying purpose",
    "prompt": "A university publishes room-availability information and updates it throughout the day. Students can use the page to find a quieter place to study. What is the main purpose of the page?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To replace the university library"
      },
      {
        "key": "B",
        "text": "To publish students’ examination results"
      },
      {
        "key": "C",
        "text": "To help students find suitable available study spaces"
      },
      {
        "key": "D",
        "text": "To reserve every room for staff"
      }
    ],
    "answer": "A",
    "explanation": "The information is about which study rooms are available, and the stated use is finding a quieter place to work.\nThe other options introduce purposes that the passage does not mention.",
    "takeaway": "For a purpose question, connect the information provided to the use explicitly described.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-differentiation-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Differentiation",
    "prompt": "If f(x) = 2x³ − x, what is the value of f′(2)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "19"
      },
      {
        "key": "B",
        "text": "21"
      },
      {
        "key": "C",
        "text": "23"
      },
      {
        "key": "D",
        "text": "25"
      }
    ],
    "answer": "A",
    "explanation": "Differentiate term by term: f′(x) = 6x² − 1.\nAt x = 2, f′(2) = 6(4) − 1 = 23.",
    "takeaway": "Use the power rule: the derivative of axⁿ is anxⁿ⁻¹.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-sequence-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Arithmetic progressions",
    "prompt": "An arithmetic progression has first term 7 and common difference 4. What is its 12th term?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "43"
      },
      {
        "key": "B",
        "text": "47"
      },
      {
        "key": "C",
        "text": "51"
      },
      {
        "key": "D",
        "text": "55"
      }
    ],
    "answer": "A",
    "explanation": "The nth term is aₙ = a₁ + (n − 1)d.\nSubstituting gives a₁₂ = 7 + 11 × 4 = 51.",
    "takeaway": "For an arithmetic progression, add the common difference n − 1 times to reach term n.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-trigonometry-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Trigonometric ratios",
    "prompt": "For an angle θ between 0° and 90°, inclusive, sin θ = 1/2. What is θ?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "15°"
      },
      {
        "key": "B",
        "text": "30°"
      },
      {
        "key": "C",
        "text": "45°"
      },
      {
        "key": "D",
        "text": "60°"
      }
    ],
    "answer": "A",
    "explanation": "The standard sine value for 30° is 1/2.\nWithin the stated first-quadrant interval, 30° is the required angle.",
    "takeaway": "Memorise the standard trigonometric values for 30°, 45° and 60°.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-phy-momentum-002",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Linear momentum",
    "prompt": "A ball of mass 0.2 kg moves at 15 m/s. What is its momentum?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.75 kg m/s"
      },
      {
        "key": "B",
        "text": "1.5 kg m/s"
      },
      {
        "key": "C",
        "text": "3.0 kg m/s"
      },
      {
        "key": "D",
        "text": "7.5 kg m/s"
      }
    ],
    "answer": "A",
    "explanation": "Linear momentum is p = mv.\nTherefore p = 0.2 × 15 = 3.0 kg m/s.",
    "takeaway": "Momentum is the product of an object's mass and velocity.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-phy-work-002",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Work and energy",
    "prompt": "A constant force of 12 N moves an object 5 m in the direction of the force. How much work is done?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "17 J"
      },
      {
        "key": "B",
        "text": "24 J"
      },
      {
        "key": "C",
        "text": "48 J"
      },
      {
        "key": "D",
        "text": "60 J"
      }
    ],
    "answer": "A",
    "explanation": "When force and displacement are in the same direction, work is W = Fd.\nW = 12 × 5 = 60 joules.",
    "takeaway": "Work done by a constant force is force multiplied by displacement in the force's direction.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-chem-moles-002",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "The mole",
    "prompt": "Water has a molar mass of 18 g mol⁻¹. How many moles are present in 36 g of water?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.5 mol"
      },
      {
        "key": "B",
        "text": "1 mol"
      },
      {
        "key": "C",
        "text": "2 mol"
      },
      {
        "key": "D",
        "text": "3 mol"
      }
    ],
    "answer": "A",
    "explanation": "Amount in moles = mass ÷ molar mass.\n36 g ÷ 18 g mol⁻¹ = 2 mol.",
    "takeaway": "Convert mass to amount in moles by dividing by molar mass.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-chem-atomic-number-002",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Atomic structure",
    "prompt": "An atom has atomic number 17. How many protons are present in its nucleus?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "16"
      },
      {
        "key": "C",
        "text": "18"
      },
      {
        "key": "D",
        "text": "17"
      }
    ],
    "answer": "A",
    "explanation": "The atomic number is defined as the number of protons in the nucleus.\nAn atom with atomic number 17 therefore contains 17 protons.",
    "takeaway": "Atomic number identifies an element by its number of protons.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-cs-boolean-002",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Boolean logic",
    "prompt": "In Boolean logic, what is the result of 1 AND 0?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "Undefined"
      }
    ],
    "answer": "A",
    "explanation": "AND returns 1 only when both inputs are 1.\nBecause one input is 0, the result is 0.",
    "takeaway": "A Boolean AND operation is true only when every input is true.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-pakistan-constitution-senate-002",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Constitutional institutions",
    "prompt": "What is a central feature of Pakistan's Senate in the federal parliamentary structure?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It provides equal representation to the provinces."
      },
      {
        "key": "B",
        "text": "It appoints all members of the National Assembly."
      },
      {
        "key": "C",
        "text": "It replaces provincial assemblies."
      },
      {
        "key": "D",
        "text": "It is responsible for conducting general elections."
      }
    ],
    "answer": "A",
    "explanation": "The Senate is the upper house and is designed to provide equal provincial representation.\nThis balances the population-based representation of the National Assembly.",
    "takeaway": "In a bicameral federal legislature, the upper house can protect the voice of constituent units.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-economics-inflation-002",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Inflation",
    "prompt": "Which statement best describes inflation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A fall in the general price level over time"
      },
      {
        "key": "B",
        "text": "An increase in the price of one product only"
      },
      {
        "key": "C",
        "text": "A rise in the quantity of goods produced"
      },
      {
        "key": "D",
        "text": "A sustained increase in the general price level"
      }
    ],
    "answer": "A",
    "explanation": "Inflation is a sustained increase in the overall price level of goods and services.\nIt is not simply a price rise in one isolated product.",
    "takeaway": "Inflation concerns the general price level, not a single price change.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-general-greenhouse-002",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Climate science",
    "prompt": "How do major greenhouse gases contribute to warming in Earth's atmosphere?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "They prevent sunlight from reaching Earth's surface."
      },
      {
        "key": "B",
        "text": "They absorb and re-emit some outgoing infrared radiation."
      },
      {
        "key": "C",
        "text": "They stop all heat from leaving the oceans."
      },
      {
        "key": "D",
        "text": "They remove oxygen from the atmosphere."
      }
    ],
    "answer": "A",
    "explanation": "Greenhouse gases absorb some of the infrared radiation emitted by Earth's surface and re-emit it in different directions.\nThis process reduces the rate at which energy escapes to space and warms the lower atmosphere.",
    "takeaway": "The greenhouse effect involves absorption and re-emission of outgoing infrared radiation.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-general-suez-002",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "World geography",
    "prompt": "The Suez Canal provides a shipping route between which two bodies of water?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Black Sea and Caspian Sea"
      },
      {
        "key": "B",
        "text": "Arabian Sea and Red Sea"
      },
      {
        "key": "C",
        "text": "Mediterranean Sea and Red Sea"
      },
      {
        "key": "D",
        "text": "Baltic Sea and North Sea"
      }
    ],
    "answer": "A",
    "explanation": "The Suez Canal connects the Mediterranean Sea to the Red Sea.\nIt creates a shorter maritime route between Europe and the Indian Ocean region than travelling around southern Africa.",
    "takeaway": "The Suez Canal links the Mediterranean Sea and the Red Sea.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-english-precis-002",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Précis writing",
    "prompt": "Which is the strongest principle to follow when writing a précis of a passage?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Add personal examples to make the passage more persuasive."
      },
      {
        "key": "B",
        "text": "Preserve the central ideas concisely without adding new opinions."
      },
      {
        "key": "C",
        "text": "Copy every sentence in the original order."
      },
      {
        "key": "D",
        "text": "Remove the main claim and retain only minor details."
      }
    ],
    "answer": "A",
    "explanation": "A précis is a concise restatement of the source's central ideas.\nIt should preserve the meaning and emphasis while avoiding new arguments or personal commentary.",
    "takeaway": "A good précis is shorter than the original but faithful to its central meaning.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-english-thesis-002",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Essay structure",
    "prompt": "Which sentence is the clearest arguable thesis for an essay about public transport?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Public transport exists in many cities."
      },
      {
        "key": "B",
        "text": "This essay is about buses and trains."
      },
      {
        "key": "C",
        "text": "Transport is an important topic."
      },
      {
        "key": "D",
        "text": "Cities should prioritise reliable public transport because it improves access and can reduce dependence on private cars."
      }
    ],
    "answer": "A",
    "explanation": "The final option makes a specific, debatable claim and gives reasons that the essay can develop.\nThe other options introduce a topic but do not establish a clear position.",
    "takeaway": "A thesis should state an arguable position that the rest of the essay can support.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-research-sampling-002",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Research methods and sampling",
    "prompt": "A researcher wants to estimate the views of all university students but surveys only members of one debating society. What is the main concern?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The sample may not represent the wider student population."
      },
      {
        "key": "B",
        "text": "The survey necessarily contains too many questions."
      },
      {
        "key": "C",
        "text": "The results must be identical for every university."
      },
      {
        "key": "D",
        "text": "A survey cannot collect opinions."
      }
    ],
    "answer": "A",
    "explanation": "Members of one debating society may differ from other students in interests and experiences.\nA sample drawn only from that group may therefore give a biased estimate of the wider population.",
    "takeaway": "A useful sample should reflect the population the researcher wants to describe.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-analytical-selection-bias-002",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Evaluating evidence",
    "prompt": "A report finds that employees who attend a voluntary training course score higher on a skills test than employees who do not attend. What should an analyst check before concluding that the course caused the higher scores?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Whether the test used the same font for every participant"
      },
      {
        "key": "B",
        "text": "Whether the training room had enough chairs"
      },
      {
        "key": "C",
        "text": "Whether people who chose to attend already had different skill levels"
      },
      {
        "key": "D",
        "text": "Whether all employees have the same job title"
      }
    ],
    "answer": "A",
    "explanation": "People who volunteer for training may already be more experienced or motivated.\nThose pre-existing differences could help explain the score gap, so the comparison alone does not prove the course caused it.",
    "takeaway": "When participation is voluntary, consider self-selection before making causal claims.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-enzymes-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Enzyme action",
    "prompt": "What is the main effect of an enzyme on a chemical reaction?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It increases the reaction's activation energy."
      },
      {
        "key": "B",
        "text": "It lowers the activation energy required."
      },
      {
        "key": "C",
        "text": "It changes the final equilibrium position in every reaction."
      },
      {
        "key": "D",
        "text": "It is permanently used up as a reactant."
      }
    ],
    "answer": "A",
    "explanation": "Enzymes are biological catalysts that provide an alternative reaction pathway with lower activation energy.\nThey are not permanently consumed by the reaction and do not change the reaction's equilibrium position.",
    "takeaway": "Enzymes speed reactions by lowering activation energy.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-dna-pairing-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "DNA structure",
    "prompt": "Which pair of nitrogenous bases normally forms complementary pairs in DNA?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Adenine with thymine, and cytosine with guanine"
      },
      {
        "key": "B",
        "text": "Adenine with cytosine, and thymine with guanine"
      },
      {
        "key": "C",
        "text": "Adenine with guanine, and cytosine with thymine"
      },
      {
        "key": "D",
        "text": "All four bases pair equally with one another"
      }
    ],
    "answer": "A",
    "explanation": "In DNA, adenine pairs with thymine and cytosine pairs with guanine.\nThese complementary base pairs help maintain the structure and accurate copying of DNA.",
    "takeaway": "Remember the DNA base pairs: A–T and C–G.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-meiosis-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cell division",
    "prompt": "What is the usual result of meiosis in a diploid cell that completes the process?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Two diploid cells identical to the parent cell"
      },
      {
        "key": "B",
        "text": "One diploid cell with twice the DNA"
      },
      {
        "key": "C",
        "text": "Two haploid cells with identical chromosome sets"
      },
      {
        "key": "D",
        "text": "Four haploid cells"
      }
    ],
    "answer": "A",
    "explanation": "Meiosis consists of two successive cell divisions after one round of DNA replication.\nIt typically produces four haploid cells, each with half the original chromosome number.",
    "takeaway": "Meiosis reduces chromosome number and typically produces four haploid cells.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-chem-covalent-002",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical bonding",
    "prompt": "What happens when a covalent bond forms between two atoms?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "One atom always loses all its electrons."
      },
      {
        "key": "B",
        "text": "The atoms share one or more pairs of electrons."
      },
      {
        "key": "C",
        "text": "The nuclei merge into one nucleus."
      },
      {
        "key": "D",
        "text": "The atoms exchange neutrons."
      }
    ],
    "answer": "A",
    "explanation": "A covalent bond forms when atoms share one or more pairs of electrons.\nThe shared electrons are attracted to both nuclei and help hold the atoms together.",
    "takeaway": "Covalent bonding involves sharing electron pairs.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-chem-periodic-radius-002",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Periodic trends",
    "prompt": "Across a period from left to right in the periodic table, what is the general trend in atomic radius for main-group elements?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It generally increases."
      },
      {
        "key": "B",
        "text": "It stays exactly the same."
      },
      {
        "key": "C",
        "text": "It generally decreases."
      },
      {
        "key": "D",
        "text": "It first becomes zero."
      }
    ],
    "answer": "A",
    "explanation": "Across a period, nuclear charge increases while added electrons enter the same principal energy level.\nThe stronger effective attraction generally pulls the electron cloud closer to the nucleus, decreasing atomic radius.",
    "takeaway": "Atomic radius generally decreases across a period because effective nuclear attraction increases.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-chem-equilibrium-002",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical equilibrium",
    "prompt": "For a reversible reaction at equilibrium, what is the expected effect of adding more reactant at constant temperature?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The equilibrium shifts in the direction that uses up some of the added reactant."
      },
      {
        "key": "B",
        "text": "The reaction stops permanently."
      },
      {
        "key": "C",
        "text": "The equilibrium constant must become zero."
      },
      {
        "key": "D",
        "text": "The equilibrium always shifts towards the reactants."
      }
    ],
    "answer": "A",
    "explanation": "By Le Chatelier's principle, a system responds to a concentration change in a way that opposes that change.\nAdding reactant generally shifts the equilibrium towards products, where some of the added reactant is consumed.",
    "takeaway": "Adding a reactant generally shifts equilibrium towards the products.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-phy-parallel-resistors-002",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electric circuits",
    "prompt": "Two resistors of 2 Ω and 6 Ω are connected in parallel. What is their equivalent resistance?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1 Ω"
      },
      {
        "key": "B",
        "text": "2 Ω"
      },
      {
        "key": "C",
        "text": "3 Ω"
      },
      {
        "key": "D",
        "text": "1.5 Ω"
      }
    ],
    "answer": "A",
    "explanation": "For two resistors in parallel, 1/R = 1/2 + 1/6 = 4/6 = 2/3.\nTherefore R = 3/2 = 1.5 Ω.",
    "takeaway": "For parallel resistors, add reciprocals; the equivalent resistance is lower than the smallest branch resistance.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-phy-wave-speed-002",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Wave properties",
    "prompt": "A wave has frequency 5 Hz and wavelength 2 m. What is its speed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2.5 m/s"
      },
      {
        "key": "B",
        "text": "10 m/s"
      },
      {
        "key": "C",
        "text": "7 m/s"
      },
      {
        "key": "D",
        "text": "15 m/s"
      }
    ],
    "answer": "A",
    "explanation": "Wave speed is v = fλ.\nSubstituting gives v = 5 × 2 = 10 m/s.",
    "takeaway": "Wave speed equals frequency multiplied by wavelength.",
    "sourceKind": "original-sample"
  }
,

  {
    "id": "lcat-verbal-vocab-003",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "prompt": "The editor asked the writer to make the summary concise while preserving the main argument. What does “concise” mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Highly technical"
      },
      {
        "key": "B",
        "text": "Brief but clear"
      },
      {
        "key": "C",
        "text": "Emotionally persuasive"
      },
      {
        "key": "D",
        "text": "Unrelated to the source"
      }
    ],
    "answer": "B",
    "explanation": "A concise summary expresses important ideas in relatively few words.\nIt remains clear and complete enough to preserve the original meaning.",
    "takeaway": "Concise means brief and clear, without unnecessary detail.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-verbal-inference-003",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Drawing supported inferences",
    "prompt": "A campus survey found that students who used the quiet study room most often also reported fewer interruptions. Which statement is a reasonable inference?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Every student prefers to study in silence."
      },
      {
        "key": "B",
        "text": "The room guarantees higher examination scores."
      },
      {
        "key": "C",
        "text": "Students using the room may experience a more focused study environment."
      },
      {
        "key": "D",
        "text": "The survey proves interruptions are impossible elsewhere."
      }
    ],
    "answer": "C",
    "explanation": "The survey links frequent use of the room with fewer reported interruptions.\nIt supports a cautious inference about the study environment, but it does not prove universal preferences or improved scores.",
    "takeaway": "A sound inference stays close to the evidence and avoids absolute claims.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-english-agreement-003",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "prompt": "Choose the correct verb: “Neither the applicants nor the supervisor ___ available for the meeting.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "are"
      },
      {
        "key": "B",
        "text": "is"
      },
      {
        "key": "C",
        "text": "have been"
      },
      {
        "key": "D",
        "text": "were"
      }
    ],
    "answer": "B",
    "explanation": "With “neither…nor”, the verb commonly agrees with the nearer subject.\nThe nearer subject is “supervisor”, which is singular, so “is” is correct.",
    "takeaway": "With neither…nor, check the subject nearest to the verb.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-ratio-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Ratios",
    "prompt": "A club has 3 first-year members for every 5 second-year members. If there are 64 members in total, how many are first-year members?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "32"
      },
      {
        "key": "C",
        "text": "36"
      },
      {
        "key": "D",
        "text": "40"
      }
    ],
    "answer": "A",
    "explanation": "The ratio has 3 + 5 = 8 equal parts.\nEach part represents 64 ÷ 8 = 8 members, so first-year members total 3 × 8 = 24.",
    "takeaway": "Add the ratio parts first, then find the value of one part.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-percent-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Percentages",
    "prompt": "A college has 800 applicants for a programme. If 15% are shortlisted, how many applicants are shortlisted?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "80"
      },
      {
        "key": "B",
        "text": "100"
      },
      {
        "key": "C",
        "text": "120"
      },
      {
        "key": "D",
        "text": "150"
      }
    ],
    "answer": "C",
    "explanation": "Convert 15% to 0.15 and multiply by 800.\n0.15 × 800 = 120 applicants.",
    "takeaway": "To find a percentage of a quantity, convert the percentage to a decimal and multiply.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-sequence-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Number patterns",
    "prompt": "What is the next number in the sequence 2, 6, 12, 20, 30, …?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "36"
      },
      {
        "key": "B",
        "text": "38"
      },
      {
        "key": "C",
        "text": "40"
      },
      {
        "key": "D",
        "text": "42"
      }
    ],
    "answer": "D",
    "explanation": "The differences are 4, 6, 8 and 10.\nThe next difference is 12, giving 30 + 12 = 42.",
    "takeaway": "Compare consecutive differences to identify a changing pattern.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-logic-deduction-003",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Logical deduction",
    "prompt": "Every student volunteer in a programme completes an orientation. Mariam is a student volunteer in that programme. What must be true?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Mariam leads the programme."
      },
      {
        "key": "B",
        "text": "Mariam has completed the orientation."
      },
      {
        "key": "C",
        "text": "Mariam is the only volunteer."
      },
      {
        "key": "D",
        "text": "Mariam designed the orientation."
      }
    ],
    "answer": "B",
    "explanation": "The general rule applies to every student volunteer in the programme.\nSince Mariam is one of those volunteers, she must have completed the orientation.",
    "takeaway": "Apply a universal rule to each case that satisfies its condition.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-math-geometry-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Area and geometry",
    "prompt": "A rectangular noticeboard is 1.8 m long and 0.7 m wide. What is its area?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1.26 m²"
      },
      {
        "key": "B",
        "text": "2.5 m²"
      },
      {
        "key": "C",
        "text": "3.6 m²"
      },
      {
        "key": "D",
        "text": "5.0 m²"
      }
    ],
    "answer": "A",
    "explanation": "The area of a rectangle is length multiplied by width.\n1.8 × 0.7 = 1.26 square metres.",
    "takeaway": "Area of a rectangle = length × width, with squared units.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-quadratic-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Quadratic equations",
    "prompt": "The equation x² − 5x + 6 = 0 has two roots. What is the product of the roots?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−6"
      },
      {
        "key": "B",
        "text": "−5"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "answer": "D",
    "explanation": "For ax² + bx + c = 0, the product of the roots is c/a.\nHere a = 1 and c = 6, so the product is 6.",
    "takeaway": "For a quadratic, the product of the roots is the constant term divided by the coefficient of x².",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-logarithms-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Logarithms",
    "prompt": "What is log₂ 32?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "answer": "B",
    "explanation": "A logarithm asks which power gives the stated number.\nSince 2⁵ = 32, log₂ 32 = 5.",
    "takeaway": "logᵦ a = x means bˣ = a.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-phy-vectors-003",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Vectors",
    "prompt": "Two perpendicular forces of 3 N and 4 N act on an object. What is the magnitude of their resultant?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1 N"
      },
      {
        "key": "B",
        "text": "5 N"
      },
      {
        "key": "C",
        "text": "7 N"
      },
      {
        "key": "D",
        "text": "12 N"
      }
    ],
    "answer": "B",
    "explanation": "For perpendicular vectors, use the Pythagorean theorem.\nR = √(3² + 4²) = √25 = 5 N.",
    "takeaway": "The magnitude of the resultant of perpendicular vectors follows the Pythagorean theorem.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-phy-ohms-law-003",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Electric circuits",
    "prompt": "A 12 V battery is connected across a 4 Ω resistor. What current flows through the resistor?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 A"
      },
      {
        "key": "B",
        "text": "3 A"
      },
      {
        "key": "C",
        "text": "4 A"
      },
      {
        "key": "D",
        "text": "48 A"
      }
    ],
    "answer": "B",
    "explanation": "Ohm’s law gives I = V/R.\nI = 12 ÷ 4 = 3 amperes.",
    "takeaway": "Current equals voltage divided by resistance for an ohmic conductor.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-chem-oxidation-003",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Oxidation numbers",
    "prompt": "What is the oxidation number of oxygen in most ordinary compounds?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−2"
      },
      {
        "key": "B",
        "text": "−1"
      },
      {
        "key": "C",
        "text": "+1"
      },
      {
        "key": "D",
        "text": "+2"
      }
    ],
    "answer": "A",
    "explanation": "Oxygen commonly has an oxidation number of −2 in compounds.\nThere are exceptions, such as peroxides and compounds with fluorine, but none is specified here.",
    "takeaway": "Oxygen is usually −2; remember the peroxide and fluorine exceptions.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-chem-gas-laws-003",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Gas laws",
    "prompt": "At constant temperature and amount of gas, a gas occupies 4 L at 2 atm. What volume will it occupy at 1 atm?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 L"
      },
      {
        "key": "B",
        "text": "4 L"
      },
      {
        "key": "C",
        "text": "8 L"
      },
      {
        "key": "D",
        "text": "16 L"
      }
    ],
    "answer": "C",
    "explanation": "Boyle’s law states P₁V₁ = P₂V₂ at constant temperature.\n2 × 4 = 1 × V₂, so V₂ = 8 L.",
    "takeaway": "At constant temperature, pressure and volume are inversely proportional.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-cs-binary-003",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Number systems",
    "prompt": "What is the decimal value of the binary number 1010₂?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "9"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "answer": "C",
    "explanation": "The binary digits represent 1×8 + 0×4 + 1×2 + 0×1.\nThe total is 10 in decimal.",
    "takeaway": "Convert binary to decimal by summing each set bit multiplied by its power of two.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-math-matrices-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Determinants",
    "prompt": "What is the determinant of the matrix [[2, 1], [3, 4]]?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "11"
      },
      {
        "key": "D",
        "text": "14"
      }
    ],
    "answer": "A",
    "explanation": "For a 2×2 matrix [[a,b],[c,d]], the determinant is ad − bc.\nHere it is 2×4 − 1×3 = 5.",
    "takeaway": "A 2×2 determinant is the product of the main diagonal minus the product of the other diagonal.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-constitution-term-003",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Constitutional structure",
    "prompt": "Under Pakistan’s 1973 Constitution, what is the ordinary term of the National Assembly unless it is dissolved sooner?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Three years"
      },
      {
        "key": "B",
        "text": "Four years"
      },
      {
        "key": "C",
        "text": "Five years"
      },
      {
        "key": "D",
        "text": "Six years"
      }
    ],
    "answer": "C",
    "explanation": "Article 52 provides that the National Assembly continues for five years from its first meeting unless sooner dissolved.\nThe question asks for the ordinary constitutional term, not the duration of a particular assembly.",
    "takeaway": "The ordinary term of Pakistan’s National Assembly is five years, subject to earlier dissolution.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-economics-real-gdp-003",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Macroeconomic indicators",
    "prompt": "What does real GDP measure that nominal GDP does not directly adjust for?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Changes in the general price level"
      },
      {
        "key": "B",
        "text": "The number of provinces"
      },
      {
        "key": "C",
        "text": "The exchange rate only"
      },
      {
        "key": "D",
        "text": "The size of the labour force"
      }
    ],
    "answer": "A",
    "explanation": "Real GDP adjusts the value of output for changes in prices, using a chosen base-year or chained-price method.\nNominal GDP measures output at current prices.",
    "takeaway": "Real GDP removes the effect of price changes to better compare output across time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-english-idiom-003",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Idioms and expressions",
    "prompt": "What does the expression “once in a blue moon” mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "At exactly midnight"
      },
      {
        "key": "B",
        "text": "Very rarely"
      },
      {
        "key": "C",
        "text": "Every month"
      },
      {
        "key": "D",
        "text": "Without planning"
      }
    ],
    "answer": "B",
    "explanation": "“Once in a blue moon” is an idiom meaning something happens very rarely.\nIt is not a literal reference to a regular monthly event.",
    "takeaway": "Interpret common idioms by their established figurative meaning.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-climate-adaptation-003",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Climate adaptation",
    "prompt": "Which is an example of climate adaptation rather than climate mitigation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Replacing coal power with solar electricity"
      },
      {
        "key": "B",
        "text": "Improving energy efficiency in factories"
      },
      {
        "key": "C",
        "text": "Restoring forests to increase carbon storage"
      },
      {
        "key": "D",
        "text": "Building flood-resilient drainage and raised infrastructure"
      }
    ],
    "answer": "D",
    "explanation": "Adaptation reduces vulnerability to climate impacts that are occurring or expected.\nFlood-resilient drainage and raised infrastructure help communities cope with flooding; the other options primarily reduce greenhouse-gas emissions or increase carbon storage.",
    "takeaway": "Adaptation manages climate risks; mitigation limits the causes of climate change.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-foreign-policy-soft-power-003",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International relations",
    "prompt": "In international relations, what is meant by “soft power”?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Influence gained through attraction, culture and values"
      },
      {
        "key": "B",
        "text": "The use of military force to compel action"
      },
      {
        "key": "C",
        "text": "A country’s total volume of exports"
      },
      {
        "key": "D",
        "text": "A system of domestic taxation"
      }
    ],
    "answer": "A",
    "explanation": "Soft power refers to the ability to shape preferences through attraction, culture, political values and perceived legitimacy.\nIt contrasts with coercive approaches such as military or economic pressure.",
    "takeaway": "Soft power influences through attraction rather than direct coercion.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-geography-indus-003",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Pakistan geography",
    "prompt": "Into which sea does the Indus River ultimately flow?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Arabian Sea"
      },
      {
        "key": "B",
        "text": "Black Sea"
      },
      {
        "key": "C",
        "text": "Mediterranean Sea"
      },
      {
        "key": "D",
        "text": "Bay of Bengal"
      }
    ],
    "answer": "A",
    "explanation": "The Indus flows south through Pakistan and reaches the Arabian Sea through its delta.\nIt is a major river system supporting agriculture and settlements in the country.",
    "takeaway": "The Indus River empties into the Arabian Sea.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-english-voice-003",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Active and passive voice",
    "prompt": "Choose the correct passive form of: “The committee approved the proposal.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The proposal approved the committee."
      },
      {
        "key": "B",
        "text": "The proposal was approved by the committee."
      },
      {
        "key": "C",
        "text": "The committee was approved by the proposal."
      },
      {
        "key": "D",
        "text": "The proposal has approve the committee."
      }
    ],
    "answer": "B",
    "explanation": "The object “the proposal” becomes the subject of the passive sentence.\nThe past simple passive uses “was” plus the past participle “approved”.",
    "takeaway": "Form the past simple passive with was/were + past participle.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-analytical-correlation-003",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Evaluating claims",
    "prompt": "A study finds that areas with more parks also report higher levels of physical activity. Which conclusion is most careful?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Parks are the only cause of physical activity."
      },
      {
        "key": "B",
        "text": "Every resident in those areas uses a park."
      },
      {
        "key": "C",
        "text": "The association is consistent with a possible link, but does not alone prove causation."
      },
      {
        "key": "D",
        "text": "The study proves parks have no effect."
      }
    ],
    "answer": "C",
    "explanation": "An observed association does not, by itself, establish that one factor causes the other.\nOther factors may explain part of the relationship, so the conclusion should remain cautious.",
    "takeaway": "Correlation alone does not prove causation.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-nephron-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Kidney function",
    "prompt": "In a nephron, where does ultrafiltration of blood normally begin?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Collecting duct"
      },
      {
        "key": "B",
        "text": "Glomerulus into Bowman’s capsule"
      },
      {
        "key": "C",
        "text": "Loop of Henle"
      },
      {
        "key": "D",
        "text": "Distal convoluted tubule"
      }
    ],
    "answer": "B",
    "explanation": "Blood pressure forces water and small dissolved substances from the glomerular capillaries into Bowman’s capsule.\nBlood cells and most large plasma proteins remain in the bloodstream.",
    "takeaway": "Ultrafiltration begins at the glomerulus and Bowman’s capsule.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-antibodies-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Immune response",
    "prompt": "Which cells differentiate into antibody-secreting plasma cells after activation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "B lymphocytes"
      },
      {
        "key": "B",
        "text": "Red blood cells"
      },
      {
        "key": "C",
        "text": "Platelets"
      },
      {
        "key": "D",
        "text": "Neutrophils"
      }
    ],
    "answer": "A",
    "explanation": "Activated B lymphocytes can differentiate into plasma cells.\nPlasma cells produce antibodies that bind to specific antigens.",
    "takeaway": "Plasma cells are differentiated B cells that secrete antibodies.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-transcription-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Gene expression",
    "prompt": "During transcription in a eukaryotic cell, which molecule is produced from a DNA template?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Amino acid"
      },
      {
        "key": "B",
        "text": "Triglyceride"
      },
      {
        "key": "C",
        "text": "RNA, such as messenger RNA"
      },
      {
        "key": "D",
        "text": "A new ribosome"
      }
    ],
    "answer": "C",
    "explanation": "RNA polymerase uses a DNA strand as a template to synthesise RNA.\nFor a protein-coding gene, the initial transcript is processed to form mature messenger RNA.",
    "takeaway": "Transcription copies genetic information from DNA into RNA.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-bio-photosynthesis-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Photosynthesis",
    "prompt": "In a plant cell, where do the light-dependent reactions of photosynthesis take place?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Mitochondrial matrix"
      },
      {
        "key": "B",
        "text": "Thylakoid membranes of chloroplasts"
      },
      {
        "key": "C",
        "text": "Cytoplasm"
      },
      {
        "key": "D",
        "text": "Nuclear envelope"
      }
    ],
    "answer": "B",
    "explanation": "Photosystems and the electron-transport components used in the light-dependent reactions are embedded in thylakoid membranes.\nThese reactions generate ATP and NADPH for carbon fixation.",
    "takeaway": "The light-dependent reactions occur on chloroplast thylakoid membranes.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-chem-ph-003",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Acids and bases",
    "prompt": "What is the pH of an ideal 0.1 mol dm⁻³ solution of a strong monoprotic acid at 25°C?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "13"
      }
    ],
    "answer": "B",
    "explanation": "A strong monoprotic acid dissociates essentially completely, so [H⁺] = 0.1 mol dm⁻³ = 10⁻¹.\npH = −log₁₀[H⁺] = 1.",
    "takeaway": "For a strong monoprotic acid, use its concentration as [H⁺] before calculating pH.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-chem-functional-group-003",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Organic chemistry",
    "prompt": "Which functional group is characteristic of alcohols?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−OH"
      },
      {
        "key": "B",
        "text": "−COOH"
      },
      {
        "key": "C",
        "text": "−CHO"
      },
      {
        "key": "D",
        "text": "−NH₂"
      }
    ],
    "answer": "A",
    "explanation": "Alcohols contain a hydroxyl group (−OH) attached to a carbon atom.\nThe other options represent carboxylic acid, aldehyde and amino groups.",
    "takeaway": "The hydroxyl (−OH) group identifies an alcohol.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-phy-newton-003",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Newton’s laws",
    "prompt": "A net force of 12 N acts on a 3 kg object. What is its acceleration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.25 m/s²"
      },
      {
        "key": "B",
        "text": "3 m/s²"
      },
      {
        "key": "C",
        "text": "4 m/s²"
      },
      {
        "key": "D",
        "text": "36 m/s²"
      }
    ],
    "answer": "C",
    "explanation": "Newton’s second law gives F = ma.\na = F/m = 12/3 = 4 m/s².",
    "takeaway": "Acceleration equals net force divided by mass.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-phy-lens-003",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Geometrical optics",
    "prompt": "An object is placed at twice the focal length of a converging lens. Where is the image formed, and what is its nature?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "At 2F on the opposite side; real, inverted and the same size"
      },
      {
        "key": "B",
        "text": "At F on the same side; virtual and enlarged"
      },
      {
        "key": "C",
        "text": "At infinity; virtual and upright"
      },
      {
        "key": "D",
        "text": "Between F and 2F; real and diminished"
      }
    ],
    "answer": "A",
    "explanation": "For a thin converging lens, an object at 2F forms an image at 2F on the opposite side.\nThe image is real, inverted and equal in size to the object.",
    "takeaway": "For an object at 2F, a converging lens forms an equal-sized real image at 2F.",
    "sourceKind": "original-sample"
  }
];

/** Retire reworded copies of the same underlying fact/check. Different-number calculation drills remain available. */
export const RETIRED_NEAR_DUPLICATE_IDS = new Set<string>([
  // LCAT: same ratio data and same single-draw probability task.
  "v11-lcat-001",
  "v11-lcat-009",
  // NET: exact-repeat power, binary, mole and quadratic-root checks.
  "v15-net-004",
  "v11-net-016",
  "net-new-014",
  "v11-net-003",
  // The later binary-value wording was previously surviving the exact-stem pass.
  "v13-net-009",
  // CSS MPT: repeated federalism, Constitution and Objectives Resolution facts.
  "v11-css-002",
  "v10-css-014",
  "v15-css-005",
  "css-new-008",
  // MDCAT: repeated antibody, neutralisation, xylem, oxidation,
  // electron-transport and nephron recall prompts.
  "v12-mdcat-007",
  "mdcat-more-009",
  "mdcat-next-011",
  "mdcat-new-008",
  "v13-mdcat-009",
  "mdcat-new-010",
  "mdcat-next-008",
  "mdcat-extra-005",
  // Keep the clearer nephron-ultrafiltration item and retire its exact copy.
  "mdcat-plus-002",
]);

const QUESTION_SOURCES: PrivateStudyQuestion[] = [
  ...BASE_SAMPLE_QUESTIONS,
  ...EXPANDED_SAMPLE_QUESTIONS,
  ...MORE_SAMPLE_QUESTIONS,
  ...ADDITIONAL_PRIVATE_QUESTIONS,
  ...FRESH_PRIVATE_QUESTIONS,
  ...NEXT_PRIVATE_QUESTIONS,
  ...V10_PRIVATE_QUESTIONS,
  ...V11_PRIVATE_QUESTIONS,
  ...V12_PRIVATE_QUESTIONS,
  ...V13_PRIVATE_QUESTIONS,
  ...V14_PRIVATE_QUESTIONS,
  ...V15_PRIVATE_QUESTIONS,
  ...V16_PRIVATE_QUESTIONS,
  ...V17_PRIVATE_QUESTIONS,
  ...V18_PRIVATE_QUESTIONS,
  ...V19_PRIVATE_QUESTIONS,
];

const seenQuestionIds = new Set<string>();
const seenQuestionStems = new Set<string>();
const UNIQUE_QUESTION_SOURCES: PrivateStudyQuestion[] = [];
for (const question of QUESTION_SOURCES) {
  const stem = normalizeQuestionStem(question.prompt);
  if (
    RETIRED_NEAR_DUPLICATE_IDS.has(question.id) ||
    !stem ||
    seenQuestionIds.has(question.id) ||
    seenQuestionStems.has(stem)
  ) continue;
  seenQuestionIds.add(question.id);
  seenQuestionStems.add(stem);
  UNIQUE_QUESTION_SOURCES.push({
    ...question,
    difficulty: question.difficulty ?? classifyPracticeDifficulty(question),
    sourceNote: question.sourceNote ?? "Original Arthic practice question; not taken from an official past paper.",
  });
}

/** De-duplicated public practice bank; answer keys remain server-only. */
export const SAMPLE_QUESTIONS: PrivateStudyQuestion[] = UNIQUE_QUESTION_SOURCES;
