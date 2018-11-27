// IFFE
(function() {
//Function Constructor
var Question = function(question, answers, correct){
  this.question = question;
  this.answers = answers;
  this.correct = correct;
  //method to ask a question and display the answers
  this.qFunc = function() {
    //generate a random number from 0 - question array length
    random = Math.floor(Math.random() * questionArray.length);
    var randomQuestion = questionArray[random].question
    console.log(randomQuestion);
    var randomAnswer = questionArray[random].answers
    for(i = 0; i < randomAnswer.length; i++) {
      console.log(i + ": " + randomAnswer[i]);
    };
  };
  //method to check the answer is correct
  this.correctFunc = function() {
    //get the correct answer from the question
    var correctAnwser = questionArray[random].correct
    //ask for an answer
    var correctPrompt = prompt("Enter the correct answer value");
    //Check if the answer is correct and print to the console whether the answer is correct ot not
    if (Number(correctPrompt) === questionArray[random].correct) {
      console.log("CORRECT!");
      score = score + 1;
      console.log("Your score is " + score);
    } else {
      console.log("INCORRECT");
      console.log("Your score is " + score);
    }
      //Call nextQuestion function until exit is entered in the prompt box
      if (correctPrompt !== 'exit') {
        nextQuestion();
        } else {
          console.log('FINISHED!')
        }
  };
};

//track the score
var score = 0;

//Create a couple of questions
var question1 = new Question("Is JavaScript awesome?", ["Yes", "No"], 0);
var question2 = new Question("Are you a new coder?", ["Yes", "No"], 1);
var question3 = new Question("Do you want to code professionally?", ["Yes", "No"], 0);
var question4 = new Question("Are you happy with the course?", ["Yes", "No"], 0);
var question5 = new Question("How often do you practice coding?", ["1x", "2x", "3x", "5x"], 3);

var random = 0;

//Put the questions in an array
var questionArray = [question1, question2, question3, question4, question5];

//call the methods to ask a question and check the answer
function nextQuestion() {
  questionArray[random].qFunc();
  questionArray[random].correctFunc();
};

//call the questions
nextQuestion();
})();
