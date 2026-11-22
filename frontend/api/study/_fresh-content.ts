import { FRESH_SAMPLE_QUESTIONS } from "../../src/data/fresh-sample-questions.js";
import type { PrivateStudyQuestion } from "./_sample-content.js";

/** Private answer keys and explanations for the additional original question set. */
export const FRESH_PRIVATE_QUESTIONS: PrivateStudyQuestion[] = [
  {
    "id": "lcat-plus-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Percentage change",
    "difficulty": "STANDARD",
    "prompt": "A book costs Rs. 320. A shop offers a 15% discount. What is the sale price?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 272"
      },
      {
        "key": "B",
        "text": "Rs. 275"
      },
      {
        "key": "C",
        "text": "Rs. 288"
      },
      {
        "key": "D",
        "text": "Rs. 305"
      }
    ],
    "answer": "A",
    "explanation": "The discount is 0.15 × 320 = Rs. 48. Subtracting it from the original price gives Rs. 320 − Rs. 48 = Rs. 272.",
    "takeaway": "A discounted price is the original price multiplied by one minus the discount rate.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-002",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Linear equations",
    "difficulty": "STANDARD",
    "prompt": "If x/3 + 5 = 11, what is the value of x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "18"
      },
      {
        "key": "D",
        "text": "21"
      }
    ],
    "answer": "C",
    "explanation": "Subtract 5 from both sides to get x/3 = 6. Multiplying both sides by 3 gives x = 18.",
    "takeaway": "Undo addition or subtraction first, then undo multiplication or division.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Ratios",
    "difficulty": "STANDARD",
    "prompt": "The ratio of the number of fiction books to non-fiction books is 2:3. If there are 40 books in total, how many are non-fiction?",
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
        "text": "24"
      },
      {
        "key": "D",
        "text": "30"
      }
    ],
    "answer": "C",
    "explanation": "There are 2 + 3 = 5 equal parts. Each part represents 40 ÷ 5 = 8 books, so non-fiction books number 3 × 8 = 24.",
    "takeaway": "Add ratio parts to find the value of one part before scaling.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-004",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Mean",
    "difficulty": "STANDARD",
    "prompt": "A learner scores 11, 13, 14 and 18 on four quizzes. What is the mean score?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "13"
      },
      {
        "key": "B",
        "text": "14"
      },
      {
        "key": "C",
        "text": "14.5"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "answer": "B",
    "explanation": "The total is 11 + 13 + 14 + 18 = 56. Dividing by four quizzes gives a mean of 14.",
    "takeaway": "The mean is the sum of all values divided by the number of values.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-005",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Number patterns",
    "difficulty": "STANDARD",
    "prompt": "What is the next number in the sequence 3, 7, 15, 31, ...?",
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
        "text": "61"
      },
      {
        "key": "D",
        "text": "63"
      }
    ],
    "answer": "D",
    "explanation": "Each term is twice the previous term plus one: 3 × 2 + 1 = 7, 7 × 2 + 1 = 15, and 31 × 2 + 1 = 63.",
    "takeaway": "Check how each term changes, not only the differences between adjacent terms.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-006",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "difficulty": "EASY",
    "prompt": "In the sentence “The new safety measures are intended to mitigate risk,” what does “mitigate” mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Measure"
      },
      {
        "key": "B",
        "text": "Reduce"
      },
      {
        "key": "C",
        "text": "Transfer"
      },
      {
        "key": "D",
        "text": "Predict"
      }
    ],
    "answer": "B",
    "explanation": "To mitigate something is to make it less severe or harmful. The measures are intended to reduce risk.",
    "takeaway": "Use the surrounding sentence to infer the meaning of unfamiliar vocabulary.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-007",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "difficulty": "EASY",
    "prompt": "A reviewer describes a proposal as “viable”. What does this most nearly mean?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Capable of succeeding"
      },
      {
        "key": "B",
        "text": "Difficult to explain"
      },
      {
        "key": "C",
        "text": "Already completed"
      },
      {
        "key": "D",
        "text": "Unlikely to change"
      }
    ],
    "answer": "A",
    "explanation": "A viable proposal is practical and capable of working successfully under the relevant conditions.",
    "takeaway": "Viable means feasible or capable of success.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-008",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Reading inference",
    "difficulty": "STANDARD",
    "prompt": "A library extends its opening hours during examinations. Attendance rises, but no information about grades is collected. Which conclusion is best supported?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The new hours caused every student to study more"
      },
      {
        "key": "B",
        "text": "The extension improved examination results"
      },
      {
        "key": "C",
        "text": "More people used the library during the extended-hours period"
      },
      {
        "key": "D",
        "text": "The library no longer needs daytime hours"
      }
    ],
    "answer": "C",
    "explanation": "The attendance information directly supports increased use. It does not establish that study time or examination results improved.",
    "takeaway": "Choose the conclusion that follows from the evidence without adding unsupported claims.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-009",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Analogies",
    "difficulty": "STANDARD",
    "prompt": "Complete the relationship: “key : lock :: password : ___”.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Keyboard"
      },
      {
        "key": "B",
        "text": "Account"
      },
      {
        "key": "C",
        "text": "Screen"
      },
      {
        "key": "D",
        "text": "Folder"
      }
    ],
    "answer": "B",
    "explanation": "A key provides access to a lock; a password provides access to an account.",
    "takeaway": "Identify the function linking the first pair, then apply that relationship.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-010",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Deductive reasoning",
    "difficulty": "STANDARD",
    "prompt": "All trained archivists catalogue records. Mina is a trained archivist. What must follow?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Mina supervises every archive"
      },
      {
        "key": "B",
        "text": "Mina catalogues records"
      },
      {
        "key": "C",
        "text": "Every person who catalogues records is an archivist"
      },
      {
        "key": "D",
        "text": "Mina works in a museum"
      }
    ],
    "answer": "B",
    "explanation": "The first statement applies to every trained archivist. Since Mina belongs to that group, she must catalogue records.",
    "takeaway": "Apply a universal rule to the individual that meets its condition.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-011",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Conditional reasoning",
    "difficulty": "STANDARD",
    "prompt": "A policy is judged effective only if attendance rises. Attendance did not rise. What follows from these statements?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The policy must be effective"
      },
      {
        "key": "B",
        "text": "Attendance data are irrelevant"
      },
      {
        "key": "C",
        "text": "The policy cannot be judged effective under this criterion"
      },
      {
        "key": "D",
        "text": "The policy caused attendance to fall"
      }
    ],
    "answer": "C",
    "explanation": "The statement makes a rise in attendance a necessary condition for judging the policy effective. Since that condition is absent, the stated criterion is not met.",
    "takeaway": "A necessary condition must be present for the outcome to follow.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-012",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Argument evaluation",
    "difficulty": "CHALLENGING",
    "prompt": "A school claims that a new timetable improved punctuality because fewer students arrived late in one week. Which detail would most strengthen the claim?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The timetable uses a different colour"
      },
      {
        "key": "B",
        "text": "The week had fewer teaching days"
      },
      {
        "key": "C",
        "text": "The school also introduced a new uniform"
      },
      {
        "key": "D",
        "text": "Late-arrival records from several comparable weeks before and after the change"
      }
    ],
    "answer": "D",
    "explanation": "Comparable records across multiple weeks help show whether the change is consistent and whether the one-week result is unusual.",
    "takeaway": "A stronger argument uses relevant comparisons over an appropriate period.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-013",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Sampling bias",
    "difficulty": "STANDARD",
    "prompt": "A survey about all university students is conducted only among people in one engineering lecture. What is the main concern?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The sample may not represent all university students"
      },
      {
        "key": "B",
        "text": "The sample is automatically too large"
      },
      {
        "key": "C",
        "text": "The results must be numerical"
      },
      {
        "key": "D",
        "text": "The survey cannot contain questions"
      }
    ],
    "answer": "A",
    "explanation": "Students in one lecture may differ from students in other programmes and years. The sample may therefore be unrepresentative.",
    "takeaway": "A sample should reflect the wider population the survey aims to describe.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-014",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Data interpretation",
    "difficulty": "STANDARD",
    "prompt": "A club records 40 visitors in Week 1 and 45 visitors in Week 3. By what percentage did visitors increase from Week 1 to Week 3?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "5%"
      },
      {
        "key": "B",
        "text": "10%"
      },
      {
        "key": "C",
        "text": "12.5%"
      },
      {
        "key": "D",
        "text": "15%"
      }
    ],
    "answer": "C",
    "explanation": "The increase is 45 − 40 = 5 visitors. Relative to the original 40, the increase is 5 ÷ 40 × 100 = 12.5%.",
    "takeaway": "Percentage increase uses the original value as the denominator.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-015",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Probability",
    "difficulty": "STANDARD",
    "prompt": "A fair six-sided die is rolled once. What is the probability of getting an even number?",
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
    "answer": "C",
    "explanation": "The even outcomes are 2, 4 and 6. There are three favourable outcomes out of six equally likely outcomes, so the probability is 3/6 = 1/2.",
    "takeaway": "Probability equals favourable outcomes divided by all equally likely outcomes.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-016",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Geometry",
    "difficulty": "STANDARD",
    "prompt": "A right-angled triangle has perpendicular sides of 5 cm and 12 cm. What is its area?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "17 cm²"
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
    "answer": "B",
    "explanation": "The area of a triangle is one half × base × perpendicular height. Therefore, the area is 1/2 × 5 × 12 = 30 cm².",
    "takeaway": "Use the perpendicular sides as base and height in a right triangle.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-017",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Simple interest",
    "difficulty": "STANDARD",
    "prompt": "A deposit of Rs. 5,000 earns simple interest at 4% per year for two years. How much interest is earned?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 200"
      },
      {
        "key": "B",
        "text": "Rs. 300"
      },
      {
        "key": "C",
        "text": "Rs. 400"
      },
      {
        "key": "D",
        "text": "Rs. 500"
      }
    ],
    "answer": "C",
    "explanation": "Simple interest is principal × rate × time = 5,000 × 0.04 × 2 = Rs. 400.",
    "takeaway": "For simple interest, calculate the rate on the original principal each year.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-018",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "difficulty": "STANDARD",
    "prompt": "A report is described as “concise”. Which quality does that suggest?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Brief but clear"
      },
      {
        "key": "B",
        "text": "Highly technical"
      },
      {
        "key": "C",
        "text": "Emotionally persuasive"
      },
      {
        "key": "D",
        "text": "Incomplete"
      }
    ],
    "answer": "A",
    "explanation": "Concise writing expresses the necessary information in a small number of words without unnecessary detail.",
    "takeaway": "Concise means brief and clear, not incomplete.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-019",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Punctuation",
    "difficulty": "EASY",
    "prompt": "Which sentence uses punctuation correctly?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The experiment was repeated; the results were consistent."
      },
      {
        "key": "B",
        "text": "The experiment was repeated, the results were consistent."
      },
      {
        "key": "C",
        "text": "The experiment was repeated: and the results were consistent."
      },
      {
        "key": "D",
        "text": "The experiment was repeated the results; were consistent."
      }
    ],
    "answer": "A",
    "explanation": "A semicolon can join two closely related independent clauses. Both parts can stand as complete sentences.",
    "takeaway": "Use a semicolon between closely related independent clauses.",
    "sourceKind": "original-sample"
  },
  {
    "id": "lcat-plus-020",
    "examCode": "LCAT",
    "subjectCode": "ANALYTICAL",
    "topic": "Necessary conditions",
    "difficulty": "STANDARD",
    "prompt": "A trip proceeds only if at least one booking is confirmed. The trip proceeded. What must be true?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Every seat was booked"
      },
      {
        "key": "B",
        "text": "The trip was free"
      },
      {
        "key": "C",
        "text": "At least one booking was confirmed"
      },
      {
        "key": "D",
        "text": "The trip was postponed"
      }
    ],
    "answer": "C",
    "explanation": "The statement makes a confirmed booking necessary for the trip to proceed. Since the trip proceeded, at least one booking must have been confirmed.",
    "takeaway": "When an outcome requires a condition, the outcome implies that the condition was met.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Differentiation",
    "difficulty": "STANDARD",
    "prompt": "If f(x) = 3x², what is f′(2)?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "6"
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
        "text": "18"
      }
    ],
    "answer": "C",
    "explanation": "Differentiating 3x² gives f′(x) = 6x. Substituting x = 2 gives f′(2) = 12.",
    "takeaway": "Apply the power rule, then substitute the requested input.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Integration",
    "difficulty": "STANDARD",
    "prompt": "What is the indefinite integral of 2x with respect to x?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2x² + C"
      },
      {
        "key": "B",
        "text": "x² + C"
      },
      {
        "key": "C",
        "text": "x + C"
      },
      {
        "key": "D",
        "text": "x³/3 + C"
      }
    ],
    "answer": "B",
    "explanation": "The antiderivative of 2x is x² because the derivative of x² is 2x. The constant of integration C is included for an indefinite integral.",
    "takeaway": "An indefinite integral represents a family of antiderivatives, so include C.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-003",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Quadratic equations",
    "difficulty": "STANDARD",
    "prompt": "What are the roots of x² − 5x + 6 = 0?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1 and 6"
      },
      {
        "key": "B",
        "text": "−2 and −3"
      },
      {
        "key": "C",
        "text": "2 and 3"
      },
      {
        "key": "D",
        "text": "−1 and −6"
      }
    ],
    "answer": "C",
    "explanation": "The expression factors as (x − 2)(x − 3) = 0. Setting each factor to zero gives x = 2 or x = 3.",
    "takeaway": "Factor a quadratic into two linear expressions when possible.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-004",
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
        "text": "√2/2"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "answer": "B",
    "explanation": "The standard special-angle value of sin 30° is 1/2.",
    "takeaway": "Memorise the standard sine and cosine values for 30°, 45° and 60°.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-005",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Arithmetic sequences",
    "difficulty": "STANDARD",
    "prompt": "An arithmetic sequence begins 5, 9, 13, 17, ... What is its 8th term?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "29"
      },
      {
        "key": "B",
        "text": "31"
      },
      {
        "key": "C",
        "text": "33"
      },
      {
        "key": "D",
        "text": "35"
      }
    ],
    "answer": "C",
    "explanation": "The first term is 5 and the common difference is 4. The 8th term is 5 + (8 − 1) × 4 = 33.",
    "takeaway": "The nth term of an arithmetic sequence is a₁ + (n − 1)d.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-006",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Vectors",
    "difficulty": "STANDARD",
    "prompt": "What is the dot product of vectors (2, 1) and (3, 4)?",
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
        "text": "14"
      }
    ],
    "answer": "C",
    "explanation": "The dot product is 2 × 3 + 1 × 4 = 6 + 4 = 10.",
    "takeaway": "Multiply corresponding vector components and add the products.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-007",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Probability",
    "difficulty": "STANDARD",
    "prompt": "A box contains 2 red balls and 3 blue balls. One ball is selected at random. What is the probability that it is not red?",
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
        "text": "4/5"
      }
    ],
    "answer": "C",
    "explanation": "There are three blue balls out of five total balls. Selecting a ball that is not red is therefore 3/5.",
    "takeaway": "Count the outcomes that satisfy the event and divide by the total.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-008",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Kinematics",
    "difficulty": "STANDARD",
    "prompt": "A vehicle starts from rest and accelerates uniformly at 3 m/s² for 4 seconds. What is its final speed?",
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
    "explanation": "Using v = u + at, with u = 0, a = 3 m/s² and t = 4 s, gives v = 12 m/s.",
    "takeaway": "For constant acceleration, final velocity equals initial velocity plus acceleration multiplied by time.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-009",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Newton’s laws",
    "difficulty": "STANDARD",
    "prompt": "A net force of 15 N acts on a 5 kg object. What is its acceleration?",
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
        "text": "5 m/s²"
      },
      {
        "key": "D",
        "text": "10 m/s²"
      }
    ],
    "answer": "B",
    "explanation": "Newton’s second law gives a = F/m = 15/5 = 3 m/s².",
    "takeaway": "Acceleration equals net force divided by mass.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-010",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Ohm’s law",
    "difficulty": "STANDARD",
    "prompt": "A 12 V potential difference is applied across a 6 Ω resistor. What current flows?",
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
    "answer": "C",
    "explanation": "Ohm’s law gives I = V/R = 12/6 = 2 A.",
    "takeaway": "Use current equals voltage divided by resistance for an ohmic conductor.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-011",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Series circuits",
    "difficulty": "STANDARD",
    "prompt": "Two resistors of 3 Ω and 6 Ω are connected in series. What is their equivalent resistance?",
    "instruction": "Choose one answer.",
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
    "answer": "C",
    "explanation": "Resistances in series add directly: 3 Ω + 6 Ω = 9 Ω.",
    "takeaway": "For resistors in series, add their resistances.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-012",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Waves",
    "difficulty": "STANDARD",
    "prompt": "A wave travels at 340 m/s and has a wavelength of 2 m. What is its frequency?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "85 Hz"
      },
      {
        "key": "B",
        "text": "120 Hz"
      },
      {
        "key": "C",
        "text": "170 Hz"
      },
      {
        "key": "D",
        "text": "680 Hz"
      }
    ],
    "answer": "C",
    "explanation": "Frequency is speed divided by wavelength: 340 ÷ 2 = 170 Hz.",
    "takeaway": "Use v = fλ and rearrange to find frequency.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-013",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Geometrical optics",
    "difficulty": "STANDARD",
    "prompt": "An object is placed at twice the focal length of a converging lens. Where is the image formed?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "At 2F on the opposite side, real and the same size"
      },
      {
        "key": "B",
        "text": "At F on the same side, virtual and enlarged"
      },
      {
        "key": "C",
        "text": "At infinity, virtual and upright"
      },
      {
        "key": "D",
        "text": "Between F and 2F, real and diminished"
      }
    ],
    "answer": "A",
    "explanation": "For a thin converging lens, an object at 2F forms a real, inverted image at 2F on the opposite side, equal in size to the object.",
    "takeaway": "At 2F, a converging lens forms an equal-sized real image at 2F.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-014",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Electric current",
    "difficulty": "STANDARD",
    "prompt": "A charge of 2 coulombs passes a point in a circuit in 4 seconds. What is the current?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.25 A"
      },
      {
        "key": "B",
        "text": "0.5 A"
      },
      {
        "key": "C",
        "text": "2 A"
      },
      {
        "key": "D",
        "text": "8 A"
      }
    ],
    "answer": "B",
    "explanation": "Current is charge transferred per unit time: I = Q/t = 2/4 = 0.5 A.",
    "takeaway": "Current measures the rate of flow of electric charge.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-015",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Molarity",
    "difficulty": "STANDARD",
    "prompt": "A solution contains 0.5 mol of solute in a total volume of 2 dm³. What is its molarity?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.10 mol dm⁻³"
      },
      {
        "key": "B",
        "text": "0.20 mol dm⁻³"
      },
      {
        "key": "C",
        "text": "0.25 mol dm⁻³"
      },
      {
        "key": "D",
        "text": "1.0 mol dm⁻³"
      }
    ],
    "answer": "C",
    "explanation": "Molarity is amount of solute divided by solution volume: 0.5 ÷ 2 = 0.25 mol dm⁻³.",
    "takeaway": "Molarity is measured in moles per cubic decimetre or litre.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-016",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Atomic structure",
    "difficulty": "EASY",
    "prompt": "What does the atomic number of an element represent?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Number of neutrons"
      },
      {
        "key": "B",
        "text": "Number of protons"
      },
      {
        "key": "C",
        "text": "Total number of nucleons"
      },
      {
        "key": "D",
        "text": "Number of occupied shells"
      }
    ],
    "answer": "B",
    "explanation": "The atomic number is the number of protons in the nucleus. It identifies the element.",
    "takeaway": "An element’s atomic number equals its proton number.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-017",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Chemical bonding",
    "difficulty": "EASY",
    "prompt": "Which statement best describes a covalent bond?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Electrons are shared between atoms"
      },
      {
        "key": "B",
        "text": "Electrons are transferred completely in every case"
      },
      {
        "key": "C",
        "text": "Positive ions attract a sea of electrons only"
      },
      {
        "key": "D",
        "text": "Neutrons are shared between nuclei"
      }
    ],
    "answer": "A",
    "explanation": "A covalent bond forms when atoms share one or more pairs of electrons.",
    "takeaway": "Covalent bonding involves shared electron pairs.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-018",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Periodic trends",
    "difficulty": "EASY",
    "prompt": "What generally happens to atomic radius as you move from left to right across a period?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It increases steadily"
      },
      {
        "key": "B",
        "text": "It decreases overall"
      },
      {
        "key": "C",
        "text": "It remains exactly constant"
      },
      {
        "key": "D",
        "text": "It first doubles then halves"
      }
    ],
    "answer": "B",
    "explanation": "Across a period, nuclear charge increases while electrons are added to the same main shell. The stronger attraction generally reduces atomic radius.",
    "takeaway": "Atomic radius generally decreases across a period because effective nuclear attraction increases.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-019",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Binary numbers",
    "difficulty": "EASY",
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
    "explanation": "The binary number represents 1×8 + 0×4 + 1×2 + 0×1 = 10.",
    "takeaway": "Convert binary by adding the place values where the digit is 1.",
    "sourceKind": "original-sample"
  },
  {
    "id": "net-plus-020",
    "examCode": "NET",
    "subjectCode": "ENGLISH",
    "topic": "Passive voice",
    "difficulty": "EASY",
    "prompt": "Choose the correct passive form of “The researchers analysed the samples.”",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The samples analysed the researchers."
      },
      {
        "key": "B",
        "text": "The samples were analysed by the researchers."
      },
      {
        "key": "C",
        "text": "The researchers were analysed by the samples."
      },
      {
        "key": "D",
        "text": "The samples have analyse by researchers."
      }
    ],
    "answer": "B",
    "explanation": "The object “the samples” becomes the subject. The past simple passive uses “were” plus the past participle “analysed”.",
    "takeaway": "Form the passive with the appropriate form of “be” and the past participle.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-001",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Constitutional history",
    "difficulty": "STANDARD",
    "prompt": "On which date did Pakistan’s 1973 Constitution come into force?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "23 March 1956"
      },
      {
        "key": "B",
        "text": "14 August 1973"
      },
      {
        "key": "C",
        "text": "12 March 1949"
      },
      {
        "key": "D",
        "text": "25 December 1973"
      }
    ],
    "answer": "B",
    "explanation": "The Constitution of 1973 came into force on 14 August 1973.",
    "takeaway": "The 1973 Constitution became effective on 14 August 1973.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-002",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Federalism",
    "difficulty": "EASY",
    "prompt": "Which statement best describes a federal system of government?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "All authority is held by local councils"
      },
      {
        "key": "B",
        "text": "Powers are constitutionally divided between central and regional governments"
      },
      {
        "key": "C",
        "text": "The judiciary appoints every elected representative"
      },
      {
        "key": "D",
        "text": "The armed forces write all ordinary legislation"
      }
    ],
    "answer": "B",
    "explanation": "A federal system divides governmental authority between national and regional units under a constitution.",
    "takeaway": "Federalism constitutionally allocates powers across more than one level of government.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-003",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Parliament",
    "difficulty": "EASY",
    "prompt": "Which chamber of Pakistan’s Parliament is designed to provide equal representation to the provinces?",
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
        "text": "Provincial Assembly of Punjab"
      },
      {
        "key": "D",
        "text": "Council of Common Interests"
      }
    ],
    "answer": "B",
    "explanation": "The Senate gives the provinces equal representation, while National Assembly representation is primarily population-based.",
    "takeaway": "The Senate is the federal chamber representing the provinces equally.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-004",
    "examCode": "CSS",
    "subjectCode": "GOVERNANCE",
    "topic": "Rule of law",
    "difficulty": "EASY",
    "prompt": "What is the central principle of the rule of law?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Public officials are above ordinary law"
      },
      {
        "key": "B",
        "text": "Law applies through publicly known rules and is not arbitrary"
      },
      {
        "key": "C",
        "text": "Only courts must follow legal rules"
      },
      {
        "key": "D",
        "text": "Government decisions need not be reviewable"
      }
    ],
    "answer": "B",
    "explanation": "The rule of law requires public power to be exercised under established law, with legal equality and protection against arbitrary action.",
    "takeaway": "The rule of law constrains public authority and applies legal standards consistently.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-005",
    "examCode": "CSS",
    "subjectCode": "GOVERNANCE",
    "topic": "Transparency",
    "difficulty": "EASY",
    "prompt": "Which measure most directly improves transparency in public administration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Keeping decision criteria confidential"
      },
      {
        "key": "B",
        "text": "Publishing accessible records and reasons for decisions"
      },
      {
        "key": "C",
        "text": "Removing all reporting requirements"
      },
      {
        "key": "D",
        "text": "Allowing decisions without written records"
      }
    ],
    "answer": "B",
    "explanation": "Accessible records and clear reasons allow the public and oversight bodies to understand and scrutinise decisions.",
    "takeaway": "Transparency depends on access to information and understandable procedures.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-006",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Inflation",
    "difficulty": "EASY",
    "prompt": "What does inflation describe?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A sustained rise in the general price level"
      },
      {
        "key": "B",
        "text": "A fall in the price of one product only"
      },
      {
        "key": "C",
        "text": "An increase in the physical quantity of currency notes only"
      },
      {
        "key": "D",
        "text": "A rise in the exchange value of every currency"
      }
    ],
    "answer": "A",
    "explanation": "Inflation is a sustained increase in the general level of prices, which reduces money’s purchasing power over time.",
    "takeaway": "Inflation refers to a broad and sustained rise in prices.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-007",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Gross domestic product",
    "difficulty": "EASY",
    "prompt": "Which activity is included in a country’s gross domestic product for a given period?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The resale of a used car without a new service"
      },
      {
        "key": "B",
        "text": "The market value of final goods and services produced domestically"
      },
      {
        "key": "C",
        "text": "A citizen’s income earned abroad, regardless of location"
      },
      {
        "key": "D",
        "text": "A purely financial transfer between households"
      }
    ],
    "answer": "B",
    "explanation": "GDP measures the market value of final goods and services produced within a country’s domestic territory during a period.",
    "takeaway": "GDP focuses on domestic production of final goods and services.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-008",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Opportunity cost",
    "difficulty": "STANDARD",
    "prompt": "A government uses a limited budget to build a hospital instead of a road. What is the opportunity cost of that decision?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The total tax revenue collected"
      },
      {
        "key": "B",
        "text": "The value of the best alternative forgone, such as the road project"
      },
      {
        "key": "C",
        "text": "The hospital’s future patient count"
      },
      {
        "key": "D",
        "text": "The accounting method used to record the budget"
      }
    ],
    "answer": "B",
    "explanation": "Opportunity cost is the value of the next-best alternative that is given up when resources are committed to one choice.",
    "takeaway": "Opportunity cost is measured by the best alternative sacrificed.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-009",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Externalities",
    "difficulty": "STANDARD",
    "prompt": "A factory pollutes a river, creating cleanup costs for nearby communities that are not reflected in the product price. This is an example of:",
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
        "text": "Perfect competition"
      }
    ],
    "answer": "B",
    "explanation": "The factory’s activity imposes costs on third parties who are not part of the transaction. Those spillover costs are a negative externality.",
    "takeaway": "A negative externality occurs when an activity imposes uncompensated costs on others.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-010",
    "examCode": "CSS",
    "subjectCode": "ENVIRONMENT",
    "topic": "Sustainable development",
    "difficulty": "EASY",
    "prompt": "Which description best captures sustainable development?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Using all available resources as quickly as possible"
      },
      {
        "key": "B",
        "text": "Meeting present needs while preserving the ability of future generations to meet theirs"
      },
      {
        "key": "C",
        "text": "Stopping all industrial and agricultural activity"
      },
      {
        "key": "D",
        "text": "Prioritising short-term output regardless of environmental cost"
      }
    ],
    "answer": "B",
    "explanation": "The widely used definition balances present needs with the capacity of future generations to meet their own needs.",
    "takeaway": "Sustainable development considers social, economic and environmental needs across generations.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-011",
    "examCode": "CSS",
    "subjectCode": "GEOGRAPHY",
    "topic": "Latitude",
    "difficulty": "STANDARD",
    "prompt": "Lines of latitude run in which general direction on a map?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "North–south, meeting at the poles"
      },
      {
        "key": "B",
        "text": "East–west, parallel to the Equator"
      },
      {
        "key": "C",
        "text": "Diagonally between the poles"
      },
      {
        "key": "D",
        "text": "Only along international borders"
      }
    ],
    "answer": "B",
    "explanation": "Lines of latitude are east–west circles parallel to the Equator. They measure angular distance north or south of it.",
    "takeaway": "Latitude lines run east–west and measure position north or south of the Equator.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-012",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "United Nations",
    "difficulty": "EASY",
    "prompt": "Which organ of the United Nations includes all UN member states, with each member having one vote?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Security Council"
      },
      {
        "key": "B",
        "text": "International Court of Justice"
      },
      {
        "key": "C",
        "text": "General Assembly"
      },
      {
        "key": "D",
        "text": "Secretariat"
      }
    ],
    "answer": "C",
    "explanation": "The General Assembly is the deliberative body in which all UN member states are represented, each with one vote.",
    "takeaway": "Every UN member state is represented in the General Assembly.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-013",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "UN Security Council",
    "difficulty": "EASY",
    "prompt": "How many permanent members are there on the UN Security Council?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Three"
      },
      {
        "key": "B",
        "text": "Five"
      },
      {
        "key": "C",
        "text": "Ten"
      },
      {
        "key": "D",
        "text": "Fifteen"
      }
    ],
    "answer": "B",
    "explanation": "The Security Council has five permanent members and ten elected members.",
    "takeaway": "The Security Council consists of five permanent and ten elected members.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-014",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "Development institutions",
    "difficulty": "EASY",
    "prompt": "Which institution is principally associated with long-term development financing and poverty reduction?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "World Bank"
      },
      {
        "key": "B",
        "text": "International Criminal Court"
      },
      {
        "key": "C",
        "text": "International Telecommunication Union"
      },
      {
        "key": "D",
        "text": "World Meteorological Organization"
      }
    ],
    "answer": "A",
    "explanation": "The World Bank Group provides financing, knowledge and support for development and poverty-reduction efforts.",
    "takeaway": "The World Bank is a major international development-financing institution.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-015",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Balance of trade",
    "difficulty": "STANDARD",
    "prompt": "A country exports goods worth $80 billion and imports goods worth $95 billion. What is its merchandise trade balance?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "A surplus of $15 billion"
      },
      {
        "key": "B",
        "text": "A deficit of $15 billion"
      },
      {
        "key": "C",
        "text": "A surplus of $175 billion"
      },
      {
        "key": "D",
        "text": "A deficit of $175 billion"
      }
    ],
    "answer": "B",
    "explanation": "The trade balance is exports minus imports: 80 − 95 = −15 billion, indicating a deficit of $15 billion.",
    "takeaway": "A trade deficit occurs when imports exceed exports.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-016",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Monetary policy",
    "difficulty": "EASY",
    "prompt": "Which institution normally sets a country’s policy interest rate as part of monetary policy?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The central bank"
      },
      {
        "key": "B",
        "text": "The national museum"
      },
      {
        "key": "C",
        "text": "The electoral commission"
      },
      {
        "key": "D",
        "text": "The supreme audit institution"
      }
    ],
    "answer": "A",
    "explanation": "A country’s central bank generally sets or guides the policy interest rate to influence financial conditions and inflation.",
    "takeaway": "Policy interest rates are a core tool of central-bank monetary policy.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-017",
    "examCode": "CSS",
    "subjectCode": "GOVERNANCE",
    "topic": "Decentralisation",
    "difficulty": "EASY",
    "prompt": "What is a common rationale for decentralising public services?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To move every decision to the national capital"
      },
      {
        "key": "B",
        "text": "To bring some decisions closer to local communities and needs"
      },
      {
        "key": "C",
        "text": "To remove the need for public accountability"
      },
      {
        "key": "D",
        "text": "To replace all professional standards with informal rules"
      }
    ],
    "answer": "B",
    "explanation": "Local decision-making can improve responsiveness by incorporating knowledge of local needs, provided that capacity and accountability are maintained.",
    "takeaway": "Decentralisation can make services more responsive to local conditions.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-018",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Representative sampling",
    "difficulty": "STANDARD",
    "prompt": "A researcher wants to study opinions across urban and rural households. Which sampling approach is most suitable for ensuring both groups are represented?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Survey only households near the researcher’s office"
      },
      {
        "key": "B",
        "text": "Select households using a sampling plan that includes both urban and rural groups"
      },
      {
        "key": "C",
        "text": "Ask only people who volunteer on social media"
      },
      {
        "key": "D",
        "text": "Interview one household and generalise to the country"
      }
    ],
    "answer": "B",
    "explanation": "A sampling design that deliberately covers both groups reduces the risk that one is omitted or underrepresented.",
    "takeaway": "A representative sample should include the important groups in the target population.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-019",
    "examCode": "CSS",
    "subjectCode": "MATH",
    "topic": "Median",
    "difficulty": "EASY",
    "prompt": "What is the median of the ordered values 3, 4, 8, 9 and 14?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "4"
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
        "text": "9"
      }
    ],
    "answer": "C",
    "explanation": "There are five ordered values, so the median is the middle, third value: 8.",
    "takeaway": "For an odd number of ordered observations, the median is the middle value.",
    "sourceKind": "original-sample"
  },
  {
    "id": "css-plus-020",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "Essay structure",
    "difficulty": "STANDARD",
    "prompt": "What is the main function of a thesis statement in an argumentative essay?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "To list every source used"
      },
      {
        "key": "B",
        "text": "To state the central claim that the essay will develop"
      },
      {
        "key": "C",
        "text": "To replace evidence in each paragraph"
      },
      {
        "key": "D",
        "text": "To provide a decorative opening quotation"
      }
    ],
    "answer": "B",
    "explanation": "A thesis statement presents the central argument or position that the essay’s body will support and explain.",
    "takeaway": "A thesis gives the essay a clear central argument.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Meiosis",
    "difficulty": "EASY",
    "prompt": "During which stage of meiosis does crossing over normally occur?",
    "instruction": "Choose one answer.",
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
    "answer": "A",
    "explanation": "Homologous chromosomes pair during prophase I, and non-sister chromatids can exchange corresponding segments at chiasmata.",
    "takeaway": "Crossing over occurs during prophase I of meiosis.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Kidney function",
    "difficulty": "STANDARD",
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
    "explanation": "Blood pressure forces water and small dissolved substances from glomerular capillaries into Bowman’s capsule. Blood cells and most large plasma proteins remain in the bloodstream.",
    "takeaway": "Ultrafiltration begins at the glomerulus and Bowman’s capsule.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Hormonal regulation",
    "difficulty": "EASY",
    "prompt": "Which hormone is released by pancreatic beta cells and lowers blood glucose concentration?",
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
    "explanation": "Insulin promotes glucose uptake in several tissues and supports storage of glucose as glycogen, lowering blood glucose concentration.",
    "takeaway": "Insulin lowers blood glucose by promoting uptake and storage.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-004",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Photosynthesis",
    "difficulty": "EASY",
    "prompt": "Where does the Calvin cycle take place in a chloroplast?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Thylakoid lumen"
      },
      {
        "key": "B",
        "text": "Stroma"
      },
      {
        "key": "C",
        "text": "Outer membrane"
      },
      {
        "key": "D",
        "text": "Intermembrane space"
      }
    ],
    "answer": "B",
    "explanation": "The Calvin cycle enzymes, including RuBisCO, are located in the chloroplast stroma, where carbon dioxide is fixed using ATP and NADPH.",
    "takeaway": "The Calvin cycle occurs in the chloroplast stroma.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-005",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Protein synthesis",
    "difficulty": "EASY",
    "prompt": "During translation, which molecule carries an amino acid and pairs its anticodon with an mRNA codon?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "DNA polymerase"
      },
      {
        "key": "B",
        "text": "Transfer RNA"
      },
      {
        "key": "C",
        "text": "Ribosomal DNA"
      },
      {
        "key": "D",
        "text": "Ligase"
      }
    ],
    "answer": "B",
    "explanation": "Transfer RNA carries a specific amino acid and uses its anticodon to pair with the complementary codon on messenger RNA at the ribosome.",
    "takeaway": "tRNA matches amino acids to mRNA codons during translation.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-006",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Nervous system",
    "difficulty": "EASY",
    "prompt": "Which substance is released from a presynaptic neuron to transmit a chemical signal across a synapse?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Neurotransmitter"
      },
      {
        "key": "B",
        "text": "Haemoglobin"
      },
      {
        "key": "C",
        "text": "Glycogen"
      },
      {
        "key": "D",
        "text": "Bile"
      }
    ],
    "answer": "A",
    "explanation": "Neurotransmitters are released from synaptic vesicles and bind to receptors on the next cell to pass on the signal.",
    "takeaway": "Chemical synapses communicate using neurotransmitters.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-007",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Circulatory system",
    "difficulty": "EASY",
    "prompt": "Which blood vessels carry blood away from the heart?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Veins"
      },
      {
        "key": "B",
        "text": "Arteries"
      },
      {
        "key": "C",
        "text": "Capillaries only"
      },
      {
        "key": "D",
        "text": "Lymph vessels"
      }
    ],
    "answer": "B",
    "explanation": "Arteries carry blood away from the heart. Most carry oxygenated blood, while the pulmonary arteries carry deoxygenated blood to the lungs.",
    "takeaway": "Arteries are defined by carrying blood away from the heart.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-008",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Osmosis",
    "difficulty": "EASY",
    "prompt": "What is osmosis?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Movement of solute particles from high to low concentration through any wall"
      },
      {
        "key": "B",
        "text": "Net movement of water across a selectively permeable membrane down its water potential gradient"
      },
      {
        "key": "C",
        "text": "Movement of ions using ATP only"
      },
      {
        "key": "D",
        "text": "Breakdown of glucose into pyruvate"
      }
    ],
    "answer": "B",
    "explanation": "Osmosis is the net movement of water across a selectively permeable membrane from higher water potential to lower water potential.",
    "takeaway": "Osmosis is water movement across a selectively permeable membrane.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-009",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Water balance",
    "difficulty": "EASY",
    "prompt": "What is a principal effect of antidiuretic hormone (ADH) on the kidneys?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It reduces water reabsorption"
      },
      {
        "key": "B",
        "text": "It increases water reabsorption in the collecting ducts"
      },
      {
        "key": "C",
        "text": "It stops filtration at the glomerulus"
      },
      {
        "key": "D",
        "text": "It converts urea into glucose"
      }
    ],
    "answer": "B",
    "explanation": "ADH increases the water permeability of collecting-duct walls, allowing more water to be reabsorbed and producing a smaller volume of more concentrated urine.",
    "takeaway": "ADH helps conserve body water by increasing collecting-duct water reabsorption.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-010",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Enzymes",
    "difficulty": "STANDARD",
    "prompt": "An enzyme is heated well above its optimum temperature. Why does its activity usually decrease sharply?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Its active site may change shape as the protein denatures"
      },
      {
        "key": "B",
        "text": "Its substrate becomes a different element"
      },
      {
        "key": "C",
        "text": "Its peptide bonds all turn into glucose"
      },
      {
        "key": "D",
        "text": "The enzyme gains additional chromosomes"
      }
    ],
    "answer": "A",
    "explanation": "High temperature can disrupt interactions that maintain the enzyme’s three-dimensional structure, changing the active site and reducing substrate binding.",
    "takeaway": "Excessive heat can denature an enzyme and alter its active site.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-011",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Molar mass",
    "difficulty": "EASY",
    "prompt": "What is the approximate molar mass of calcium carbonate, CaCO₃? (Ca = 40, C = 12, O = 16)",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "56 g mol⁻¹"
      },
      {
        "key": "B",
        "text": "84 g mol⁻¹"
      },
      {
        "key": "C",
        "text": "100 g mol⁻¹"
      },
      {
        "key": "D",
        "text": "116 g mol⁻¹"
      }
    ],
    "answer": "C",
    "explanation": "The molar mass is 40 + 12 + 3(16) = 100 g mol⁻¹.",
    "takeaway": "Add the atomic masses of every atom in the formula.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-012",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Balancing equations",
    "difficulty": "EASY",
    "prompt": "Which equation correctly represents the balanced reaction between hydrogen and oxygen to form water?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "H₂ + O₂ → H₂O"
      },
      {
        "key": "B",
        "text": "2H₂ + O₂ → 2H₂O"
      },
      {
        "key": "C",
        "text": "H₂ + 2O₂ → H₂O₂"
      },
      {
        "key": "D",
        "text": "2H₂ + 2O₂ → H₂O"
      }
    ],
    "answer": "B",
    "explanation": "The equation 2H₂ + O₂ → 2H₂O has four hydrogen atoms and two oxygen atoms on both sides.",
    "takeaway": "A balanced chemical equation has the same number of each type of atom on both sides.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-013",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Gas laws",
    "difficulty": "STANDARD",
    "prompt": "For a fixed amount of ideal gas at constant temperature, what happens to pressure if volume is halved?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Pressure is halved"
      },
      {
        "key": "B",
        "text": "Pressure doubles"
      },
      {
        "key": "C",
        "text": "Pressure stays constant"
      },
      {
        "key": "D",
        "text": "Pressure becomes zero"
      }
    ],
    "answer": "B",
    "explanation": "Boyle’s law states that pressure is inversely proportional to volume at constant temperature. Halving the volume doubles the pressure.",
    "takeaway": "At constant temperature, pressure and volume are inversely proportional.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-014",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Catalysts",
    "difficulty": "STANDARD",
    "prompt": "How does a catalyst increase the rate of a chemical reaction?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It increases the enthalpy change"
      },
      {
        "key": "B",
        "text": "It provides an alternative pathway with lower activation energy"
      },
      {
        "key": "C",
        "text": "It permanently increases the mass of the reactants"
      },
      {
        "key": "D",
        "text": "It changes the equilibrium constant at a fixed temperature"
      }
    ],
    "answer": "B",
    "explanation": "A catalyst offers a reaction pathway with lower activation energy. It is regenerated and does not change the equilibrium constant at a fixed temperature.",
    "takeaway": "A catalyst speeds a reaction by lowering its activation energy.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-015",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Organic chemistry",
    "difficulty": "EASY",
    "prompt": "Which functional group is characteristic of an ester?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−OH"
      },
      {
        "key": "B",
        "text": "−COO−"
      },
      {
        "key": "C",
        "text": "−NH₂"
      },
      {
        "key": "D",
        "text": "−CHO"
      }
    ],
    "answer": "B",
    "explanation": "Esters contain the −COO− linkage between carbon-containing groups. The other options are hydroxyl, amino and aldehyde groups.",
    "takeaway": "The ester functional group contains a carbonyl linked to an oxygen.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-016",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Work and energy",
    "difficulty": "STANDARD",
    "prompt": "A constant force of 10 N moves an object 4 m in the direction of the force. How much work is done?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2.5 J"
      },
      {
        "key": "B",
        "text": "14 J"
      },
      {
        "key": "C",
        "text": "40 J"
      },
      {
        "key": "D",
        "text": "400 J"
      }
    ],
    "answer": "C",
    "explanation": "Work done is W = Fd cos θ. The force and displacement are in the same direction, so W = 10 × 4 = 40 J.",
    "takeaway": "When force and displacement are parallel, work is force multiplied by distance.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-017",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electric circuits",
    "difficulty": "STANDARD",
    "prompt": "A 4 Ω resistor is connected across a 12 V battery. What is the current through it?",
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
    "explanation": "Using Ohm’s law, I = V/R = 12/4 = 3 A.",
    "takeaway": "For an ohmic resistor, current equals potential difference divided by resistance.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-018",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Momentum",
    "difficulty": "STANDARD",
    "prompt": "A 2 kg trolley moves at 5 m/s. What is its momentum?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2.5 kg m/s"
      },
      {
        "key": "B",
        "text": "7 kg m/s"
      },
      {
        "key": "C",
        "text": "10 kg m/s"
      },
      {
        "key": "D",
        "text": "25 kg m/s"
      }
    ],
    "answer": "C",
    "explanation": "Momentum is mass multiplied by velocity: p = 2 × 5 = 10 kg m/s.",
    "takeaway": "Linear momentum equals mass multiplied by velocity.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-019",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Sound waves",
    "difficulty": "STANDARD",
    "prompt": "Which property of a sound wave is most directly associated with how high or low its pitch is?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Frequency"
      },
      {
        "key": "B",
        "text": "Amplitude only"
      },
      {
        "key": "C",
        "text": "Speed in every medium"
      },
      {
        "key": "D",
        "text": "Wavelength only"
      }
    ],
    "answer": "A",
    "explanation": "Pitch is related to frequency: higher-frequency sound is perceived as higher in pitch.",
    "takeaway": "Pitch is primarily determined by sound frequency.",
    "sourceKind": "original-sample"
  },
  {
    "id": "mdcat-plus-020",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Mirrors",
    "difficulty": "EASY",
    "prompt": "What type of image does a convex mirror form for a real object placed in front of it?",
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
        "text": "Real, upright and same size"
      },
      {
        "key": "D",
        "text": "Virtual, inverted and enlarged"
      }
    ],
    "answer": "B",
    "explanation": "A convex mirror diverges reflected rays. Their backward extensions meet behind the mirror, producing a virtual, upright and diminished image.",
    "takeaway": "A convex mirror produces a virtual, upright and diminished image.",
    "sourceKind": "original-sample"
  }
];

if (FRESH_PRIVATE_QUESTIONS.length !== FRESH_SAMPLE_QUESTIONS.length) {
  throw new Error("Fresh study question prompts and private answer data do not match.");
}
