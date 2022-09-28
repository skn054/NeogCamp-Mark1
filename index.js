var readlineSync = require("readline-sync");

var score = 0;

var highScore = { HS: 2 };


var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + " Do You Know Sai Kiran?")

var highScores = [
  {
    name: "Kiran",
    score: 3,
  },

  {
    name: "Sai",
    score: 2,
  },
]

var questions = [
  {

    question: "Who is my favorite Cricketer? ",
    answer: "Sachin Tendulkar"
  },
  {

    question: "Who is my favorite Tennis Player? ",
    answer: "Roger Federer"
  },
  {

    question: "What is my favorite Movie? ",
    answer: "Bahubhali"
  },
  {

    question: "What is my favorite place to visit ? ",
    answer: "Manali"
  },
  {

    question: "What is my favorite bike? ",
    answer: "Ducati panigale"
  }];




function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("right!");
  }
  else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------")
}


function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


for (var i = 0; i < questions.length; i++) {
  var currQuestion = questions[i];
  play(currQuestion.question, currQuestion.answer);
}

if (highScore.HS > score) {
  console.log("You score is less than highscore" + "\n" + "Highscore: " + highScore.HS + "\n" + "Your Score: " + score)
} else if (highScore.HS == score) {
  console.log("----------------------------------------------")
  console.log("your score is equal to Highscore: " + score)
} else if (highScore.HS < score) {
  console.log("Yipee!! You beat the Highscore" + "\n" + "Your Score: " + score + "");
}

