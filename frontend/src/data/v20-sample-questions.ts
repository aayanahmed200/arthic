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

export const V20_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  // LCAT — SAT-style quantitative reasoning, critical reading and conventions.
  question("v20-lcat-001", "LCAT", "MATH", "Percentages and fractions", "STANDARD",
    "A university receives 600 applications. Thirty-five per cent of applicants are invited to an interview, and two-thirds of those invited attend. How many applicants attend?",
    ["126", "140", "150", "210"]),
  question("v20-lcat-002", "LCAT", "VERBAL", "Evaluating a causal claim", "CHALLENGING",
    "A college extends library hours and later reports higher average grades among students who used the library during the longer hours. Which finding most weakens the claim that the extended hours caused the improvement?",
    ["Students who chose the later hours already had higher grades and stronger study habits before the change.", "The library kept the same collection of books during the trial.", "The longer opening hours were introduced at the start of a new term.", "The college published the results in its annual report."]),
  question("v20-lcat-003", "LCAT", "MATH", "Mean and missing values", "STANDARD",
    "The mean of five test scores is 76. Four of the scores are 68, 72, 76 and 78. What is the fifth score?",
    ["80", "84", "86", "90"]),
  question("v20-lcat-004", "LCAT", "VERBAL", "Subject–verb agreement", "EASY",
    "Choose the verb that correctly completes the sentence: “The list of required documents, along with the signed form, ___ been sent to the admissions office.”",
    ["have", "has", "were", "are"]),
  question("v20-lcat-005", "LCAT", "VERBAL", "Interpreting survey data", "CHALLENGING",
    "A weekday survey conducted only between 7:00 and 9:00 a.m. records 250 commuters: 48% travel by bus, 32% by train and 20% by bicycle. Which conclusion is best supported?",
    ["Most commuters in the city travel by bus at every time of day.", "Train use is higher on weekends than on weekdays.", "Bicycle commuters have the longest journeys.", "The figures describe this surveyed morning group and may not represent other times or days."]),

  // NUST NET — HSSC-level mathematics, physics, chemistry and computing.
  question("v20-net-001", "NET", "MATH", "Domain of a square-root function", "STANDARD",
    "For which values of x is the function f(x) = √(7 − 2x) real-valued?",
    ["x ≥ 3.5", "x ≤ 3.5", "x < −3.5", "All real values of x"]),
  question("v20-net-002", "NET", "PHY", "Conservation of mechanical energy", "STANDARD",
    "A 2 kg object is dropped from rest from a height of 5 m. Neglecting air resistance and taking g = 10 m/s², what is its speed just before it reaches the ground?",
    ["5 m/s", "10 m/s", "15 m/s", "20 m/s"]),
  question("v20-net-003", "NET", "CHEM", "Chemical equilibrium and pressure", "STANDARD",
    "For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what happens when the pressure is increased at constant temperature?",
    ["The equilibrium shifts to the left, towards more gas molecules.", "The equilibrium shifts to the right, towards fewer gas molecules.", "The equilibrium constant increases.", "The equilibrium position does not change because temperature is constant."]),
  question("v20-net-004", "NET", "CS", "Tracing a loop", "EASY",
    "What value is printed by this Python code?\n\nn = 0\nfor i in range(1, 5):\n    if i % 2 == 0:\n        n += i\n    else:\n        n -= 1\nprint(n)",
    ["2", "4", "5", "6"]),
  question("v20-net-005", "NET", "MATH", "Trigonometric equations in an interval", "STANDARD",
    "How many solutions does sin θ = 1/2 have in the interval 0° ≤ θ ≤ 180°?",
    ["One", "Two", "Three", "Four"]),

  // CSS MPT — general ability, Pakistan studies, international affairs and English.
  question("v20-css-001", "CSS", "GENERAL", "Percentage and survey interpretation", "EASY",
    "A survey receives 500 valid responses. If 210 respondents support a proposal, what percentage support it?",
    ["21%", "35%", "42%", "48%"]),
  question("v20-css-002", "CSS", "PAKISTAN", "Parliamentary representation", "EASY",
    "Which chamber of Pakistan’s Parliament provides equal representation to each province?",
    ["National Assembly", "Provincial Assembly", "Council of Common Interests", "Senate"]),
  question("v20-css-003", "CSS", "INTERNATIONAL", "United Nations General Assembly", "EASY",
    "Under the general voting arrangement of the United Nations General Assembly, how many votes does each member state have?",
    ["One", "Two", "A number based on population", "A number based on financial contribution"]),
  question("v20-css-004", "CSS", "ENGLISH", "Conditional sentence transformation", "STANDARD",
    "Which sentence has the same meaning as “Had the report arrived earlier, the team could have included it”?",
    ["The report arrived early, so the team included it.", "The team included the report before it arrived.", "The report would arrive earlier if the team had included it.", "If the report had arrived earlier, the team could have included it."]),
  question("v20-css-005", "CSS", "ANALYTICAL", "Necessary conditions and logical inference", "CHALLENGING",
    "Every proposal that passes the review is eligible for funding. Proposal X has received funding. What can be concluded from these statements alone?",
    ["Proposal X definitely passed the review.", "No proposal can receive funding without review.", "The statements do not establish whether Proposal X passed the review.", "Every proposal that is eligible for funding must receive it."]),

  // MDCAT — PMDC curriculum domains: biology, chemistry, physics and reasoning.
  question("v20-mdcat-001", "MDCAT", "BIO", "Monohybrid inheritance", "STANDARD",
    "In pea plants, tallness (T) is dominant to shortness (t). If two heterozygous tall plants are crossed (Tt × Tt), what fraction of their offspring is expected to be short?",
    ["1/4", "1/2", "3/4", "All offspring"]),
  question("v20-mdcat-002", "MDCAT", "BIO", "Enzyme activity and pH", "STANDARD",
    "An enzyme is moved from its optimum pH to a much more acidic environment. Why can its activity decrease?",
    ["The substrate is converted into an enzyme.", "The enzyme gains additional active sites.", "Changes in ionisation can alter bonds that maintain the active site’s shape.", "The reaction must become exothermic."]),
  question("v20-mdcat-003", "MDCAT", "CHEM", "pH of a strong base", "EASY",
    "At 25°C, what is the pH of an ideal 0.001 mol dm⁻³ solution of a strong monoprotic base?",
    ["3", "11", "10", "13"]),
  question("v20-mdcat-004", "MDCAT", "PHY", "Wave speed and wavelength", "EASY",
    "A wave travels through the same medium at constant speed. If its frequency doubles, what happens to its wavelength?",
    ["It becomes half as large.", "It doubles.", "It becomes four times as large.", "It remains unchanged."]),
  question("v20-mdcat-005", "MDCAT", "LOGIC", "Contrapositive reasoning", "STANDARD",
    "A laboratory rule states: “Every sample that has been screened receives an identification label.” Sample Q has no identification label. Which conclusion follows from the rule?",
    ["Sample Q has been screened.", "Sample Q must be contaminated.", "The rule is false.", "Sample Q has not been screened."]),
];
