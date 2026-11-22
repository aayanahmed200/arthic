import type { StudyQuestionPrompt } from "./sample-questions";

/** 80 additional original questions, balanced across four exam tracks. Answers remain server-side. */
export const V11_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  {
    "id": "v11-lcat-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Ratios",
    "difficulty": "STANDARD",
    "prompt": "Two quantities are in the ratio 3:5 and their total is 64. What is the larger quantity?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "40"
      },
      {
        "key": "C",
        "text": "32"
      },
      {
        "key": "D",
        "text": "48"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-002",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Averages",
    "difficulty": "STANDARD",
    "prompt": "The mean of five numbers is 14. Four of the numbers add up to 54. What is the fifth number?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "12"
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
        "text": "20"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Fractions",
    "difficulty": "STANDARD",
    "prompt": "Two-thirds of a number is 48. What is the number?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "64"
      },
      {
        "key": "B",
        "text": "68"
      },
      {
        "key": "C",
        "text": "72"
      },
      {
        "key": "D",
        "text": "80"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-004",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Linear equations",
    "difficulty": "STANDARD",
    "prompt": "Solve 4x − 7 = 21.",
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
    "id": "v11-lcat-005",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Simple interest",
    "difficulty": "STANDARD",
    "prompt": "A principal of Rs. 5,000 earns simple interest at 8% per year for two years. How much interest is earned?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 600"
      },
      {
        "key": "B",
        "text": "Rs. 700"
      },
      {
        "key": "C",
        "text": "Rs. 800"
      },
      {
        "key": "D",
        "text": "Rs. 900"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-006",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Number patterns",
    "difficulty": "EASY",
    "prompt": "What is the next term in the sequence 3, 7, 15, 31, …?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "47"
      },
      {
        "key": "B",
        "text": "55"
      },
      {
        "key": "C",
        "text": "62"
      },
      {
        "key": "D",
        "text": "63"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-007",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Work rates",
    "difficulty": "STANDARD",
    "prompt": "Five workers can complete a task in 12 days at the same constant rate. How many days would ten equally productive workers need?",
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
    "id": "v11-lcat-008",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Perimeter",
    "difficulty": "STANDARD",
    "prompt": "A rectangle is 12 cm long and 7 cm wide. What is its perimeter?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "19 cm"
      },
      {
        "key": "B",
        "text": "38 cm"
      },
      {
        "key": "C",
        "text": "42 cm"
      },
      {
        "key": "D",
        "text": "84 cm"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-009",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Probability",
    "difficulty": "STANDARD",
    "prompt": "A bag contains three red counters and two blue counters. One counter is selected at random. What is the probability that it is red?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3/5"
      },
      {
        "key": "B",
        "text": "2/5"
      },
      {
        "key": "C",
        "text": "1/2"
      },
      {
        "key": "D",
        "text": "3/2"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-010",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Percentage change",
    "difficulty": "STANDARD",
    "prompt": "A library has 240 books in a section and adds 10% more. How many books are there after the increase?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "250"
      },
      {
        "key": "B",
        "text": "260"
      },
      {
        "key": "C",
        "text": "264"
      },
      {
        "key": "D",
        "text": "270"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-011",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "difficulty": "EASY",
    "prompt": "In the sentence “The new schedule may mitigate delays,” what does “mitigate” mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Make worse"
      },
      {
        "key": "B",
        "text": "Make less severe"
      },
      {
        "key": "C",
        "text": "Predict precisely"
      },
      {
        "key": "D",
        "text": "Remove completely"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-012",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Reading comprehension",
    "difficulty": "STANDARD",
    "prompt": "A city plants shade trees along walking routes and adds benches near bus stops. Which aim is most directly supported by these actions?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Discouraging public transport"
      },
      {
        "key": "B",
        "text": "Making walking and waiting more comfortable"
      },
      {
        "key": "C",
        "text": "Reducing the number of bus routes"
      },
      {
        "key": "D",
        "text": "Increasing road speed limits"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-013",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "difficulty": "EASY",
    "prompt": "Choose the correct verb: “Neither of the two proposals ___ suitable for the pilot.”",
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
    "id": "v11-lcat-014",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Comparatives",
    "difficulty": "EASY",
    "prompt": "Choose the grammatically correct sentence.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "This route is more shorter than the old one."
      },
      {
        "key": "B",
        "text": "This route is shortest than the old one."
      },
      {
        "key": "C",
        "text": "This route is more short than the old one."
      },
      {
        "key": "D",
        "text": "This route is shorter than the old one."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-015",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Antonyms",
    "difficulty": "EASY",
    "prompt": "Which word is the closest opposite of “sparse”?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rare"
      },
      {
        "key": "B",
        "text": "Scattered"
      },
      {
        "key": "C",
        "text": "Dense"
      },
      {
        "key": "D",
        "text": "Limited"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-016",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Analogies",
    "difficulty": "STANDARD",
    "prompt": "Complete the relationship: “sculptor : statue :: composer : ___”.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Canvas"
      },
      {
        "key": "B",
        "text": "Symphony"
      },
      {
        "key": "C",
        "text": "Chisel"
      },
      {
        "key": "D",
        "text": "Gallery"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-017",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Main idea",
    "difficulty": "STANDARD",
    "prompt": "A school replaces a single annual science fair with smaller monthly demonstrations. Students receive feedback throughout the year. What is the main educational advantage?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Students can receive feedback more regularly"
      },
      {
        "key": "B",
        "text": "Students no longer need to prepare experiments"
      },
      {
        "key": "C",
        "text": "Teachers can avoid assessing projects"
      },
      {
        "key": "D",
        "text": "All demonstrations become competitive"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-018",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Conditional reasoning",
    "difficulty": "STANDARD",
    "prompt": "If a device is charging, its indicator light is on. The indicator light is off. What conclusion follows from the rule?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The device is fully charged"
      },
      {
        "key": "B",
        "text": "The device is not charging"
      },
      {
        "key": "C",
        "text": "The battery is damaged"
      },
      {
        "key": "D",
        "text": "The device has no battery"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-019",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Inference",
    "difficulty": "STANDARD",
    "prompt": "After a campus introduced secure bicycle parking, the number of students cycling to campus increased. Which conclusion is best supported?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Secure parking may have encouraged cycling"
      },
      {
        "key": "B",
        "text": "Every new cyclist previously drove a car"
      },
      {
        "key": "C",
        "text": "The campus removed all parking spaces"
      },
      {
        "key": "D",
        "text": "Cycling is now compulsory"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-lcat-020",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Ordering",
    "difficulty": "STANDARD",
    "prompt": "P must happen before Q, and Q must happen before R. Which statement must be true?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "R happens before P"
      },
      {
        "key": "B",
        "text": "Q happens after R"
      },
      {
        "key": "C",
        "text": "P happens before R"
      },
      {
        "key": "D",
        "text": "P and R happen at the same time"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Differentiation",
    "difficulty": "STANDARD",
    "prompt": "If f(x) = x³, what is f′(2)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "16"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Trigonometry",
    "difficulty": "EASY",
    "prompt": "What is the exact value of sin 30°?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1/2"
      },
      {
        "key": "C",
        "text": "√3/2"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Quadratic equations",
    "difficulty": "STANDARD",
    "prompt": "For x² − 5x + 6 = 0, what is the sum of the two roots?",
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
    "id": "v11-net-004",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Vectors",
    "difficulty": "STANDARD",
    "prompt": "Two perpendicular vectors have magnitudes 3 units and 4 units. What is the magnitude of their resultant?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1 unit"
      },
      {
        "key": "B",
        "text": "5 units"
      },
      {
        "key": "C",
        "text": "7 units"
      },
      {
        "key": "D",
        "text": "12 units"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-005",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Acceleration",
    "difficulty": "STANDARD",
    "prompt": "A car's velocity changes from 20 m/s to 8 m/s in 4 seconds. What is its average acceleration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−3 m/s²"
      },
      {
        "key": "B",
        "text": "−2 m/s²"
      },
      {
        "key": "C",
        "text": "2 m/s²"
      },
      {
        "key": "D",
        "text": "3 m/s²"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-006",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Electric circuits",
    "difficulty": "STANDARD",
    "prompt": "A 12 V supply is connected across a 6 Ω resistor. What current flows through the resistor?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.5 A"
      },
      {
        "key": "B",
        "text": "1 A"
      },
      {
        "key": "C",
        "text": "2 A"
      },
      {
        "key": "D",
        "text": "6 A"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-007",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Waves",
    "difficulty": "STANDARD",
    "prompt": "A wave has a frequency of 5 Hz and a wavelength of 2 m. What is its speed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2.5 m/s"
      },
      {
        "key": "B",
        "text": "5 m/s"
      },
      {
        "key": "C",
        "text": "7 m/s"
      },
      {
        "key": "D",
        "text": "10 m/s"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-008",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Gas laws",
    "difficulty": "STANDARD",
    "prompt": "A gas is heated so that its absolute temperature doubles while pressure stays constant. What happens to its volume, assuming ideal-gas behaviour?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It halves"
      },
      {
        "key": "B",
        "text": "It doubles"
      },
      {
        "key": "C",
        "text": "It remains constant"
      },
      {
        "key": "D",
        "text": "It quadruples"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-009",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Mole concept",
    "difficulty": "EASY",
    "prompt": "What is the molar mass of carbon dioxide, CO₂? (C = 12, O = 16)",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "28 g mol⁻¹"
      },
      {
        "key": "B",
        "text": "32 g mol⁻¹"
      },
      {
        "key": "C",
        "text": "40 g mol⁻¹"
      },
      {
        "key": "D",
        "text": "44 g mol⁻¹"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-010",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Acids and pH",
    "difficulty": "STANDARD",
    "prompt": "What is the pH of a 1.0 × 10⁻⁴ mol dm⁻³ strong monoprotic acid, assuming complete dissociation?",
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
        "text": "10"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-011",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Periodic trends",
    "difficulty": "EASY",
    "prompt": "What generally happens to atomic radius from left to right across a period in the periodic table?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It increases steadily"
      },
      {
        "key": "B",
        "text": "It decreases"
      },
      {
        "key": "C",
        "text": "It remains exactly constant"
      },
      {
        "key": "D",
        "text": "It first doubles"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-012",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Oxidation numbers",
    "difficulty": "EASY",
    "prompt": "What is the oxidation number of sulfur in the sulfate ion, SO₄²⁻?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "+2"
      },
      {
        "key": "B",
        "text": "+4"
      },
      {
        "key": "C",
        "text": "+6"
      },
      {
        "key": "D",
        "text": "+8"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-013",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Python basics",
    "difficulty": "STANDARD",
    "prompt": "In Python, what value does len([4, 7, 9, 12]) return?",
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
        "text": "9"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-014",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Boolean logic",
    "difficulty": "EASY",
    "prompt": "What is the result of True and False in Python?",
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
        "text": "None"
      },
      {
        "key": "D",
        "text": "An error"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-015",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Data structures",
    "difficulty": "STANDARD",
    "prompt": "Which data structure follows the last-in, first-out (LIFO) principle?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Queue"
      },
      {
        "key": "B",
        "text": "Stack"
      },
      {
        "key": "C",
        "text": "Tree"
      },
      {
        "key": "D",
        "text": "Graph"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-016",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Number systems",
    "difficulty": "EASY",
    "prompt": "What is the decimal value of the binary number 1101₂?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "11"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "13"
      },
      {
        "key": "D",
        "text": "14"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-017",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Geometry",
    "difficulty": "STANDARD",
    "prompt": "A triangle has a base of 10 cm and a perpendicular height of 6 cm. What is its area?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "16 cm²"
      },
      {
        "key": "B",
        "text": "30 cm²"
      },
      {
        "key": "C",
        "text": "60 cm²"
      },
      {
        "key": "D",
        "text": "120 cm²"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-018",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Differentiation",
    "difficulty": "STANDARD",
    "prompt": "If y = 2x² + 3x, what is dy/dx at x = 2?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "7"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "11"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-019",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Energy",
    "difficulty": "STANDARD",
    "prompt": "What is the kinetic energy of a 2 kg object moving at 5 m/s?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10 J"
      },
      {
        "key": "B",
        "text": "20 J"
      },
      {
        "key": "C",
        "text": "25 J"
      },
      {
        "key": "D",
        "text": "50 J"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-net-020",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Resistive circuits",
    "difficulty": "STANDARD",
    "prompt": "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?",
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
        "text": "9 Ω"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-001",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Separation of powers",
    "difficulty": "STANDARD",
    "prompt": "In a constitutional system, which branch is primarily responsible for making laws?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Executive"
      },
      {
        "key": "B",
        "text": "Legislature"
      },
      {
        "key": "C",
        "text": "Judiciary"
      },
      {
        "key": "D",
        "text": "Civil service"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-002",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Federalism",
    "difficulty": "EASY",
    "prompt": "What is the defining feature of a federal system of government?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "All authority belongs to local councils"
      },
      {
        "key": "B",
        "text": "Powers are constitutionally divided between levels of government"
      },
      {
        "key": "C",
        "text": "Courts appoint every minister"
      },
      {
        "key": "D",
        "text": "The national government has no authority"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-003",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Opportunity cost",
    "difficulty": "STANDARD",
    "prompt": "A student spends an evening working on an assignment instead of attending a lecture. What is the opportunity cost of that choice?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The money already spent on books"
      },
      {
        "key": "B",
        "text": "The next-best alternative given up"
      },
      {
        "key": "C",
        "text": "The total number of hours in a day"
      },
      {
        "key": "D",
        "text": "The assignment's final grade"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-004",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Inflation",
    "difficulty": "EASY",
    "prompt": "Which description best defines inflation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A sustained rise in the general price level"
      },
      {
        "key": "B",
        "text": "A fall in the population"
      },
      {
        "key": "C",
        "text": "A temporary rise in one product's price"
      },
      {
        "key": "D",
        "text": "An increase in the value of money"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-005",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Balance of payments",
    "difficulty": "EASY",
    "prompt": "What does a country's balance of payments record?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Only government tax receipts"
      },
      {
        "key": "B",
        "text": "Transactions between residents and the rest of the world"
      },
      {
        "key": "C",
        "text": "Only the value of imported food"
      },
      {
        "key": "D",
        "text": "Only domestic bank deposits"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-006",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Water cycle",
    "difficulty": "EASY",
    "prompt": "Which process changes liquid water at the surface into water vapour?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Condensation"
      },
      {
        "key": "B",
        "text": "Evaporation"
      },
      {
        "key": "C",
        "text": "Precipitation"
      },
      {
        "key": "D",
        "text": "Infiltration"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-007",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Population studies",
    "difficulty": "EASY",
    "prompt": "What is the main purpose of a population census?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To measure daily rainfall"
      },
      {
        "key": "B",
        "text": "To count and describe a population at a specified time"
      },
      {
        "key": "C",
        "text": "To set the price of exports"
      },
      {
        "key": "D",
        "text": "To determine every household's income exactly"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-008",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "United Nations",
    "difficulty": "EASY",
    "prompt": "What is the primary responsibility of the UN Security Council under the UN Charter?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Setting global school curricula"
      },
      {
        "key": "B",
        "text": "Maintaining international peace and security"
      },
      {
        "key": "C",
        "text": "Managing every country's currency"
      },
      {
        "key": "D",
        "text": "Operating national elections"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-009",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International law",
    "difficulty": "EASY",
    "prompt": "What is a treaty in international law?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A private agreement between companies"
      },
      {
        "key": "B",
        "text": "A formal agreement between states governed by international law"
      },
      {
        "key": "C",
        "text": "A domestic court judgment"
      },
      {
        "key": "D",
        "text": "An informal newspaper editorial"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-010",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Constitutional framework",
    "difficulty": "EASY",
    "prompt": "Which description best characterises Pakistan's 1973 Constitution?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A unitary presidential constitution"
      },
      {
        "key": "B",
        "text": "A federal parliamentary constitution"
      },
      {
        "key": "C",
        "text": "A confederation without a national legislature"
      },
      {
        "key": "D",
        "text": "A monarchy"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-011",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Physical geography",
    "difficulty": "EASY",
    "prompt": "Into which body of water does the Indus River ultimately flow?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Bay of Bengal"
      },
      {
        "key": "B",
        "text": "Arabian Sea"
      },
      {
        "key": "C",
        "text": "Red Sea"
      },
      {
        "key": "D",
        "text": "Persian Gulf"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-012",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Taxation",
    "difficulty": "EASY",
    "prompt": "What is a progressive tax?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A tax whose rate rises as the taxable amount rises"
      },
      {
        "key": "B",
        "text": "A tax with the same rate for every income level"
      },
      {
        "key": "C",
        "text": "A tax charged only on imports"
      },
      {
        "key": "D",
        "text": "A tax that is always refunded"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-013",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Public policy",
    "difficulty": "EASY",
    "prompt": "What is the main purpose of evaluating a public policy after implementation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To prevent all public discussion"
      },
      {
        "key": "B",
        "text": "To assess its outcomes and whether objectives were achieved"
      },
      {
        "key": "C",
        "text": "To replace legislation with advertising"
      },
      {
        "key": "D",
        "text": "To avoid collecting evidence"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-014",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Survey methods",
    "difficulty": "STANDARD",
    "prompt": "Which approach is most likely to produce a representative survey of a large student population?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Ask only friends of the researcher"
      },
      {
        "key": "B",
        "text": "Select a sample using a suitable sampling method across relevant groups"
      },
      {
        "key": "C",
        "text": "Survey only students who agree with the researcher"
      },
      {
        "key": "D",
        "text": "Choose respondents based on their answers"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-015",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Climate adaptation",
    "difficulty": "EASY",
    "prompt": "Which action is an example of climate adaptation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Improving flood warning and drainage systems in a flood-prone area"
      },
      {
        "key": "B",
        "text": "Increasing avoidable energy waste"
      },
      {
        "key": "C",
        "text": "Removing all weather monitoring stations"
      },
      {
        "key": "D",
        "text": "Ignoring changes in rainfall patterns"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-016",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Historical sources",
    "difficulty": "EASY",
    "prompt": "Which is an example of a primary historical source?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A modern textbook summarising an event"
      },
      {
        "key": "B",
        "text": "A letter written by a participant during the event"
      },
      {
        "key": "C",
        "text": "A recent review article"
      },
      {
        "key": "D",
        "text": "A fictional story set in the period"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-017",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Democratic governance",
    "difficulty": "EASY",
    "prompt": "Which principle protects people who hold minority views in a democracy?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rule by force"
      },
      {
        "key": "B",
        "text": "Equal protection under law and fundamental rights"
      },
      {
        "key": "C",
        "text": "Automatic agreement with the majority"
      },
      {
        "key": "D",
        "text": "Suspension of all courts"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-018",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Accountability",
    "difficulty": "EASY",
    "prompt": "What does public-sector accountability require?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Officials never explain decisions"
      },
      {
        "key": "B",
        "text": "Officials can be questioned and must answer for their decisions and conduct"
      },
      {
        "key": "C",
        "text": "All records must be destroyed"
      },
      {
        "key": "D",
        "text": "Only private citizens follow rules"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-019",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Comparative advantage",
    "difficulty": "STANDARD",
    "prompt": "A country has a comparative advantage in producing a good when it can produce it at:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A lower opportunity cost than another country"
      },
      {
        "key": "B",
        "text": "A higher money price in every market"
      },
      {
        "key": "C",
        "text": "A larger population size"
      },
      {
        "key": "D",
        "text": "A higher absolute cost than all competitors"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-css-020",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "National accounts",
    "difficulty": "EASY",
    "prompt": "What does gross domestic product (GDP) measure?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The value of all financial assets owned by citizens"
      },
      {
        "key": "B",
        "text": "The market value of final goods and services produced within a country during a period"
      },
      {
        "key": "C",
        "text": "Only government spending"
      },
      {
        "key": "D",
        "text": "The value of exports minus imports only"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "DNA replication",
    "difficulty": "STANDARD",
    "prompt": "Why is DNA replication described as semi-conservative?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Both original strands are destroyed"
      },
      {
        "key": "B",
        "text": "Each daughter DNA molecule contains one original strand and one newly synthesised strand"
      },
      {
        "key": "C",
        "text": "Each daughter molecule contains only new strands"
      },
      {
        "key": "D",
        "text": "DNA is copied without using a template"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Blood",
    "difficulty": "EASY",
    "prompt": "What is the principal role of haemoglobin in red blood cells?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Digesting pathogens"
      },
      {
        "key": "B",
        "text": "Transporting oxygen"
      },
      {
        "key": "C",
        "text": "Producing antibodies"
      },
      {
        "key": "D",
        "text": "Clotting blood"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Kidney function",
    "difficulty": "STANDARD",
    "prompt": "What is the functional unit of the kidney?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Neuron"
      },
      {
        "key": "B",
        "text": "Nephron"
      },
      {
        "key": "C",
        "text": "Alveolus"
      },
      {
        "key": "D",
        "text": "Villus"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-004",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Gas exchange",
    "difficulty": "EASY",
    "prompt": "Which feature of alveoli makes them effective for gas exchange?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Thick walls and small surface area"
      },
      {
        "key": "B",
        "text": "Thin walls and a large surface area"
      },
      {
        "key": "C",
        "text": "No blood supply"
      },
      {
        "key": "D",
        "text": "A waterproof outer layer"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-005",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cell division",
    "difficulty": "STANDARD",
    "prompt": "At the end of normal mitosis followed by cytokinesis, one diploid body cell usually produces:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Four haploid cells"
      },
      {
        "key": "B",
        "text": "Two genetically similar diploid daughter cells"
      },
      {
        "key": "C",
        "text": "Two genetically different haploid cells"
      },
      {
        "key": "D",
        "text": "One cell with twice the chromosome number"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-006",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Hormones",
    "difficulty": "EASY",
    "prompt": "Which cells of the pancreas secrete insulin?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Alpha cells of the islets"
      },
      {
        "key": "B",
        "text": "Beta cells of the islets"
      },
      {
        "key": "C",
        "text": "Acinar cells"
      },
      {
        "key": "D",
        "text": "Red blood cells"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-007",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Enzymes",
    "difficulty": "STANDARD",
    "prompt": "How do enzymes generally increase the rate of a biochemical reaction?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "By raising the activation energy"
      },
      {
        "key": "B",
        "text": "By lowering the activation energy"
      },
      {
        "key": "C",
        "text": "By changing the reaction's overall energy change"
      },
      {
        "key": "D",
        "text": "By being consumed as reactants"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-008",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Natural selection",
    "difficulty": "STANDARD",
    "prompt": "Natural selection occurs when individuals with inherited traits that improve survival or reproduction:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Always become larger"
      },
      {
        "key": "B",
        "text": "Leave more offspring on average than others"
      },
      {
        "key": "C",
        "text": "Stop competing for resources"
      },
      {
        "key": "D",
        "text": "Change their genes because they need to"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-009",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Meiosis",
    "difficulty": "EASY",
    "prompt": "What is the main chromosome-number outcome of meiosis in a diploid organism?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Two diploid cells"
      },
      {
        "key": "B",
        "text": "Four haploid cells"
      },
      {
        "key": "C",
        "text": "Four diploid cells"
      },
      {
        "key": "D",
        "text": "One haploid cell"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-010",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Nerve impulses",
    "difficulty": "EASY",
    "prompt": "During the depolarisation phase of a typical neuronal action potential, which ion movement is primarily responsible?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Potassium ions moving into the cell"
      },
      {
        "key": "B",
        "text": "Sodium ions moving into the cell"
      },
      {
        "key": "C",
        "text": "Chloride ions leaving the cell"
      },
      {
        "key": "D",
        "text": "Calcium ions leaving the nucleus"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-011",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Conjugate acids and bases",
    "difficulty": "STANDARD",
    "prompt": "In the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, which species is the conjugate acid of NH₃?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "H₂O"
      },
      {
        "key": "B",
        "text": "NH₄⁺"
      },
      {
        "key": "C",
        "text": "OH⁻"
      },
      {
        "key": "D",
        "text": "O₂"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-012",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical equilibrium",
    "difficulty": "STANDARD",
    "prompt": "For a reversible reaction at equilibrium, what is the immediate effect of adding more reactant at constant temperature?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The equilibrium shifts towards products"
      },
      {
        "key": "B",
        "text": "The equilibrium shifts towards reactants"
      },
      {
        "key": "C",
        "text": "The reaction stops permanently"
      },
      {
        "key": "D",
        "text": "The equilibrium constant must double"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-013",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical bonding",
    "difficulty": "EASY",
    "prompt": "What is the main type of bonding in sodium chloride, NaCl?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Metallic bonding"
      },
      {
        "key": "B",
        "text": "Ionic bonding"
      },
      {
        "key": "C",
        "text": "Non-polar covalent bonding"
      },
      {
        "key": "D",
        "text": "Hydrogen bonding"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-014",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Stoichiometry",
    "difficulty": "STANDARD",
    "prompt": "In a reaction using two reactants, what does the limiting reagent determine?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The colour of the product"
      },
      {
        "key": "B",
        "text": "The maximum theoretical amount of product"
      },
      {
        "key": "C",
        "text": "The reaction vessel's volume"
      },
      {
        "key": "D",
        "text": "The catalyst's identity"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-015",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Acids and bases",
    "difficulty": "EASY",
    "prompt": "What is the pH of a neutral aqueous solution at 25°C?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "14"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-016",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Kinetic energy",
    "difficulty": "STANDARD",
    "prompt": "What is the kinetic energy of a 2 kg object travelling at 3 m/s?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3 J"
      },
      {
        "key": "B",
        "text": "6 J"
      },
      {
        "key": "C",
        "text": "9 J"
      },
      {
        "key": "D",
        "text": "18 J"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-017",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Refraction",
    "difficulty": "STANDARD",
    "prompt": "A ray of light travels from air into water. Which way does it bend relative to the normal?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Away from the normal"
      },
      {
        "key": "B",
        "text": "Towards the normal"
      },
      {
        "key": "C",
        "text": "It must reflect completely"
      },
      {
        "key": "D",
        "text": "It continues without changing direction in every case"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-018",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electric power",
    "difficulty": "STANDARD",
    "prompt": "A device operates at 12 V and draws a current of 2 A. What is its electrical power?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "6 W"
      },
      {
        "key": "B",
        "text": "12 W"
      },
      {
        "key": "C",
        "text": "24 W"
      },
      {
        "key": "D",
        "text": "48 W"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-019",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Alternating current",
    "difficulty": "STANDARD",
    "prompt": "An alternating current has a frequency of 50 Hz. What is its period?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.002 s"
      },
      {
        "key": "B",
        "text": "0.02 s"
      },
      {
        "key": "C",
        "text": "0.2 s"
      },
      {
        "key": "D",
        "text": "2 s"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v11-mdcat-020",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Density",
    "difficulty": "STANDARD",
    "prompt": "A sample has a mass of 2 kg and a volume of 0.001 m³. What is its density?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "200 kg/m³"
      },
      {
        "key": "B",
        "text": "500 kg/m³"
      },
      {
        "key": "C",
        "text": "1,000 kg/m³"
      },
      {
        "key": "D",
        "text": "2,000 kg/m³"
      }
    ],
    "sourceKind": "original-sample"
  }
];
