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
  sourceKind: "original-sample";
}

/** Original Arthic sample bank with answer keys retained on the server. */
export const SAMPLE_QUESTIONS: PrivateStudyQuestion[] = [
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
];
