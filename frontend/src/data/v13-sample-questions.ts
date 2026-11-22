import type { StudyQuestionPrompt } from "./sample-questions";

/** 40 additional original questions: 10 each for LCAT, NET, CSS and MDCAT. */
export const V13_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  {
    "id": "v13-lcat-001",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Simple interest",
    "difficulty": "STANDARD",
    "prompt": "A sum of Rs. 12,000 is invested at 5% simple interest per year for 2 years. What is the interest earned?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Rs. 600"
      },
      {
        "key": "B",
        "text": "Rs. 1,000"
      },
      {
        "key": "C",
        "text": "Rs. 1,200"
      },
      {
        "key": "D",
        "text": "Rs. 2,400"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-lcat-002",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Quadratic expressions",
    "difficulty": "STANDARD",
    "prompt": "For the quadratic expression x² − 5x + 6, what is the product of its two roots?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−6"
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
        "text": "−5"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-lcat-003",
    "examCode": "LCAT",
    "subjectCode": "MATH",
    "topic": "Average speed",
    "difficulty": "STANDARD",
    "prompt": "A driver travels 120 km at 60 km/h and then another 120 km at 40 km/h. What is the average speed for the whole journey?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "45 km/h"
      },
      {
        "key": "B",
        "text": "48 km/h"
      },
      {
        "key": "C",
        "text": "50 km/h"
      },
      {
        "key": "D",
        "text": "52 km/h"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-lcat-004",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Subject–verb agreement",
    "difficulty": "EASY",
    "prompt": "Choose the grammatically correct completion: “Neither of the two proposals ___ ready for approval.”",
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
    "id": "v13-lcat-005",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Vocabulary in context",
    "difficulty": "EASY",
    "prompt": "In the sentence “The new procedure is intended to mitigate delays,” what does “mitigate” mean?",
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
        "text": "Predict"
      },
      {
        "key": "D",
        "text": "Extend"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-lcat-006",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Analogy",
    "difficulty": "STANDARD",
    "prompt": "Complete the analogy: “editor : manuscript :: curator : ___”.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Gallery visitor"
      },
      {
        "key": "B",
        "text": "Collection"
      },
      {
        "key": "C",
        "text": "Ticket"
      },
      {
        "key": "D",
        "text": "Exhibition opening"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-lcat-007",
    "examCode": "LCAT",
    "subjectCode": "VERBAL",
    "topic": "Critical inference",
    "difficulty": "STANDARD",
    "prompt": "A library extends its evening hours. During the following month, evening visits increase while total weekly visits remain similar. Which conclusion is best supported?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The library has doubled its membership."
      },
      {
        "key": "B",
        "text": "Some visits may have shifted from earlier hours to the evening."
      },
      {
        "key": "C",
        "text": "Every visitor prefers evening hours."
      },
      {
        "key": "D",
        "text": "The library no longer needs daytime staff."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-lcat-008",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Set relationships",
    "difficulty": "STANDARD",
    "prompt": "All members of a debate club are students. Some students are musicians. Which statement must be true?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "All musicians are debate-club members."
      },
      {
        "key": "B",
        "text": "Some debate-club members are musicians."
      },
      {
        "key": "C",
        "text": "All debate-club members are students."
      },
      {
        "key": "D",
        "text": "No students are musicians."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-lcat-009",
    "examCode": "LCAT",
    "subjectCode": "LOGIC",
    "topic": "Ordering",
    "difficulty": "STANDARD",
    "prompt": "Four presentations are scheduled. H must occur before J, J before K, and L after K. Which sequence satisfies all three rules?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "H, J, K, L"
      },
      {
        "key": "B",
        "text": "J, H, K, L"
      },
      {
        "key": "C",
        "text": "H, K, J, L"
      },
      {
        "key": "D",
        "text": "L, H, J, K"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-lcat-010",
    "examCode": "LCAT",
    "subjectCode": "ENGLISH",
    "topic": "Sentence meaning",
    "difficulty": "EASY",
    "prompt": "Choose the sentence that most clearly expresses contrast.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The report was detailed because it used several sources."
      },
      {
        "key": "B",
        "text": "Although the report was detailed, it omitted the most recent figures."
      },
      {
        "key": "C",
        "text": "The report included figures and several charts."
      },
      {
        "key": "D",
        "text": "The report was detailed, so the committee approved it."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-net-001",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Differentiation",
    "difficulty": "STANDARD",
    "prompt": "If f(x) = x³ − 2x, what is f′(2)?",
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
    "id": "v13-net-002",
    "examCode": "NET",
    "subjectCode": "MATH",
    "topic": "Coordinate geometry",
    "difficulty": "EASY",
    "prompt": "What is the x-coordinate of the vertex of the parabola y = x² − 6x + 5?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "−6"
      },
      {
        "key": "B",
        "text": "−3"
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
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-net-003",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Acceleration",
    "difficulty": "STANDARD",
    "prompt": "A car's velocity increases uniformly from 4 m/s to 20 m/s in 4 seconds. What is its acceleration?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "2 m/s²"
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
        "text": "8 m/s²"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-net-004",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Electric circuits",
    "difficulty": "STANDARD",
    "prompt": "A 6 Ω resistor is connected across an 18 V ideal battery. What current flows through it?",
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
        "text": "6 A"
      },
      {
        "key": "D",
        "text": "108 A"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-net-005",
    "examCode": "NET",
    "subjectCode": "PHY",
    "topic": "Wave speed",
    "difficulty": "STANDARD",
    "prompt": "A wave has frequency 50 Hz and wavelength 0.4 m. What is its speed?",
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
        "text": "125 m/s"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-net-006",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Moles",
    "difficulty": "EASY",
    "prompt": "How many moles of water are present in 9 g of H₂O? (Molar mass = 18 g mol⁻¹)",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "0.25 mol"
      },
      {
        "key": "B",
        "text": "0.5 mol"
      },
      {
        "key": "C",
        "text": "1 mol"
      },
      {
        "key": "D",
        "text": "2 mol"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-net-007",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Chemical equilibrium",
    "difficulty": "STANDARD",
    "prompt": "For an exothermic equilibrium, what happens to the equilibrium position when temperature is increased?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It shifts towards products."
      },
      {
        "key": "B",
        "text": "It shifts towards reactants."
      },
      {
        "key": "C",
        "text": "The equilibrium constant must become zero."
      },
      {
        "key": "D",
        "text": "The reaction stops completely."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-net-008",
    "examCode": "NET",
    "subjectCode": "CHEM",
    "topic": "Periodic trends",
    "difficulty": "STANDARD",
    "prompt": "Across a period from left to right, what generally happens to the atomic radius of main-group elements?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It increases steadily."
      },
      {
        "key": "B",
        "text": "It decreases overall."
      },
      {
        "key": "C",
        "text": "It remains exactly constant."
      },
      {
        "key": "D",
        "text": "It first doubles and then halves."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-net-009",
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
    "id": "v13-net-010",
    "examCode": "NET",
    "subjectCode": "CS",
    "topic": "Algorithms",
    "difficulty": "STANDARD",
    "prompt": "In the worst case, how does the running time of a linear search grow with the number n of items?",
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
    "id": "v13-css-001",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Pakistan constitutional history",
    "difficulty": "EASY",
    "prompt": "Which constitutional amendment in Pakistan is widely associated with transferring a range of legislative powers to the provinces?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Eighth Amendment"
      },
      {
        "key": "B",
        "text": "Thirteenth Amendment"
      },
      {
        "key": "C",
        "text": "Eighteenth Amendment"
      },
      {
        "key": "D",
        "text": "Twenty-fifth Amendment"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-002",
    "examCode": "CSS",
    "subjectCode": "ECONOMICS",
    "topic": "Economics",
    "difficulty": "STANDARD",
    "prompt": "When the general price level rises while nominal income remains unchanged, what happens to a person's purchasing power?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "It increases."
      },
      {
        "key": "B",
        "text": "It decreases."
      },
      {
        "key": "C",
        "text": "It remains unchanged."
      },
      {
        "key": "D",
        "text": "It becomes equal to nominal income."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-003",
    "examCode": "CSS",
    "subjectCode": "INTERNATIONAL",
    "topic": "International relations",
    "difficulty": "STANDARD",
    "prompt": "In international relations, state sovereignty most directly refers to a state's:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Ability to set all global prices."
      },
      {
        "key": "B",
        "text": "Supreme authority within its territory and independence from external control."
      },
      {
        "key": "C",
        "text": "Obligation to join every international organisation."
      },
      {
        "key": "D",
        "text": "Control over the domestic policies of neighbouring states."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-004",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Climate policy",
    "difficulty": "EASY",
    "prompt": "Which policy is most directly an example of climate-change mitigation?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Building higher flood barriers along a river."
      },
      {
        "key": "B",
        "text": "Moving homes away from an eroding coastline."
      },
      {
        "key": "C",
        "text": "Replacing coal-fired electricity with low-carbon energy."
      },
      {
        "key": "D",
        "text": "Creating heat shelters during a heatwave."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-005",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Public administration",
    "difficulty": "STANDARD",
    "prompt": "A recruitment system selects candidates through published criteria and assessed qualifications. Which public-administration principle does this most directly support?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Patronage"
      },
      {
        "key": "B",
        "text": "Merit"
      },
      {
        "key": "C",
        "text": "Secrecy"
      },
      {
        "key": "D",
        "text": "Arbitrary discretion"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-006",
    "examCode": "CSS",
    "subjectCode": "ANALYTICAL",
    "topic": "Critical reasoning",
    "difficulty": "STANDARD",
    "prompt": "A city introduces a bus service and traffic congestion falls during the same month. Which additional information would best help assess whether the bus service caused the reduction?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The colour of the buses."
      },
      {
        "key": "B",
        "text": "Whether roadworks or other major traffic changes occurred at the same time."
      },
      {
        "key": "C",
        "text": "The brand of the bus tyres."
      },
      {
        "key": "D",
        "text": "The number of bus advertisements displayed."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-007",
    "examCode": "CSS",
    "subjectCode": "PAKISTAN",
    "topic": "Pakistan geography",
    "difficulty": "EASY",
    "prompt": "Which mountain range forms a major part of Pakistan's northern high-mountain region?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Salt Range"
      },
      {
        "key": "B",
        "text": "Kirthar Range"
      },
      {
        "key": "C",
        "text": "Karakoram Range"
      },
      {
        "key": "D",
        "text": "Sulaiman Range"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-008",
    "examCode": "CSS",
    "subjectCode": "ENGLISH",
    "topic": "English usage",
    "difficulty": "EASY",
    "prompt": "Choose the sentence with correct punctuation.",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The committee reviewed the evidence, however it postponed the decision."
      },
      {
        "key": "B",
        "text": "The committee reviewed the evidence; however, it postponed the decision."
      },
      {
        "key": "C",
        "text": "The committee reviewed; the evidence however it postponed the decision."
      },
      {
        "key": "D",
        "text": "The committee, reviewed the evidence however it postponed the decision."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-009",
    "examCode": "CSS",
    "subjectCode": "CIVICS",
    "topic": "Political theory",
    "difficulty": "STANDARD",
    "prompt": "The principle of separation of powers is primarily intended to:",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Concentrate all authority in one institution."
      },
      {
        "key": "B",
        "text": "Prevent excessive concentration of state power through institutional checks."
      },
      {
        "key": "C",
        "text": "Remove the role of courts from government."
      },
      {
        "key": "D",
        "text": "Make the executive independent of all law."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-css-010",
    "examCode": "CSS",
    "subjectCode": "GENERAL",
    "topic": "Data interpretation",
    "difficulty": "STANDARD",
    "prompt": "A department's budget rises from Rs. 80 million to Rs. 100 million. What is the percentage increase?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "20%"
      },
      {
        "key": "B",
        "text": "22.5%"
      },
      {
        "key": "C",
        "text": "25%"
      },
      {
        "key": "D",
        "text": "30%"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-001",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Cell division",
    "difficulty": "EASY",
    "prompt": "During which stage of mitosis do chromosomes line up at the cell's equatorial plane?",
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
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-002",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Genetics",
    "difficulty": "STANDARD",
    "prompt": "Two heterozygous parents (Aa × Aa) have a child. Assuming complete dominance and independent segregation, what is the probability of the aa genotype?",
    "instruction": "Choose one answer.",
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
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-003",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Human circulation",
    "difficulty": "EASY",
    "prompt": "Which blood vessels carry oxygenated blood from the lungs to the left atrium of the heart?",
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
        "text": "Coronary arteries"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-004",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Enzymes",
    "difficulty": "STANDARD",
    "prompt": "Why can an enzyme lose activity when exposed to a temperature far above its optimum?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "Its substrate becomes a product automatically."
      },
      {
        "key": "B",
        "text": "Its active-site shape can change as the protein denatures."
      },
      {
        "key": "C",
        "text": "Its amino acids turn into glucose."
      },
      {
        "key": "D",
        "text": "The reaction has no activation energy."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-005",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Acids and bases",
    "difficulty": "STANDARD",
    "prompt": "Equal volumes of 0.1 mol dm⁻³ hydrochloric acid and 0.1 mol dm⁻³ sodium hydroxide are mixed at 25°C. What is the approximate pH of the resulting solution?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "13"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-006",
    "examCode": "MDCAT",
    "subjectCode": "CHEM",
    "topic": "Periodic properties",
    "difficulty": "STANDARD",
    "prompt": "Why does atomic radius generally decrease across Period 3 from sodium to chlorine?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "The number of occupied shells increases."
      },
      {
        "key": "B",
        "text": "Nuclear charge increases while electrons are added to the same principal shell."
      },
      {
        "key": "C",
        "text": "The number of protons decreases."
      },
      {
        "key": "D",
        "text": "Electron shielding becomes infinite."
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-007",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Electric circuits",
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
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-008",
    "examCode": "MDCAT",
    "subjectCode": "PHY",
    "topic": "Lens power",
    "difficulty": "STANDARD",
    "prompt": "A converging lens has a focal length of 0.25 m. What is its power?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "+1 D"
      },
      {
        "key": "B",
        "text": "+2 D"
      },
      {
        "key": "C",
        "text": "+4 D"
      },
      {
        "key": "D",
        "text": "+8 D"
      }
    ],
    "sourceKind": "original-sample"
  },
  {
    "id": "v13-mdcat-009",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Plant transport",
    "difficulty": "EASY",
    "prompt": "Which tissue transports water and dissolved mineral ions from plant roots towards the leaves?",
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
    "id": "v13-mdcat-010",
    "examCode": "MDCAT",
    "subjectCode": "BIO",
    "topic": "Energy transfer",
    "difficulty": "STANDARD",
    "prompt": "If producers store 1,000 kJ of energy and approximately 10% is transferred to primary consumers, how much energy reaches the primary consumers?",
    "instruction": "Choose one answer.",
    "options": [
      {
        "key": "A",
        "text": "10 kJ"
      },
      {
        "key": "B",
        "text": "50 kJ"
      },
      {
        "key": "C",
        "text": "100 kJ"
      },
      {
        "key": "D",
        "text": "500 kJ"
      }
    ],
    "sourceKind": "original-sample"
  }
];
