//export { c };

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

//initializing the timer counter
c = 30;

function loadQuiz() {
    //to deselect any selected answer that might remain selected after we reload the web app.
    //the deselectAnswers() function clears any selected answer after reloading the browser.
    deselectAnswers();

    // this is one of the objects in the area.
    const currentQuizQuestion = quizQuestions[currentQuestion];
    
    // getting the question values out of the quizData array.  
    //alert("line 67: " + currentQuizQuestion);
    questionEl.innerText = currentQuizQuestion.question;
    //alert("line 69: " +  questionEl.innerText)

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

        // if(answer !== quizQuestions[currentQuestion].correct) {
            //take five seconds off, if answer to question is wrong.
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

        //let newScore = JSON.stringify(c);
        //localStorage.setItem("totalScore", newScore);
        

        quiz.innerHTML = `  
            <h2>You answered ${score}/${quizQuestions.length} questions.<br/>
            Your score is ${c} points</h2>
            <a href="../finalScore.html">
            <button>Enter initials...</button></a>
            `
        } //<button onclick="location.reload() ==> this button reloads the quiz app to start over.
    } //closing if(currentQuiz < quizData.length) {

        //storage();
})

//timer
function timer() {
    if (c > 0) {
    c = c - 1;
    } 

    if (c < 40) {
        time.innerHTML = c;
    }
    
    if (c <= 0) {
        window.clearInterval(update);
        //keeps timer from counting down into negative numbers.
        c = "-";
    
        quiz.innerHTML = `  
        <h2 id="timeUp">Your time is up!<br/>
        <a href="../index.html">
        <button>Reload</button></a>
        `
    }
} //closes time() function

//Source: https://www.sitepoint.com/community/t/want-timer-to-start-on-button-click-always-starts-on-load-why/291783/3
// function startTimer() {
//     update = setInterval(function(){timer()}, 1000);
// 
// }
update = setInterval("timer()", 1000);

//export { c };
// var student = document.getElementById("initials");
// var score = document.getElementById("score");

// var initials = document.getElementById("initi");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");

// function saveLastGrade() {
//   // Save related form data as an object
//   var userInitialsScore = {
//     // student: student.value,
//     score: c,
//     initials: initials.value.trim()
//   };
//   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//   localStorage.setItem("userInitialsScore", JSON.stringify(userInitialsScore));
// }

// function renderLastGrade() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var lastScore = JSON.parse(localStorage.getItem("userInitialsScore"));
//   // Check if data is returned, if not exit out of the function
//   if (lastScore !== null) {
// //   document.getElementById("saved-name").innerHTML = lastGrade.student;
//   document.getElementById("saved-grade").innerHTML = lastScore.score;
//   document.getElementById("saved-comment").innerHTML = lastScore.initials;
//   } else {
//     return;
//   }
// }

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();
// saveLastGrade();
// renderLastGrade();
// });

// // The init() function fires when the page is loaded 
// function init() {
//   // When the init function is executed, the code inside renderLastGrade function will also execute
//   renderLastGrade();
// }
// init();










// const saveInitials = e => {
//     //alert("save initials");
//     let formData = {
//         initials: document.getElementById('initials').value,
//         // totalScore: document.getElementById('totalScore').value
//     }
//     console.log("totalscore " + totalScore)

//     //let initialsValue = localStorage.setItem('formData', JSON.stringify(formData));
//     localStorage.setItem('formData', JSON.stringify(formData));
//     //console.log(initialsValue)
//     dispData();
//     e.preventDefault();

//     function dispData(){
//         //localStorageData = JSON.parse(localStorage.getItem('formData'));
//         //console.log(localStorageData)

//         if(localStorage.getItem('formData')) {
//             let {initials, totalScore} = JSON.parse(localStorage.getItem('formData'));
//             //let {c} = JSON.parse(localStorage.getItem('c'));
//             var output = document.getElementById('output');
//             output.innerHTML = `
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Initials</td>
//                         <td>${initials}</td>
//                     </tr>
//                     <tr>
//                         <td>Final Score</td>
//                         <td>${totalScore}</td>
//                     </tr>
//                 </tbody>
//             </table>
//             `;

//         }
//     }
// }











//local storage initials and score
// let input_initials_key      = document.getElementById('input_initials_key');
// let input_score_key         = document.getElementById('input_score_key');
// let save_value              = document.getElementById('save_value');
// let read_localstorage_value = document.getElementById('read_localstorage_value');
// let delete_data             = document.getElementById('delete_data');
// let read_all_data           = document.getElementById('read_all_data');

// function storage() {

//     if (input_initials_key === null) {

//     console.log("Input is empty");
    
//     } else {
//         console.log("i am the value of c inside the else storage function " + c);

//         var finalScore = {
//             name: input_initials_key,
//             score: c
//         }
//     }

//     // let newScore = JSON.stringify(c);
//     // let finalScore = localStorage.setItem("totalScore", newScore);
//     // console.log("i am the value of c inside the storage function " + c);

//     save_value.onclick=function() {
//         localStorage.setItem(input_initials_key.value,finalScore);
//     }

//     // read_localstorage.onclick=function() {
//     //     localstorage_value.textContent = localStorage.getItem("initials_score")
//     // }

//     delete_data.onclick=function() {
//         localStorage.removeItem("willie01")
//     }

//     read_all_data.onclick=function() {
//         let keys=Object.keys(localstorage);
//         console.log(keys);
//     }

// }

//save to local storage

