const questions = [
    {
        question: "What year did Nigeria gain independence?",
        options: ["1960", "1975", "1980", "1957"],
        answer: "1960"
    },
    {
        question: "Which African country is known as the Land of a Thousand Hills?",
        options: ["Kenya", "Rwanda", "Ghana", "Ethiopia"],
        answer: "Rwanda"
    },
    {
        question: "Who was the first Nigerian to win a Nobel Prize?",
        options: ["Wole Soyinka", "Chinua Achebe", "Nnamdi Azikiwe", "Fela Kuti"],
        answer: "Wole Soyinka"
    },
    {
        question: "What is the official currency of Nigeria?",
        options: ["Cedi", "Naira", "Rand", "Shilling"],
        answer: "Naira"
    },
    {
        question: "Which African country has the largest population?",
        options: ["South Africa", "Egypt", "Ethiopia", "Nigeria"],
        answer: "Nigeria"
    },
    {
        question: "Who was the first woman to be elected President in Africa?",
        options: ["Ngozi Okonjo-Iweala", "Ellen Johnson Sirleaf", "Wangari Maathai", "Joyce Banda"],
        answer: "Ellen Johnson Sirleaf"
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

// Create a progress indicator
const progressEl = document.createElement("p");
progressEl.id = "progress";
document.querySelector(".quiz-container").insertBefore(progressEl, questionEl);

function loadQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];

    // Update question number
    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

function resetState() {
    optionsEl.innerHTML = "";
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    progressEl.style.display = "none";
    resultEl.textContent = `You scored ${score} out of ${questions.length}!`;
    resultEl.classList.remove("hidden");
}

// Start the quiz
loadQuestion();



//https://6lackboy042.github.io/quiz-app/
