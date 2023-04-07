const quizData = [
    {
        question: "Which language runs in a web browser?",
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
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const containerEl = document.querySelector('.quiz-container')
const questionEl = document.querySelector('.question')
const answers = document.querySelectorAll('.answer')
const aText = document.querySelector('#a-text')
const bText = document.querySelector('#b-text')
const cText = document.querySelector('#c-text')
const dText = document.querySelector('#d-text')
const submitBtn = document.querySelector('.btn')

let activeQuestion = 0;
let score = 0;

getData();
function getData() {

    const { question, a, b, c, d } = quizData[activeQuestion]

    questionEl.innerHTML = question
    aText.innerHTML = a;
    bText.innerHTML = b;
    cText.innerHTML = c;
    dText.innerHTML = d;
    activeQuestion++;
}

function getAnswer() {
    answers.forEach(item => {
        if (item.checked) {
            const answer = item.id;
            if (answer === quizData[activeQuestion - 1].correct) {
                score++;
            }
        }
    })
}

submitBtn.addEventListener('click', function () {
    getAnswer();
    clearSelected();
    if (activeQuestion < quizData.length) {
        getData();

    } else {
        containerEl.innerHTML = `
        <h2 class="question">You answered ${score} / ${quizData.length} questions correctly...</h2>
        <button class="btn" onclick="location.reload()"> Reload </button>
    `}
})

function clearSelected() {
    answers.forEach(item => {
        item.checked = false;
    })
}