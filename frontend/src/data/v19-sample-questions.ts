import type { StudyQuestionPrompt } from "./sample-questions.js";

function question(
  id: string,
  examCode: "LCAT" | "NET" | "CSS" | "MDCAT",
  subjectCode: string,
  topic: string,
  difficulty: "EASY" | "STANDARD" | "CHALLENGING",
  prompt: string,
  choices: [string, string, string, string],
): StudyQuestionPrompt {
  return {
    id, examCode, subjectCode, topic, difficulty, prompt,
    instruction: "Choose one answer.",
    options: choices.map((text, index) => ({ key: "ABCD"[index], text })),
    sourceKind: "original-sample",
    sourceNote: "Original Arthic practice question; not taken from an official past paper.",
  };
}

export const V19_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  // LCAT — quantitative reasoning and critical reading
  question("v19-lcat-001","LCAT","MATH","Fractions and grouped data","STANDARD",
    "A group has 180 applicants. Two-fifths select a morning test session, and three-quarters of that group submit their documents before the deadline. How many morning-session applicants submit on time?",
    ["45","54","60","72"]),
  question("v19-lcat-002","LCAT","VERBAL","Evaluating an assumption","CHALLENGING",
    "A college plans to replace printed notices with an app, arguing that students will see important announcements sooner. Which finding most weakens that argument?",
    ["Most students own a phone, but many keep app notifications disabled and rarely open the app.","The app uses the college's existing green colour scheme.","Printed notices are currently placed near the main entrance.","The app can display notices in more than one font size."]),

  // NUST NET — HSSC mathematics, physics, chemistry and computing
  question("v19-net-001","NET","MATH","Composite functions","STANDARD",
    "Let f(x) = x² − 1 and g(x) = 2x + 3. What is the value of f(g(1))?",
    ["21","24","25","26"]),
  question("v19-net-002","NET","PHY","Capacitance","STANDARD",
    "A 4 μF capacitor is connected across a 12 V supply. What charge is stored on the capacitor?",
    ["16 μC","32 μC","48 μC","64 μC"]),
  question("v19-net-003","NET","CHEM","Stoichiometry and limiting reagents","CHALLENGING",
    "Aluminium reacts with chlorine according to 2Al + 3Cl₂ → 2AlCl₃. If 4 mol of Al react with 4 mol of Cl₂, what amount of AlCl₃ can form?",
    ["4/3 mol","2 mol","8/3 mol","4 mol"]),
  question("v19-net-004","NET","CS","Tracing a loop","EASY",
    "What value is printed by this Python code?\n\ntotal = 0\nfor n in [2, 3, 5]:\n    total += 2 * n\nprint(total)",
    ["10","16","20","25"]),

  // CSS — Preliminary Test (MPT) general ability and English
  question("v19-css-001","CSS","GENERAL","Percentage allocation","STANDARD",
    "A public programme receives Rs. 2.4 million. If 60% is assigned to rural districts, how much remains for all other areas?",
    ["Rs. 0.72 million","Rs. 0.96 million","Rs. 1.20 million","Rs. 1.44 million"]),
  question("v19-css-002","CSS","ENGLISH","Dangling modifiers","STANDARD",
    "Which sentence correctly makes the person reviewing the file the subject of the opening phrase?",
    ["After reviewing the file, several errors were found.","After reviewing the file, the officer identified several errors.","After the file was reviewed, the errors identified the officer.","Reviewing the file, several errors were identified by the officer."]),
  question("v19-css-003","CSS","INTERNATIONAL","Multilateral diplomacy","EASY",
    "A negotiation involving three or more states is generally described as:",
    ["Unilateral diplomacy","Bilateral diplomacy","Multilateral diplomacy","Domestic consultation"]),
  question("v19-css-004","CSS","ANALYTICAL","Interpreting survey data","STANDARD",
    "A survey records 200 responses, of which 65% support a proposed policy. How many respondents support it?",
    ["100","120","130","150"]),

  // MDCAT — biology, chemistry, physics and logical reasoning
  question("v19-mdcat-001","MDCAT","BIO","Incomplete dominance","CHALLENGING",
    "In a flower species, red (RR) and white (rr) plants produce pink (Rr) offspring. If two pink plants are crossed, what phenotypic ratio is expected?",
    ["3 red : 1 white","1 red : 2 pink : 1 white","1 red : 1 white","All pink"]),
  question("v19-mdcat-002","MDCAT","BIO","Pancreatic hormones","EASY",
    "Which cells of the pancreatic islets secrete glucagon?",
    ["Alpha cells","Beta cells","Delta cells","Acinar cells"]),
  question("v19-mdcat-003","MDCAT","BIO","Ecology and biomagnification","EASY",
    "A persistent pesticide enters a food chain and becomes more concentrated at each trophic level. Which organism is expected to have the highest concentration?",
    ["Phytoplankton","Zooplankton","Small fish","A fish-eating bird at the top of the food chain"]),
  question("v19-mdcat-004","MDCAT","CHEM","Dehydration of alcohols","EASY",
    "Which conditions are commonly used to dehydrate ethanol to ethene in the laboratory?",
    ["Concentrated H₂SO₄ and heating to about 170°C","Dilute NaOH at room temperature","Aqueous bromine in the dark","Cold water and a metal catalyst"]),
  question("v19-mdcat-005","MDCAT","CHEM","Molar enthalpy change","STANDARD",
    "A reaction releases 120 kJ of heat when 0.50 mol of reactant is consumed. What is the molar enthalpy change for the reaction as written per mole of reactant?",
    ["−60 kJ mol⁻¹","−120 kJ mol⁻¹","−240 kJ mol⁻¹","+240 kJ mol⁻¹"]),
  question("v19-mdcat-006","MDCAT","PHY","Vertical motion","STANDARD",
    "A ball is projected vertically upwards at 20 m/s. Taking g = 10 m/s² and neglecting air resistance, how long does it take to reach its highest point?",
    ["1 s","2 s","3 s","4 s"]),
  question("v19-mdcat-007","MDCAT","PHY","Ideal transformers","STANDARD",
    "An ideal transformer has 500 turns in its primary coil and 100 turns in its secondary coil. If the primary voltage is 240 V, what is the secondary voltage?",
    ["24 V","48 V","120 V","1,200 V"]),
  question("v19-mdcat-008","MDCAT","LOGIC","Conditional statements","STANDARD",
    "A laboratory report is accepted only if its main result has been independently replicated. The result has not been independently replicated. What follows from the rule?",
    ["The report must be accepted.","The report cannot yet be accepted under this rule.","The result must be false.","The report is automatically rejected for every other reason."]),
];
