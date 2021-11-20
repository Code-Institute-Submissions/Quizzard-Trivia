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