let shuffledQuestions = []; //empty array to hold shuffled selected questions

function handleQuestions() {
    //function to shuffle and push 25 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 24) {
        const random = questions[Math.floor(Math.random() * questions.length)];
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random);

        }

    }


}
//The variables that I will be using for my functions
let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function nextQuestion(index) {
    handleQuestions();
    let currentQuestion = shuffledQuestions[index];
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}