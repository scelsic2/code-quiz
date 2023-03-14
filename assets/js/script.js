// What do I want to grab?

// index.html
var timer = document.querySelector(".timer-div");
var startButton = document.querySelector("#quiz-button");
var highScoresButton = document.querySelector("#scores-button");

// quiz.html
// elements
var questionDiv = document.querySelector(".question-div");
var mxChoiceDiv = document.querySelector(".mxChoice-div");
var buttonA = document.querySelector("#choiceA");
var buttonB = document.querySelector("#choiceB");
var buttonC = document.querySelector("#choiceC");
var buttonD = document.querySelector("#choiceD");
var anyButton = document.querySelectorAll(".mx-button-default");

// values
var questionIndex = 0;
var q = questionBankArray[questionIndex];

// display the first question
function displayQuestion (){
    console.log(questionIndex);
    questionDiv.textContent = q.question;
    buttonA.textContent = q.choices[0]; 
    buttonB.textContent = q.choices[1]; 
    buttonC.textContent = q.choices[2]; 
    buttonD.textContent = q.choices[3]; 
    questionIndex++;
    q = questionBankArray[questionIndex];
    console.log(questionIndex);
}
//questionIndex is a global variable, so I don't need to return it? I don't quite understand that.

// call the function to display my first question
displayQuestion();

function nextQuestion(){
    if (questionIndex < questionBankArray.length + 1){
        displayQuestion();
    }
}

for(i = 0; i < anyButton.length; i++) {
 anyButton[i].addEventListener("click", nextQuestion);
}

// --------------------FIRST ATTEMPT--------------------
// HTML | DOM Style display Property. (2022, June 5). GeeksforGeeks. Retrieved March 13, 2023, from https://www.geeksforgeeks.org/html-dom-style-display-property/

// Targeting the question-div and creating and h2 inside of it, then I am setting the h2 to a value in my array
// var questionDiv = document.querySelector(".question-div");
// var createH2 = document.createElement("h2")
// var buttonPress = document.querySelector(".submit-answer-button");

// Hiding the page with the final score because we don't need this on the page until the quiz is over.
// var hideScorePageContainer = document.querySelector(".hide-score-page-container");

// function displayQuestion(){
//     var quizQuestion = " ";
//     for (i = 0; i < questionBankArray.length; i++) {
//         // var randomNumber = Math.floor(Math.random() * questionBankArray.length);
//         createH2.innerHTML = randomNumber[i];
//         createH2.className = "h2-question";
//         quizQuestion = questionDiv.append(createH2);
        
//     }
//     return quizQuestion;
// }

// displayQuestion ();

// console.log(questionBankArray.length);
// console.log(randomNumber[i]);

// function hideQuestions(){
//     hideQuestions.style.display = "none";
// }

// hideQuestions();

// function hideMe(){
//     hideScorePageContainer.style.display = "none";
// }

// hideMe();



//Setting elements in an object to a variable so that I can call it and place it within createH2
// var q1 = questionBankArray[0].question;

// createH2.innerHTML = q1;
// createH2.className = "h2-question";
// questionDiv.append(createH2);

// buttonPress.addEventListener("click", displayQuestion)


// onclick Event. (n.d.). W3Schools. Retrieved March 13, 2023, from https://www.w3schools.com/jsref/event_onclick.asp




// console.log(buttonPress);
// buttonPress is null
//do I need to do math random

// buttonPress.onclick = function(){displayQuestion()};

// [SOLVED] Cannot Read Property 'addEventListener' of Null in JS. (2022, November 14). Coding Beauty. Retrieved March 13, 2023, from https://codingbeautydev.com/blog/javascript-cannot-read-property-addeventlistener-of-null/


// console.log(questionBankArray[i].question);


// JavaScript: Insertion of Elements | I'd Rather Be Writing Blog. (n.d.). Idratherbewriting.com. Retrieved March 13, 2023, from https://idratherbewriting.com/insertion-of-elements-javascript/


// --------------------

// var myPara = "hello";
// // console.log(typeof questionDiv);
// questionDiv.append(myPara);

// AskBCS Learning Assistant, 13MAR2023 
// var letters = [
//     {capital: "A", small: "a"},
//     {capital: "B", small: "b"},
// ];
// console.log(letters[0].small);

// console.log(questionBankArray[0].question);
// console.log(q1);
// console.log(typeof q1);

// var q1 = questionBankArray[0]
// questionDiv.textContent = q1.question;
// buttonA.textContent = q1.choices[0]; 
// buttonB.textContent = q1.choices[1]; 
// buttonC.textContent = q1.choices[2]; 
// buttonD.textContent = q1.choices[3]; 