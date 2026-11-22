import type { StudyQuestionPrompt } from "./sample-questions";

/** 80 additional original questions, balanced across four exam tracks. Answers remain server-side. */
export const V12_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  {
    "id": "v12-lcat-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Ratios",
    "difficulty": "STANDARD",
    "prompt": "Two quantities are in the ratio 4:7. Their difference is 24. What is their total?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "72"
      },
      {
        "key": "B",
        "text": "80"
      },
      {
        "key": "C",
        "text": "88"
      },
      {
        "key": "D",
        "text": "96"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-002",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Discounts",
    "difficulty": "STANDARD",
    "prompt": "A jacket marked at Rs. 2,500 is sold at a 12% discount. What is its sale price?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 2,150"
      },
      {
        "key": "B",
        "text": "Rs. 2,200"
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
    "id": "v12-lcat-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Coordinate geometry",
    "difficulty": "STANDARD",
    "prompt": "What is the slope of the line passing through (2, 5) and (6, 13)?",
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
        "text": "4"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-004",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Arithmetic sequences",
    "difficulty": "STANDARD",
    "prompt": "An arithmetic sequence begins 7, 11, 15, 19, … What is its 12th term?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "47"
      },
      {
        "key": "B",
        "text": "49"
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
    "id": "v12-lcat-005",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Area",
    "difficulty": "STANDARD",
    "prompt": "A triangle has a base of 14 cm and a perpendicular height of 9 cm. What is its area?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "54 cm²"
      },
      {
        "key": "B",
        "text": "63 cm²"
      },
      {
        "key": "C",
        "text": "72 cm²"
      },
      {
        "key": "D",
        "text": "126 cm²"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-006",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Proportions",
    "difficulty": "STANDARD",
    "prompt": "A recipe uses 3 cups of flour for 8 servings. How much flour is needed for 20 servings at the same rate?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "6 cups"
      },
      {
        "key": "B",
        "text": "7 cups"
      },
      {
        "key": "C",
        "text": "7.5 cups"
      },
      {
        "key": "D",
        "text": "8 cups"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-007",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Probability",
    "difficulty": "STANDARD",
    "prompt": "A fair six-sided die is rolled once. What is the probability of getting a number greater than 4?",
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
    "id": "v12-lcat-008",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Parallel structure",
    "difficulty": "EASY",
    "prompt": "Choose the sentence with correct parallel structure.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The committee plans reviewing the data, to revise the proposal, and publication of the findings."
      },
      {
        "key": "B",
        "text": "The committee plans to review the data, revise the proposal, and publish the findings."
      },
      {
        "key": "C",
        "text": "The committee plans to review the data, revising the proposal, and the findings are published."
      },
      {
        "key": "D",
        "text": "The committee plans review of the data, revising the proposal, and to publish the findings."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-009",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "difficulty": "EASY",
    "prompt": "In the sentence “The instructions were ambiguous, so several students interpreted them differently,” what does “ambiguous” mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Extremely detailed"
      },
      {
        "key": "B",
        "text": "Open to more than one interpretation"
      },
      {
        "key": "C",
        "text": "Written in a foreign language"
      },
      {
        "key": "D",
        "text": "Deliberately incorrect"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-010",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Reading comprehension",
    "difficulty": "STANDARD",
    "prompt": "A town adds shaded walking paths and benches near busy bus stops. Which purpose is most directly supported by these changes?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Making walking and waiting more comfortable"
      },
      {
        "key": "B",
        "text": "Increasing the number of private cars"
      },
      {
        "key": "C",
        "text": "Reducing the frequency of bus services"
      },
      {
        "key": "D",
        "text": "Moving all shops away from public roads"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-011",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Modifiers",
    "difficulty": "EASY",
    "prompt": "Choose the sentence with a correctly placed introductory phrase.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "After reviewing the draft, Sara sent her comments to the editor."
      },
      {
        "key": "B",
        "text": "After reviewing the draft, the editor received Sara's comments."
      },
      {
        "key": "C",
        "text": "After reviewing the draft, the comments were sent by Sara."
      },
      {
        "key": "D",
        "text": "After reviewing the draft, the editor's inbox was filled by Sara."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-012",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Main idea",
    "difficulty": "STANDARD",
    "prompt": "A school replaces one annual science fair with short monthly demonstrations. Students receive feedback after each demonstration. What is the main advantage of this change?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It removes the need for science lessons."
      },
      {
        "key": "B",
        "text": "It allows students to improve through regular feedback."
      },
      {
        "key": "C",
        "text": "It ensures every student studies the same topic."
      },
      {
        "key": "D",
        "text": "It makes assessment unnecessary."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-013",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Verb tenses",
    "difficulty": "EASY",
    "prompt": "Choose the correct completion: “By the time the lecture began, the students ___ for twenty minutes.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "wait"
      },
      {
        "key": "B",
        "text": "have waited"
      },
      {
        "key": "C",
        "text": "had been waiting"
      },
      {
        "key": "D",
        "text": "will wait"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-014",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Synonyms",
    "difficulty": "EASY",
    "prompt": "Which word is closest in meaning to “concise”?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Brief"
      },
      {
        "key": "B",
        "text": "Uncertain"
      },
      {
        "key": "C",
        "text": "Complicated"
      },
      {
        "key": "D",
        "text": "Repetitive"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-015",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Deductive reasoning",
    "difficulty": "STANDARD",
    "prompt": "Every architect at a firm has completed a design course. Mina is an architect at that firm. Which statement must be true?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Mina teaches the design course."
      },
      {
        "key": "B",
        "text": "Mina has completed a design course."
      },
      {
        "key": "C",
        "text": "Every person who completed the course is an architect."
      },
      {
        "key": "D",
        "text": "Mina has designed every building at the firm."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-016",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Ordering",
    "difficulty": "STANDARD",
    "prompt": "Four tasks must follow these rules: D occurs before A, A occurs before B, and C occurs after B. Which order satisfies all the rules?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A, D, B, C"
      },
      {
        "key": "B",
        "text": "D, B, A, C"
      },
      {
        "key": "C",
        "text": "D, A, B, C"
      },
      {
        "key": "D",
        "text": "C, D, A, B"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-017",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Conditional reasoning",
    "difficulty": "STANDARD",
    "prompt": "A rule states: “If an account is verified, it becomes active.” An account is not active. What follows logically?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The account is verified."
      },
      {
        "key": "B",
        "text": "The account is not verified."
      },
      {
        "key": "C",
        "text": "The account must be deleted."
      },
      {
        "key": "D",
        "text": "All inactive accounts are new."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-018",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Consecutive integers",
    "difficulty": "STANDARD",
    "prompt": "The sum of three consecutive integers is 72. What is the middle integer?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "22"
      },
      {
        "key": "B",
        "text": "23"
      },
      {
        "key": "C",
        "text": "24"
      },
      {
        "key": "D",
        "text": "25"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-019",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Analogies",
    "difficulty": "STANDARD",
    "prompt": "Complete the analogy: “thermometer : temperature :: barometer : ___”.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Wind"
      },
      {
        "key": "B",
        "text": "Pressure"
      },
      {
        "key": "C",
        "text": "Rainfall"
      },
      {
        "key": "D",
        "text": "Distance"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-lcat-020",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Unit rates",
    "difficulty": "STANDARD",
    "prompt": "A car travels 180 km in 3 hours at a constant speed. How far will it travel in 2.5 hours at the same speed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "120 km"
      },
      {
        "key": "B",
        "text": "135 km"
      },
      {
        "key": "C",
        "text": "150 km"
      },
      {
        "key": "D",
        "text": "160 km"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Definite integration",
    "difficulty": "STANDARD",
    "prompt": "Evaluate the definite integral ∫₀² 3x² dx.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Matrices",
    "difficulty": "EASY",
    "prompt": "What is the determinant of the matrix [[3, 2], [1, 4]]?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "14"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Logarithms",
    "difficulty": "EASY",
    "prompt": "What is the value of log₂ 32?",
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
    "id": "v12-net-004",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Probability",
    "difficulty": "CHALLENGING",
    "prompt": "A box contains 5 red and 3 blue balls. Two balls are selected without replacement. What is the probability that both are red?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "5/14"
      },
      {
        "key": "B",
        "text": "5/16"
      },
      {
        "key": "C",
        "text": "2/7"
      },
      {
        "key": "D",
        "text": "1/2"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-005",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Vector operations",
    "difficulty": "STANDARD",
    "prompt": "What is the dot product of vectors (2, 1) and (3, −2)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "4"
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
    "id": "v12-net-006",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Capacitance",
    "difficulty": "STANDARD",
    "prompt": "A 4 μF capacitor is connected to a 12 V supply. What charge is stored on it?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "16 μC"
      },
      {
        "key": "B",
        "text": "24 μC"
      },
      {
        "key": "C",
        "text": "48 μC"
      },
      {
        "key": "D",
        "text": "96 μC"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-007",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Work and energy",
    "difficulty": "STANDARD",
    "prompt": "A constant force of 15 N moves an object 4 m in the direction of the force. How much work is done?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "19 J"
      },
      {
        "key": "B",
        "text": "30 J"
      },
      {
        "key": "C",
        "text": "45 J"
      },
      {
        "key": "D",
        "text": "60 J"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-008",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Momentum",
    "difficulty": "STANDARD",
    "prompt": "A ball of mass 0.15 kg travels at 20 m/s. What is its momentum?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.75 kg m/s"
      },
      {
        "key": "B",
        "text": "3 kg m/s"
      },
      {
        "key": "C",
        "text": "13.3 kg m/s"
      },
      {
        "key": "D",
        "text": "30 kg m/s"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-009",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Pressure",
    "difficulty": "STANDARD",
    "prompt": "A force of 800 N acts uniformly over an area of 0.04 m². What pressure is produced?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2,000 Pa"
      },
      {
        "key": "B",
        "text": "8,000 Pa"
      },
      {
        "key": "C",
        "text": "20,000 Pa"
      },
      {
        "key": "D",
        "text": "32,000 Pa"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-010",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Simple harmonic motion",
    "difficulty": "STANDARD",
    "prompt": "An oscillator completes 2 cycles per second. What is its period?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.25 s"
      },
      {
        "key": "B",
        "text": "0.5 s"
      },
      {
        "key": "C",
        "text": "2 s"
      },
      {
        "key": "D",
        "text": "4 s"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-011",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Empirical formulae",
    "difficulty": "STANDARD",
    "prompt": "A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is its empirical formula?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "CHO"
      },
      {
        "key": "B",
        "text": "CH₂O"
      },
      {
        "key": "C",
        "text": "C₂H₄O₂"
      },
      {
        "key": "D",
        "text": "CH₃O"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-012",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Catalysts",
    "difficulty": "EASY",
    "prompt": "What effect does a catalyst have on a reversible reaction that is already at equilibrium?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It shifts equilibrium toward products."
      },
      {
        "key": "B",
        "text": "It shifts equilibrium toward reactants."
      },
      {
        "key": "C",
        "text": "It increases the equilibrium constant."
      },
      {
        "key": "D",
        "text": "It does not change the equilibrium position, but helps equilibrium be reached faster."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-013",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Molecular polarity",
    "difficulty": "STANDARD",
    "prompt": "Why is a water molecule polar?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Its O–H bonds are non-polar."
      },
      {
        "key": "B",
        "text": "Its bent shape means the polar O–H bond dipoles do not cancel."
      },
      {
        "key": "C",
        "text": "It contains an ionic bond."
      },
      {
        "key": "D",
        "text": "Its hydrogen atoms carry full negative charges."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-014",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Electrolysis",
    "difficulty": "STANDARD",
    "prompt": "During electrolysis of molten sodium chloride, which product forms at the cathode?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Chlorine gas"
      },
      {
        "key": "B",
        "text": "Oxygen gas"
      },
      {
        "key": "C",
        "text": "Sodium metal"
      },
      {
        "key": "D",
        "text": "Hydrogen gas"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-015",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Organic chemistry",
    "difficulty": "EASY",
    "prompt": "Which observation is commonly used to test for a carbon–carbon double bond in an alkene?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Bromine water is decolourised."
      },
      {
        "key": "B",
        "text": "Limewater turns milky."
      },
      {
        "key": "C",
        "text": "A glowing splint relights."
      },
      {
        "key": "D",
        "text": "Universal indicator turns blue."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-016",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Algorithms",
    "difficulty": "EASY",
    "prompt": "What is the time complexity of binary search on a sorted array of n elements?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "O(1)"
      },
      {
        "key": "B",
        "text": "O(log n)"
      },
      {
        "key": "C",
        "text": "O(n)"
      },
      {
        "key": "D",
        "text": "O(n²)"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-017",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Python ranges",
    "difficulty": "EASY",
    "prompt": "What sequence of values is produced by range(2, 8, 2) in Python?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2, 4, 6"
      },
      {
        "key": "B",
        "text": "2, 4, 6, 8"
      },
      {
        "key": "C",
        "text": "2, 3, 4, 5, 6, 7"
      },
      {
        "key": "D",
        "text": "4, 6, 8"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-018",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Databases",
    "difficulty": "EASY",
    "prompt": "What is the main purpose of a primary key in a relational database table?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To allow duplicate records"
      },
      {
        "key": "B",
        "text": "To uniquely identify each row"
      },
      {
        "key": "C",
        "text": "To encrypt every field"
      },
      {
        "key": "D",
        "text": "To sort records alphabetically"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-019",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Data structures",
    "difficulty": "EASY",
    "prompt": "Which data structure processes items in the order they were added?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Stack"
      },
      {
        "key": "B",
        "text": "Queue"
      },
      {
        "key": "C",
        "text": "Binary search tree"
      },
      {
        "key": "D",
        "text": "Hash table"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-net-020",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Boolean logic",
    "difficulty": "STANDARD",
    "prompt": "If x = 7, what is the value of the Python expression not (x > 5)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "True"
      },
      {
        "key": "B",
        "text": "False"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "None"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-001",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Constitutionalism",
    "difficulty": "EASY",
    "prompt": "What is the central idea of constitutional supremacy?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Government decisions are above the law."
      },
      {
        "key": "B",
        "text": "The constitution is the highest legal authority in the state."
      },
      {
        "key": "C",
        "text": "Only courts may propose public policy."
      },
      {
        "key": "D",
        "text": "Political parties may suspend laws at any time."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-002",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Rule of law",
    "difficulty": "EASY",
    "prompt": "Which situation best reflects the rule of law?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Officials are exempt from ordinary legal procedures."
      },
      {
        "key": "B",
        "text": "Laws are applied consistently, and public officials are legally accountable."
      },
      {
        "key": "C",
        "text": "Courts decide cases according to personal preference."
      },
      {
        "key": "D",
        "text": "Different legal standards apply to people with equal status."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-003",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Judicial independence",
    "difficulty": "STANDARD",
    "prompt": "Why is judicial independence important in a constitutional democracy?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It allows judges to make laws without limits."
      },
      {
        "key": "B",
        "text": "It helps courts decide cases without improper pressure."
      },
      {
        "key": "C",
        "text": "It places courts above the constitution."
      },
      {
        "key": "D",
        "text": "It removes the need for legal procedures."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-004",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Constitutional amendments",
    "difficulty": "STANDARD",
    "prompt": "Under Article 239 of Pakistan's 1973 Constitution, what parliamentary threshold is generally required to pass a constitutional amendment bill in each House?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A simple majority of members present and voting"
      },
      {
        "key": "B",
        "text": "Two-thirds of the total membership"
      },
      {
        "key": "C",
        "text": "Three-quarters of the members present"
      },
      {
        "key": "D",
        "text": "Unanimous approval"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-005",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Fiscal policy",
    "difficulty": "EASY",
    "prompt": "Which pair of instruments is most directly associated with fiscal policy?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Policy interest rates and reserve requirements"
      },
      {
        "key": "B",
        "text": "Government taxation and public expenditure"
      },
      {
        "key": "C",
        "text": "Exchange rates and private saving"
      },
      {
        "key": "D",
        "text": "Commercial bank lending and share prices"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-006",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Monetary policy",
    "difficulty": "EASY",
    "prompt": "Which action is an example of monetary policy?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A central bank changes its policy interest rate."
      },
      {
        "key": "B",
        "text": "A parliament approves a road-building budget."
      },
      {
        "key": "C",
        "text": "A ministry changes school textbooks."
      },
      {
        "key": "D",
        "text": "A municipality collects parking fees."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-007",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Balance of payments",
    "difficulty": "EASY",
    "prompt": "Which item is normally recorded in the current account of a country's balance of payments?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Exports of goods and services"
      },
      {
        "key": "B",
        "text": "A purchase of foreign government bonds"
      },
      {
        "key": "C",
        "text": "A central bank's change in reserve holdings"
      },
      {
        "key": "D",
        "text": "A foreign company's acquisition of a local factory"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-008",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Externalities",
    "difficulty": "STANDARD",
    "prompt": "A factory's emissions impose health costs on nearby residents that are not reflected in the product's market price. This is an example of:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A positive externality"
      },
      {
        "key": "B",
        "text": "A negative externality"
      },
      {
        "key": "C",
        "text": "A public good"
      },
      {
        "key": "D",
        "text": "A natural monopoly"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-009",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Human development",
    "difficulty": "EASY",
    "prompt": "Which set of dimensions is central to the Human Development Index (HDI)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Health, education and standard of living"
      },
      {
        "key": "B",
        "text": "Military strength, exports and population size"
      },
      {
        "key": "C",
        "text": "Land area, rainfall and industrial output"
      },
      {
        "key": "D",
        "text": "Tax revenue, debt and inflation"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-010",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Local government",
    "difficulty": "EASY",
    "prompt": "What is one important purpose of local government?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To replace the national constitution"
      },
      {
        "key": "B",
        "text": "To bring certain public services and decisions closer to communities"
      },
      {
        "key": "C",
        "text": "To conduct foreign relations independently"
      },
      {
        "key": "D",
        "text": "To control all national monetary policy"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-011",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Climate policy",
    "difficulty": "EASY",
    "prompt": "Which measure is an example of climate-change mitigation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Raising buildings above expected flood levels"
      },
      {
        "key": "B",
        "text": "Expanding early-warning systems for heatwaves"
      },
      {
        "key": "C",
        "text": "Replacing coal-fired electricity with low-carbon energy"
      },
      {
        "key": "D",
        "text": "Relocating homes away from eroding coastlines"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-012",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Desertification",
    "difficulty": "EASY",
    "prompt": "Which factor can contribute to land degradation and desertification in dry areas?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Unsustainable overgrazing"
      },
      {
        "key": "B",
        "text": "Careful soil conservation"
      },
      {
        "key": "C",
        "text": "Restoring native vegetation"
      },
      {
        "key": "D",
        "text": "Efficient rainwater harvesting"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-013",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Watershed management",
    "difficulty": "EASY",
    "prompt": "What is the main purpose of managing a watershed as a connected system?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To consider how land use affects water flows and quality across the drainage area"
      },
      {
        "key": "B",
        "text": "To prevent all rainfall from entering rivers"
      },
      {
        "key": "C",
        "text": "To direct every river into a single reservoir"
      },
      {
        "key": "D",
        "text": "To separate upstream communities from downstream planning"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-014",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "United Nations",
    "difficulty": "STANDARD",
    "prompt": "How does voting in the UN General Assembly generally work?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Each permanent Security Council member has two votes."
      },
      {
        "key": "B",
        "text": "Each member state has one vote."
      },
      {
        "key": "C",
        "text": "Votes are weighted by a country's population."
      },
      {
        "key": "D",
        "text": "Only states that contribute troops may vote."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-015",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International Court of Justice",
    "difficulty": "EASY",
    "prompt": "What is the primary contentious jurisdiction of the International Court of Justice?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Trying individuals for international crimes"
      },
      {
        "key": "B",
        "text": "Settling legal disputes between states that have accepted its jurisdiction"
      },
      {
        "key": "C",
        "text": "Issuing binding domestic legislation"
      },
      {
        "key": "D",
        "text": "Supervising elections in all UN member states"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-016",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "Security Council",
    "difficulty": "EASY",
    "prompt": "What is the effect of a negative vote by a permanent member on a substantive UN Security Council draft resolution?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It automatically becomes a General Assembly resolution."
      },
      {
        "key": "B",
        "text": "It is vetoed and cannot be adopted by the Council."
      },
      {
        "key": "C",
        "text": "It is adopted if nine other members support it."
      },
      {
        "key": "D",
        "text": "It is referred automatically to the ICJ."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-017",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "Regional organisations",
    "difficulty": "EASY",
    "prompt": "Which objective is associated with the Association of Southeast Asian Nations (ASEAN)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Promoting regional cooperation among Southeast Asian states"
      },
      {
        "key": "B",
        "text": "Creating a single global military command"
      },
      {
        "key": "C",
        "text": "Replacing the United Nations"
      },
      {
        "key": "D",
        "text": "Administering international criminal courts"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-018",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "Treaty law",
    "difficulty": "EASY",
    "prompt": "What does ratification of a treaty generally signify?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A state has formally expressed its consent to be bound under the relevant legal process."
      },
      {
        "key": "B",
        "text": "A treaty has become a domestic constitution in every state."
      },
      {
        "key": "C",
        "text": "All non-signatory states are automatically bound."
      },
      {
        "key": "D",
        "text": "The treaty has been approved by a private company."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-019",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Sustainable development",
    "difficulty": "STANDARD",
    "prompt": "How many Sustainable Development Goals (SDGs) were adopted by UN member states in 2015?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "17"
      },
      {
        "key": "D",
        "text": "20"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-css-020",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Public finance",
    "difficulty": "STANDARD",
    "prompt": "A government runs a budget deficit when:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Its revenue exceeds its expenditure."
      },
      {
        "key": "B",
        "text": "Its expenditure exceeds its revenue over the budget period."
      },
      {
        "key": "C",
        "text": "Its imports equal its exports."
      },
      {
        "key": "D",
        "text": "Its public debt is zero."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Protein synthesis",
    "difficulty": "EASY",
    "prompt": "Where does translation of an mRNA sequence into a polypeptide take place?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Golgi apparatus"
      },
      {
        "key": "B",
        "text": "Ribosome"
      },
      {
        "key": "C",
        "text": "Lysosome"
      },
      {
        "key": "D",
        "text": "Nucleus"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Photosynthesis",
    "difficulty": "EASY",
    "prompt": "During the light-dependent reactions of photosynthesis, what is the role of water splitting at photosystem II?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It releases oxygen, electrons and protons."
      },
      {
        "key": "B",
        "text": "It directly fixes carbon dioxide into glucose."
      },
      {
        "key": "C",
        "text": "It converts glucose into starch."
      },
      {
        "key": "D",
        "text": "It absorbs carbon dioxide from the atmosphere."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Pancreatic hormones",
    "difficulty": "EASY",
    "prompt": "Which pancreatic cells secrete glucagon?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Alpha cells"
      },
      {
        "key": "B",
        "text": "Beta cells"
      },
      {
        "key": "C",
        "text": "Delta cells"
      },
      {
        "key": "D",
        "text": "Acinar cells"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-004",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Inheritance",
    "difficulty": "STANDARD",
    "prompt": "In incomplete dominance, what is commonly observed in a heterozygous individual?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A phenotype intermediate between the two homozygotes"
      },
      {
        "key": "B",
        "text": "Only the dominant homozygote's phenotype"
      },
      {
        "key": "C",
        "text": "A phenotype unrelated to either allele"
      },
      {
        "key": "D",
        "text": "The loss of one chromosome"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-005",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Genetics",
    "difficulty": "STANDARD",
    "prompt": "In a cross between Aa and aa, assuming complete dominance, what proportion of offspring is expected to be heterozygous Aa?",
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
        "text": "100%"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-006",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Nervous system",
    "difficulty": "EASY",
    "prompt": "What is the main effect of myelin on conduction along a myelinated axon?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It makes action potentials travel more slowly."
      },
      {
        "key": "B",
        "text": "It enables faster saltatory conduction between nodes of Ranvier."
      },
      {
        "key": "C",
        "text": "It prevents all ion movement across the axon membrane."
      },
      {
        "key": "D",
        "text": "It converts chemical signals into hormones."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-007",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Immune system",
    "difficulty": "EASY",
    "prompt": "Which cells differentiate into plasma cells that secrete antibodies?",
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
    "id": "v12-mdcat-008",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Plant transport",
    "difficulty": "EASY",
    "prompt": "Which plant tissue transports water and dissolved mineral ions from roots toward the leaves?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Phloem"
      },
      {
        "key": "B",
        "text": "Xylem"
      },
      {
        "key": "C",
        "text": "Epidermis"
      },
      {
        "key": "D",
        "text": "Cortex"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-009",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Buffer solutions",
    "difficulty": "EASY",
    "prompt": "What is the main function of a buffer solution?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To keep pH relatively stable when small amounts of acid or base are added"
      },
      {
        "key": "B",
        "text": "To make every solution neutral"
      },
      {
        "key": "C",
        "text": "To increase temperature during a reaction"
      },
      {
        "key": "D",
        "text": "To ensure that all solutes precipitate"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-010",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Redox reactions",
    "difficulty": "STANDARD",
    "prompt": "Oxidation is best described as:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Gain of electrons"
      },
      {
        "key": "B",
        "text": "Loss of electrons"
      },
      {
        "key": "C",
        "text": "Gain of neutrons"
      },
      {
        "key": "D",
        "text": "Loss of protons from the nucleus"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-011",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Mole concept",
    "difficulty": "STANDARD",
    "prompt": "At 0°C and 1 atm, approximately what volume is occupied by one mole of an ideal gas?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2.24 L"
      },
      {
        "key": "B",
        "text": "11.2 L"
      },
      {
        "key": "C",
        "text": "22.4 L"
      },
      {
        "key": "D",
        "text": "44.8 L"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-012",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Organic functional groups",
    "difficulty": "EASY",
    "prompt": "Which functional group is characteristic of an ester?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−COO−"
      },
      {
        "key": "B",
        "text": "−OH"
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
    "id": "v12-mdcat-013",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Reaction rates",
    "difficulty": "STANDARD",
    "prompt": "Why does powdered calcium carbonate usually react faster with dilute acid than the same mass of large marble chips?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Powder has a larger surface area exposed to the acid."
      },
      {
        "key": "B",
        "text": "Powder has a greater molar mass."
      },
      {
        "key": "C",
        "text": "Powder changes the acid into a catalyst."
      },
      {
        "key": "D",
        "text": "Powder lowers the temperature of the reaction."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-014",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "pH calculations",
    "difficulty": "STANDARD",
    "prompt": "What is the pH of a 0.001 mol dm⁻³ sodium hydroxide solution at 25°C, assuming complete dissociation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "11"
      },
      {
        "key": "D",
        "text": "13"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-015",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Circular motion",
    "difficulty": "STANDARD",
    "prompt": "In uniform circular motion, in which direction does the centripetal force act?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Tangentially along the motion"
      },
      {
        "key": "B",
        "text": "Radially outward"
      },
      {
        "key": "C",
        "text": "Radially toward the centre"
      },
      {
        "key": "D",
        "text": "Vertically upward at all points"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-016",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Lens power",
    "difficulty": "STANDARD",
    "prompt": "A converging lens has a focal length of 0.5 m. What is its power?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.5 D"
      },
      {
        "key": "B",
        "text": "1 D"
      },
      {
        "key": "C",
        "text": "2 D"
      },
      {
        "key": "D",
        "text": "5 D"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-017",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Fluids",
    "difficulty": "STANDARD",
    "prompt": "According to Archimedes' principle, the buoyant force on an immersed object equals:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The object's volume multiplied by its mass"
      },
      {
        "key": "B",
        "text": "The weight of the fluid displaced"
      },
      {
        "key": "C",
        "text": "The object's weight in air in every case"
      },
      {
        "key": "D",
        "text": "The pressure at the bottom of the container"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-018",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electrical resistance",
    "difficulty": "STANDARD",
    "prompt": "Two resistors of 2 Ω and 4 Ω are connected in series. What is their equivalent resistance?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1.3 Ω"
      },
      {
        "key": "B",
        "text": "2 Ω"
      },
      {
        "key": "C",
        "text": "4 Ω"
      },
      {
        "key": "D",
        "text": "6 Ω"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-019",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Sound waves",
    "difficulty": "STANDARD",
    "prompt": "If the amplitude of a sound wave is doubled while other conditions remain the same, by what factor does its intensity change?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v12-mdcat-020",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Thermal physics",
    "difficulty": "STANDARD",
    "prompt": "How much heat is required to raise the temperature of 0.5 kg of water by 10°C? Use c = 4,200 J kg⁻¹ °C⁻¹.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2,100 J"
      },
      {
        "key": "B",
        "text": "4,200 J"
      },
      {
        "key": "C",
        "text": "10,500 J"
      },
      {
        "key": "D",
        "text": "21,000 J"
      }
    ],
    "sourceKind": "original-sample"
  }
];
