export interface StudyOption { key: string; text: string; }

export type StudyExamCode = "LCAT" | "NET" | "CSS" | "MDCAT";

export interface StudyQuestionPrompt {
  id: string;
  examCode: StudyExamCode;
  subjectCode: string;
  topic: string;
  prompt: string;
  instruction: string;
  options: StudyOption[];
  sourceKind: "original-sample" | "licensed" | "public-domain";
}

/** Original Arthic-written examples; none are official past-paper questions. */
export const SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
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
    "sourceKind": "original-sample"
  }
];
