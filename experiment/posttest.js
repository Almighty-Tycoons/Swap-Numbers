/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Which code will perform swapping(exchange) of variables",  ///// Write the question inside double quotes
      answers: {
        a: "a=b; b=a;",                  ///// Write the option 1 inside double quotes
        b: "temp=a; b=temp; a=b;",                  ///// Write the option 2 inside double quotes
        c: "temp=a; a=b; b=temp;",                  ///// Write the option 3 inside double quotes
        d: "Both b and c"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

    {
      question: '#include<stdio.h>   main() {for()printf("Hello");}',
      answers: {
        a: "Compile error",
        b: " No output",
        c: "Prints “Hello” once.",
        d: "Infinite loop"
      },
      correctAnswer: "a"
    },
    
    {
      question: 'void main() { printf("includehelp.com\rOK\n"); printf("includehelp.com\b\b\bOk\n"); }',
      answers: {
        a: "OK includehelp.ok",
        b: "OK includehelp.okm",
        c: "includehelp.com includehelp.okm",
        d: "OKcludehelp.com    includehelp.okm"
      },
      correctAnswer: "d"
    },
    
    {
      question: 'void main(){ int a=0; a=5||2|1; printf("%d",a); }',
      answers: {
        a: "1",
        b: "7",
        c: "0",
        d: "8"
      },
      correctAnswer: "a"
    },
    
    {
      question: 'int main() { int a=100; printf("%d\n"+1,a); printf("Value is = %d"+3,a); return 0; }',
      answers: {
        a: "103",
        b: "d    ue is = 100",
        c: "Value is = 103",
        d: "ERROR"
      },
      correctAnswer: "b"
    },


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
