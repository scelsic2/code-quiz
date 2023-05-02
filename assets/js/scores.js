var highScoresDiv = document.querySelector('.high-scores-div')
var highScoresDiv = document.querySelector('.high-scores-div')

function getScores() {
    var unparsedScores = localStorage.getItem('myScores');
    console.log("Unparsed Scores " + unparsedScores);
    var storedScores = JSON.parse(unparsedScores) || [];
    console.log("Parsed Scores " + storedScores);
    return storedScores
  }

var theScores = getScores();

function displayScores(scores){
    highScoresDiv.innerHTML = "";
    for(i = 0; i < scores.length; i++) {
      var createScoreDiv = document.createElement("div");
      var createScoreP1 = document.createElement('p');
      var createScoreP2 = document.createElement('p');
      var createScoreP3 = document.createElement('p');
      var scoreInitial = scores[i].initials;
      var scoreCorrect = scores[i].correct;
      var scoreIncorrect = scores[i].incorrect
      createScoreDiv.classList = "score";
      createScoreP1.classList = 'p1'
    //   createScoreP.innerHTML = scoreInitial + " Correct: " + scoreCorrect + "   Incorrect: " + scoreIncorrect;
        createScoreP1.innerHTML = '---' + scoreInitial + '---';
        createScoreP2.innerHTML = 'Correct: ' + scoreCorrect;
        createScoreP3.innerHTML = 'Incorrect: ' + scoreIncorrect;
        createScoreDiv.appendChild(createScoreP1);
        createScoreDiv.appendChild(createScoreP2);
        createScoreDiv.appendChild(createScoreP3);
        highScoresDiv.appendChild(createScoreDiv);
    }
  }
  
displayScores(theScores)