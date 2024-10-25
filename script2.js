const questions = [
    { 
        question: "what is youtr name", 
        options: ["Berlin", "Madrid", "Paris", "Rome"], 
        answer: "Paris" 
    },
    { 
        question: "what is your age ", 
        options: ["39", "43", "41", "42"], 
        answer: "41" 
    },
    { 
        question: "What's your wife's phone number'?", 
        options: ["8903519008", "7382736453", "9841148982", "8870026237"], 
        answer: "8903519008" 
    },
    { 
        question: "do you wear underwear?", 
        options: ["yes","no"], 
        answer: "no" 
    },
    {
        question: "ddo you love arthi vijayan??", 
        options: ["yes","no"], 
        answer: "yes"

    },
    {   question: "do arthi know trigometry?", 
        options: ["yes","no"], 
        answer: "no"
    },
    {  question: "when did you marry arthi?", 
        options: ["april 28 2010","april 26 2010"], 
        answer: "no"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const resultMsg = document.getElementById('result-msg');
const questionTitle = document.getElementById('question-title');
const scoreTracker = document.getElementById('score-tracker');

// Display the current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = `Question ${currentQuestionIndex + 1}`;

    questionContainer.innerHTML = ''; // Clear previous question

    const questionText = document.createElement('p');
    questionText.textContent = currentQuestion.question;
    questionContainer.appendChild(questionText);

    currentQuestion.options.forEach(option => {
        const optionLabel = document.createElement('label');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'answer';
        radioInput.value = option;

        optionLabel.appendChild(radioInput);
        optionLabel.appendChild(document.createTextNode(option));
        questionContainer.appendChild(optionLabel);
    });

    resultMsg.classList.add('hidden');
    nextBtn.classList.add('hidden');
}

// Check if the selected answer is correct
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        resultMsg.textContent = 'Correct!';
        resultMsg.style.color = 'green';
        score++; // Increment score for correct answer
        scoreTracker.textContent = `Score: ${score}`;
        nextBtn.classList.remove('hidden'); // Show "Next" button
    } else {
        resultMsg.textContent = 'Wrong! Try again.';
        resultMsg.style.color = 'red';
    }

    resultMsg.classList.remove('hidden');
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionContainer.innerHTML = `<h3>Congratulations! You have completed the quiz.</h3><p>Your final score is: ${score}/${questions.length}</p>`;
        nextBtn.classList.add('hidden');
    }
}

// Event Listeners
questionContainer.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);

// Initialize the quiz
displayQuestion();
