// -----What do I want to grab?-----

// index.html
var startButton = document.querySelector("#quiz-button");
var highScoresButton = document.querySelector("#scores-button");


// // quiz.html
// var questionContainer = document.querySelector(".question-choice-answer-container");
// var showAnswerResponse = document.querySelector(".show-answer-response");
// var showAnswerResponseDiv = document.querySelector(".show-answer-response-div")
// var targetHideMe = document.querySelector(".hide-me");
// var timer = document.querySelector(".timer-p");
// var startingIndex = 0;
// var correctAnswers = 0;
// var incorrectAnswers = 0;

// // -----TIMER CODE-----
// // tutoring 
// // counterHandle holds the timer I made, then I have to use the setInterval
// // function and that requires that I pass 2 arguments, which are the
// // function that makes my timer go and how much space between the time that I
// // want it to run (ie., 1 millisecond)

// var counter = 1000;

// function timerFunction(){
//   timer.innerHTML = "Beat the clock " + counter + "!";
//   counter--;
//   if(counter <= 0) {
//     timer.innerHTML = "Time is up!";
//     clearInterval(counterHandle);
//     quizFinished();
//   }
// };

// // -----DECREMENT TIME FOR A WRONG ANSWER-----
// var counterHandle = setInterval(timerFunction, 1000);

// var incorrectAnswerDeduction = 200; 
// function incorrectAnswer() {
//   counter = counter - incorrectAnswerDeduction;
//   // I have to recall the timer function here so that I don't have to wait a full
//   // second for it to show the decrement
//   timer.innerHTML = "Beat the clock " + counter + "!";

// }

// // office hours 15MAR2023
// // https://jsbin.com/boqanit/edit?html,js,output

// // -----SHOW MY FIRST QUESTION-----
// // innerHTML lets you write html as a string, so I still need to do opening and closing tags
// // I can't just refer to it like a selector
// function displayQuestion(displayQuestionAtIndex) {
//   questionContainer.innerHTML = "<h3>" + questionBankArray[displayQuestionAtIndex].question + "</h3>";
  
//   var mxChoicesDiv = document.createElement("div");
//   mxChoicesDiv.classList.add("choices-class");

//   //for (i = 0; i < questionBankArray.length; i++) {
//     //console.log("-----", questionBankArray[i].choices, "-----");
//     for (i = 0; i < questionBankArray[displayQuestionAtIndex].choices.length; i++) {
//       // console.log('choice ' + questionBankArray[displayQuestionAtIndex].choices[i]);

//       var choice = questionBankArray[displayQuestionAtIndex].choices[i];
//       var answerButton = document.createElement("button");

//       answerButton.textContent = choice;
//       answerButton.dataset.index = i;
//       answerButton.classList.add("btn");
//       answerButton.addEventListener("click", checkAnswer);
//       mxChoicesDiv.append(answerButton);
//       //answerButton.addEventListener("click", nextQuestion);
      
//     }
//     questionContainer.append(mxChoicesDiv);
//     console.log(displayQuestionAtIndex);
//     return displayQuestionAtIndex;
// }

// // I want to return a value from displayQuestion, so i have to return the value I want
// // when I return the value, I can capture it in a variable outside of the function,
// // But i need to set the NAME OF THE FUNCTION + ARGUMENT to the variable,
// // NOT the stuff after the word "return"


// function checkAnswer() {
//   // because checkAnswer gets passed into displayFunction, I can refer to it as "this".
//   // and it will go right back to the dataset that I already set on the button in displayQuestion
//   // now i need to see if the correctIndex from my questionBankArray matches the "index" I placed
//   // as a dataset on each button, starting from 0 and incrementing
//   var setAnIndexValueToAButton = this.dataset.index;
//   console.log(setAnIndexValueToAButton);
//   //not all, change j to the currently displayed question index, i don't need a for loop here
//   //for(j = 0; j < questionBankArray.length; j++) {
//     if (setAnIndexValueToAButton == questionBankArray[startingIndex].correctIndex){
//       console.log(questionBankArray[startingIndex].correctIndex);
//       showAnswerResponse.innerHTML = "Correct!";
//       correctAnswers++;
//     } else {
//       incorrectAnswer();
//       showAnswerResponse.innerHTML = "Incorrect";
//       incorrectAnswers++;
//     }
//   //}
//   startingIndex++;
//     if (startingIndex == questionBankArray.length){
//       quizFinished();
//     }
//     else {
//       nextQuestion();
//     }
// }

// function quizFinished() {
//   questionContainer.innerHTML = " ";
//   mxChoicesDiv.innerHTML = " ";
//   questionContainer.classList.add("hide-me")
//   showAnswerResponseDiv.innerHTML = " ";
//   targetHideMe.classList.remove("hide-me");
//   localStorage.setItem(correctAnswers, incorrectAnswers);
// };

// function nextQuestion () {
//   questionContainer.innerHTML = " ";
//   mxChoicesDiv = " ";
//   displayQuestion(startingIndex);
// }

// nextQuestion ();
  
// // -----LOCAL STORAGE-----














// --------------------THIRD ATTEMPT--------------------
// if (setAnIndexValueToAButton == questionBankArray.correctIndex) {
  //   console.log("Correct");
  //   showAnswerResponse.classList.add("show");
  //   setTimeout(function () {
  //     showAnswerResponse.classList.remove("show");
  //   }, 6000);
  // } else {
  //   console.log("Incorrect");
  // }

// looping through object item in my array
//help from learning assistant 15MAR2023:
// var cars = [
//   { make: "Ford", models: ["Ranger", "Bronco", "F-150"] },

//   { make: "Chevy", models: ["Silverado", "Trailblazer", "S-10"] },
// ];

// for (let i = 0; i < cars.length; i++) {
//   console.log("-------", cars[i].make, "------");
//   for (let j = 0; j < cars[i].models.length; j++) {
//     console.log(cars[i].models[j]);
//   }
// }

// for (let i = 0; i < cars.length; i++) {
//   var car = cars[i];
//   console.log("-------", car.make, "------");
//   for (let j = 0; j < car.models.length; j++) {
//     console.log(car.models[j]);
//   }
// }

// var choice = questionBankArray.choices[i];
// var answerButton = document.createElement("button");

// I put my array choices into the variable choice, so here I am looping
// through them with i = o, then I want to set that same i value
// to each button so that it increments with the ++ in the for loop

//   answerButton.dataset.index = i;
//   answerButton.classList.add = "btn";
//   answerButton.addEventListener("click", checkAnswer);

//   questionContainer.append(answerButton);
// };

// above I created a for loop to create a button for each choice.
// then I left that for loop function and placed the result to append to another div
// calling the function


// Check if the index of the button that was clicked matches the index
// of the correct answer(correctIndex)

// How to create a countdown timer using JavaScript. (n.d.). Educative.io. Retrieved March 14, 2023, from https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript
// timer
// var timeInMinutes = 10;
// var currentTime = Date.parse(new Date());
// var deadline = new Date(currentTime + timeInMinutes * 60 * 1000);

// // 10 Minute Countdown Clock. (n.d.). CodePen. Retrieved March 14, 2023, from https://codepen.io/yaphi1/pen/KpbRZL
// //Timer
// function timeRemaining(endTime) {
//   var t = Date.parse(endTime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = math.floor((t / 1000 / 60) % 60);
//   return { total: t, min: minutes, sec: seconds };
// }

// function runTimer(id, endTime) {
//   function updateTimer() {
//     var t = timeRemaining(endTime);
//     timer.textContent = t.min + ":" + t.sec;
//     if (t.total <= 0) {
//       clearInterval(timeInterval);
//     };
//     id.append
//   }
//   updateTimer(timer, 10);
//   var timeInterval = setInterval(updateTimer, 1000);
// }

//end timer code

// values

// function quizTimer (){
//     var setIntervalVariable = setInterval(function () {
//         count--;
//         timer.textContent = "Timer " + count;
//         if (count === 0){
//         clearInterval(setIntervalVariable);
//         }
//     }, 1000);

//     setTimeout(function(){
//         console.log("now run this");
//     }, 3000);
// }


// --------------------SECOND ATTEMPT-------------------
// I can create elements in js - office hours 15MAR2023
// quiz.html
// elements
// var questionDiv = document.querySelector(".question-div");
// var mxChoiceDiv = document.querySelector(".mxChoice-div");
// var buttonA = document.querySelector("#choiceA");
// var buttonB = document.querySelector("#choiceB");
// var buttonC = document.querySelector("#choiceC");
// var buttonD = document.querySelector("#choiceD");
// var anyButton = document.querySelectorAll(".mx-button-default");

// var questionIndex = 0;
// var q = questionBankArray[questionIndex];

// display the first question
// function displayQuestion (){
//     console.log(questionIndex);
//     questionDiv.textContent = q.question;
//     buttonA.textContent = q.choices[0];
//     buttonB.textContent = q.choices[1];
//     buttonC.textContent = q.choices[2];
//     buttonD.textContent = q.choices[3];
//     questionIndex++;
//     q = questionBankArray[questionIndex];
//     console.log(questionIndex);
// }
//questionIndex is a global variable, so I don't need to return it? I don't quite understand that.

// call the function to display my first question
// displayQuestion();

// function nextQuestion(){
//     if (questionIndex < questionBankArray.length + 1){
//         displayQuestion();
//     }
// }

// // anyButton is an array because it came from querySelectAll,
// // so I have to reference an index in a for loop
// // or addEventListener won't work
// for(i = 0; i < anyButton.length; i++) {
//  anyButton[i].addEventListener("click", nextQuestion);
// }

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
