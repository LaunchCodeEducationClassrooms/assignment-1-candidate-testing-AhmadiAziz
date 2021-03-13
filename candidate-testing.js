const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = [];
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5000 meters = 5 kilometers?", "3) (5 + 3)/2 * 10 = ?", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", true, 40 , "Trajectory", 3];
let candidateAnswers = [];
gradedQuestions = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
enterCandidateName = input.question("Please enter your name: ");
candidateName.push(enterCandidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // question = "1) Who was the first American woman in space? ";
  for (i = 0; i < questions.length; i++){
  
     let candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
// console.log("Candidate Anwers: " + candidateAnswers);
console.log("Candidate answer: " + candidateAnswer);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
  

  }
// console.log(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {
// //   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly
//  console.log(candidateAnswers);
   score = 0;
  let j = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
        j += 0;
    } else {
      j += 0;
    
    }
 score = (j/correctAnswers.length)*100;
  console.log(`>>> Overall Grade: ${score} % (${j} of 5 responses correct) <<<`);
    if (j >= 4) {
      console.log(`>>> Status: PASSED <<<`);
    } else {
      console.log(`>>> Status: FAILED <<<`);
    }

  return score;
}
//    score += 20;
//   let gradedQuestions = correctAnswers.includes(candidateAnswers[i]);
//   console.log(correctAnswers);
//   if (candidateAnswers === correctAnswers) {
//      return score += 20;
//     } else {
//       return score += 0;
//     }
//   }

//    console.log(score);
}


//---------

// function gradeQuiz(candidateAnswers) {

//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


//   let grade = 0;
//   let j = 0;
  
//   for (let i = 0; i < correctAnswers.length; i ++) {
//     if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
//     j ++;
//   } else {
//     j += 0;
//   }
//  }
//   grade = j/correctAnswers.length*100;
//   console.log(`>>> Overall Grade: ${grade} % (${j} of 5 responses correct) <<<`);
//     if (j >= 4) {
//       console.log(`>>> Status: PASSED <<<`);
//     } else {
//       console.log(`>>> Status: FAILED <<<`);
//     }

//   return grade;
// }
  

function runProgram() {
  askForName();
  
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  
// console.log(candidateAnswers);

  gradeQuiz();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected 
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}
