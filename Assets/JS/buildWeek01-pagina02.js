// const per determinare il valore di dasharray dell'arco circolare in modo che la dimensione del cerchio si riduca man mano che il tempo trascorre.

const FULL_DASH_ARRAY = 283; 

// definisce il colore dell'arco circolare in base alla fase del timer 

const COLOR_CODES = {
    info: {
    color: "green",
    },
    };

// variabili per creare un timer circolare che decrementa da un certo limite di tempo (TIME_LIMIT) fino a zero. La variabile timePassed tiene traccia del tempo trascorso finora, mentre timeLeft tiene traccia del tempo rimanente. 

    const TIME_LIMIT = 30;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;

// Questo è un blocco di codice HTML dinamico creato in JavaScript che utilizza la proprietà innerHTML dell'elemento DOM con ID "app" per aggiungere del markup al documento. Il markup creato è un elemento SVG circolare che rappresenta il timer visuale, con una label che mostra il tempo rimanente.    
    
    document.getElementById("app").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50,50
              m -45,0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          > </path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
    )}</span>
    <span id=top>seconds</span><span id=botton>remaning</span>
    </div>
    `;

// porzione di codice definisce alcune funzioni per avviare, ripristinare e formattare il timer.

    startTimer();
    
    function resetTimer() {
    timeLeft = TIME_LIMIT;
    timePassed = 0;
    clearInterval(timerInterval);
    setCircleDasharray();
    startTimer();
    }

// La funzione "startTimer()" definisce un intervallo di tempo di un secondo utilizzando "setInterval()" e aggiorna la variabile "timePassed" e "timeLeft".    
    
    function startTimer() {
    timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
    formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
    

        if (timeLeft === 0) {
            resetTimer();
        }
    }, 1000);
}

// La funzione "formatTime()" formatta il tempo rimanente in una stringa nel formato "mm:ss", dove "ss" rappresenta i secondi rimanenti.

function formatTime(time) {
    const seconds = time % 60;
    return `${seconds < 10 ? '0' : ''}${seconds}`;
}

// La funzione "calculateTimeFraction()" calcola la frazione di tempo trascorso rispetto al tempo totale.

function calculateTimeFraction() {
    const
 rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

// La funzione "setCircleDasharray()" utilizza il valore restituito dalla funzione "calculateTimeFraction()" per impostare il valore dell'attributo "stroke-dasharray" del cerchio rimanente.

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

window.onload = function () { };

/* Quiz */

const questions = [{
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
    ],
},
{
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
},
{
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
},
{
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
},
{
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
},
{
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
    ],
},
{
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
},
{
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
},
{
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
},
{
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
},
];

// Punteggi domande

let currentQuestion = 0;
let questionCounter = 1;
let score = 0;

function showQuestion() {
counter.innerText = `${questionCounter}`;

// recupera la domanda corrente
const question = questions[currentQuestion];

// mostra la domanda
document.querySelector("#domande").innerHTML = question.question;

// provato a rendere random le domande

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

// mostra le risposte
let answersHTML = "";
for (const answer of question.incorrect_answers) {
    answersHTML += `<button class="choice">${answer}</button>`;
}
answersHTML += `<button class="choice">${question.correct_answer}</button>`;
document.querySelector("#risposte").innerHTML = answersHTML;

// imposta il timer di 30 secondi

timer = setTimeout(() => {

// passa alla domanda successiva

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        questionCounter++;
        counter.innerText = `${questionCounter}`;
    } else {
        return window.location.assign(`buildWeek01-pagina03.html?result=${score}`);
    }
}, 30000);
resetTimer();
}

document.querySelector("#risposte").addEventListener("click", (event) => {
// verifica se l'utente ha selezionato la risposta corretta
if (event.target.innerHTML === questions[currentQuestion].correct_answer) {
    score += 1;
}

// passa alla domanda successiva
currentQuestion++;

// cancella il timer quando l'utente seleziona una risposta
clearTimeout(timer);

if (currentQuestion < questions.length) {
    showQuestion();
    questionCounter++;
    counter.innerText = `${questionCounter}`;
} else {
    return window.location.assign(`buildWeek01-pagina03.html?result=${score}`);
}
return score;
});

// mostra la prima domanda
showQuestion();

