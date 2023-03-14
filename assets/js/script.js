// HTML | DOM Style display Property. (2022, June 5). GeeksforGeeks. Retrieved March 13, 2023, from https://www.geeksforgeeks.org/html-dom-style-display-property/

// Targeting the question-div and creating and h2 inside of it, then I am setting the h2 to a value in my array
var questionDiv = document.querySelector(".question-div");
var createH2 = document.createElement("h2")
var buttonPress = document.querySelector(".submit-answer-button");

// Hiding the page with the final score because we don't need this on the page until the quiz is over.
var hideScorePageContainer = document.querySelector(".hide-score-page-container");

function displayQuestion(){
    var quizQuestion = " ";
    for (i = 0; i < questionBankArray.length; i++) {
        // var randomNumber = Math.floor(Math.random() * questionBankArray.length);
        createH2.innerHTML = randomNumber[i];
        createH2.className = "h2-question";
        quizQuestion = questionDiv.append(createH2);
        
    }
    return quizQuestion;
}

displayQuestion ();

console.log(questionBankArray.length);
console.log(randomNumber[i]);

function hideQuestions(){
    hideQuestions.style.display = "none";
}

hideQuestions();

function hideMe(){
    hideScorePageContainer.style.display = "none";
}

hideMe();



//Setting elements in an object to a variable so that I can call it and place it within createH2
var q1 = questionBankArray[0].question;

createH2.innerHTML = q1;
createH2.className = "h2-question";
questionDiv.append(createH2);

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