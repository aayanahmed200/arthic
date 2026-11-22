import type { PrivateStudyQuestion } from "./_sample-content.js";
import { NEXT_SAMPLE_QUESTIONS } from "../../src/data/next-sample-questions.js";

/** Server-only answer keys and explanations for the next original question set. */
export const NEXT_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = [
  {
    "id": "lcat-next-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Fractions",
    "difficulty": "EASY",
    "prompt": "What is three-quarters of 80?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "50"
      },
      {
        "key": "B",
        "text": "55"
      },
      {
        "key": "C",
        "text": "60"
      },
      {
        "key": "D",
        "text": "65"
      }
    ],
    "answer": "C",
    "explanation": "80 ÷ 4 × 3 = 60.",
    "takeaway": "Divide by the denominator, then multiply by the numerator.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-002",
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
    "explanation": "4x = 28, so x = 7.",
    "takeaway": "Use inverse operations to isolate the variable.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Number patterns",
    "difficulty": "EASY",
    "prompt": "What is the next term in 2, 6, 18, 54, ...?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "108"
      },
      {
        "key": "B",
        "text": "126"
      },
      {
        "key": "C",
        "text": "144"
      },
      {
        "key": "D",
        "text": "162"
      }
    ],
    "answer": "D",
    "explanation": "Each term is multiplied by 3, so 54 × 3 = 162.",
    "takeaway": "Look for a constant multiplier in geometric sequences.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-004",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Ratios",
    "difficulty": "STANDARD",
    "prompt": "The ratio of red pens to blue pens is 4:5. If there are 45 pens, how many are red?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "16"
      },
      {
        "key": "B",
        "text": "20"
      },
      {
        "key": "C",
        "text": "25"
      },
      {
        "key": "D",
        "text": "36"
      }
    ],
    "answer": "B",
    "explanation": "There are 9 parts, each worth 5 pens. Red pens = 4 × 5 = 20.",
    "takeaway": "Add ratio parts before scaling them to the total.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-005",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Perimeter",
    "difficulty": "STANDARD",
    "prompt": "A rectangle is 8 cm long and 5 cm wide. What is its perimeter?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "13 cm"
      },
      {
        "key": "B",
        "text": "26 cm"
      },
      {
        "key": "C",
        "text": "40 cm"
      },
      {
        "key": "D",
        "text": "80 cm"
      }
    ],
    "answer": "B",
    "explanation": "Perimeter = 2(8 + 5) = 26 cm.",
    "takeaway": "The perimeter is twice the sum of length and width.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-006",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Average speed",
    "difficulty": "STANDARD",
    "prompt": "A cyclist travels 150 km in 3 hours. What is the average speed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "30 km/h"
      },
      {
        "key": "B",
        "text": "45 km/h"
      },
      {
        "key": "C",
        "text": "50 km/h"
      },
      {
        "key": "D",
        "text": "60 km/h"
      }
    ],
    "answer": "C",
    "explanation": "150 ÷ 3 = 50 km/h.",
    "takeaway": "Average speed is distance divided by elapsed time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-007",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Mean",
    "difficulty": "STANDARD",
    "prompt": "The mean of five numbers is 12. Four are 8, 10, 13 and 14. What is the fifth number?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "13"
      },
      {
        "key": "C",
        "text": "14"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "answer": "D",
    "explanation": "The total is 60. The known values total 45, so the fifth is 15.",
    "takeaway": "Find the total from the mean, then subtract known values.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-008",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Probability",
    "difficulty": "STANDARD",
    "prompt": "A fair coin is tossed once. What is the probability of tails?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1/4"
      },
      {
        "key": "C",
        "text": "1/2"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "answer": "C",
    "explanation": "There are two equally likely outcomes and one is tails, so the probability is 1/2.",
    "takeaway": "Probability is favourable outcomes divided by total equally likely outcomes.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-009",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary",
    "difficulty": "EASY",
    "prompt": "Which word is closest in meaning to “scarce”?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Abundant"
      },
      {
        "key": "B",
        "text": "Limited"
      },
      {
        "key": "C",
        "text": "Ordinary"
      },
      {
        "key": "D",
        "text": "Reliable"
      }
    ],
    "answer": "B",
    "explanation": "Scarce means in short supply. Limited is closest in meaning.",
    "takeaway": "Use the central meaning of a word to identify its synonym.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-010",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary",
    "difficulty": "EASY",
    "prompt": "Which word is the opposite of “reluctant”?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Unwilling"
      },
      {
        "key": "B",
        "text": "Hesitant"
      },
      {
        "key": "C",
        "text": "Eager"
      },
      {
        "key": "D",
        "text": "Cautious"
      }
    ],
    "answer": "C",
    "explanation": "Reluctant means unwilling or hesitant; eager expresses willingness.",
    "takeaway": "An antonym contrasts with the original word.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-011",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Reading inference",
    "difficulty": "STANDARD",
    "prompt": "A college offers optional evening tutorials. Attendance is highest before mathematics assessments. What is best supported?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "All students prefer evenings"
      },
      {
        "key": "B",
        "text": "The tutorials are compulsory"
      },
      {
        "key": "C",
        "text": "Students often use tutorials near mathematics assessments"
      },
      {
        "key": "D",
        "text": "Tutorials replaced regular lessons"
      }
    ],
    "answer": "C",
    "explanation": "Attendance rises near mathematics assessments; the other claims are not supported.",
    "takeaway": "An inference must stay within the evidence given.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-012",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Argument evaluation",
    "difficulty": "STANDARD",
    "prompt": "A town proposes cycle lanes. Which fact would best support the proposal?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The lanes connect homes with schools and workplaces"
      },
      {
        "key": "B",
        "text": "The lanes will be painted blue"
      },
      {
        "key": "C",
        "text": "The town has a large library"
      },
      {
        "key": "D",
        "text": "The town recently changed its flag"
      }
    ],
    "answer": "A",
    "explanation": "Connecting common destinations gives residents a practical reason to use the lanes.",
    "takeaway": "Good evidence is directly relevant to the proposal.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-013",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
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
    "answer": "B",
    "explanation": "The main subject is the singular noun “list”, so “is” is correct.",
    "takeaway": "Find the main subject, not the noun closest to the verb.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-014",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Sentence structure",
    "difficulty": "EASY",
    "prompt": "Which option is a complete sentence?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Although the lecture ended early."
      },
      {
        "key": "B",
        "text": "Because the library was closed."
      },
      {
        "key": "C",
        "text": "The research team reviewed the results."
      },
      {
        "key": "D",
        "text": "While waiting for the bus."
      }
    ],
    "answer": "C",
    "explanation": "This option has a subject and a complete main verb.",
    "takeaway": "A complete sentence contains an independent clause.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-015",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Punctuation",
    "difficulty": "EASY",
    "prompt": "Which sentence punctuates the introductory phrase correctly?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "After the meeting the team revised its plan."
      },
      {
        "key": "B",
        "text": "After the meeting, the team revised its plan."
      },
      {
        "key": "C",
        "text": "After, the meeting the team revised its plan."
      },
      {
        "key": "D",
        "text": "After the meeting the team, revised its plan."
      }
    ],
    "answer": "B",
    "explanation": "The introductory phrase “After the meeting” is followed by a comma.",
    "takeaway": "Use a comma after many introductory phrases.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-016",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Deductive reasoning",
    "difficulty": "STANDARD",
    "prompt": "All laboratory assistants wear identification badges. Sana is a laboratory assistant. What must be true?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Sana supervises the laboratory"
      },
      {
        "key": "B",
        "text": "Sana wears an identification badge"
      },
      {
        "key": "C",
        "text": "Everyone with a badge is an assistant"
      },
      {
        "key": "D",
        "text": "Sana works at night"
      }
    ],
    "answer": "B",
    "explanation": "The rule applies to every laboratory assistant, including Sana.",
    "takeaway": "Apply a general rule to an individual who meets its condition.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-017",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Logical conditions",
    "difficulty": "STANDARD",
    "prompt": "A room can be booked only if a supervisor approves the request. The room was booked. What follows?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A supervisor approved the request"
      },
      {
        "key": "B",
        "text": "The room was empty"
      },
      {
        "key": "C",
        "text": "The booking was free"
      },
      {
        "key": "D",
        "text": "The supervisor used the room"
      }
    ],
    "answer": "A",
    "explanation": "Approval is a necessary condition for booking, so it must have been met.",
    "takeaway": "If an outcome requires a condition, the outcome implies that it was satisfied.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-018",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Assumptions",
    "difficulty": "CHALLENGING",
    "prompt": "A school proposes a digital noticeboard to reduce printed announcements. Which assumption is most necessary?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Every student owns an expensive laptop"
      },
      {
        "key": "B",
        "text": "Students can access the digital noticeboard reliably"
      },
      {
        "key": "C",
        "text": "Printed notices are always wrong"
      },
      {
        "key": "D",
        "text": "Teachers will stop speaking in class"
      }
    ],
    "answer": "B",
    "explanation": "The plan depends on students being able to access digital notices reliably.",
    "takeaway": "Identify the condition the proposal depends on.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-019",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Ordering",
    "difficulty": "STANDARD",
    "prompt": "Research must happen before drafting, drafting before editing, and editing before publishing. Which task is immediately before publishing?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Research"
      },
      {
        "key": "B",
        "text": "Drafting"
      },
      {
        "key": "C",
        "text": "Editing"
      },
      {
        "key": "D",
        "text": "None"
      }
    ],
    "answer": "C",
    "explanation": "The required order is research, drafting, editing, then publishing.",
    "takeaway": "Translate ordering rules into a sequence.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-next-020",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Data interpretation",
    "difficulty": "STANDARD",
    "prompt": "A club has 24 members. One-third attend a weekly workshop. How many attend?",
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
        "text": "18"
      }
    ],
    "answer": "B",
    "explanation": "24 ÷ 3 = 8.",
    "takeaway": "One-third of a quantity is found by dividing it by three.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-001",
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
    "answer": "C",
    "explanation": "f′(x) = 3x², so f′(2) = 12.",
    "takeaway": "Apply the power rule, then substitute the input.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Integration",
    "difficulty": "STANDARD",
    "prompt": "What is the indefinite integral of 3x²?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3x³ + C"
      },
      {
        "key": "B",
        "text": "x³ + C"
      },
      {
        "key": "C",
        "text": "6x + C"
      },
      {
        "key": "D",
        "text": "x² + C"
      }
    ],
    "answer": "B",
    "explanation": "The antiderivative is x³; an indefinite integral includes C.",
    "takeaway": "Increase the power by one and divide by the new power.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Determinants",
    "difficulty": "STANDARD",
    "prompt": "What is the determinant of [[2, 1], [3, 4]]?",
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
        "text": "8"
      },
      {
        "key": "D",
        "text": "11"
      }
    ],
    "answer": "A",
    "explanation": "The determinant is ad − bc = 2×4 − 1×3 = 5.",
    "takeaway": "For a 2×2 matrix, subtract the secondary diagonal product.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-004",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Trigonometry",
    "difficulty": "EASY",
    "prompt": "What is the exact value of cos 60°?",
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
    "answer": "B",
    "explanation": "The standard special-angle value is 1/2.",
    "takeaway": "Know exact values for 30°, 45° and 60°.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-005",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Vectors",
    "difficulty": "STANDARD",
    "prompt": "What is the magnitude of vector (3, 4)?",
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
    "answer": "B",
    "explanation": "Magnitude = √(3² + 4²) = 5.",
    "takeaway": "Take the square root of the sum of squared components.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-006",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Complex numbers",
    "difficulty": "EASY",
    "prompt": "What is i², where i is the imaginary unit?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−1"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "i"
      }
    ],
    "answer": "A",
    "explanation": "The imaginary unit is defined by i = √−1, so i² = −1.",
    "takeaway": "Remember the defining property of the imaginary unit.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-007",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Kinematics",
    "difficulty": "STANDARD",
    "prompt": "Velocity changes from 4 m/s to 16 m/s in 3 seconds. What is average acceleration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3 m/s²"
      },
      {
        "key": "B",
        "text": "4 m/s²"
      },
      {
        "key": "C",
        "text": "6 m/s²"
      },
      {
        "key": "D",
        "text": "12 m/s²"
      }
    ],
    "answer": "B",
    "explanation": "(16 − 4) ÷ 3 = 4 m/s².",
    "takeaway": "Acceleration is change in velocity divided by time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-008",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Energy",
    "difficulty": "STANDARD",
    "prompt": "A 2 kg object is lifted 5 m. Take g = 10 m/s². How much potential energy does it gain?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10 J"
      },
      {
        "key": "B",
        "text": "25 J"
      },
      {
        "key": "C",
        "text": "50 J"
      },
      {
        "key": "D",
        "text": "100 J"
      }
    ],
    "answer": "D",
    "explanation": "mgh = 2 × 10 × 5 = 100 J.",
    "takeaway": "Gravitational potential-energy change equals mgh.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-009",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Series circuits",
    "difficulty": "STANDARD",
    "prompt": "A 4 Ω and a 6 Ω resistor are connected in series. What is their equivalent resistance?",
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
    "explanation": "Series resistances add: 4 + 6 = 10 Ω.",
    "takeaway": "Add resistances directly in a series circuit.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-010",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Parallel circuits",
    "difficulty": "STANDARD",
    "prompt": "Two ideal resistors are connected in parallel across a battery. Which quantity is the same across each resistor?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Current"
      },
      {
        "key": "B",
        "text": "Potential difference"
      },
      {
        "key": "C",
        "text": "Resistance"
      },
      {
        "key": "D",
        "text": "Power"
      }
    ],
    "answer": "B",
    "explanation": "Each branch connects across the same two nodes, so the voltage is the same.",
    "takeaway": "Parallel components share the same potential difference.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-011",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Waves",
    "difficulty": "STANDARD",
    "prompt": "A wave travels at 300 m/s with frequency 50 Hz. What is its wavelength?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "3 m"
      },
      {
        "key": "B",
        "text": "5 m"
      },
      {
        "key": "C",
        "text": "6 m"
      },
      {
        "key": "D",
        "text": "15 m"
      }
    ],
    "answer": "C",
    "explanation": "λ = v/f = 300 ÷ 50 = 6 m.",
    "takeaway": "Wavelength equals speed divided by frequency.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-012",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Refraction",
    "difficulty": "STANDARD",
    "prompt": "Light travels through a material at 2.0×10⁸ m/s. In vacuum it travels at 3.0×10⁸ m/s. What is the refractive index?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.67"
      },
      {
        "key": "B",
        "text": "1.0"
      },
      {
        "key": "C",
        "text": "1.5"
      },
      {
        "key": "D",
        "text": "2.0"
      }
    ],
    "answer": "C",
    "explanation": "n = c/v = 3.0×10⁸ ÷ 2.0×10⁸ = 1.5.",
    "takeaway": "Refractive index is vacuum light speed divided by material light speed.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-013",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Moles",
    "difficulty": "EASY",
    "prompt": "How many moles are in 58.5 g of sodium chloride? Its molar mass is 58.5 g/mol.",
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
        "text": "58.5 mol"
      }
    ],
    "answer": "B",
    "explanation": "58.5 ÷ 58.5 = 1 mol.",
    "takeaway": "Divide mass by molar mass to calculate amount in moles.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-014",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Redox chemistry",
    "difficulty": "STANDARD",
    "prompt": "At which electrode does oxidation occur in an electrochemical cell?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Anode"
      },
      {
        "key": "B",
        "text": "Cathode"
      },
      {
        "key": "C",
        "text": "Salt bridge"
      },
      {
        "key": "D",
        "text": "Both equally"
      }
    ],
    "answer": "A",
    "explanation": "Oxidation is loss of electrons and occurs at the anode.",
    "takeaway": "Oxidation occurs at the anode; reduction occurs at the cathode.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-015",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Periodic trends",
    "difficulty": "EASY",
    "prompt": "Which property generally increases from left to right across a period?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Atomic radius"
      },
      {
        "key": "B",
        "text": "Metallic character"
      },
      {
        "key": "C",
        "text": "First ionisation energy"
      },
      {
        "key": "D",
        "text": "Occupied shells"
      }
    ],
    "answer": "C",
    "explanation": "Effective nuclear charge generally increases across a period, making electron removal harder.",
    "takeaway": "First ionisation energy generally increases across a period, with exceptions.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-016",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Chemical bonding",
    "difficulty": "EASY",
    "prompt": "Which type of bond holds atoms together within a water molecule?",
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
        "text": "Hydrogen only"
      }
    ],
    "answer": "B",
    "explanation": "Oxygen and hydrogen share electron pairs in O–H covalent bonds.",
    "takeaway": "Covalent bonds involve shared electron pairs.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-017",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "SQL",
    "difficulty": "EASY",
    "prompt": "Which SQL clause filters rows according to a condition?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "ORDER BY"
      },
      {
        "key": "B",
        "text": "WHERE"
      },
      {
        "key": "C",
        "text": "GROUP BY"
      },
      {
        "key": "D",
        "text": "CREATE"
      }
    ],
    "answer": "B",
    "explanation": "WHERE selects rows that meet a specified condition.",
    "takeaway": "Use WHERE to filter rows in a query.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-018",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Programming",
    "difficulty": "STANDARD",
    "prompt": "In a zero-indexed list, what is the index of its first element?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−1"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "The list length"
      }
    ],
    "answer": "B",
    "explanation": "Zero-indexed collections begin at index 0.",
    "takeaway": "The first element is at index 0 in zero-based indexing.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-019",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Number systems",
    "difficulty": "EASY",
    "prompt": "What is the decimal value of binary 1101₂?",
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
    "answer": "C",
    "explanation": "1101₂ = 8 + 4 + 1 = 13.",
    "takeaway": "Add the place values whose binary digit is 1.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-next-020",
    "examCode": "NET",
    "subjectCode": "ENGLISH",
    "topic": "Articles",
    "difficulty": "EASY",
    "prompt": "Choose the correct article: “She is ___ honest researcher.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "a"
      },
      {
        "key": "B",
        "text": "an"
      },
      {
        "key": "C",
        "text": "the"
      },
      {
        "key": "D",
        "text": "no article"
      }
    ],
    "answer": "B",
    "explanation": "“Honest” begins with a vowel sound because the h is silent, so “an” is correct.",
    "takeaway": "Choose a or an according to the first sound.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-001",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Constitutional history",
    "difficulty": "EASY",
    "prompt": "Which amendment passed in 2010 significantly expanded provincial autonomy in Pakistan?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Eighth"
      },
      {
        "key": "B",
        "text": "Thirteenth"
      },
      {
        "key": "C",
        "text": "Eighteenth"
      },
      {
        "key": "D",
        "text": "Twenty-first"
      }
    ],
    "answer": "C",
    "explanation": "The Eighteenth Amendment changed the constitutional distribution of powers and strengthened provincial autonomy.",
    "takeaway": "The Eighteenth Amendment of 2010 is a milestone in Pakistan's federal structure.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-002",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Constitutional history",
    "difficulty": "STANDARD",
    "prompt": "In which year was the Objectives Resolution adopted by Pakistan's Constituent Assembly?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1947"
      },
      {
        "key": "B",
        "text": "1949"
      },
      {
        "key": "C",
        "text": "1956"
      },
      {
        "key": "D",
        "text": "1973"
      }
    ],
    "answer": "B",
    "explanation": "The Constituent Assembly adopted the Objectives Resolution on 12 March 1949.",
    "takeaway": "The Objectives Resolution was adopted in 1949.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-003",
    "examCode": "CSS",
    "subjectCode": "GOVERNANCE",
    "topic": "Accountability",
    "difficulty": "EASY",
    "prompt": "Which practice most directly strengthens accountability in a public agency?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Keeping procurement decisions confidential"
      },
      {
        "key": "B",
        "text": "Publishing audited accounts and explaining decisions"
      },
      {
        "key": "C",
        "text": "Removing independent review"
      },
      {
        "key": "D",
        "text": "Changing rules without notice"
      }
    ],
    "answer": "B",
    "explanation": "Audited accounts and explained decisions help oversight bodies assess the use of authority and resources.",
    "takeaway": "Accountability requires answerability and meaningful oversight.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-004",
    "examCode": "CSS",
    "subjectCode": "GOVERNANCE",
    "topic": "Separation of powers",
    "difficulty": "STANDARD",
    "prompt": "What is the central purpose of separating legislative, executive and judicial powers?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Concentrate authority in one office"
      },
      {
        "key": "B",
        "text": "Reduce the risk of unchecked power"
      },
      {
        "key": "C",
        "text": "Remove the need for courts"
      },
      {
        "key": "D",
        "text": "Prevent the legislature from making laws"
      }
    ],
    "answer": "B",
    "explanation": "Separating powers creates institutional checks and helps prevent unchecked authority.",
    "takeaway": "Separation of powers supports checks and balances.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-005",
    "examCode": "CSS",
    "subjectCode": "GOVERNANCE",
    "topic": "Civil liberties",
    "difficulty": "EASY",
    "prompt": "Which example most directly concerns freedom of expression?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Publishing peaceful criticism of public policy"
      },
      {
        "key": "B",
        "text": "Paying a tax"
      },
      {
        "key": "C",
        "text": "Registering a vehicle"
      },
      {
        "key": "D",
        "text": "Allocating a school budget"
      }
    ],
    "answer": "A",
    "explanation": "Freedom of expression protects communication of opinions and ideas, subject to lawful limitations.",
    "takeaway": "Freedom of expression is a civil liberty concerning communication and opinion.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-006",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Fiscal policy",
    "difficulty": "STANDARD",
    "prompt": "Government spending exceeds government revenue during a year. What is this gap called?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Trade surplus"
      },
      {
        "key": "B",
        "text": "Fiscal deficit"
      },
      {
        "key": "C",
        "text": "Current-account surplus"
      },
      {
        "key": "D",
        "text": "Capital gain"
      }
    ],
    "answer": "B",
    "explanation": "A fiscal deficit occurs when expenditure exceeds revenue over a period.",
    "takeaway": "A fiscal deficit compares public spending with public revenue.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-007",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Inflation",
    "difficulty": "EASY",
    "prompt": "Which index measures price changes in a representative basket of household goods and services?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Consumer Price Index"
      },
      {
        "key": "B",
        "text": "Human Development Index"
      },
      {
        "key": "C",
        "text": "Purchasing Managers' Index"
      },
      {
        "key": "D",
        "text": "Exchange-rate index"
      }
    ],
    "answer": "A",
    "explanation": "The Consumer Price Index tracks changes in prices paid by households for a basket of goods and services.",
    "takeaway": "The CPI is a common measure of consumer-price inflation.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-008",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Exchange rates",
    "difficulty": "STANDARD",
    "prompt": "If a country's currency depreciates, what happens to the domestic-currency cost of an unchanged import price, all else equal?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It falls"
      },
      {
        "key": "B",
        "text": "It rises"
      },
      {
        "key": "C",
        "text": "It becomes zero"
      },
      {
        "key": "D",
        "text": "It must stay unchanged"
      }
    ],
    "answer": "B",
    "explanation": "A weaker currency requires more domestic currency to buy the same amount of foreign currency.",
    "takeaway": "Depreciation makes foreign-currency-priced imports more expensive, all else equal.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-009",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Public goods",
    "difficulty": "EASY",
    "prompt": "Which pair describes a pure public good?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rival and excludable"
      },
      {
        "key": "B",
        "text": "Non-rival and non-excludable"
      },
      {
        "key": "C",
        "text": "Rival and non-excludable"
      },
      {
        "key": "D",
        "text": "Non-rival and excludable"
      }
    ],
    "answer": "B",
    "explanation": "A pure public good can be used by one person without reducing others' availability, and exclusion is not feasible.",
    "takeaway": "Pure public goods are non-rival and non-excludable.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-010",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Comparative advantage",
    "difficulty": "STANDARD",
    "prompt": "A country has a comparative advantage when it can produce a good:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "With the highest output only"
      },
      {
        "key": "B",
        "text": "At a lower opportunity cost than another country"
      },
      {
        "key": "C",
        "text": "Without resources"
      },
      {
        "key": "D",
        "text": "At a price set abroad"
      }
    ],
    "answer": "B",
    "explanation": "Comparative advantage depends on relative opportunity cost, not necessarily absolute productivity.",
    "takeaway": "Comparative advantage is determined by opportunity cost.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-011",
    "examCode": "CSS",
    "subjectCode": "ENVIRONMENT",
    "topic": "Climate policy",
    "difficulty": "EASY",
    "prompt": "Which measure is climate adaptation rather than mitigation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Replacing coal power with solar"
      },
      {
        "key": "B",
        "text": "Improving coastal flood barriers"
      },
      {
        "key": "C",
        "text": "Reducing methane emissions"
      },
      {
        "key": "D",
        "text": "Increasing factory energy efficiency"
      }
    ],
    "answer": "B",
    "explanation": "Flood barriers help communities cope with climate impacts. The other measures reduce greenhouse-gas emissions.",
    "takeaway": "Adaptation reduces vulnerability; mitigation reduces emissions or increases removals.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-012",
    "examCode": "CSS",
    "subjectCode": "ENVIRONMENT",
    "topic": "Biodiversity",
    "difficulty": "EASY",
    "prompt": "What does biodiversity refer to?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Variety of life at genetic, species and ecosystem levels"
      },
      {
        "key": "B",
        "text": "Number of buildings in a city"
      },
      {
        "key": "C",
        "text": "Only domesticated animals"
      },
      {
        "key": "D",
        "text": "Total annual rainfall"
      }
    ],
    "answer": "A",
    "explanation": "Biodiversity covers variation within species, between species and among ecosystems.",
    "takeaway": "Biodiversity includes genetic, species and ecosystem diversity.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-013",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "Climate agreements",
    "difficulty": "STANDARD",
    "prompt": "In which year was the Paris Agreement adopted under the UN climate framework?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1992"
      },
      {
        "key": "B",
        "text": "2005"
      },
      {
        "key": "C",
        "text": "2015"
      },
      {
        "key": "D",
        "text": "2021"
      }
    ],
    "answer": "C",
    "explanation": "The Paris Agreement was adopted in December 2015 at COP21.",
    "takeaway": "The Paris Agreement was adopted in 2015.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-014",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "Regional organisations",
    "difficulty": "STANDARD",
    "prompt": "In which year was SAARC established?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1969"
      },
      {
        "key": "B",
        "text": "1975"
      },
      {
        "key": "C",
        "text": "1985"
      },
      {
        "key": "D",
        "text": "1995"
      }
    ],
    "answer": "C",
    "explanation": "SAARC was established in Dhaka in December 1985.",
    "takeaway": "SAARC was established in 1985.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-015",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International organisations",
    "difficulty": "STANDARD",
    "prompt": "In which year was the Organisation of Islamic Cooperation founded?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1945"
      },
      {
        "key": "B",
        "text": "1955"
      },
      {
        "key": "C",
        "text": "1969"
      },
      {
        "key": "D",
        "text": "1985"
      }
    ],
    "answer": "C",
    "explanation": "The organisation was established in 1969 following the first Islamic Summit Conference in Rabat.",
    "takeaway": "The OIC was founded in 1969.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-016",
    "examCode": "CSS",
    "subjectCode": "DEVELOPMENT",
    "topic": "Human development",
    "difficulty": "EASY",
    "prompt": "Which three dimensions are represented in the Human Development Index?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Income, education and health"
      },
      {
        "key": "B",
        "text": "Exports, imports and savings"
      },
      {
        "key": "C",
        "text": "Population, land and rainfall"
      },
      {
        "key": "D",
        "text": "Inflation, interest and public debt"
      }
    ],
    "answer": "A",
    "explanation": "The HDI summarises a long and healthy life, knowledge and a decent standard of living.",
    "takeaway": "The HDI combines health, education and income.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-017",
    "examCode": "CSS",
    "subjectCode": "MATH",
    "topic": "Statistics",
    "difficulty": "EASY",
    "prompt": "What is the median of 2, 5, 7, 9, 12 and 15?",
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
        "text": "9"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "answer": "B",
    "explanation": "There are six values, so the median is (7 + 9) ÷ 2 = 8.",
    "takeaway": "For an even number of values, average the two middle observations.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-018",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Evidence evaluation",
    "difficulty": "STANDARD",
    "prompt": "Districts with more parks have lower average stress scores. What is the strongest cautious interpretation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Parks are proven to be the only cause"
      },
      {
        "key": "B",
        "text": "The association may indicate a link, but other factors may contribute"
      },
      {
        "key": "C",
        "text": "Stress always falls when a park is built"
      },
      {
        "key": "D",
        "text": "Every resident uses parks"
      }
    ],
    "answer": "B",
    "explanation": "The association is observational; health services, income or other variables may influence stress scores.",
    "takeaway": "Interpret observational findings cautiously and consider confounding factors.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-019",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Argument structure",
    "difficulty": "STANDARD",
    "prompt": "What is the main role of evidence in an argumentative essay?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Decorate the introduction"
      },
      {
        "key": "B",
        "text": "Support and substantiate the central claims"
      },
      {
        "key": "C",
        "text": "Repeat the thesis in every paragraph"
      },
      {
        "key": "D",
        "text": "Replace the conclusion"
      }
    ],
    "answer": "B",
    "explanation": "Relevant evidence gives readers a basis for evaluating an argument's claims and reasoning.",
    "takeaway": "Support each claim with relevant, credible evidence.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-next-020",
    "examCode": "CSS",
    "subjectCode": "GOVERNANCE",
    "topic": "Federal institutions",
    "difficulty": "EASY",
    "prompt": "Which house of Pakistan's Parliament provides equal representation to each province?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "National Assembly"
      },
      {
        "key": "B",
        "text": "Senate"
      },
      {
        "key": "C",
        "text": "Provincial Assembly"
      },
      {
        "key": "D",
        "text": "Cabinet"
      }
    ],
    "answer": "B",
    "explanation": "The Senate provides equal provincial representation, unlike the population-based distribution in the National Assembly.",
    "takeaway": "The Senate represents the federating units equally.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "DNA replication",
    "difficulty": "EASY",
    "prompt": "Which enzyme unwinds the DNA double helix at the replication fork?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "DNA ligase"
      },
      {
        "key": "B",
        "text": "Helicase"
      },
      {
        "key": "C",
        "text": "Amylase"
      },
      {
        "key": "D",
        "text": "RNA polymerase"
      }
    ],
    "answer": "B",
    "explanation": "Helicase separates DNA strands by disrupting hydrogen bonds between complementary bases.",
    "takeaway": "Helicase unwinds DNA during replication.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Ribosomes",
    "difficulty": "EASY",
    "prompt": "Which molecule forms the structural and catalytic core of the ribosome?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "rRNA"
      },
      {
        "key": "B",
        "text": "Glycogen"
      },
      {
        "key": "C",
        "text": "Triglyceride"
      },
      {
        "key": "D",
        "text": "Cellulose"
      }
    ],
    "answer": "A",
    "explanation": "Ribosomal RNA combines with proteins to form ribosomes and contributes to peptide-bond formation.",
    "takeaway": "Ribosomes contain ribosomal RNA and proteins.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Mitosis",
    "difficulty": "EASY",
    "prompt": "During which stage of mitosis do chromosomes align at the cell's equatorial plane?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Prophase"
      },
      {
        "key": "B",
        "text": "Metaphase"
      },
      {
        "key": "C",
        "text": "Anaphase"
      },
      {
        "key": "D",
        "text": "Telophase"
      }
    ],
    "answer": "B",
    "explanation": "During metaphase, chromosomes align at the metaphase plate before sister chromatids separate.",
    "takeaway": "Metaphase is the chromosome-alignment stage.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-004",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Circulation",
    "difficulty": "EASY",
    "prompt": "Which vessels carry oxygenated blood from the lungs to the heart?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Pulmonary arteries"
      },
      {
        "key": "B",
        "text": "Pulmonary veins"
      },
      {
        "key": "C",
        "text": "Venae cavae"
      },
      {
        "key": "D",
        "text": "Aorta"
      }
    ],
    "answer": "B",
    "explanation": "Pulmonary veins return oxygenated blood from the lungs to the left atrium.",
    "takeaway": "Pulmonary veins are an exception to the usual pattern for veins.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-005",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cardiac cycle",
    "difficulty": "EASY",
    "prompt": "Which structure normally acts as the primary pacemaker of the human heart?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Atrioventricular node"
      },
      {
        "key": "B",
        "text": "Sinoatrial node"
      },
      {
        "key": "C",
        "text": "Bundle of His"
      },
      {
        "key": "D",
        "text": "Purkinje fibres"
      }
    ],
    "answer": "B",
    "explanation": "The sinoatrial node initiates the electrical impulse that normally sets the heart's rhythm.",
    "takeaway": "The SA node is the natural pacemaker.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-006",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Gas exchange",
    "difficulty": "STANDARD",
    "prompt": "How does oxygen pass from an alveolus into a pulmonary capillary?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Active transport"
      },
      {
        "key": "B",
        "text": "Diffusion down a partial-pressure gradient"
      },
      {
        "key": "C",
        "text": "Osmosis"
      },
      {
        "key": "D",
        "text": "Bulk flow by cilia"
      }
    ],
    "answer": "B",
    "explanation": "Oxygen diffuses from alveolar air, where its partial pressure is higher, into blood where it is lower.",
    "takeaway": "Alveolar gas exchange occurs by diffusion down partial-pressure gradients.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-007",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Kidney function",
    "difficulty": "STANDARD",
    "prompt": "Which nephron structure helps establish the osmotic gradient needed to concentrate urine?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Loop of Henle"
      },
      {
        "key": "B",
        "text": "Bowman's capsule only"
      },
      {
        "key": "C",
        "text": "Glomerulus only"
      },
      {
        "key": "D",
        "text": "Renal artery"
      }
    ],
    "answer": "A",
    "explanation": "The loop of Henle contributes to the medullary osmotic gradient through countercurrent multiplication.",
    "takeaway": "The loop of Henle helps establish the kidney's concentration gradient.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-008",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cellular respiration",
    "difficulty": "STANDARD",
    "prompt": "What is the final electron acceptor in the mitochondrial electron transport chain during aerobic respiration?",
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
    "explanation": "Oxygen accepts electrons and protons at the end of the chain, forming water.",
    "takeaway": "Oxygen is the terminal electron acceptor in aerobic respiration.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-009",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Genetics",
    "difficulty": "STANDARD",
    "prompt": "How many chromosomes are normally present in a human somatic cell?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "23"
      },
      {
        "key": "B",
        "text": "44"
      },
      {
        "key": "C",
        "text": "46"
      },
      {
        "key": "D",
        "text": "48"
      }
    ],
    "answer": "C",
    "explanation": "A typical human somatic cell contains 46 chromosomes arranged in 23 pairs.",
    "takeaway": "Human somatic cells are diploid, with 46 chromosomes.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-010",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Enzymes",
    "difficulty": "STANDARD",
    "prompt": "Why does an enzyme generally act on only a limited range of substrates?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Its active site has a particular shape and chemical environment"
      },
      {
        "key": "B",
        "text": "It contains no amino acids"
      },
      {
        "key": "C",
        "text": "It is used up after one reaction"
      },
      {
        "key": "D",
        "text": "It changes the genetic code"
      }
    ],
    "answer": "A",
    "explanation": "The active site's shape and chemistry complement particular substrates, giving enzymes specificity.",
    "takeaway": "Enzyme specificity depends on the active site's structure and chemistry.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-011",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Acid–base reactions",
    "difficulty": "EASY",
    "prompt": "What are the typical products when hydrochloric acid reacts completely with sodium hydroxide?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Sodium chloride and water"
      },
      {
        "key": "B",
        "text": "Hydrogen and oxygen"
      },
      {
        "key": "C",
        "text": "Sodium and chlorine"
      },
      {
        "key": "D",
        "text": "Carbon dioxide and water"
      }
    ],
    "answer": "A",
    "explanation": "HCl + NaOH → NaCl + H₂O.",
    "takeaway": "A strong acid and strong base typically form a salt and water.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-012",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Equilibrium",
    "difficulty": "STANDARD",
    "prompt": "At dynamic chemical equilibrium in a closed system, what is true about the forward and reverse reactions?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Both stop"
      },
      {
        "key": "B",
        "text": "Their rates are equal"
      },
      {
        "key": "C",
        "text": "All reactants are consumed"
      },
      {
        "key": "D",
        "text": "Concentrations are equal"
      }
    ],
    "answer": "B",
    "explanation": "The forward and reverse reactions continue at equal rates, so concentrations remain constant.",
    "takeaway": "Dynamic equilibrium means equal forward and reverse reaction rates.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-013",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Hydrocarbons",
    "difficulty": "EASY",
    "prompt": "Which feature identifies an alkene?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "At least one carbon–carbon double bond"
      },
      {
        "key": "B",
        "text": "Only carbon–carbon single bonds"
      },
      {
        "key": "C",
        "text": "A nitrogen–hydrogen bond"
      },
      {
        "key": "D",
        "text": "An ionic carbon bond"
      }
    ],
    "answer": "A",
    "explanation": "Alkenes contain at least one carbon–carbon double bond.",
    "takeaway": "The defining feature of an alkene is a C=C double bond.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-014",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Chemical bonding",
    "difficulty": "EASY",
    "prompt": "What type of bond holds atoms together within a carbon dioxide molecule?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Covalent"
      },
      {
        "key": "B",
        "text": "Ionic"
      },
      {
        "key": "C",
        "text": "Metallic"
      },
      {
        "key": "D",
        "text": "Hydrogen bonding only"
      }
    ],
    "answer": "A",
    "explanation": "Carbon and oxygen share electron pairs in covalent C=O bonds.",
    "takeaway": "Covalent bonds form through shared electron pairs.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-015",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Periodic table",
    "difficulty": "EASY",
    "prompt": "Which element has the greatest electronegativity among sodium, carbon, oxygen and fluorine?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Sodium"
      },
      {
        "key": "B",
        "text": "Carbon"
      },
      {
        "key": "C",
        "text": "Oxygen"
      },
      {
        "key": "D",
        "text": "Fluorine"
      }
    ],
    "answer": "D",
    "explanation": "Fluorine has the highest electronegativity on the Pauling scale.",
    "takeaway": "Fluorine is the most electronegative element.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-016",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Pressure",
    "difficulty": "STANDARD",
    "prompt": "A force of 120 N acts uniformly on an area of 0.4 m². What pressure is produced?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "30 Pa"
      },
      {
        "key": "B",
        "text": "48 Pa"
      },
      {
        "key": "C",
        "text": "300 Pa"
      },
      {
        "key": "D",
        "text": "480 Pa"
      }
    ],
    "answer": "C",
    "explanation": "Pressure = force ÷ area = 120 ÷ 0.4 = 300 Pa.",
    "takeaway": "Pressure is force per unit area.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-017",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Acceleration",
    "difficulty": "STANDARD",
    "prompt": "A car's velocity increases from 10 m/s to 22 m/s in 4 seconds. What is its average acceleration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 m/s²"
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
        "text": "8 m/s²"
      }
    ],
    "answer": "B",
    "explanation": "(22 − 10) ÷ 4 = 3 m/s².",
    "takeaway": "Average acceleration is change in velocity divided by time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-018",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electromagnetic waves",
    "difficulty": "STANDARD",
    "prompt": "Which statement about electromagnetic waves in a vacuum is correct?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "They require a material medium"
      },
      {
        "key": "B",
        "text": "They all travel at the same speed"
      },
      {
        "key": "C",
        "text": "Only visible light can travel"
      },
      {
        "key": "D",
        "text": "Speed depends on amplitude"
      }
    ],
    "answer": "B",
    "explanation": "All electromagnetic waves travel at the speed of light in a vacuum, regardless of frequency.",
    "takeaway": "Electromagnetic waves do not require a medium.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-019",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Momentum",
    "difficulty": "STANDARD",
    "prompt": "A 0.5 kg ball travels at 8 m/s. What is its momentum?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 kg m/s"
      },
      {
        "key": "B",
        "text": "4 kg m/s"
      },
      {
        "key": "C",
        "text": "8 kg m/s"
      },
      {
        "key": "D",
        "text": "16 kg m/s"
      }
    ],
    "answer": "B",
    "explanation": "Momentum p = mv = 0.5 × 8 = 4 kg m/s.",
    "takeaway": "Linear momentum equals mass multiplied by velocity.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-next-020",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electrical power",
    "difficulty": "STANDARD",
    "prompt": "A device operates at 12 V and draws 2 A. What electrical power does it use?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "6 W"
      },
      {
        "key": "B",
        "text": "10 W"
      },
      {
        "key": "C",
        "text": "14 W"
      },
      {
        "key": "D",
        "text": "24 W"
      }
    ],
    "answer": "D",
    "explanation": "Power P = VI = 12 × 2 = 24 W.",
    "takeaway": "For a DC device, power equals voltage multiplied by current.",
    "sourceKind": "original-sample"
  }
];

if (NEXT_PRIVATE_QUESTIONS.length !== NEXT_SAMPLE_QUESTIONS.length) throw new Error("Next study prompts and private answer data do not match.");
