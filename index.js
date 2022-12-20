var readlineSync = require('readline-sync');
var userName = readlineSync.question("Hello, May I know your name? ");
console.log("                        ");
console.log("Welcome " + userName + " to the SAFE ANGEL!");
console.log("                          ");
console.log("Description: This is to know how much you are aware about child safety! ");
console.log("Each right answer will fetch you +2 score and each wrong answer will deduct 1 from your score. All the best! ")
console.log("******************************************************************");
console.log("                          ");
var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you are right!");
    score = score + 2;
  } else {
    console.log("you are wrong!" + " The correct answer is: ", answer);
    score = score - 1;
  }
  console.log("your score is :", score);
  console.log("---------------------------------")
}
var questions = [{
  question: "1. [________] is someone that you don't know. Hint: word starts with the letter 'S'. ",
  answer: "stranger"
},
{
  question: "2. It is important to have a secret code with your parents.[True or False] ",
  answer: "true"
},
{
  question: "3. If a stranger offers you ride,what should you do?[Hint:Accept or Reject] ",
  answer: "Reject"
},
{
  question: "4. What are your safe words when someone tried to touch you in a way that made you uncomfortable! ",
  answer: "No"
},
{
  question: "5. Safety rules are meant to keep you unsafe from all kinds of danger![True or False] ",
  answer: "false"
}]
for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer)
}
console.log("Yay! your final score is : ", score);
console.log("******************************");
console.log("It is important to make your kids understand about child safety.");
console.log("                         ");
console.log("Check out the high score ");
var highScore = [{
  name: "Rida",
  score: "10"
},
{
  name: "Saurav",
  score: "7"
}]
for (var i = 0; i < highScore.length; i++) {
  var highScorer = highScore[i];
  console.log(highScorer.name);
  console.log(highScorer.score);
}
console.log("If you have beaten the high score share screenshot, we will update the High score.");
console.log("Thank you");