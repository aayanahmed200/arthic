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
  /** Populated only when a question is sourced from an actual exam paper. */
  examYear?: number;
  examSession?: string;
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
    "sourceKind": "original-sample"
  }
];
