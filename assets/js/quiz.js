// quiz.html
var questionContainer = document.querySelector(".question-choice-answer-container");
var showAnswerResponse = document.querySelector(".show-answer-response");
var showAnswerResponseDiv = document.querySelector(".show-answer-response-div");
var enterInitialsContainer = document.querySelector(".score-page-container");
var finalScoreOutputContainer = document.querySelector(".final-score-output");
var initialsTextBox = document.querySelector("#initials");
var saveScoreButton = document.querySelector("#save-score");
var highScoresDiv = document.querySelector('.high-scores-div')


saveScoreButton.addEventListener("click", saveScore);


var targetHideMe = document.querySelector(".hide-me");
var timer = document.querySelector(".timer-p");
var timerDiv = document.querySelector(".timer-div");
var startingIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

// -----TIMER CODE-----
// tutoring 
// counterHandle holds the timer I made, then I have to use the setInterval
// function and that requires that I pass 2 arguments, which are the
// function that makes my timer go and how much space between the time that I
// want it to run (ie., 1 millisecond)

var counter = 600;

function timerFunction(){
  var minutes = Math.floor(counter / 60);
  var seconds = counter % 60;
  timer.innerHTML = "Beat the clock " + minutes + ":" + seconds + "!";
  counter--;
  if(counter <= 0) {
    timer.innerHTML = "Time is up!";
    clearInterval(counterHandle);
    quizFinished();
  }
};

// -----DECREMENT TIME FOR A WRONG ANSWER-----
var counterHandle = setInterval(timerFunction, 1000);

var incorrectAnswerDeduction = 60; 
function incorrectAnswer() {
  var minutes = Math.floor(counter / 60);
  var seconds = counter % 60;
  counter = counter - incorrectAnswerDeduction;
  // I have to recall the timer function here so that I don't have to wait a full
  // second for it to show the decrement
  timer.innerHTML = "Beat the clock " + minutes + ":" + seconds + "!";

}

// office hours 15MAR2023
// https://jsbin.com/boqanit/edit?html,js,output

// -----SHOW MY FIRST QUESTION-----
// innerHTML lets you write html as a string, so I still need to do opening and closing tags
// I can't just refer to it like a selector
function displayQuestion(displayQuestionAtIndex) {
  questionContainer.innerHTML = "<h3>" + questionBankArray[displayQuestionAtIndex].question + "</h3>";
  
  var mxChoicesDiv = document.createElement("div");
  mxChoicesDiv.classList.add("choices-class");

  //for (i = 0; i < questionBankArray.length; i++) {
    //console.log("-----", questionBankArray[i].choices, "-----");
    for (i = 0; i < questionBankArray[displayQuestionAtIndex].choices.length; i++) {
      // console.log('choice ' + questionBankArray[displayQuestionAtIndex].choices[i]);

      var choice = questionBankArray[displayQuestionAtIndex].choices[i];
      var answerButton = document.createElement("button");

      answerButton.textContent = choice;
      answerButton.dataset.index = i;
      answerButton.classList.add("btn");
      answerButton.addEventListener("click", checkAnswer);
      mxChoicesDiv.append(answerButton);
      //answerButton.addEventListener("click", nextQuestion);
      
    }
    questionContainer.append(mxChoicesDiv);
    console.log("Display Question at Index: " + displayQuestionAtIndex);
    return displayQuestionAtIndex;
}

// I want to return a value from displayQuestion, so i have to return the value I want
// when I return the value, I can capture it in a variable outside of the function,
// But i need to set the NAME OF THE FUNCTION + ARGUMENT to the variable,
// NOT the stuff after the word "return"


function checkAnswer() {
  // because checkAnswer gets passed into displayFunction, I can refer to it as "this".
  // and it will go right back to the dataset that I already set on the button in displayQuestion
  // now i need to see if the correctIndex from my questionBankArray matches the "index" I placed
  // as a dataset on each button, starting from 0 and incrementing
  var setAnIndexValueToAButton = this.dataset.index;
  console.log("Set an Index Value to a Button " + setAnIndexValueToAButton);
  //not all, change j to the currently displayed question index, i don't need a for loop here
  //for(j = 0; j < questionBankArray.length; j++) {
    if (setAnIndexValueToAButton == questionBankArray[startingIndex].correctIndex){
      // console.log("Question Bank Array Starting at Index " + questionBankArray[startingIndex].correctIndex);
      targetHideMe.classList.remove("hide-me");
      showAnswerResponse.innerHTML = "Correct!";
      correctAnswers++;
    } else {
      incorrectAnswer();
      targetHideMe.classList.remove("hide-me");
      showAnswerResponse.innerHTML = "Incorrect";
      incorrectAnswers++;
    }
  //}
  startingIndex++;
    if (startingIndex == questionBankArray.length){
      quizFinished();
    }
    else {
      nextQuestion();
    }
}

function quizFinished() {
  questionContainer.innerHTML = " ";
  enterInitialsContainer.classList.remove("hide-me");
  questionContainer.classList.add("hide-me");
  mxChoicesDiv.innerHTML = " ";
  showAnswerResponseDiv.innerHTML = " ";
  targetHideMe.classList.remove("hide-me");
  finalScoreOutputContainer.innerHTML = "Your final score is: " + correctAnswers + " correct answers and " + incorrectAnswers + " incorrect answers.";
  timerDiv.innerHTML = " ";
};

// tutoring 16MAR2023
function saveScore() {
    var userInitials = initialsTextBox.value;
    if(userInitials == '') {
        alert('Please enter your initials to continue.');
    }
    else {
        var savedScoresStr = localStorage.getItem('myScores');
        var savedScoresArray = [];
        if(savedScoresStr != null) {
        savedScoresArray = JSON.parse(savedScoresStr);
        }
        savedScoresArray.push({'initials': userInitials, 'correct': correctAnswers, 'incorrect': incorrectAnswers });
        var valuesStr = JSON.stringify(savedScoresArray);
        localStorage.setItem('myScores', valuesStr);
        document.location.href = '/code-quiz/scores.html'
    }
};

// function getScores() {
//   var unparsedScores = localStorage.getItem('myScores');
//   console.log(unparsedScores);
//   var storedScores = JSON.parse(unparsedScores) || [];
//   console.log(storedScores);
//   return storedScores
// }

// function displayScores(scores){
//   // highScoresDiv.innerHTML = "";
//   for(i = 0; i < scores.length; i++) {
//     var createScore = document.createElement("p");
//     var scoreValue = scores[i];
//     createScore.classList = "score";
//     createScore.innerHTML = scoreValue;
//   }
// }

// displayScores(getScores)

function nextQuestion () {
  questionContainer.innerHTML = " ";
  mxChoicesDiv = " ";
  displayQuestion(startingIndex);
}

nextQuestion ();
  
// -----LOCAL STORAGE-----
