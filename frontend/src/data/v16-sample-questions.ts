import type { StudyQuestionPrompt } from "./sample-questions";

/** 40 additional original Arthic questions: 10 per exam track. */
export const V16_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  {
    "id": "v16-lcat-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Percentages",
    "difficulty": "STANDARD",
    "prompt": "A jacket is marked at Rs. 800 and offered at a 15% discount. What is the sale price?",
    "options": [
      {
        "key": "A",
        "text": "Rs. 680"
      },
      {
        "key": "B",
        "text": "Rs. 700"
      },
      {
        "key": "C",
        "text": "Rs. 720"
      },
      {
        "key": "D",
        "text": "Rs. 740"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-002",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Logical ordering",
    "difficulty": "STANDARD",
    "prompt": "Four speakers D, A, B and C must present once each. D must speak before A, A before B, and B before C. Which order satisfies all the rules?",
    "options": [
      {
        "key": "A",
        "text": "D, A, B, C"
      },
      {
        "key": "B",
        "text": "A, D, B, C"
      },
      {
        "key": "C",
        "text": "D, B, A, C"
      },
      {
        "key": "D",
        "text": "A, B, C, D"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-003",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "difficulty": "EASY",
    "prompt": "Choose the grammatically correct completion: “A list of the required documents ___ on the noticeboard.”",
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
        "text": "were"
      },
      {
        "key": "D",
        "text": "have been"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-004",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "difficulty": "EASY",
    "prompt": "In the sentence “The new drainage system is expected to mitigate local flooding,” what does “mitigate” mean?",
    "options": [
      {
        "key": "A",
        "text": "Make less severe"
      },
      {
        "key": "B",
        "text": "Measure precisely"
      },
      {
        "key": "C",
        "text": "Cause to happen"
      },
      {
        "key": "D",
        "text": "Move elsewhere"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-005",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Probability",
    "difficulty": "STANDARD",
    "prompt": "A fair coin is tossed twice. What is the probability that both tosses land heads?",
    "options": [
      {
        "key": "A",
        "text": "1/2"
      },
      {
        "key": "B",
        "text": "1/3"
      },
      {
        "key": "C",
        "text": "1/4"
      },
      {
        "key": "D",
        "text": "3/4"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-006",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Evidence-based inference",
    "difficulty": "STANDARD",
    "prompt": "After a town introduces a bus route to a university, bus use rises and the number of cars entering the campus falls. Which conclusion is best supported?",
    "options": [
      {
        "key": "A",
        "text": "Every student now uses the bus."
      },
      {
        "key": "B",
        "text": "The new route may have replaced some car journeys."
      },
      {
        "key": "C",
        "text": "The university has closed its car park."
      },
      {
        "key": "D",
        "text": "Bus fares must be lower than before."
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-007",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Number sequences",
    "difficulty": "EASY",
    "prompt": "A sequence begins 5, 9, 13, 17. If the same pattern continues, what is the next term?",
    "options": [
      {
        "key": "A",
        "text": "19"
      },
      {
        "key": "B",
        "text": "20"
      },
      {
        "key": "C",
        "text": "21"
      },
      {
        "key": "D",
        "text": "22"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-008",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Deductive reasoning",
    "difficulty": "STANDARD",
    "prompt": "All researchers working in a particular laboratory have identity cards. Mira is a researcher working in that laboratory. Which conclusion follows?",
    "options": [
      {
        "key": "A",
        "text": "Mira has an identity card."
      },
      {
        "key": "B",
        "text": "Everyone with an identity card is a researcher."
      },
      {
        "key": "C",
        "text": "Mira manages the laboratory."
      },
      {
        "key": "D",
        "text": "No laboratory visitor has an identity card."
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-009",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Analogies",
    "difficulty": "STANDARD",
    "prompt": "Complete the analogy: “compass : direction :: thermometer : ___”.",
    "options": [
      {
        "key": "A",
        "text": "Distance"
      },
      {
        "key": "B",
        "text": "Temperature"
      },
      {
        "key": "C",
        "text": "Time"
      },
      {
        "key": "D",
        "text": "Pressure"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-lcat-010",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Data interpretation",
    "difficulty": "STANDARD",
    "prompt": "A class has 60 students. If 45 submitted an assignment on time, what percentage submitted it on time?",
    "options": [
      {
        "key": "A",
        "text": "65%"
      },
      {
        "key": "B",
        "text": "70%"
      },
      {
        "key": "C",
        "text": "75%"
      },
      {
        "key": "D",
        "text": "80%"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Differentiation",
    "difficulty": "STANDARD",
    "prompt": "If f(x) = 3x² − 4x, what is f′(2)?",
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
        "text": "10"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Trigonometry",
    "difficulty": "STANDARD",
    "prompt": "What is the value of tan 45° + cos 0°?",
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
        "text": "√2"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Vectors",
    "difficulty": "STANDARD",
    "prompt": "A vector has perpendicular components of 6 units and 8 units. What is its magnitude?",
    "options": [
      {
        "key": "A",
        "text": "8 units"
      },
      {
        "key": "B",
        "text": "10 units"
      },
      {
        "key": "C",
        "text": "12 units"
      },
      {
        "key": "D",
        "text": "14 units"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-004",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Ohm’s law",
    "difficulty": "STANDARD",
    "prompt": "A resistor of 8 Ω is connected across a 24 V supply. What current flows through it?",
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
        "text": "8 A"
      },
      {
        "key": "D",
        "text": "16 A"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-005",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Ionic compounds",
    "difficulty": "STANDARD",
    "prompt": "What is the correct chemical formula for the ionic compound formed by Al³⁺ and O²⁻ ions?",
    "options": [
      {
        "key": "A",
        "text": "AlO"
      },
      {
        "key": "B",
        "text": "AlO₂"
      },
      {
        "key": "C",
        "text": "Al₂O₃"
      },
      {
        "key": "D",
        "text": "Al₃O₂"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-006",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Definite integration",
    "difficulty": "STANDARD",
    "prompt": "Evaluate the definite integral ∫₀² 3x² dx.",
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
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-007",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Motion under gravity",
    "difficulty": "STANDARD",
    "prompt": "An object is dropped from rest. Taking gravitational acceleration as 10 m/s², what is its speed after 2 seconds?",
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
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-008",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Independent events",
    "difficulty": "STANDARD",
    "prompt": "Events A and B are independent, with P(A) = 0.4 and P(B) = 0.5. What is P(A and B)?",
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
        "text": "0.9"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-009",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Binary numbers",
    "difficulty": "EASY",
    "prompt": "What is the decimal value of the binary number 11010₂?",
    "options": [
      {
        "key": "A",
        "text": "22"
      },
      {
        "key": "B",
        "text": "24"
      },
      {
        "key": "C",
        "text": "26"
      },
      {
        "key": "D",
        "text": "28"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-net-010",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Resistors in parallel",
    "difficulty": "STANDARD",
    "prompt": "Two resistors of 3 Ω and 6 Ω are connected in parallel. What is their equivalent resistance?",
    "options": [
      {
        "key": "A",
        "text": "2 Ω"
      },
      {
        "key": "B",
        "text": "3 Ω"
      },
      {
        "key": "C",
        "text": "4 Ω"
      },
      {
        "key": "D",
        "text": "9 Ω"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-001",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Constitutional development",
    "difficulty": "EASY",
    "prompt": "Which change is associated with Pakistan’s 18th Constitutional Amendment, enacted in 2010?",
    "options": [
      {
        "key": "A",
        "text": "Greater provincial autonomy and abolition of the Concurrent Legislative List"
      },
      {
        "key": "B",
        "text": "Replacement of the Senate with a single legislative chamber"
      },
      {
        "key": "C",
        "text": "Transfer of all provincial assemblies to the federal government"
      },
      {
        "key": "D",
        "text": "Introduction of a directly elected executive president"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-002",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Demand and supply",
    "difficulty": "STANDARD",
    "prompt": "Under the law of demand, what normally happens to quantity demanded when a good’s price rises, assuming other relevant factors remain unchanged?",
    "options": [
      {
        "key": "A",
        "text": "It rises."
      },
      {
        "key": "B",
        "text": "It falls."
      },
      {
        "key": "C",
        "text": "It stays fixed in every market."
      },
      {
        "key": "D",
        "text": "It becomes equal to supply."
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-003",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Vocabulary",
    "difficulty": "EASY",
    "prompt": "Which word is closest in meaning to “ubiquitous”?",
    "options": [
      {
        "key": "A",
        "text": "Rare"
      },
      {
        "key": "B",
        "text": "Temporary"
      },
      {
        "key": "C",
        "text": "Found everywhere"
      },
      {
        "key": "D",
        "text": "Difficult to observe"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-004",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Conditional structures",
    "difficulty": "EASY",
    "prompt": "Which sentence uses the inverted form of a past unreal conditional correctly?",
    "options": [
      {
        "key": "A",
        "text": "Had she known about the delay, she would have taken the earlier train."
      },
      {
        "key": "B",
        "text": "Had she knows about the delay, she will take the earlier train."
      },
      {
        "key": "C",
        "text": "If she had know about the delay, she would take the earlier train."
      },
      {
        "key": "D",
        "text": "Were she knew about the delay, she would have taken the earlier train."
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-005",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Research methods",
    "difficulty": "CHALLENGING",
    "prompt": "A city reports fewer traffic incidents after installing new streetlights. Which additional evidence would best help assess whether the lighting contributed to the change?",
    "options": [
      {
        "key": "A",
        "text": "A comparison with similar roads that did not receive new lighting"
      },
      {
        "key": "B",
        "text": "The brand names of the streetlights"
      },
      {
        "key": "C",
        "text": "The number of shops selling lamps in the city"
      },
      {
        "key": "D",
        "text": "The colour chosen for the city’s road signs"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-006",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International relations",
    "difficulty": "STANDARD",
    "prompt": "In international relations, what does the concept of a balance of power generally describe?",
    "options": [
      {
        "key": "A",
        "text": "A system in which one state controls all other states"
      },
      {
        "key": "B",
        "text": "An arrangement in which states counter one another to prevent domination by a single power"
      },
      {
        "key": "C",
        "text": "A rule requiring every state to have the same population"
      },
      {
        "key": "D",
        "text": "The removal of all military capabilities from every state"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-007",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Interpreting evidence",
    "difficulty": "STANDARD",
    "prompt": "A report finds that employment and economic output both rose over three years. What is the most careful conclusion from these observations alone?",
    "options": [
      {
        "key": "A",
        "text": "Higher output definitely caused every new job."
      },
      {
        "key": "B",
        "text": "Employment and output increased over the same period, but the data alone do not establish causation."
      },
      {
        "key": "C",
        "text": "Employment would have fallen if output had not risen."
      },
      {
        "key": "D",
        "text": "The two measures must always change by the same percentage."
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-008",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Federal institutions",
    "difficulty": "EASY",
    "prompt": "Which principle is reflected in the composition of Pakistan’s Senate?",
    "options": [
      {
        "key": "A",
        "text": "Each province has equal representation in the Senate."
      },
      {
        "key": "B",
        "text": "Senate seats are allocated only according to provincial population."
      },
      {
        "key": "C",
        "text": "Only the federal capital elects senators."
      },
      {
        "key": "D",
        "text": "Senators are selected by direct nationwide presidential vote."
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-009",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Argument analysis",
    "difficulty": "STANDARD",
    "prompt": "A person rejects a policy proposal only because its author is young, without addressing the proposal itself. Which reasoning error is this?",
    "options": [
      {
        "key": "A",
        "text": "False dilemma"
      },
      {
        "key": "B",
        "text": "Ad hominem"
      },
      {
        "key": "C",
        "text": "Appeal to tradition"
      },
      {
        "key": "D",
        "text": "Hasty generalisation"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-css-010",
    "examCode": "CSS",
    "subjectCode": "MATH",
    "topic": "Statistics",
    "difficulty": "EASY",
    "prompt": "What is the median of the ordered values 3, 7, 8, 12 and 20?",
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
        "text": "12"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Gene expression",
    "difficulty": "EASY",
    "prompt": "During transcription in a eukaryotic cell, which enzyme synthesises an RNA strand using a DNA template?",
    "options": [
      {
        "key": "A",
        "text": "DNA ligase"
      },
      {
        "key": "B",
        "text": "RNA polymerase"
      },
      {
        "key": "C",
        "text": "DNA helicase"
      },
      {
        "key": "D",
        "text": "Reverse transcriptase"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-002",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Molarity",
    "difficulty": "STANDARD",
    "prompt": "A solution contains 0.5 moles of solute in a total volume of 2.0 litres. What is its molarity?",
    "options": [
      {
        "key": "A",
        "text": "0.10 mol/L"
      },
      {
        "key": "B",
        "text": "0.20 mol/L"
      },
      {
        "key": "C",
        "text": "0.25 mol/L"
      },
      {
        "key": "D",
        "text": "1.00 mol/L"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-003",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Series circuits",
    "difficulty": "STANDARD",
    "prompt": "Two resistors of 3 Ω and 6 Ω are connected in series. What is their total resistance?",
    "options": [
      {
        "key": "A",
        "text": "2 Ω"
      },
      {
        "key": "B",
        "text": "3 Ω"
      },
      {
        "key": "C",
        "text": "9 Ω"
      },
      {
        "key": "D",
        "text": "18 Ω"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-004",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Human circulation",
    "difficulty": "EASY",
    "prompt": "Which blood vessel carries oxygenated blood from the left ventricle into the systemic circulation?",
    "options": [
      {
        "key": "A",
        "text": "Pulmonary artery"
      },
      {
        "key": "B",
        "text": "Aorta"
      },
      {
        "key": "C",
        "text": "Pulmonary vein"
      },
      {
        "key": "D",
        "text": "Vena cava"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-005",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Acids and pH",
    "difficulty": "STANDARD",
    "prompt": "Assuming complete dissociation, what is the pH of a 0.01 mol/L solution of a strong monoprotic acid?",
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
        "text": "7"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-006",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Meiosis",
    "difficulty": "EASY",
    "prompt": "During which stage of meiosis does crossing over between homologous chromosomes normally occur?",
    "options": [
      {
        "key": "A",
        "text": "Prophase I"
      },
      {
        "key": "B",
        "text": "Metaphase II"
      },
      {
        "key": "C",
        "text": "Anaphase II"
      },
      {
        "key": "D",
        "text": "Telophase I"
      }
    ],
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-007",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Kinetic energy",
    "difficulty": "STANDARD",
    "prompt": "What is the kinetic energy of a 2 kg object moving at 3 m/s?",
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
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-008",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Oxidation numbers",
    "difficulty": "EASY",
    "prompt": "What is the oxidation number of sulfur in H₂SO₄?",
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
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-009",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Kidney function",
    "difficulty": "EASY",
    "prompt": "In a nephron, which structure receives filtrate as blood is filtered across the glomerular capillaries?",
    "options": [
      {
        "key": "A",
        "text": "Proximal convoluted tubule"
      },
      {
        "key": "B",
        "text": "Bowman’s capsule"
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
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  },
  {
    "id": "v16-mdcat-010",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Wave properties",
    "difficulty": "STANDARD",
    "prompt": "A wave has a frequency of 50 Hz. What is its period?",
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
    "instruction": "Choose one answer.",
    "sourceKind": "original-sample"
  }
];
