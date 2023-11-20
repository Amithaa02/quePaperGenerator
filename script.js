const easyQuestions = [
    { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
    { question: "Name the five senses of the human body", subject: "Biology", topic: "Anatomy", difficulty: "Easy", marks: 5 },
    { question: "What is the capital of Japan?", subject: "Geography", topic: "World Capitals", difficulty: "Easy", marks: 5 },
    { question: "Who is known as the 'Father of Computers'?", subject: "Computer Science", topic: "History of Computers", difficulty: "Easy", marks: 5 },
    { question: "Solve 2 + 3", subject: "Mathematics", topic: "Arithmetic", difficulty: "Easy", marks: 5 },
    { question: "What is the main function of the lungs?", subject: "Biology", topic: "Respiratory System", difficulty: "Easy", marks: 5 },
    { question: "In which year did Christopher Columbus reach the Americas?", subject: "History", topic: "Exploration", difficulty: "Easy", marks: 5 },
    { question: "Define the term 'Ecosystem'", subject: "Environmental Science", topic: "Ecology", difficulty: "Easy", marks: 5 }
];
const mediumQuestions = [
    { question: "Define Newton's laws of motion", subject: "Physics", topic: "Mechanics", difficulty: "Medium", marks: 10 },
    { question: "Factorize the expression: x^2 - 9", subject: "Mathematics", topic: "Algebra", difficulty: "Medium", marks: 10 },
    { question: "Explain the process of cellular respiration", subject: "Biology", topic: "Cell Biology", difficulty: "Medium", marks: 10 },
    { question: "What are the three branches of government in the United States?", subject: "Civics", topic: "Government", difficulty: "Medium", marks: 10 },
    { question: "Who wrote 'To Kill a Mockingbird'?", subject: "Literature", topic: "American Literature", difficulty: "Medium", marks: 10 },
    { question: "Calculate the area of a rectangle with length 8 cm and width 5 cm", subject: "Mathematics", topic: "Geometry", difficulty: "Medium", marks: 10 },
    { question: "List the first five elements of the periodic table", subject: "Chemistry", topic: "Elements", difficulty: "Medium", marks: 10 },
    { question: "What is the significance of the Magna Carta?", subject: "History", topic: "Medieval History", difficulty: "Medium", marks: 10 }
];
const hardQuestions = [
    { question: "Explain the process of photosynthesis", subject: "Biology", topic: "Botany", difficulty: "Hard", marks: 15 },
    { question: "Derive the formula for the area of a circle", subject: "Mathematics", topic: "Geometry", difficulty: "Hard", marks: 15 },
    { question: "Describe the structure of DNA", subject: "Biology", topic: "Genetics", difficulty: "Hard", marks: 15 },
    { question: "What are the principles of quantum mechanics?", subject: "Physics", topic: "Quantum Physics", difficulty: "Hard", marks: 15 },
    { question: "Explain the concept of entropy in thermodynamics", subject: "Physics", topic: "Thermodynamics", difficulty: "Hard", marks: 15 },
    { question: "Solve the system of equations: 2x + y = 5, x - y = 1", subject: "Mathematics", topic: "Algebra", difficulty: "Hard", marks: 15 },
    { question: "Discuss the causes and consequences of climate change", subject: "Environmental Science", topic: "Climate Science", difficulty: "Hard", marks: 15 },
    { question: "Who proposed the theory of relativity?", subject: "Physics", topic: "Modern Physics", difficulty: "Hard", marks: 15 },

];

function generateQuestionPaper() {
    const totalMarks = 100;
    let questionPaper = "";
    let maxMarks = 0;
    const selectedEasyQuestions = getRandomQuestions(easyQuestions, 4);
    questionPaper += generateQuestionsHtml("Easy", selectedEasyQuestions);
    maxMarks += selectedEasyQuestions.reduce((sum, q) => sum + q.marks, 0);
    const selectedMediumQuestions = getRandomQuestions(mediumQuestions, 5);
    questionPaper += generateQuestionsHtml("Medium", selectedMediumQuestions);
    maxMarks += selectedMediumQuestions.reduce((sum, q) => sum + q.marks, 0);
    const selectedHardQuestions = getRandomQuestions(hardQuestions, 2);
    questionPaper += generateQuestionsHtml("Hard", selectedHardQuestions);
    maxMarks += selectedHardQuestions.reduce((sum, q) => sum + q.marks, 0);
    questionPaper += `<h3>Total  Marks:</h3>`;
    questionPaper += `<p>${maxMarks} marks</p>`;
    document.getElementById("questionPaper").innerHTML = questionPaper;
}
function generateQuestionsHtml(difficulty, questions) {
    let html = `<h3>${difficulty}:</h3>`;
    questions.forEach(q => {
        html += `<p>${q.question} (${q.marks} marks)</p>`;
    });
    return html;
}
function getRandomQuestions(questions, count) {
    const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, count);
}