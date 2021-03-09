const quizQuestions = [
    {
        question: "Which language runs in a browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d", 
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    }, 
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "what year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

//timer related
// var c = 200;

//index for the current question
let currentQuestion = 0
let score = 0

loadQuiz()
window.location.replace("quiz.html");
c = 40;

function loadQuiz() {
    //to deselect any selected answer that might remain selected after we reload the web app.
    //the deselectAnswers() function clears any selected answer after reloading the browser.
    deselectAnswers()

    // this is one of the objects in the area.
    const currentQuizQuestion = quizQuestions[currentQuestion]
    
    // getting the question values out of the quizData array.  
    questionEl.innerText = currentQuestion.question;

    //getting the a,b,c, and d values for each answer and putting
    //them into the a_text ID, the b_text ID, and so on.
    a_text.innerText = currentQuizQuestion.a;
    b_text.innerText = currentQuizQuestion.b;
    c_text.innerText = currentQuizQuestion.c;
    d_text.innerText = currentQuizQuestion.d;
} 


function deselectAnswers() {
    // we want to loop through each answer element, and for each particular
    // answer element, set the check value to false to remove any checks or any 
    // answer selections. 
    answerEls.forEach(answerEl => answerEl.checked = false)
}

//this function returns the answer that is selected.
function getSelected() {
    let answer;

    //for each answer element, see which one is checked.
    answerEls.forEach(answerEl => {
        //if this particular answer element is checked, which gives us a true 
        //or false, then answer is equal to the answer element dot ID.
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer;
}

//this event listener listens to a click event.
//this event listener calls the getSelected() function when it is clicked. 
submitBtn.addEventListener('click', () => {

    //this gives the selected answer of a question
    const answer = getSelected();
    //console.log(answer);

    //match the selected answer with the correct answer.
    //if(answer) => if there is an answer,
    if(answer) {
        //then check if that answer is equal to the correct answer.
        //the correct answer is in the quizData array having correct as key.
        if(answer === quizQuestions[currentQuestion].correct) {
            //so, increment the score by 1 point.
            score++
        } else {

        // if(answer !== quizData[currentQuiz].correct) {
            //take time off
            c = c - 5;
        }


        //then go on from the current question to the next question.
        currentQuestion++

        //check if we are not at the end of the quiz, if not, then
        //call loadQuiz().
        if(currentQuestion < quizQuestions.length) {
            loadQuiz()
        } else { //else, if we are at the end, we answered the last question,
        //then take the quiz element, which is the entire wrapper, and set the
        //entire HTML to what is inside the backticks ``.
        quiz.innerHTML = `  
            <h2>You answered ${score}/${quizQuestions.length} questions.<br/>
            Your score is ${c} points</h2>

            
            <button onclick="location.reload()
            ">Reload</button>
            `
        } //<button onclick="location.reload() ==> this button reloads the quiz app to start over.
    } //closing if(currentQuiz < quizData.length) {
})

//timer
function timer001() {
    window.location.replace("quiz.html");
    c = c - 1;
    if (c < 40) {
        time001.innerHTML = c;
    }
    
    if ( c === 0) {
        window.clearInterval(update);
        c = "-";
        quiz.innerHTML = "Time is up!"
    }
} //closes timer001() function

//Source: https://www.sitepoint.com/community/t/want-timer-to-start-on-button-click-always-starts-on-load-why/291783/3
function startTimer() {
    update = setInterval(function(){timer001()}, 1000);
    // window.location.replace("quiz.html");
}


// var timeLimit = 10;
// var startTime = Date.now(); //get the time at the moment a user first sees the question
// clearInterval(trivia.countDown);
// trivia.countDown = setInterval(function () {
//   if (trivia.state == "question") { //ensure the user has not already answered
//     var elapsedTime = (Date.now() - startTime)/1000; //calculate the time elapsed
//     var clock = timeLimit - Math.floor(elapsedTime);//calculate the countdown w/o decimals
//     $('#timer').html(clock);// place the clock time in the html for viewing
//     if (clock == 0) { //if time is up
//       clearInterval(trivia.countDown); //stops our timer at 0. Don't want -1 ...
//       trivia.triggerAnswer(false); //marks the answer as incorrect in trivia library
//     }
//   }
//   else clearInterval(trivia.countDown);
// }, 100);//100 is the time interval in milliseconds


