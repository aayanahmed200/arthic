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
];
