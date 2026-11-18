import type { PrivateStudyQuestion } from "./_sample-content.js";

/** 64 additional original Arthic questions. Answer keys and explanations remain server-side. */
export const EXPANDED_SAMPLE_QUESTIONS: PrivateStudyQuestion[] = [
  {
    "id": "lcat-extra-001",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "prompt": "In the sentence “The new timetable is intended to alleviate pressure on students,” what does “alleviate” mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Increase"
      },
      {
        "key": "B",
        "text": "Reduce"
      },
      {
        "key": "C",
        "text": "Measure"
      },
      {
        "key": "D",
        "text": "Ignore"
      }
    ],
    "answer": "B",
    "explanation": "“Alleviate” means to make a problem or difficulty less severe.\nThe sentence says the timetable is meant to make pressure lighter.",
    "takeaway": "Alleviate means to reduce or ease a difficulty.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-002",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Analogies",
    "prompt": "Complete the relationship: “thermometer : temperature :: barometer : ___”.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Wind direction"
      },
      {
        "key": "B",
        "text": "Air pressure"
      },
      {
        "key": "C",
        "text": "Rainfall"
      },
      {
        "key": "D",
        "text": "Humidity"
      }
    ],
    "answer": "B",
    "explanation": "A thermometer measures temperature.\nA barometer measures atmospheric pressure.",
    "takeaway": "Identify what the first instrument measures, then apply the same relationship.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-003",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Reading comprehension",
    "prompt": "A neighbourhood opens a shared garden on an unused plot. Residents volunteer to grow vegetables and maintain the space. Which conclusion is best supported?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The plot is now used for a shared community activity."
      },
      {
        "key": "B",
        "text": "Residents no longer need to buy any food."
      },
      {
        "key": "C",
        "text": "The garden will solve every local environmental problem."
      },
      {
        "key": "D",
        "text": "Only professional gardeners can take part."
      }
    ],
    "answer": "A",
    "explanation": "The passage describes residents using the plot together.\nIt does not claim that the garden replaces food shopping or solves every problem.",
    "takeaway": "Choose the conclusion directly supported by the information given.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-004",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Author’s purpose",
    "prompt": "A short article describes how a public library lends musical instruments as well as books. It gives examples of beginners who borrowed instruments. What is the article mainly doing?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Arguing that books should be removed"
      },
      {
        "key": "B",
        "text": "Explaining an additional service offered by the library"
      },
      {
        "key": "C",
        "text": "Comparing the prices of musical instruments"
      },
      {
        "key": "D",
        "text": "Showing that music lessons are compulsory"
      }
    ],
    "answer": "B",
    "explanation": "The examples illustrate a service beyond the library’s usual book lending.\nNothing in the passage suggests removing books or requiring lessons.",
    "takeaway": "The main purpose is the central idea supported by the examples.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-005",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Linear equations",
    "prompt": "A taxi fare consists of a fixed Rs. 150 charge plus Rs. 40 per kilometre. What is the fare for a 6 km trip?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 240"
      },
      {
        "key": "B",
        "text": "Rs. 300"
      },
      {
        "key": "C",
        "text": "Rs. 390"
      },
      {
        "key": "D",
        "text": "Rs. 450"
      }
    ],
    "answer": "C",
    "explanation": "The distance charge is 6 × Rs. 40 = Rs. 240.\nAdd the fixed charge: Rs. 240 + Rs. 150 = Rs. 390.",
    "takeaway": "Calculate the variable charge first, then add the fixed fee.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-006",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Fractions",
    "prompt": "A student completes 3/5 of a 40-question practice set. How many questions has the student completed?",
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
        "text": "30"
      }
    ],
    "answer": "C",
    "explanation": "Find one fifth: 40 ÷ 5 = 8.\nThree fifths is 3 × 8 = 24 questions.",
    "takeaway": "To find a fraction of a quantity, divide by the denominator and multiply by the numerator.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-007",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Simple interest",
    "prompt": "What simple interest is earned on Rs. 8,000 at 5% per year for 2 years?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 400"
      },
      {
        "key": "B",
        "text": "Rs. 800"
      },
      {
        "key": "C",
        "text": "Rs. 1,000"
      },
      {
        "key": "D",
        "text": "Rs. 1,600"
      }
    ],
    "answer": "B",
    "explanation": "Simple interest is P × r × t.\nRs. 8,000 × 0.05 × 2 = Rs. 800.",
    "takeaway": "Use the original principal for each year when calculating simple interest.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-008",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Coordinate geometry",
    "prompt": "A straight line passes through (2, 3) and (6, 11). What is its gradient?",
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
    "answer": "B",
    "explanation": "Gradient = change in y ÷ change in x.\n(11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2.",
    "takeaway": "The gradient measures vertical change for each unit of horizontal change.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-009",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Logical deduction",
    "prompt": "All members of the debate team attend weekly practice. Hira is a member of the debate team. Which conclusion follows?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Hira attends weekly practice."
      },
      {
        "key": "B",
        "text": "Hira leads every practice session."
      },
      {
        "key": "C",
        "text": "Everyone who attends practice is on the debate team."
      },
      {
        "key": "D",
        "text": "Hira has won a debate competition."
      }
    ],
    "answer": "A",
    "explanation": "The rule applies to every debate-team member.\nHira is identified as a member, so the rule applies to her.",
    "takeaway": "Apply the stated rule without adding information that was not given.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-010",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Ordering",
    "prompt": "Mina finishes a task before Omar. Omar finishes before Zara. Who must finish first?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Mina"
      },
      {
        "key": "B",
        "text": "Omar"
      },
      {
        "key": "C",
        "text": "Zara"
      },
      {
        "key": "D",
        "text": "The order cannot be determined"
      }
    ],
    "answer": "A",
    "explanation": "Mina is before Omar, and Omar is before Zara.\nTherefore the order is Mina, Omar, then Zara.",
    "takeaway": "Combine the pairwise order statements to find the full sequence.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-011",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Conditional reasoning",
    "prompt": "A rule says: “If a report is submitted, it is reviewed by the tutor.” The report has not been submitted. What can be concluded?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It has already been reviewed."
      },
      {
        "key": "B",
        "text": "It will never be reviewed."
      },
      {
        "key": "C",
        "text": "The rule alone does not tell us whether it will be reviewed."
      },
      {
        "key": "D",
        "text": "The tutor has rejected it."
      }
    ],
    "answer": "C",
    "explanation": "The rule states what happens after submission.\nIt does not state what happens when a report has not been submitted.",
    "takeaway": "Do not reverse an if–then statement unless the reverse is also given.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-012",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Set reasoning",
    "prompt": "In a group of 30 students, 18 study Biology and 12 study Chemistry. If 5 study both, how many study at least one of the two subjects?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "25"
      },
      {
        "key": "C",
        "text": "30"
      },
      {
        "key": "D",
        "text": "35"
      }
    ],
    "answer": "B",
    "explanation": "Add the two group sizes: 18 + 12 = 30.\nThe 5 students in both groups were counted twice, so subtract 5: 25.",
    "takeaway": "For two overlapping groups, add the sizes and subtract the overlap once.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-013",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Verb forms",
    "prompt": "Choose the correct completion: “If I ___ more time, I would review the final chapter.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "have"
      },
      {
        "key": "B",
        "text": "had"
      },
      {
        "key": "C",
        "text": "will have"
      },
      {
        "key": "D",
        "text": "am having"
      }
    ],
    "answer": "B",
    "explanation": "This sentence describes an unreal or hypothetical present situation.\nThe standard second conditional uses “if + past simple” followed by “would”.",
    "takeaway": "Use “If I had …, I would …” for a hypothetical situation.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-014",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Parallel structure",
    "prompt": "Which sentence uses parallel structure correctly?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The role involves planning, coordinating and evaluating projects."
      },
      {
        "key": "B",
        "text": "The role involves planning, to coordinate and project evaluation."
      },
      {
        "key": "C",
        "text": "The role involves to plan, coordination and evaluating projects."
      },
      {
        "key": "D",
        "text": "The role involves plans, coordinating and to evaluate projects."
      }
    ],
    "answer": "A",
    "explanation": "The three activities use the same grammatical form: planning, coordinating and evaluating.\nConsistent forms make the sentence easier to read.",
    "takeaway": "Items in a list should follow the same grammatical pattern.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-015",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Sentence completion",
    "prompt": "Choose the best connector: “___ the journey was long, the team arrived before sunset.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Because"
      },
      {
        "key": "B",
        "text": "Although"
      },
      {
        "key": "C",
        "text": "Unless"
      },
      {
        "key": "D",
        "text": "Therefore"
      }
    ],
    "answer": "B",
    "explanation": "The sentence contrasts a long journey with an early arrival.\n“Although” introduces that contrast naturally.",
    "takeaway": "Choose a connector that expresses the logical relationship between the clauses.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-016",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Punctuation",
    "prompt": "Which sentence uses the semicolon correctly?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The lecture ended; and the students left."
      },
      {
        "key": "B",
        "text": "The lecture ended; the students left quietly."
      },
      {
        "key": "C",
        "text": "The lecture; ended and the students left."
      },
      {
        "key": "D",
        "text": "The lecture ended the students; left quietly."
      }
    ],
    "answer": "B",
    "explanation": "A semicolon can join two closely related independent clauses.\n“The lecture ended” and “the students left quietly” can each stand as a sentence.",
    "takeaway": "Use a semicolon between two complete, closely related clauses.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Trigonometry",
    "prompt": "What is the value of sin 30°?",
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
        "text": "√2/2"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "answer": "B",
    "explanation": "In a 30°–60°–90° triangle, the side opposite 30° is half the hypotenuse.\nTherefore sin 30° = opposite ÷ hypotenuse = 1/2.",
    "takeaway": "Remember the standard trigonometric values for common angles.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Coordinate geometry",
    "prompt": "What is the gradient of the line joining (1, 2) and (4, 8)?",
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
        "text": "6"
      }
    ],
    "answer": "B",
    "explanation": "Gradient = (y₂ − y₁) ÷ (x₂ − x₁).\n(8 − 2) ÷ (4 − 1) = 6 ÷ 3 = 2.",
    "takeaway": "Substitute both points into the gradient formula.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Quadratic equations",
    "prompt": "What are the roots of x² − 7x + 12 = 0?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 and 6"
      },
      {
        "key": "B",
        "text": "3 and 4"
      },
      {
        "key": "C",
        "text": "−3 and −4"
      },
      {
        "key": "D",
        "text": "1 and 12"
      }
    ],
    "answer": "B",
    "explanation": "Factor the expression: x² − 7x + 12 = (x − 3)(x − 4).\nSetting each factor to zero gives x = 3 or x = 4.",
    "takeaway": "Factor a quadratic into two expressions and set each factor equal to zero.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-004",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Sequences",
    "prompt": "A geometric sequence begins 3, 6, 12, 24. What is the next term?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "36"
      },
      {
        "key": "C",
        "text": "42"
      },
      {
        "key": "D",
        "text": "48"
      }
    ],
    "answer": "D",
    "explanation": "Each term is multiplied by 2 to get the next term.\nThe next term is 24 × 2 = 48.",
    "takeaway": "In a geometric sequence, multiply by the common ratio each time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-005",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Work and energy",
    "prompt": "A 2 kg object moves at 3 m/s. What is its kinetic energy?",
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
    "answer": "C",
    "explanation": "Kinetic energy = ½mv².\n½ × 2 × 3² = 9 J.",
    "takeaway": "Use one half multiplied by mass and the square of speed.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-006",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Wave motion",
    "prompt": "A wave has frequency 50 Hz and wavelength 2 m. What is its speed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "25 m/s"
      },
      {
        "key": "B",
        "text": "50 m/s"
      },
      {
        "key": "C",
        "text": "100 m/s"
      },
      {
        "key": "D",
        "text": "200 m/s"
      }
    ],
    "answer": "C",
    "explanation": "Wave speed = frequency × wavelength.\n50 × 2 = 100 m/s.",
    "takeaway": "Use v = fλ to connect wave speed, frequency and wavelength.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-007",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Power",
    "prompt": "A machine transfers 120 J of energy in 4 seconds. What is its average power?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "30 W"
      },
      {
        "key": "B",
        "text": "60 W"
      },
      {
        "key": "C",
        "text": "120 W"
      },
      {
        "key": "D",
        "text": "480 W"
      }
    ],
    "answer": "A",
    "explanation": "Power is energy transferred per unit time.\n120 J ÷ 4 s = 30 W.",
    "takeaway": "Power equals energy divided by time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-008",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Pressure",
    "prompt": "A force of 20 N acts uniformly over an area of 0.5 m². What pressure is produced?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10 Pa"
      },
      {
        "key": "B",
        "text": "20 Pa"
      },
      {
        "key": "C",
        "text": "40 Pa"
      },
      {
        "key": "D",
        "text": "100 Pa"
      }
    ],
    "answer": "C",
    "explanation": "Pressure = force ÷ area.\n20 N ÷ 0.5 m² = 40 Pa.",
    "takeaway": "Pressure increases when the same force acts over a smaller area.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-009",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Algorithms",
    "prompt": "Which condition is required for standard binary search to work correctly?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The list must be sorted."
      },
      {
        "key": "B",
        "text": "The list must contain only even numbers."
      },
      {
        "key": "C",
        "text": "The list must contain no repeated values."
      },
      {
        "key": "D",
        "text": "The list must have exactly ten items."
      }
    ],
    "answer": "A",
    "explanation": "Binary search compares the target with the middle item.\nIt discards half the remaining search range, which relies on sorted order.",
    "takeaway": "Binary search requires the data to be ordered.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-010",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Programming basics",
    "prompt": "In Python, what does items[0] return for the list items = [7, 9, 12]?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "7"
      },
      {
        "key": "B",
        "text": "9"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "An error"
      }
    ],
    "answer": "A",
    "explanation": "Python lists use zero-based indexing.\nIndex 0 refers to the first item, which is 7.",
    "takeaway": "The first element of a Python list is at index 0.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-011",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Boolean logic",
    "prompt": "What is the result of (True and False) or True?",
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
    "answer": "A",
    "explanation": "True and False evaluates to False.\nFalse or True evaluates to True.",
    "takeaway": "Evaluate the expression inside the brackets first, then apply “or”.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-012",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Data structures",
    "prompt": "Which data structure normally follows the first-in, first-out (FIFO) principle?",
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
        "text": "Tree"
      },
      {
        "key": "D",
        "text": "Graph"
      }
    ],
    "answer": "B",
    "explanation": "A queue removes items in the order they were added.\nThe earliest item added is the first item removed.",
    "takeaway": "A queue follows FIFO; a stack normally follows LIFO.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-013",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Atomic structure",
    "prompt": "Two isotopes of the same element have different numbers of which particles?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Protons"
      },
      {
        "key": "B",
        "text": "Neutrons"
      },
      {
        "key": "C",
        "text": "Electrons in neutral atoms"
      },
      {
        "key": "D",
        "text": "Nuclei"
      }
    ],
    "answer": "B",
    "explanation": "Isotopes are atoms of the same element, so they have the same proton number.\nThey differ in neutron number, which changes their mass number.",
    "takeaway": "Isotopes share a proton number but have different neutron numbers.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-014",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Periodic trends",
    "prompt": "Across a period from left to right, what generally happens to atomic radius?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It increases"
      },
      {
        "key": "B",
        "text": "It decreases"
      },
      {
        "key": "C",
        "text": "It stays exactly constant"
      },
      {
        "key": "D",
        "text": "It first becomes zero"
      }
    ],
    "answer": "B",
    "explanation": "Nuclear charge increases across a period.\nElectrons are added to the same main shell, so the stronger attraction generally pulls them closer.",
    "takeaway": "Across a period, atomic radius generally decreases because effective nuclear attraction increases.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-015",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Moles",
    "prompt": "How many moles are present in 18 g of water (H₂O)? Use a molar mass of 18 g mol⁻¹.",
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
        "text": "18 mol"
      }
    ],
    "answer": "B",
    "explanation": "Amount in moles = mass ÷ molar mass.\n18 g ÷ 18 g mol⁻¹ = 1 mol.",
    "takeaway": "Divide the sample mass by its molar mass.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-016",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Concentration",
    "prompt": "What is the concentration of a solution containing 0.5 mol of solute in 0.25 dm³ of solution?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.5 mol dm⁻³"
      },
      {
        "key": "B",
        "text": "1 mol dm⁻³"
      },
      {
        "key": "C",
        "text": "2 mol dm⁻³"
      },
      {
        "key": "D",
        "text": "4 mol dm⁻³"
      }
    ],
    "answer": "C",
    "explanation": "Concentration = amount ÷ volume.\n0.5 mol ÷ 0.25 dm³ = 2 mol dm⁻³.",
    "takeaway": "Molar concentration is the number of moles per unit volume.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-001",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "prompt": "Choose the correct verb: “Each of the proposals ___ a separate review.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "require"
      },
      {
        "key": "B",
        "text": "requires"
      },
      {
        "key": "C",
        "text": "requiring"
      },
      {
        "key": "D",
        "text": "have required"
      }
    ],
    "answer": "B",
    "explanation": "The subject is “each”, which is singular.\nThe singular verb “requires” agrees with that subject.",
    "takeaway": "Find the true subject of the sentence before choosing the verb.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-002",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Active and passive voice",
    "prompt": "Choose the correct passive form of: “The committee approved the proposal.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The proposal approves the committee."
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
    "explanation": "The object “the proposal” becomes the subject of the passive sentence.\nThe past simple passive form is “was approved”.",
    "takeaway": "Passive voice places the receiver of the action at the start.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-003",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Vocabulary",
    "prompt": "What does “concise” mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Brief but clear"
      },
      {
        "key": "B",
        "text": "Unnecessarily complicated"
      },
      {
        "key": "C",
        "text": "Unrelated to the subject"
      },
      {
        "key": "D",
        "text": "Based on emotion"
      }
    ],
    "answer": "A",
    "explanation": "A concise statement uses few words.\nIt still communicates the important information clearly.",
    "takeaway": "Concise means brief and clear, not incomplete.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-004",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Sentence coherence",
    "prompt": "Which sentence is the most suitable topic sentence for a paragraph about public libraries?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Public libraries provide shared access to information and learning resources."
      },
      {
        "key": "B",
        "text": "Some buildings have blue doors."
      },
      {
        "key": "C",
        "text": "My notebook has 120 pages."
      },
      {
        "key": "D",
        "text": "Yesterday was a Tuesday."
      }
    ],
    "answer": "A",
    "explanation": "The sentence introduces the central subject of public libraries.\nThe remaining details are unrelated to the proposed paragraph topic.",
    "takeaway": "A topic sentence should introduce the main idea developed by the paragraph.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-005",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "General science",
    "prompt": "In which layer of Earth’s atmosphere does most weather occur?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Stratosphere"
      },
      {
        "key": "B",
        "text": "Mesosphere"
      },
      {
        "key": "C",
        "text": "Troposphere"
      },
      {
        "key": "D",
        "text": "Thermosphere"
      }
    ],
    "answer": "C",
    "explanation": "The troposphere is the lowest main layer of the atmosphere.\nMost clouds and everyday weather processes occur there.",
    "takeaway": "Most weather takes place in the troposphere.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-006",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Human geography",
    "prompt": "What does population density measure?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The total area of a country"
      },
      {
        "key": "B",
        "text": "The number of people per unit of area"
      },
      {
        "key": "C",
        "text": "The annual change in rainfall"
      },
      {
        "key": "D",
        "text": "The proportion of land used for farming"
      }
    ],
    "answer": "B",
    "explanation": "Population density compares the number of people with the area they occupy.\nIt is commonly expressed as people per square kilometre.",
    "takeaway": "Population density is population divided by land area.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-007",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Public health",
    "prompt": "Which action is an example of primary disease prevention?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rehabilitation after an injury"
      },
      {
        "key": "B",
        "text": "Screening to identify an existing condition"
      },
      {
        "key": "C",
        "text": "Vaccination before exposure to a disease"
      },
      {
        "key": "D",
        "text": "Treatment of a confirmed infection"
      }
    ],
    "answer": "C",
    "explanation": "Primary prevention aims to reduce the chance of disease occurring.\nVaccination prepares the immune system before exposure.",
    "takeaway": "Primary prevention acts before a disease develops.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-008",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Scientific method",
    "prompt": "Why is a control group used in an experiment?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To make every result identical"
      },
      {
        "key": "B",
        "text": "To provide a comparison for assessing the tested factor"
      },
      {
        "key": "C",
        "text": "To guarantee the hypothesis is correct"
      },
      {
        "key": "D",
        "text": "To remove the need for measurements"
      }
    ],
    "answer": "B",
    "explanation": "A control group provides a comparison under conditions without the tested intervention.\nThis helps researchers assess whether observed changes may be associated with that intervention.",
    "takeaway": "A control group helps isolate the effect of the variable being tested.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-009",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Pakistan geography",
    "prompt": "Which sea lies to the south of Pakistan?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Red Sea"
      },
      {
        "key": "B",
        "text": "Arabian Sea"
      },
      {
        "key": "C",
        "text": "Caspian Sea"
      },
      {
        "key": "D",
        "text": "Black Sea"
      }
    ],
    "answer": "B",
    "explanation": "Pakistan’s southern coastline borders the Arabian Sea.\nThe coast includes areas of Sindh and Balochistan.",
    "takeaway": "Pakistan’s southern maritime boundary is along the Arabian Sea.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-010",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Physical geography",
    "prompt": "Which mountain range includes K2?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Himalayas"
      },
      {
        "key": "B",
        "text": "Karakoram"
      },
      {
        "key": "C",
        "text": "Hindu Kush"
      },
      {
        "key": "D",
        "text": "Sulaiman Range"
      }
    ],
    "answer": "B",
    "explanation": "K2 is located in the Karakoram range.\nThe Karakoram lies in the wider mountain system of the region.",
    "takeaway": "K2 is a peak in the Karakoram range.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-011",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Macroeconomics",
    "prompt": "What does inflation generally describe?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A sustained rise in the general price level"
      },
      {
        "key": "B",
        "text": "A fall in the number of people employed"
      },
      {
        "key": "C",
        "text": "An increase in the physical size of a country"
      },
      {
        "key": "D",
        "text": "A reduction in all production costs"
      }
    ],
    "answer": "A",
    "explanation": "Inflation is a continuing increase in the overall price level.\nIt reduces the purchasing power of a unit of money when incomes do not rise at the same pace.",
    "takeaway": "Inflation is a sustained rise in the general price level.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-012",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Economic concepts",
    "prompt": "What is opportunity cost?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The money already spent on a choice"
      },
      {
        "key": "B",
        "text": "The next best alternative given up when a choice is made"
      },
      {
        "key": "C",
        "text": "The total amount of tax collected"
      },
      {
        "key": "D",
        "text": "The market price of every available option"
      }
    ],
    "answer": "B",
    "explanation": "Choosing one option means not choosing another.\nOpportunity cost is the value of the best alternative forgone.",
    "takeaway": "Opportunity cost is the next best option sacrificed.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-013",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International organisations",
    "prompt": "Which organisation is primarily concerned with international public health?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "World Health Organization"
      },
      {
        "key": "B",
        "text": "International Maritime Organization"
      },
      {
        "key": "C",
        "text": "World Intellectual Property Organization"
      },
      {
        "key": "D",
        "text": "International Telecommunication Union"
      }
    ],
    "answer": "A",
    "explanation": "The World Health Organization is the United Nations specialised agency for health.\nIts work includes international health coordination and public-health guidance.",
    "takeaway": "WHO focuses on international public health.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-014",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International relations",
    "prompt": "What is diplomacy?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The use of negotiation and communication between states"
      },
      {
        "key": "B",
        "text": "The measurement of domestic rainfall"
      },
      {
        "key": "C",
        "text": "The process of counting national population"
      },
      {
        "key": "D",
        "text": "The setting of private company prices"
      }
    ],
    "answer": "A",
    "explanation": "Diplomacy uses official communication and negotiation between countries.\nIt is a central method for managing relations and addressing disagreements.",
    "takeaway": "Diplomacy is the practice of managing relations through communication and negotiation.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-015",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Evaluating evidence",
    "prompt": "A survey finds that students who sleep longer tend to report better concentration. What is the safest conclusion?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Longer sleep has been proven to cause better concentration."
      },
      {
        "key": "B",
        "text": "The two measures are associated, but the survey alone does not establish causation."
      },
      {
        "key": "C",
        "text": "Concentration has no relationship to sleep."
      },
      {
        "key": "D",
        "text": "Every student will show the same result."
      }
    ],
    "answer": "B",
    "explanation": "The survey reports an association between two measures.\nOther factors or the direction of influence have not been ruled out.",
    "takeaway": "Correlation alone does not prove that one factor causes another.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-016",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Research methods",
    "prompt": "Which sampling method gives every member of a defined population an equal chance of selection?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Convenience sampling"
      },
      {
        "key": "B",
        "text": "Voluntary response sampling"
      },
      {
        "key": "C",
        "text": "Simple random sampling"
      },
      {
        "key": "D",
        "text": "Selecting only the largest subgroup"
      }
    ],
    "answer": "C",
    "explanation": "Simple random sampling uses a selection process in which each population member has an equal chance.\nConvenience and voluntary response methods do not provide that guarantee.",
    "takeaway": "Simple random sampling gives each population member an equal selection chance.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Enzymes",
    "prompt": "What is the main effect of an enzyme on a chemical reaction?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It raises the activation energy"
      },
      {
        "key": "B",
        "text": "It lowers the activation energy"
      },
      {
        "key": "C",
        "text": "It changes the final equilibrium constant"
      },
      {
        "key": "D",
        "text": "It is permanently used up"
      }
    ],
    "answer": "B",
    "explanation": "Enzymes provide an alternative reaction pathway with a lower activation energy.\nThey speed up reactions without being permanently consumed.",
    "takeaway": "Enzymes lower activation energy and act as biological catalysts.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Gas exchange",
    "prompt": "Which feature of alveoli helps make gas exchange efficient?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Thick walls and a small surface area"
      },
      {
        "key": "B",
        "text": "A large surface area and thin walls"
      },
      {
        "key": "C",
        "text": "A waterproof outer layer"
      },
      {
        "key": "D",
        "text": "No blood supply"
      }
    ],
    "answer": "B",
    "explanation": "Alveoli provide a large surface area for diffusion.\nTheir thin walls and close capillary network allow gases to diffuse efficiently.",
    "takeaway": "Thin alveolar walls and a large surface area support rapid gas exchange.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cell division",
    "prompt": "What happens to the chromosome number during meiosis?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It doubles"
      },
      {
        "key": "B",
        "text": "It is halved"
      },
      {
        "key": "C",
        "text": "It remains unchanged in every product cell"
      },
      {
        "key": "D",
        "text": "All chromosomes are destroyed"
      }
    ],
    "answer": "B",
    "explanation": "Meiosis involves two divisions after one round of DNA replication.\nThe resulting gametes have half the chromosome number of the original cell.",
    "takeaway": "Meiosis reduces chromosome number by half to form haploid cells.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-004",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Nucleic acids",
    "prompt": "Which nitrogenous base is found in RNA but not normally in DNA?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Thymine"
      },
      {
        "key": "B",
        "text": "Uracil"
      },
      {
        "key": "C",
        "text": "Cytosine"
      },
      {
        "key": "D",
        "text": "Guanine"
      }
    ],
    "answer": "B",
    "explanation": "RNA uses uracil in place of thymine.\nDNA normally contains thymine, whereas RNA contains uracil.",
    "takeaway": "RNA contains uracil; DNA contains thymine.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-005",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Kidney function",
    "prompt": "Where does ultrafiltration of blood begin in a nephron?",
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
    "explanation": "Blood enters the glomerular capillaries under pressure.\nSmall molecules and water are filtered into Bowman’s capsule.",
    "takeaway": "Ultrafiltration occurs at the glomerulus and Bowman’s capsule.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-006",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Hormones",
    "prompt": "What is the main effect of insulin on blood glucose concentration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It increases blood glucose"
      },
      {
        "key": "B",
        "text": "It lowers blood glucose"
      },
      {
        "key": "C",
        "text": "It stops glucose entering cells"
      },
      {
        "key": "D",
        "text": "It converts all glucose into oxygen"
      }
    ],
    "answer": "B",
    "explanation": "Insulin promotes glucose uptake by certain cells and supports storage as glycogen.\nThese actions reduce glucose concentration in the blood.",
    "takeaway": "Insulin helps lower blood glucose.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-007",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Redox reactions",
    "prompt": "In a redox reaction, oxidation is defined as the:",
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
    "answer": "B",
    "explanation": "Oxidation involves loss of electrons.\nReduction is the gain of electrons, so the two processes occur together.",
    "takeaway": "Remember OIL RIG: oxidation is loss, reduction is gain of electrons.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-008",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Acid–base chemistry",
    "prompt": "What is the main function of a buffer solution?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To prevent every chemical reaction"
      },
      {
        "key": "B",
        "text": "To resist large changes in pH when small amounts of acid or base are added"
      },
      {
        "key": "C",
        "text": "To make every solution neutral"
      },
      {
        "key": "D",
        "text": "To increase temperature at a constant rate"
      }
    ],
    "answer": "B",
    "explanation": "A buffer contains a weak acid/base system and its conjugate partner.\nIt reacts with small additions of acid or base, limiting the pH change.",
    "takeaway": "A buffer resists changes in pH.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-009",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical equilibrium",
    "prompt": "What happens when a catalyst is added to a reversible reaction at equilibrium?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The equilibrium position shifts to the products"
      },
      {
        "key": "B",
        "text": "The equilibrium position shifts to the reactants"
      },
      {
        "key": "C",
        "text": "Equilibrium is reached faster, but its position is unchanged"
      },
      {
        "key": "D",
        "text": "The equilibrium constant becomes zero"
      }
    ],
    "answer": "C",
    "explanation": "A catalyst increases the rates of both forward and reverse reactions.\nIt does not change the equilibrium constant or the final equilibrium composition.",
    "takeaway": "A catalyst changes reaction rate, not the equilibrium position.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-010",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Empirical formula",
    "prompt": "A compound contains approximately 40% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is its empirical formula?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "CH₂O"
      },
      {
        "key": "B",
        "text": "C₂H₄O₂"
      },
      {
        "key": "C",
        "text": "CHO"
      },
      {
        "key": "D",
        "text": "CH₄O"
      }
    ],
    "answer": "A",
    "explanation": "Assume 100 g: the mole amounts are about 40/12, 6.7/1 and 53.3/16.\nDividing by the smallest gives an approximate ratio of 1:2:1.",
    "takeaway": "The empirical formula is the simplest whole-number atom ratio.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-011",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical bonding",
    "prompt": "What happens when two atoms form a typical covalent bond?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "They share a pair of electrons"
      },
      {
        "key": "B",
        "text": "One atom always loses all its electrons"
      },
      {
        "key": "C",
        "text": "Their nuclei merge"
      },
      {
        "key": "D",
        "text": "They exchange neutrons"
      }
    ],
    "answer": "A",
    "explanation": "A covalent bond forms when atoms share electron pairs.\nThe shared electrons are attracted to both nuclei.",
    "takeaway": "Covalent bonding involves sharing electron pairs.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-012",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Molecular structure",
    "prompt": "Which functional group identifies an alcohol?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "–COOH"
      },
      {
        "key": "B",
        "text": "–OH"
      },
      {
        "key": "C",
        "text": "–CHO"
      },
      {
        "key": "D",
        "text": "–NH₂"
      }
    ],
    "answer": "B",
    "explanation": "Alcohols contain a hydroxyl group attached to a carbon atom.\nThe –COOH group identifies carboxylic acids, not alcohols.",
    "takeaway": "The hydroxyl group –OH is characteristic of alcohols.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-013",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Uniform acceleration",
    "prompt": "A car’s velocity changes from 20 m/s to 5 m/s in 3 seconds. What is its average acceleration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−5 m/s²"
      },
      {
        "key": "B",
        "text": "−3 m/s²"
      },
      {
        "key": "C",
        "text": "5 m/s²"
      },
      {
        "key": "D",
        "text": "15 m/s²"
      }
    ],
    "answer": "A",
    "explanation": "Acceleration = change in velocity ÷ time.\n(5 − 20) ÷ 3 = −15 ÷ 3 = −5 m/s².",
    "takeaway": "A negative acceleration here indicates that velocity has decreased.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-014",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electric circuits",
    "prompt": "A 12 V battery is connected across a 4 Ω resistor. What current flows through the resistor?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.33 A"
      },
      {
        "key": "B",
        "text": "2 A"
      },
      {
        "key": "C",
        "text": "3 A"
      },
      {
        "key": "D",
        "text": "48 A"
      }
    ],
    "answer": "C",
    "explanation": "Ohm’s law gives I = V/R.\n12 V ÷ 4 Ω = 3 A.",
    "takeaway": "Current equals voltage divided by resistance.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-015",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Refraction",
    "prompt": "When a light ray travels from air into water at an angle, how does it bend?",
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
        "text": "It always travels along the surface"
      },
      {
        "key": "D",
        "text": "It stops at the boundary"
      }
    ],
    "answer": "B",
    "explanation": "Water has a higher refractive index than air.\nLight slows down on entering water and bends towards the normal.",
    "takeaway": "Light entering a higher refractive-index medium bends towards the normal.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-016",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Fluid pressure",
    "prompt": "In a liquid at rest, how does pressure change as depth increases?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It decreases"
      },
      {
        "key": "B",
        "text": "It stays the same at all depths"
      },
      {
        "key": "C",
        "text": "It increases"
      },
      {
        "key": "D",
        "text": "It becomes zero"
      }
    ],
    "answer": "C",
    "explanation": "Liquid pressure depends on depth, density and gravitational field strength.\nFor a liquid of constant density, greater depth gives greater pressure.",
    "takeaway": "Hydrostatic pressure increases with depth.",
    "sourceKind": "original-sample"
  }
,
[
  {
    "id": "lcat-extra-017",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Discounts and percentages",
    "prompt": "A jacket costs Rs 2,400 before a 15% discount. What is its sale price?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs 2,040"
      },
      {
        "key": "B",
        "text": "Rs 2,160"
      },
      {
        "key": "C",
        "text": "Rs 2,250"
      },
      {
        "key": "D",
        "text": "Rs 2,340"
      }
    ],
    "answer": "A",
    "explanation": "The discount is 15% of 2,400, which is Rs 360.\nSubtracting the discount gives 2,400 − 360 = Rs 2,040.",
    "takeaway": "A sale price after a discount equals the original price multiplied by 1 − the discount rate.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-018",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Unit rates",
    "prompt": "A printer produces 84 pages in 7 minutes at a constant rate. How many pages will it produce in 12 minutes?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "120"
      },
      {
        "key": "B",
        "text": "132"
      },
      {
        "key": "C",
        "text": "144"
      },
      {
        "key": "D",
        "text": "156"
      }
    ],
    "answer": "C",
    "explanation": "The rate is 84 ÷ 7 = 12 pages per minute.\nIn 12 minutes it produces 12 × 12 = 144 pages.",
    "takeaway": "For a constant rate, multiply the unit rate by the elapsed time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-019",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Linear equations",
    "prompt": "If 4x − 7 = 21, what is the value of x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "answer": "C",
    "explanation": "Add 7 to both sides to get 4x = 28.\nDivide by 4, giving x = 7.",
    "takeaway": "Undo addition or subtraction first, then undo multiplication or division.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-020",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Time and distance",
    "prompt": "A bus travels 180 km in 2.5 hours at a constant speed. What is its average speed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "68 km/h"
      },
      {
        "key": "B",
        "text": "70 km/h"
      },
      {
        "key": "C",
        "text": "72 km/h"
      },
      {
        "key": "D",
        "text": "75 km/h"
      }
    ],
    "answer": "C",
    "explanation": "Average speed is distance divided by time.\n180 ÷ 2.5 = 72 km/h.",
    "takeaway": "Average speed = total distance ÷ total time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-021",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Meaning in context",
    "prompt": "In the sentence “The new policy may mitigate delays,” what does “mitigate” most nearly mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Worsen"
      },
      {
        "key": "B",
        "text": "Reduce"
      },
      {
        "key": "C",
        "text": "Predict"
      },
      {
        "key": "D",
        "text": "Record"
      }
    ],
    "answer": "B",
    "explanation": "To mitigate something is to make it less severe or harmful.\nThe sentence suggests the policy may reduce delays.",
    "takeaway": "Use the surrounding sentence to infer a word’s meaning.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-022",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Supported inference",
    "prompt": "A library extended its evening hours after students requested more study time. Which conclusion is best supported?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Every student studies at night"
      },
      {
        "key": "B",
        "text": "The library had no visitors before the change"
      },
      {
        "key": "C",
        "text": "The change responds to students’ requests"
      },
      {
        "key": "D",
        "text": "The library will remain open all night"
      }
    ],
    "answer": "C",
    "explanation": "The passage directly connects the extended hours with students’ requests.\nIt does not establish how every student behaves or what the library’s full schedule will be.",
    "takeaway": "A supported inference must follow from the information given, not add assumptions.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-023",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Central idea",
    "prompt": "A passage explains that urban trees provide shade, absorb some rainfall and create habitats for birds. Which statement best captures its central idea?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Trees are useful parts of urban environments"
      },
      {
        "key": "B",
        "text": "Birds only live in cities with parks"
      },
      {
        "key": "C",
        "text": "Rainfall is the main problem in cities"
      },
      {
        "key": "D",
        "text": "Urban trees require no maintenance"
      }
    ],
    "answer": "A",
    "explanation": "All three details describe ways trees contribute to urban environments.\nThe other choices are either too narrow or unsupported.",
    "takeaway": "A central idea brings together the main supporting details.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-024",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Author’s purpose",
    "prompt": "An article compares three public transport options by cost, journey time and accessibility. What is its most likely purpose?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To entertain with a travel story"
      },
      {
        "key": "B",
        "text": "To persuade readers to buy a car"
      },
      {
        "key": "C",
        "text": "To compare options using stated criteria"
      },
      {
        "key": "D",
        "text": "To describe the history of a city"
      }
    ],
    "answer": "C",
    "explanation": "The article is organised around comparing options against three criteria.\nThat structure indicates an informative comparison.",
    "takeaway": "Look at the structure and evidence to identify an author’s purpose.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-025",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Set reasoning",
    "prompt": "In a group of 26 students, 15 study Biology, 13 study Chemistry and 5 study neither. How many study both subjects?",
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
    "explanation": "The number studying at least one subject is 26 − 5 = 21.\nUsing inclusion–exclusion, both = 15 + 13 − 21 = 7.",
    "takeaway": "For two overlapping sets, total in either = first + second − both.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-026",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Syllogisms",
    "prompt": "All architects are designers. Some designers are researchers. Which conclusion must be true?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Some architects are researchers"
      },
      {
        "key": "B",
        "text": "All researchers are architects"
      },
      {
        "key": "C",
        "text": "All architects are designers"
      },
      {
        "key": "D",
        "text": "No designers are architects"
      }
    ],
    "answer": "C",
    "explanation": "The first statement directly says every architect belongs to the group of designers.\nThe second statement does not establish whether any architect is a researcher.",
    "takeaway": "A conclusion must be guaranteed by the premises, not merely possible.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-027",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Contrapositive reasoning",
    "prompt": "If the laboratory is open, the lights are on. The lights are not on. What follows logically?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The laboratory is open"
      },
      {
        "key": "B",
        "text": "The laboratory is not open"
      },
      {
        "key": "C",
        "text": "The lights are faulty"
      },
      {
        "key": "D",
        "text": "The laboratory opens later"
      }
    ],
    "answer": "B",
    "explanation": "The statement says an open laboratory implies that the lights are on.\nIf the lights are not on, the laboratory cannot be open under this rule.",
    "takeaway": "For “if P, then Q”, “not Q” allows the conclusion “not P”.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-028",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Number patterns",
    "prompt": "What is the next number in the sequence 4, 9, 14, 19, …?",
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
    "answer": "C",
    "explanation": "Each term increases by 5.\nThe next term is 19 + 5 = 24.",
    "takeaway": "Check the difference between consecutive terms in an arithmetic sequence.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-029",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "prompt": "Choose the sentence with correct subject–verb agreement.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Neither the tutors nor the coordinator are available"
      },
      {
        "key": "B",
        "text": "Neither the tutors nor the coordinator is available"
      },
      {
        "key": "C",
        "text": "Neither the tutor nor the coordinators is available"
      },
      {
        "key": "D",
        "text": "Neither tutors nor coordinator were available"
      }
    ],
    "answer": "B",
    "explanation": "With “neither…nor”, the verb generally agrees with the nearer subject.\n“Coordinator” is singular, so “is” is correct.",
    "takeaway": "With neither…nor, check the subject closest to the verb.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-030",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Punctuation",
    "prompt": "Which sentence uses punctuation correctly?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The meeting ended, however the questions continued."
      },
      {
        "key": "B",
        "text": "The meeting ended; however, the questions continued."
      },
      {
        "key": "C",
        "text": "The meeting ended however; the questions continued."
      },
      {
        "key": "D",
        "text": "The meeting ended however the questions, continued."
      }
    ],
    "answer": "B",
    "explanation": "A semicolon can join two independent clauses.\nThe transition “however” is followed by a comma when it introduces the second clause.",
    "takeaway": "Use a semicolon between closely related independent clauses and set off “however” with a comma.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-031",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Pronoun reference",
    "prompt": "Which sentence makes the pronoun reference clearest?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "When Sara met Amina, she was carrying a folder."
      },
      {
        "key": "B",
        "text": "Sara was carrying a folder when she met Amina."
      },
      {
        "key": "C",
        "text": "She met Amina while Sara carried a folder."
      },
      {
        "key": "D",
        "text": "When she met her, Sara had the folder."
      }
    ],
    "answer": "B",
    "explanation": "The sentence names Sara as the person carrying the folder.\nIt avoids an unclear “she” that could refer to either person.",
    "takeaway": "Place a pronoun close to a clear antecedent, or repeat the name when needed.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-032",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Modifier placement",
    "prompt": "Which sentence correctly shows who was walking to school?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Walking to school, the rain began to fall."
      },
      {
        "key": "B",
        "text": "Walking to school, Mira noticed the rain beginning to fall."
      },
      {
        "key": "C",
        "text": "The rain, walking to school, began to fall."
      },
      {
        "key": "D",
        "text": "Mira noticed, walking to school the rain."
      }
    ],
    "answer": "B",
    "explanation": "The opening phrase “Walking to school” correctly describes Mira, the subject of the main clause.\nIn the other options, the phrase appears to describe something that cannot walk.",
    "takeaway": "An introductory participial phrase should modify the subject that immediately follows it.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-033",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Probability",
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
    "answer": "B",
    "explanation": "The outcomes greater than 4 are 5 and 6.\nThere are 2 favourable outcomes out of 6, so the probability is 2/6 = 1/3.",
    "takeaway": "Probability = favourable outcomes ÷ equally likely total outcomes.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-034",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Averages",
    "prompt": "The mean of 6, 8, 10 and x is 9. What is x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "11"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "13"
      }
    ],
    "answer": "C",
    "explanation": "A mean of 9 across four values gives a total of 4 × 9 = 36.\nThe known values total 24, so x = 36 − 24 = 12.",
    "takeaway": "Find the total from mean × number of values, then subtract known values.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-035",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Argument structure",
    "prompt": "A proposal says a school should add bicycle racks because more students will cycle if secure parking is available. Which assumption does the proposal rely on?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Students never walk to school"
      },
      {
        "key": "B",
        "text": "Some students would consider cycling if parking were secure"
      },
      {
        "key": "C",
        "text": "Bicycle racks reduce the length of every journey"
      },
      {
        "key": "D",
        "text": "All students already own bicycles"
      }
    ],
    "answer": "B",
    "explanation": "The proposal links secure parking to increased cycling.\nThat link assumes at least some students may cycle when parking is available.",
    "takeaway": "Identify the unstated link between the proposal’s action and its predicted result.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-extra-036",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Ordering",
    "prompt": "Four presentations are scheduled in order. H is before J, J is before K, and L is after K. Which presentation must be last?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "H"
      },
      {
        "key": "B",
        "text": "J"
      },
      {
        "key": "C",
        "text": "K"
      },
      {
        "key": "D",
        "text": "L"
      }
    ],
    "answer": "D",
    "explanation": "The conditions establish H before J, J before K, and K before L.\nTherefore the order is H, J, K, L.",
    "takeaway": "Combine pairwise ordering rules to determine the forced sequence.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-017",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Differentiation",
    "prompt": "If f(x) = x² + 3x, what is f′(2)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "answer": "C",
    "explanation": "Differentiate term by term: f′(x) = 2x + 3.\nAt x = 2, f′(2) = 4 + 3 = 7.",
    "takeaway": "Apply the power rule, then substitute the required x-value.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-018",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Logarithms",
    "prompt": "If log₁₀(x) = 2, what is x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "20"
      },
      {
        "key": "C",
        "text": "100"
      },
      {
        "key": "D",
        "text": "1,000"
      }
    ],
    "answer": "C",
    "explanation": "The logarithmic statement means 10 raised to the power 2 equals x.\nTherefore x = 100.",
    "takeaway": "Convert a logarithmic equation to its equivalent exponential form.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-019",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Straight-line gradients",
    "prompt": "What is the gradient of the line passing through (2, 3) and (6, 11)?",
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
    "answer": "B",
    "explanation": "Gradient = change in y divided by change in x.\n(11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2.",
    "takeaway": "The gradient of a line is Δy/Δx.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-020",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Trigonometric identities",
    "prompt": "For an angle θ, which identity is always true?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "sin²θ + cos²θ = 1"
      },
      {
        "key": "B",
        "text": "sin θ + cos θ = 1"
      },
      {
        "key": "C",
        "text": "tan θ = sin θ + cos θ"
      },
      {
        "key": "D",
        "text": "sin 2θ = sin²θ"
      }
    ],
    "answer": "A",
    "explanation": "The Pythagorean identity follows from the unit circle.\nIt holds for every real angle θ.",
    "takeaway": "Remember the fundamental identity sin²θ + cos²θ = 1.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-021",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Matrices",
    "prompt": "What is the determinant of the matrix [[3, 2], [1, 4]]?",
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
    "explanation": "For a 2 × 2 matrix [[a,b],[c,d]], the determinant is ad − bc.\nHere, 3 × 4 − 2 × 1 = 10.",
    "takeaway": "For a 2 × 2 determinant, multiply the main diagonal and subtract the other diagonal product.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-022",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Probability",
    "prompt": "A bag contains 3 red and 2 blue balls. One ball is selected at random. What is the probability it is blue?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1/5"
      },
      {
        "key": "B",
        "text": "2/5"
      },
      {
        "key": "C",
        "text": "3/5"
      },
      {
        "key": "D",
        "text": "2/3"
      }
    ],
    "answer": "B",
    "explanation": "There are 2 blue balls out of 5 balls in total.\nThe probability is 2/5.",
    "takeaway": "Count favourable outcomes and divide by the total equally likely outcomes.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-023",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Conservation of momentum",
    "prompt": "A 2 kg trolley moving at 3 m/s collides with a stationary 1 kg trolley. They move together after impact. What is their shared speed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1 m/s"
      },
      {
        "key": "B",
        "text": "2 m/s"
      },
      {
        "key": "C",
        "text": "3 m/s"
      },
      {
        "key": "D",
        "text": "4 m/s"
      }
    ],
    "answer": "B",
    "explanation": "Initial momentum is 2 × 3 + 1 × 0 = 6 kg m/s.\nThe combined mass is 3 kg, so the shared speed is 6 ÷ 3 = 2 m/s.",
    "takeaway": "For a closed system, total momentum before and after a collision is conserved.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-024",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Gravitational potential energy",
    "prompt": "A 2 kg object is raised 5 m. Taking g = 10 m/s², how much gravitational potential energy does it gain?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "50 J"
      },
      {
        "key": "B",
        "text": "75 J"
      },
      {
        "key": "C",
        "text": "100 J"
      },
      {
        "key": "D",
        "text": "150 J"
      }
    ],
    "answer": "C",
    "explanation": "The gain is mgh = 2 × 10 × 5.\nThe object gains 100 J of gravitational potential energy.",
    "takeaway": "Near Earth’s surface, gravitational potential energy change is mgh.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-025",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Series circuits",
    "prompt": "Two resistors of 4 Ω and 6 Ω are connected in series. What is their equivalent resistance?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 Ω"
      },
      {
        "key": "B",
        "text": "5 Ω"
      },
      {
        "key": "C",
        "text": "10 Ω"
      },
      {
        "key": "D",
        "text": "24 Ω"
      }
    ],
    "answer": "C",
    "explanation": "In series, resistances add directly.\n4 Ω + 6 Ω = 10 Ω.",
    "takeaway": "Equivalent resistance in a series circuit is the sum of the resistances.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-026",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Specific heat capacity",
    "prompt": "How much energy is required to raise the temperature of 2 kg of a substance by 3°C if its specific heat capacity is 500 J/(kg·°C)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1,000 J"
      },
      {
        "key": "B",
        "text": "2,000 J"
      },
      {
        "key": "C",
        "text": "3,000 J"
      },
      {
        "key": "D",
        "text": "4,000 J"
      }
    ],
    "answer": "C",
    "explanation": "Use Q = mcΔT.\nQ = 2 × 500 × 3 = 3,000 J.",
    "takeaway": "Thermal energy change is mass × specific heat capacity × temperature change.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-027",
    "examCode": "NET",
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
    "answer": "D",
    "explanation": "Wave speed equals frequency multiplied by wavelength.\n5 × 2 = 10 m/s.",
    "takeaway": "Use v = fλ to connect wave speed, frequency and wavelength.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-028",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Electric power",
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
    "answer": "C",
    "explanation": "Electrical power is P = VI.\n12 × 2 = 24 W.",
    "takeaway": "Power in a direct-current circuit equals voltage multiplied by current.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-029",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Binary arithmetic",
    "prompt": "What is the binary representation of decimal 13?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1010"
      },
      {
        "key": "B",
        "text": "1011"
      },
      {
        "key": "C",
        "text": "1101"
      },
      {
        "key": "D",
        "text": "1110"
      }
    ],
    "answer": "C",
    "explanation": "13 = 8 + 4 + 1.\nThe place values 8, 4, 2, 1 therefore give 1101₂.",
    "takeaway": "Convert decimal numbers by expressing them as sums of powers of two.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-030",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Boolean logic",
    "prompt": "What is the output of a NAND gate when both inputs are 1?",
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
        "text": "Depends on the circuit"
      },
      {
        "key": "D",
        "text": "Undefined"
      }
    ],
    "answer": "A",
    "explanation": "An AND gate outputs 1 only when both inputs are 1.\nA NAND gate inverts that output, producing 0.",
    "takeaway": "NAND is the logical negation of AND.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-031",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Algorithm complexity",
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
    "answer": "B",
    "explanation": "Binary search halves the remaining search interval at each step.\nThe number of halvings grows in proportion to log₂(n).",
    "takeaway": "Binary search has logarithmic time complexity when the data is sorted.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-032",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Object-oriented programming",
    "prompt": "Which concept groups data and the methods that operate on that data while restricting direct access to internal state?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Iteration"
      },
      {
        "key": "B",
        "text": "Encapsulation"
      },
      {
        "key": "C",
        "text": "Compilation"
      },
      {
        "key": "D",
        "text": "Recursion"
      }
    ],
    "answer": "B",
    "explanation": "Encapsulation bundles state and related behaviour in an object.\nAccess controls help protect the internal representation.",
    "takeaway": "Encapsulation combines related data and operations behind a controlled interface.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-033",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Database keys",
    "prompt": "What is the main purpose of a primary key in a relational database table?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To sort every row alphabetically"
      },
      {
        "key": "B",
        "text": "To uniquely identify each row"
      },
      {
        "key": "C",
        "text": "To store duplicate values"
      },
      {
        "key": "D",
        "text": "To link every table to the internet"
      }
    ],
    "answer": "B",
    "explanation": "A primary key identifies each record uniquely.\nIts values cannot be duplicated within that table.",
    "takeaway": "A primary key provides a unique identifier for each row.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-034",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Isotopes",
    "prompt": "Atoms of the same element that have different numbers of neutrons are called:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Ions"
      },
      {
        "key": "B",
        "text": "Isotopes"
      },
      {
        "key": "C",
        "text": "Isomers"
      },
      {
        "key": "D",
        "text": "Allotropes"
      }
    ],
    "answer": "B",
    "explanation": "Isotopes have the same number of protons but different neutron numbers.\nThey therefore share an atomic number but have different mass numbers.",
    "takeaway": "Isotopes are atoms of one element with different neutron counts.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-035",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Gas laws",
    "prompt": "At constant temperature, a gas occupies 4 L at a pressure of 2 atm. What volume will it occupy at 4 atm?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1 L"
      },
      {
        "key": "B",
        "text": "2 L"
      },
      {
        "key": "C",
        "text": "4 L"
      },
      {
        "key": "D",
        "text": "8 L"
      }
    ],
    "answer": "B",
    "explanation": "Boyle’s law states that pressure × volume is constant at fixed temperature.\nV₂ = (2 × 4) ÷ 4 = 2 L.",
    "takeaway": "For a fixed amount of gas at constant temperature, P₁V₁ = P₂V₂.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-extra-036",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Acids and pH",
    "prompt": "At 25°C, a solution has pH 3. What is its hydrogen-ion concentration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10⁻¹ mol/L"
      },
      {
        "key": "B",
        "text": "10⁻² mol/L"
      },
      {
        "key": "C",
        "text": "10⁻³ mol/L"
      },
      {
        "key": "D",
        "text": "10⁻⁴ mol/L"
      }
    ],
    "answer": "C",
    "explanation": "pH = −log₁₀[H⁺].\nA pH of 3 corresponds to [H⁺] = 10⁻³ mol/L.",
    "takeaway": "Hydrogen-ion concentration is 10 to the power of negative pH.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-017",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Sentence correction",
    "prompt": "Choose the grammatically correct sentence.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The committee have submitted its report"
      },
      {
        "key": "B",
        "text": "The committee has submitted its report"
      },
      {
        "key": "C",
        "text": "The committee has submit their report"
      },
      {
        "key": "D",
        "text": "The committee were submitting its report yesterday"
      }
    ],
    "answer": "B",
    "explanation": "In this sentence, “committee” is treated as a single body.\nThe singular verb “has” agrees with it, and “its” refers back to the committee.",
    "takeaway": "Check whether a collective noun is being treated as one unit or as individuals.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-018",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Précis writing",
    "prompt": "Which quality is most important in a good précis?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Adding personal opinions"
      },
      {
        "key": "B",
        "text": "Preserving the central meaning concisely"
      },
      {
        "key": "C",
        "text": "Including every example"
      },
      {
        "key": "D",
        "text": "Using more words than the original"
      }
    ],
    "answer": "B",
    "explanation": "A précis condenses a passage while preserving its central meaning and logical structure.\nPersonal opinions and unnecessary details should be excluded.",
    "takeaway": "A précis is concise, accurate and faithful to the original passage.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-019",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Logical connectors",
    "prompt": "Which connector best completes the sentence? “The evidence was limited; ___, the report avoided a firm conclusion.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "therefore"
      },
      {
        "key": "B",
        "text": "nevertheless"
      },
      {
        "key": "C",
        "text": "for example"
      },
      {
        "key": "D",
        "text": "similarly"
      }
    ],
    "answer": "A",
    "explanation": "The limited evidence explains why the report avoided a firm conclusion.\n“Therefore” signals that result.",
    "takeaway": "Choose a connector that expresses the logical relationship between the clauses.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-020",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Scientific reasoning",
    "prompt": "A researcher repeats an experiment and obtains similar results. This most directly supports the experiment’s:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Repeatability"
      },
      {
        "key": "B",
        "text": "Popularity"
      },
      {
        "key": "C",
        "text": "Cost"
      },
      {
        "key": "D",
        "text": "Complexity"
      }
    ],
    "answer": "A",
    "explanation": "Similar results under repeated conditions indicate that the procedure produces consistent outcomes.\nThis is evidence of repeatability.",
    "takeaway": "Repeatability concerns whether repeated measurements under the same conditions are consistent.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-021",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Ecosystems",
    "prompt": "In a food chain, green plants are usually classified as:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Primary consumers"
      },
      {
        "key": "B",
        "text": "Decomposers"
      },
      {
        "key": "C",
        "text": "Producers"
      },
      {
        "key": "D",
        "text": "Secondary consumers"
      }
    ],
    "answer": "C",
    "explanation": "Green plants use light energy to produce organic compounds through photosynthesis.\nThey form the producer level of many food chains.",
    "takeaway": "Producers introduce energy into food chains by making organic matter.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-022",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Research ethics",
    "prompt": "A researcher reports only the results that support a preferred conclusion and omits contradictory findings. Which ethical principle is most directly violated?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Objectivity and honest reporting"
      },
      {
        "key": "B",
        "text": "Confidentiality of participants"
      },
      {
        "key": "C",
        "text": "Efficient time management"
      },
      {
        "key": "D",
        "text": "Peer-review scheduling"
      }
    ],
    "answer": "A",
    "explanation": "Selective omission distorts the overall evidence.\nResearch findings should be reported accurately, including results that challenge a hypothesis.",
    "takeaway": "Honest reporting requires presenting relevant evidence fairly, not selectively.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-023",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Geography",
    "prompt": "Which mountain range forms a major part of northern Pakistan?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Kirthar Range"
      },
      {
        "key": "B",
        "text": "Himalayas"
      },
      {
        "key": "C",
        "text": "Salt Range"
      },
      {
        "key": "D",
        "text": "Sulaiman Range"
      }
    ],
    "answer": "B",
    "explanation": "The Himalayan system extends across northern Pakistan and includes major high mountain areas.\nOther ranges also exist in Pakistan, but the Himalayas are a major northern range.",
    "takeaway": "Recognise the main mountain systems and their broad geographical locations.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-024",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Water resources",
    "prompt": "The Indus River system is especially important to Pakistan because it:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Provides a major source of irrigation water"
      },
      {
        "key": "B",
        "text": "Is the country’s only source of electricity"
      },
      {
        "key": "C",
        "text": "Flows only through urban areas"
      },
      {
        "key": "D",
        "text": "Has no connection to agriculture"
      }
    ],
    "answer": "A",
    "explanation": "The Indus and its tributaries support extensive irrigation networks.\nThis makes the river system central to agricultural water supply.",
    "takeaway": "The Indus Basin is a major foundation of Pakistan’s irrigated agriculture.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-025",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Civic concepts",
    "prompt": "In a federal system, constitutional powers are:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Held only by local councils"
      },
      {
        "key": "B",
        "text": "Divided between national and regional governments"
      },
      {
        "key": "C",
        "text": "Exercised only by the courts"
      },
      {
        "key": "D",
        "text": "Transferred entirely to private organisations"
      }
    ],
    "answer": "B",
    "explanation": "Federalism divides authority between a central government and constituent regional units.\nThe exact division is determined by the constitution.",
    "takeaway": "Federal systems share constitutional authority across levels of government.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-026",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Inflation",
    "prompt": "If a household’s income remains unchanged while the general price level rises, its purchasing power will generally:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Increase"
      },
      {
        "key": "B",
        "text": "Decrease"
      },
      {
        "key": "C",
        "text": "Remain exactly the same"
      },
      {
        "key": "D",
        "text": "Become unlimited"
      }
    ],
    "answer": "B",
    "explanation": "Higher prices mean the same nominal income can buy fewer goods and services.\nReal purchasing power therefore falls, other things being equal.",
    "takeaway": "Purchasing power depends on income relative to the price level.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-027",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Opportunity cost",
    "prompt": "A student spends an evening studying instead of working a paid shift. The opportunity cost is best described as:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The money already spent on books"
      },
      {
        "key": "B",
        "text": "The wages forgone by not taking the shift"
      },
      {
        "key": "C",
        "text": "The student’s examination score"
      },
      {
        "key": "D",
        "text": "The total number of study hours"
      }
    ],
    "answer": "B",
    "explanation": "Opportunity cost is the value of the next-best alternative given up.\nHere, the relevant forgone alternative is the paid shift.",
    "takeaway": "Opportunity cost measures the value of the best alternative not chosen.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-028",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Market structures",
    "prompt": "In a perfectly competitive market, an individual firm is generally described as a:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Price maker"
      },
      {
        "key": "B",
        "text": "Price taker"
      },
      {
        "key": "C",
        "text": "Monopoly supplier"
      },
      {
        "key": "D",
        "text": "Government regulator"
      }
    ],
    "answer": "B",
    "explanation": "A perfectly competitive firm is too small relative to the market to set the market price.\nIt accepts the prevailing price when making output decisions.",
    "takeaway": "A price taker accepts the market price rather than setting it.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-029",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "Diplomacy",
    "prompt": "A country’s embassy in another country primarily serves to:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Replace the host country’s courts"
      },
      {
        "key": "B",
        "text": "Maintain official relations and provide consular services"
      },
      {
        "key": "C",
        "text": "Control the host country’s elections"
      },
      {
        "key": "D",
        "text": "Set the host country’s domestic taxes"
      }
    ],
    "answer": "B",
    "explanation": "Embassies represent the sending state and support diplomatic communication.\nThey also commonly provide consular assistance to their nationals.",
    "takeaway": "Embassies facilitate diplomacy and consular support.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-030",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International law",
    "prompt": "The principle of state sovereignty primarily refers to a state’s:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Authority over its own territory and domestic affairs, subject to international law"
      },
      {
        "key": "B",
        "text": "Right to ignore every international agreement"
      },
      {
        "key": "C",
        "text": "Control over all neighbouring states"
      },
      {
        "key": "D",
        "text": "Ability to prevent all foreign trade"
      }
    ],
    "answer": "A",
    "explanation": "Sovereignty concerns a state’s authority within its territory and independence in external relations.\nThat authority operates alongside obligations under international law.",
    "takeaway": "Sovereignty is a core principle of state authority and independence.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-031",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Correlation and causation",
    "prompt": "A study finds that ice-cream sales and swimming attendance both rise in summer. Which conclusion is most reasonable?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Ice cream causes people to swim"
      },
      {
        "key": "B",
        "text": "Swimming causes people to buy ice cream"
      },
      {
        "key": "C",
        "text": "A third factor such as warm weather may influence both"
      },
      {
        "key": "D",
        "text": "The two variables must be unrelated"
      }
    ],
    "answer": "C",
    "explanation": "The observations show an association but do not establish a causal link.\nWarm weather could increase both activities independently.",
    "takeaway": "Correlation alone does not demonstrate causation.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-032",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Sampling bias",
    "prompt": "A survey about public transport is conducted only among people waiting at a railway station. What is the main limitation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The sample may overrepresent people who already use rail services"
      },
      {
        "key": "B",
        "text": "The sample is guaranteed to represent everyone"
      },
      {
        "key": "C",
        "text": "The survey cannot contain numerical data"
      },
      {
        "key": "D",
        "text": "The results must be completely false"
      }
    ],
    "answer": "A",
    "explanation": "People at a railway station are more likely than the general population to use rail services.\nTheir views may not represent all residents.",
    "takeaway": "A sample should reflect the population the researcher wants to describe.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-033",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Climate systems",
    "prompt": "Which gas is a major contributor to human-caused global warming?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Oxygen"
      },
      {
        "key": "B",
        "text": "Carbon dioxide"
      },
      {
        "key": "C",
        "text": "Argon"
      },
      {
        "key": "D",
        "text": "Neon"
      }
    ],
    "answer": "B",
    "explanation": "Carbon dioxide absorbs and emits infrared radiation.\nHuman activities such as burning fossil fuels increase its atmospheric concentration.",
    "takeaway": "Carbon dioxide is a major long-lived greenhouse gas.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-034",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Public administration",
    "prompt": "In public administration, transparency most directly means:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Making relevant decisions and information open to scrutiny"
      },
      {
        "key": "B",
        "text": "Keeping all procedures secret"
      },
      {
        "key": "C",
        "text": "Removing records after decisions"
      },
      {
        "key": "D",
        "text": "Giving every task to one official"
      }
    ],
    "answer": "A",
    "explanation": "Transparency allows people to understand how decisions are made and how public resources are used.\nIt supports accountability and informed scrutiny.",
    "takeaway": "Transparency makes public decision-making open and reviewable.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-035",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Agricultural geography",
    "prompt": "Which crop is widely associated with the irrigated plains of Punjab and Sindh?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Wheat"
      },
      {
        "key": "B",
        "text": "Coffee"
      },
      {
        "key": "C",
        "text": "Cocoa"
      },
      {
        "key": "D",
        "text": "Rubber"
      }
    ],
    "answer": "A",
    "explanation": "Wheat is a major staple crop cultivated widely across Pakistan’s irrigated plains.\nIts production depends on suitable soils, water and seasonal conditions.",
    "takeaway": "Wheat is a major food crop in Pakistan’s agricultural regions.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-extra-036",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Evaluating arguments",
    "prompt": "An argument claims that a new library caused exam results to improve because results rose after the library opened. What additional information would most strengthen the causal claim?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A comparison with similar students or schools without the new library"
      },
      {
        "key": "B",
        "text": "The library’s paint colour"
      },
      {
        "key": "C",
        "text": "The number of shelves in the building"
      },
      {
        "key": "D",
        "text": "The date the argument was written"
      }
    ],
    "answer": "A",
    "explanation": "A suitable comparison group helps show whether results would have improved without the library.\nIt can help separate the library’s effect from other changes.",
    "takeaway": "Use a credible comparison to assess whether a change caused an outcome.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-017",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Blood components",
    "prompt": "Which blood component is primarily responsible for transporting oxygen from the lungs to body tissues?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Platelets"
      },
      {
        "key": "B",
        "text": "Red blood cells"
      },
      {
        "key": "C",
        "text": "White blood cells"
      },
      {
        "key": "D",
        "text": "Plasma proteins"
      }
    ],
    "answer": "B",
    "explanation": "Red blood cells contain haemoglobin, which binds oxygen in the lungs and releases it in tissues.\nThis makes them the main oxygen-transporting cells.",
    "takeaway": "Haemoglobin in red blood cells carries most oxygen in the blood.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-018",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Nervous coordination",
    "prompt": "Which part of a neuron usually receives signals from other neurons?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Axon terminal"
      },
      {
        "key": "B",
        "text": "Dendrites"
      },
      {
        "key": "C",
        "text": "Myelin sheath"
      },
      {
        "key": "D",
        "text": "Node of Ranvier"
      }
    ],
    "answer": "B",
    "explanation": "Dendrites are branched extensions that commonly receive incoming signals.\nThe cell body integrates these inputs before signals travel along the axon.",
    "takeaway": "Dendrites are the main receiving extensions of a typical neuron.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-019",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Plant transport",
    "prompt": "Which tissue transports water and mineral ions from roots towards the leaves?",
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
    "answer": "B",
    "explanation": "Xylem vessels and tracheids conduct water and dissolved minerals through the plant.\nPhloem mainly transports organic products such as sucrose.",
    "takeaway": "Xylem carries water and mineral ions; phloem transports sugars.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-020",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cellular respiration",
    "prompt": "In aerobic respiration, the final electron acceptor in the electron transport chain is:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Carbon dioxide"
      },
      {
        "key": "B",
        "text": "Oxygen"
      },
      {
        "key": "C",
        "text": "Glucose"
      },
      {
        "key": "D",
        "text": "NADH"
      }
    ],
    "answer": "B",
    "explanation": "Oxygen accepts electrons at the end of the electron transport chain.\nIt combines with electrons and protons to form water.",
    "takeaway": "Oxygen is the terminal electron acceptor in aerobic respiration.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-021",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Inheritance",
    "prompt": "If two heterozygous parents (Aa × Aa) are crossed, what is the probability of an aa offspring?",
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
    "explanation": "The possible genotypes are AA, Aa, Aa and aa.\nOne of the four equally likely combinations is aa.",
    "takeaway": "A heterozygous monohybrid cross gives a 1:2:1 genotype ratio.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-022",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Immune response",
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
        "text": "Neurons"
      }
    ],
    "answer": "A",
    "explanation": "Activated B lymphocytes can differentiate into plasma cells.\nPlasma cells produce and release antibodies that bind specific antigens.",
    "takeaway": "Plasma cells are antibody-secreting descendants of B lymphocytes.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-023",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Endocrine system",
    "prompt": "Which hormone lowers blood glucose by promoting uptake of glucose by many body cells?",
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
    "answer": "B",
    "explanation": "Insulin promotes glucose uptake in several tissues and supports storage of excess glucose.\nIts overall effect is to lower blood glucose concentration.",
    "takeaway": "Insulin reduces blood glucose; glucagon generally raises it.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-024",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Ecology",
    "prompt": "Organisms that break down dead organic matter and recycle nutrients are called:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Producers"
      },
      {
        "key": "B",
        "text": "Primary consumers"
      },
      {
        "key": "C",
        "text": "Decomposers"
      },
      {
        "key": "D",
        "text": "Predators"
      }
    ],
    "answer": "C",
    "explanation": "Decomposers such as many bacteria and fungi break down organic remains.\nThis returns nutrients to the environment for reuse.",
    "takeaway": "Decomposers recycle nutrients by breaking down dead material.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-025",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Molar concentration",
    "prompt": "What is the molarity of a solution containing 0.5 mol of solute in 2 L of solution?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.10 M"
      },
      {
        "key": "B",
        "text": "0.20 M"
      },
      {
        "key": "C",
        "text": "0.25 M"
      },
      {
        "key": "D",
        "text": "1.00 M"
      }
    ],
    "answer": "C",
    "explanation": "Molarity is moles of solute divided by solution volume in litres.\n0.5 ÷ 2 = 0.25 mol/L.",
    "takeaway": "Molarity = moles of solute ÷ litres of solution.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-026",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Organic chemistry",
    "prompt": "Which functional group is characteristic of alcohols?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−COOH"
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
    "answer": "B",
    "explanation": "Alcohols contain a hydroxyl group, written −OH, attached to a carbon atom.\nThe other groups identify different families of organic compounds.",
    "takeaway": "The hydroxyl (−OH) group identifies alcohols.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-027",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical equilibrium",
    "prompt": "For a reversible reaction at dynamic equilibrium, which statement is correct?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The forward reaction stops"
      },
      {
        "key": "B",
        "text": "The reverse reaction stops"
      },
      {
        "key": "C",
        "text": "Forward and reverse reaction rates are equal"
      },
      {
        "key": "D",
        "text": "Reactant and product concentrations must be equal"
      }
    ],
    "answer": "C",
    "explanation": "At dynamic equilibrium, both reactions continue.\nTheir rates are equal, so concentrations remain constant over time.",
    "takeaway": "Dynamic equilibrium means equal forward and reverse reaction rates.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-028",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Periodic table",
    "prompt": "Across a period from left to right, atomic radius generally:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Increases"
      },
      {
        "key": "B",
        "text": "Decreases"
      },
      {
        "key": "C",
        "text": "Remains exactly constant"
      },
      {
        "key": "D",
        "text": "First becomes infinite"
      }
    ],
    "answer": "B",
    "explanation": "Across a period, nuclear charge increases while added electrons enter the same principal shell.\nThe stronger attraction generally pulls the electron cloud closer to the nucleus.",
    "takeaway": "Atomic radius generally decreases across a period.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-029",
    "examCode": "MDCAT",
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
        "text": "+1"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "+2"
      }
    ],
    "answer": "A",
    "explanation": "Oxygen commonly has an oxidation number of −2 in compounds.\nThere are exceptions, such as peroxides and compounds with fluorine.",
    "takeaway": "Use −2 for oxygen in most compounds, while remembering the exceptions.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-030",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Acid–base reactions",
    "prompt": "What are the main products when hydrochloric acid reacts completely with sodium hydroxide?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Sodium chloride and water"
      },
      {
        "key": "B",
        "text": "Sodium and hydrogen gas"
      },
      {
        "key": "C",
        "text": "Chlorine and oxygen"
      },
      {
        "key": "D",
        "text": "Sodium oxide and hydrogen"
      }
    ],
    "answer": "A",
    "explanation": "Hydrochloric acid reacts with sodium hydroxide in a neutralisation reaction.\nHCl + NaOH → NaCl + H₂O.",
    "takeaway": "An acid and a base commonly form a salt and water in neutralisation.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-031",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Newton’s laws",
    "prompt": "A net force of 15 N acts on a 3 kg object. What is its acceleration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3 m/s²"
      },
      {
        "key": "B",
        "text": "5 m/s²"
      },
      {
        "key": "C",
        "text": "12 m/s²"
      },
      {
        "key": "D",
        "text": "45 m/s²"
      }
    ],
    "answer": "B",
    "explanation": "Newton’s second law gives a = F/m.\n15 ÷ 3 = 5 m/s².",
    "takeaway": "Acceleration equals net force divided by mass.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-032",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Kinetic energy",
    "prompt": "What is the kinetic energy of a 2 kg object moving at 4 m/s?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "8 J"
      },
      {
        "key": "B",
        "text": "12 J"
      },
      {
        "key": "C",
        "text": "16 J"
      },
      {
        "key": "D",
        "text": "32 J"
      }
    ],
    "answer": "C",
    "explanation": "Kinetic energy is ½mv².\n½ × 2 × 4² = 16 J.",
    "takeaway": "Use KE = ½mv² and square the speed.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-033",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electrical resistance",
    "prompt": "A current of 0.5 A flows through a resistor connected to 6 V. What is the resistance?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3 Ω"
      },
      {
        "key": "B",
        "text": "6 Ω"
      },
      {
        "key": "C",
        "text": "12 Ω"
      },
      {
        "key": "D",
        "text": "18 Ω"
      }
    ],
    "answer": "C",
    "explanation": "Ohm’s law gives R = V/I.\n6 ÷ 0.5 = 12 Ω.",
    "takeaway": "Resistance equals voltage divided by current.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-034",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Wave frequency",
    "prompt": "A wave completes 20 cycles in 4 seconds. What is its frequency?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "4 Hz"
      },
      {
        "key": "B",
        "text": "5 Hz"
      },
      {
        "key": "C",
        "text": "16 Hz"
      },
      {
        "key": "D",
        "text": "80 Hz"
      }
    ],
    "answer": "B",
    "explanation": "Frequency is the number of cycles per second.\n20 ÷ 4 = 5 Hz.",
    "takeaway": "Frequency = number of cycles ÷ time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-035",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Lenses",
    "prompt": "An object is placed beyond 2F of a converging lens. Where is its image formed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Between F and 2F on the opposite side"
      },
      {
        "key": "B",
        "text": "At 2F on the same side"
      },
      {
        "key": "C",
        "text": "Between the lens and F on the same side"
      },
      {
        "key": "D",
        "text": "At infinity for every object position"
      }
    ],
    "answer": "A",
    "explanation": "For an object beyond 2F, a converging lens forms a real, inverted, diminished image between F and 2F on the opposite side.\nThe image position follows the standard principal-ray construction.",
    "takeaway": "For an object beyond 2F, the image forms between F and 2F on the far side.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-extra-036",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Density",
    "prompt": "A substance has mass 200 g and volume 50 cm³. What is its density?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 g/cm³"
      },
      {
        "key": "B",
        "text": "3 g/cm³"
      },
      {
        "key": "C",
        "text": "4 g/cm³"
      },
      {
        "key": "D",
        "text": "5 g/cm³"
      }
    ],
    "answer": "C",
    "explanation": "Density is mass divided by volume.\n200 ÷ 50 = 4 g/cm³.",
    "takeaway": "Density = mass ÷ volume.",
    "sourceKind": "original-sample"
  }
];