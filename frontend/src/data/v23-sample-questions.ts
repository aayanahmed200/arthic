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

export const V23_SAMPLE_QUESTIONS: StudyQuestionPrompt[] = [
  // LCAT — data interpretation, ordering, reading and argument evaluation.
  question("v23-lcat-001", "LCAT", "MATH", "Reading a multi-category survey", "STANDARD",
    "A student union surveys 180 members about the time they prefer for events. Forty per cent choose morning events, one-third choose afternoon events, and everyone else chooses evening events. How many members prefer evening events?",
    ["42", "48", "54", "60"]),
  question("v23-lcat-002", "LCAT", "ANALYTICAL", "Ordering under linked constraints", "STANDARD",
    "Four interviews—K, L, M and N—are scheduled in four consecutive slots, with one interview in each slot. K is before L, L is immediately before M, and N is after M. Which interview must be in the third slot?",
    ["K", "L", "M", "N"]),
  question("v23-lcat-003", "LCAT", "VERBAL", "Evaluating a comparison", "CHALLENGING",
    "Two libraries extend their evening opening hours for a month. Evening visits rise by 18% at the North Library and 10% at the South Library. During the same month, the North Library also hosts a popular reading festival. Which conclusion is most defensible?",
    ["The longer opening hours alone caused the larger rise at the North Library.", "The reading festival reduced evening attendance at the North Library.", "The results are consistent with longer hours helping, but the festival makes it difficult to isolate their effect at the North Library.", "The South Library's longer hours had no effect on attendance."]),
  question("v23-lcat-004", "LCAT", "ANALYTICAL", "Recognising selection bias", "CHALLENGING",
    "A council surveys residents about a new online booking service, but sends the survey only to people who successfully used the service. Which limitation most affects the result?",
    ["The survey may exclude residents who could not or chose not to use online booking, so it may overstate how accessible the service is.", "The survey necessarily contains too many responses from people who dislike technology.", "The survey cannot measure satisfaction among people who used the service.", "The survey automatically proves that online booking reduced waiting times."]),

  // NUST NET — calculus, trigonometry, mechanics, electricity, chemistry and computing.
  question("v23-net-001", "NET", "MATH", "Definite integration", "STANDARD",
    "Evaluate the definite integral of 3x² + 2 with respect to x from 0 to 2.",
    ["8", "10", "12", "14"]),
  question("v23-net-002", "NET", "MATH", "Trigonometric ratios", "STANDARD",
    "An acute angle θ satisfies tan θ = 3/4. What is sin θ?",
    ["3/4", "4/5", "3/5", "5/3"]),
  question("v23-net-003", "NET", "PHY", "Impulse and change in momentum", "STANDARD",
    "A 0.20 kg ball travels east at 12 m/s and is brought to rest by a bat. What is the magnitude and direction of the impulse on the ball?",
    ["0.60 N·s east", "2.4 N·s west", "2.4 N·s east", "6.0 N·s west"]),
  question("v23-net-004", "NET", "PHY", "Resistance when a wire is stretched", "CHALLENGING",
    "A uniform metal wire is stretched until its length doubles. Its volume and resistivity remain constant. By what factor does its electrical resistance change?",
    ["It becomes one-half as large.", "It doubles.", "It becomes four times as large.", "It becomes eight times as large."]),
  question("v23-net-005", "NET", "CHEM", "Writing an equilibrium expression", "STANDARD",
    "For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), which expression gives the concentration equilibrium constant Kc?",
    ["[NH₃]² / ([N₂][H₂]³)", "[N₂][H₂]³ / [NH₃]²", "[NH₃] / ([N₂] + 3[H₂])", "[N₂] + 3[H₂] / 2[NH₃]"]),
  question("v23-net-006", "NET", "CHEM", "Regioselectivity in electrophilic addition", "STANDARD",
    "Propene reacts with HBr under ordinary conditions, in the absence of peroxides. Which is the major organic product?",
    ["1-bromopropane", "Propan-1-ol", "2-bromopropane", "1,2-dibromopropane"]),
  question("v23-net-007", "NET", "CS", "Tracing nested loops", "STANDARD",
    "What value is printed by this Python code?\n\ncount = 0\nfor i in range(1, 4):\n    for j in range(i):\n        count += 1\nprint(count)",
    ["4", "5", "6", "7"]),
  question("v23-net-008", "NET", "MATH", "Binomial expansion", "CHALLENGING",
    "What is the coefficient of x² in the expansion of (1 + 2x)⁴?",
    ["12", "16", "24", "32"]),

  // CSS MPT — public finance, implementation and evaluation.
  question("v23-css-001", "CSS", "ANALYTICAL", "Assessing value for money in public programmes", "CHALLENGING",
    "A ministry compares two public programmes. Programme A costs less per participant but mainly serves urban districts. Programme B costs slightly more per participant, reaches underserved rural districts and has a similar completion rate. Which assessment would give the strongest basis for choosing between them?",
    ["Choose A solely because its cost per participant is lower.", "Choose B automatically because rural programmes always have greater value.", "Compare outcomes, total costs, reach and the distributional objectives before deciding; cost per participant alone is insufficient.", "Ignore completion rates and choose whichever programme enrols more people."]),

  // MDCAT — enzyme kinetics, cardiac conduction and reaction rates.
  question("v23-mdcat-001", "MDCAT", "BIO", "Competitive enzyme inhibition", "STANDARD",
    "A competitive inhibitor binds reversibly to an enzyme's active site. In the presence of sufficient substrate, what happens to the apparent Km and Vmax?",
    ["Km decreases and Vmax decreases.", "Km increases while Vmax remains unchanged.", "Km remains unchanged while Vmax decreases.", "Both Km and Vmax increase."]),
  question("v23-mdcat-002", "MDCAT", "BIO", "Initiation of the cardiac cycle", "EASY",
    "Which structure normally initiates the electrical impulse that sets the rhythm of the human heart?",
    ["Sinoatrial node", "Atrioventricular node", "Bundle of His", "Purkinje fibres"]),
  question("v23-mdcat-003", "MDCAT", "CHEM", "Catalysts and chemical equilibrium", "STANDARD",
    "A catalyst is added to a reversible reaction that is already approaching equilibrium. Which statement is correct?",
    ["The equilibrium constant increases.", "The equilibrium shifts towards products.", "Only the forward reaction becomes faster.", "The forward and reverse reactions become faster, but the equilibrium constant and position do not change."]),
];
