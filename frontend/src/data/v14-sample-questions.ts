import type { StudyQuestionPrompt } from "./sample-questions";

/** 40 additional original questions: 10 each for LCAT, NET, CSS and MDCAT. */
export const V14_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  {
    "id": "v14-lcat-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Percentages",
    "difficulty": "STANDARD",
    "prompt": "A jacket priced at Rs. 4,000 is reduced by 15%. What is its sale price?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 3,200"
      },
      {
        "key": "B",
        "text": "Rs. 3,400"
      },
      {
        "key": "C",
        "text": "Rs. 3,600"
      },
      {
        "key": "D",
        "text": "Rs. 3,850"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-lcat-002",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Linear equations",
    "difficulty": "STANDARD",
    "prompt": "If 3(2x − 1) = 21, what is the value of x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "3.5"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-lcat-003",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Logical deduction",
    "difficulty": "STANDARD",
    "prompt": "All research fellows have completed a degree. Some degree holders speak French. Which conclusion must follow?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "All French speakers are research fellows."
      },
      {
        "key": "B",
        "text": "Some research fellows speak French."
      },
      {
        "key": "C",
        "text": "Every research fellow has completed a degree."
      },
      {
        "key": "D",
        "text": "No research fellow speaks French."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-lcat-004",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Sentence completion",
    "difficulty": "EASY",
    "prompt": "Choose the best completion: “The committee postponed the vote ___ several members requested more time to review the proposal.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "unless"
      },
      {
        "key": "B",
        "text": "because"
      },
      {
        "key": "C",
        "text": "despite"
      },
      {
        "key": "D",
        "text": "whereas"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-lcat-005",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary",
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
        "text": "Unclear"
      },
      {
        "key": "C",
        "text": "Detailed"
      },
      {
        "key": "D",
        "text": "Repetitive"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-lcat-006",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Critical reasoning",
    "difficulty": "CHALLENGING",
    "prompt": "A college adds a weekly practice test. After two months, the average test score rises. Which additional evidence would best support the claim that the tests caused the improvement?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The tests used the same logo each week."
      },
      {
        "key": "B",
        "text": "A comparable group without weekly tests did not show a similar increase."
      },
      {
        "key": "C",
        "text": "Students said the test room was comfortable."
      },
      {
        "key": "D",
        "text": "The college also repainted its classrooms."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-lcat-007",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Grammar",
    "difficulty": "EASY",
    "prompt": "Choose the sentence with correct subject–verb agreement.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The list of topics are on the desk."
      },
      {
        "key": "B",
        "text": "The list of topics is on the desk."
      },
      {
        "key": "C",
        "text": "The list of topics were on the desk."
      },
      {
        "key": "D",
        "text": "The list of topics have been on the desk."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-lcat-008",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Ordering",
    "difficulty": "STANDARD",
    "prompt": "Four tasks P, Q, R and S must be completed. P is before Q, R is after Q, and S is before P. Which order is valid?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "P, S, Q, R"
      },
      {
        "key": "B",
        "text": "S, P, Q, R"
      },
      {
        "key": "C",
        "text": "S, Q, P, R"
      },
      {
        "key": "D",
        "text": "Q, S, P, R"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-lcat-009",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Ratios",
    "difficulty": "STANDARD",
    "prompt": "The ratio of red to blue books on a shelf is 3:5. If there are 40 books in total, how many are blue?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "15"
      },
      {
        "key": "B",
        "text": "20"
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
    "id": "v14-lcat-010",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Reading inference",
    "difficulty": "STANDARD",
    "prompt": "A report states that public transport use rose in the city centre but fell in outer districts. Which statement is best supported?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Transport use rose in every district."
      },
      {
        "key": "B",
        "text": "Overall city use must have doubled."
      },
      {
        "key": "C",
        "text": "The change in use differed by location."
      },
      {
        "key": "D",
        "text": "Outer districts no longer have public transport."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-net-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Sequences",
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
    "id": "v14-net-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Probability",
    "difficulty": "STANDARD",
    "prompt": "A fair six-sided die is rolled once. What is the probability of obtaining a prime number?",
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
    "id": "v14-net-003",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Momentum",
    "difficulty": "STANDARD",
    "prompt": "A 2 kg trolley moves at 3 m/s. What is its momentum?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1.5 kg m/s"
      },
      {
        "key": "B",
        "text": "5 kg m/s"
      },
      {
        "key": "C",
        "text": "6 kg m/s"
      },
      {
        "key": "D",
        "text": "9 kg m/s"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-net-004",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Thermal physics",
    "difficulty": "STANDARD",
    "prompt": "A 0.5 kg sample has a specific heat capacity of 800 J kg⁻¹ °C⁻¹. How much energy is required to raise its temperature by 10°C?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "400 J"
      },
      {
        "key": "B",
        "text": "800 J"
      },
      {
        "key": "C",
        "text": "4,000 J"
      },
      {
        "key": "D",
        "text": "8,000 J"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-net-005",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Chemical bonding",
    "difficulty": "EASY",
    "prompt": "Which type of bond forms when two atoms share a pair of electrons?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Ionic"
      },
      {
        "key": "B",
        "text": "Covalent"
      },
      {
        "key": "C",
        "text": "Metallic"
      },
      {
        "key": "D",
        "text": "Hydrogen"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-net-006",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Solutions",
    "difficulty": "STANDARD",
    "prompt": "What is the concentration in mol dm⁻³ of a solution containing 0.4 mol of solute in 2 dm³ of solution?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.1"
      },
      {
        "key": "B",
        "text": "0.2"
      },
      {
        "key": "C",
        "text": "0.4"
      },
      {
        "key": "D",
        "text": "0.8"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-net-007",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Programming logic",
    "difficulty": "EASY",
    "prompt": "What is the value of x after these statements execute: x = 5; x = x + 3; x = 2 × x?",
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
        "text": "13"
      },
      {
        "key": "D",
        "text": "16"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-net-008",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Data representation",
    "difficulty": "STANDARD",
    "prompt": "How many bits are required to represent 32 distinct values using a fixed-length binary code?",
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
    "id": "v14-net-009",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Circular motion",
    "difficulty": "STANDARD",
    "prompt": "An object moves in a circle of radius 2 m at a constant speed of 6 m/s. What is its centripetal acceleration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3 m/s²"
      },
      {
        "key": "B",
        "text": "12 m/s²"
      },
      {
        "key": "C",
        "text": "18 m/s²"
      },
      {
        "key": "D",
        "text": "36 m/s²"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-net-010",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Logarithms",
    "difficulty": "STANDARD",
    "prompt": "If log₁₀(x) = 2.5, which expression gives x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10 × 2.5"
      },
      {
        "key": "B",
        "text": "10²·⁵"
      },
      {
        "key": "C",
        "text": "2.5¹⁰"
      },
      {
        "key": "D",
        "text": "10 ÷ 2.5"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-001",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Pakistan political system",
    "difficulty": "STANDARD",
    "prompt": "Under Pakistan's parliamentary system, who is the head of government at the federal level?",
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
        "text": "Chairman Senate"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-002",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Public finance",
    "difficulty": "STANDARD",
    "prompt": "A government budget deficit occurs when, over a given period:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Revenue exceeds expenditure."
      },
      {
        "key": "B",
        "text": "Expenditure exceeds revenue."
      },
      {
        "key": "C",
        "text": "Exports equal imports."
      },
      {
        "key": "D",
        "text": "Tax rates remain unchanged."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-003",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International organisations",
    "difficulty": "EASY",
    "prompt": "Which principal organ of the United Nations has primary responsibility for maintaining international peace and security?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "General Assembly"
      },
      {
        "key": "B",
        "text": "Security Council"
      },
      {
        "key": "C",
        "text": "Economic and Social Council"
      },
      {
        "key": "D",
        "text": "Secretariat"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-004",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Governance",
    "difficulty": "EASY",
    "prompt": "Which practice most directly strengthens accountability in public administration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Keeping procurement criteria confidential."
      },
      {
        "key": "B",
        "text": "Publishing decisions and allowing independent audits."
      },
      {
        "key": "C",
        "text": "Removing all complaint channels."
      },
      {
        "key": "D",
        "text": "Making officials exempt from review."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-005",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Environmental policy",
    "difficulty": "EASY",
    "prompt": "Which measure is an example of adapting to the effects of climate change rather than mitigating its causes?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Improving building insulation to reduce energy use."
      },
      {
        "key": "B",
        "text": "Replacing coal generation with wind power."
      },
      {
        "key": "C",
        "text": "Developing flood-warning systems for vulnerable communities."
      },
      {
        "key": "D",
        "text": "Reducing methane emissions from waste."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-006",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Critical analysis",
    "difficulty": "STANDARD",
    "prompt": "A survey finds that people who read more newspapers are more likely to vote. What is the most careful interpretation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Reading newspapers definitely causes voting."
      },
      {
        "key": "B",
        "text": "Voting definitely causes newspaper reading."
      },
      {
        "key": "C",
        "text": "The survey shows an association, but does not establish causation."
      },
      {
        "key": "D",
        "text": "Newspaper readers all support the same party."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-007",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Pakistan geography",
    "difficulty": "EASY",
    "prompt": "Which river is the principal source of the Indus River system in Pakistan?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Ravi"
      },
      {
        "key": "B",
        "text": "Chenab"
      },
      {
        "key": "C",
        "text": "Indus"
      },
      {
        "key": "D",
        "text": "Sutlej"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-008",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "English comprehension",
    "difficulty": "EASY",
    "prompt": "Choose the best summary of this statement: “A policy may be well designed, yet fail if the institutions responsible for implementing it lack resources.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Policy design is irrelevant."
      },
      {
        "key": "B",
        "text": "Implementation capacity can determine whether a policy succeeds."
      },
      {
        "key": "C",
        "text": "Resources matter only after a policy ends."
      },
      {
        "key": "D",
        "text": "Institutions should never change."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-009",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Constitutional principles",
    "difficulty": "STANDARD",
    "prompt": "The rule of law means that:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Public officials can act outside legal limits."
      },
      {
        "key": "B",
        "text": "Laws apply only to private citizens."
      },
      {
        "key": "C",
        "text": "Government authority is exercised according to publicly established law."
      },
      {
        "key": "D",
        "text": "Courts must follow instructions from political parties."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-css-010",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Statistics",
    "difficulty": "STANDARD",
    "prompt": "A country's population increases from 20 million to 22 million. What is the percentage increase?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "5%"
      },
      {
        "key": "B",
        "text": "8%"
      },
      {
        "key": "C",
        "text": "10%"
      },
      {
        "key": "D",
        "text": "12%"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Human physiology",
    "difficulty": "EASY",
    "prompt": "Which part of the nephron is chiefly responsible for reabsorbing most of the filtered glucose, amino acids and water?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Bowman's capsule"
      },
      {
        "key": "B",
        "text": "Proximal convoluted tubule"
      },
      {
        "key": "C",
        "text": "Loop of Henle"
      },
      {
        "key": "D",
        "text": "Collecting duct"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Genetics",
    "difficulty": "STANDARD",
    "prompt": "In a DNA molecule, adenine pairs with which nitrogenous base?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Cytosine"
      },
      {
        "key": "B",
        "text": "Guanine"
      },
      {
        "key": "C",
        "text": "Thymine"
      },
      {
        "key": "D",
        "text": "Uracil"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-003",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Organic chemistry",
    "difficulty": "EASY",
    "prompt": "Which reagent is commonly used to test for a carbon–carbon double bond in an organic compound?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Bromine water"
      },
      {
        "key": "B",
        "text": "Limewater"
      },
      {
        "key": "C",
        "text": "Dilute sodium chloride"
      },
      {
        "key": "D",
        "text": "Aqueous glucose"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-004",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical kinetics",
    "difficulty": "STANDARD",
    "prompt": "For many reactions, increasing temperature increases the reaction rate mainly because:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The activation energy becomes zero."
      },
      {
        "key": "B",
        "text": "A larger fraction of particles have energy at or above the activation energy."
      },
      {
        "key": "C",
        "text": "Particles stop colliding."
      },
      {
        "key": "D",
        "text": "The equilibrium constant is always reduced."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-005",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Kinematics",
    "difficulty": "STANDARD",
    "prompt": "A ball is dropped from rest and falls freely for 2 seconds. Taking g = 10 m/s², what is its speed after 2 seconds?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "5 m/s"
      },
      {
        "key": "B",
        "text": "10 m/s"
      },
      {
        "key": "C",
        "text": "20 m/s"
      },
      {
        "key": "D",
        "text": "40 m/s"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-006",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electricity",
    "difficulty": "STANDARD",
    "prompt": "A 12 V battery transfers 36 J of energy to move charge through a circuit. How much charge moves?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.33 C"
      },
      {
        "key": "B",
        "text": "3 C"
      },
      {
        "key": "C",
        "text": "24 C"
      },
      {
        "key": "D",
        "text": "432 C"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-007",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Human physiology",
    "difficulty": "EASY",
    "prompt": "Which hormone lowers blood glucose concentration by promoting glucose uptake and storage?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Glucagon"
      },
      {
        "key": "B",
        "text": "Insulin"
      },
      {
        "key": "C",
        "text": "Adrenaline"
      },
      {
        "key": "D",
        "text": "Thyroxine"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-008",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Immune system",
    "difficulty": "EASY",
    "prompt": "Which cells can differentiate into plasma cells that secrete antibodies?",
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
    "id": "v14-mdcat-009",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical calculations",
    "difficulty": "STANDARD",
    "prompt": "What is the mass of 0.5 mol of carbon dioxide? (Molar mass = 44 g mol⁻¹)",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "11 g"
      },
      {
        "key": "B",
        "text": "22 g"
      },
      {
        "key": "C",
        "text": "44 g"
      },
      {
        "key": "D",
        "text": "88 g"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v14-mdcat-010",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Waves",
    "difficulty": "STANDARD",
    "prompt": "A sound wave travels at 340 m/s and has a frequency of 170 Hz. What is its wavelength?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.5 m"
      },
      {
        "key": "B",
        "text": "1 m"
      },
      {
        "key": "C",
        "text": "2 m"
      },
      {
        "key": "D",
        "text": "4 m"
      }
    ],
    "sourceKind": "original-sample"
  }
];
