const textEl = document.querySelector('.text')
const text = 'Welcome to my page...'
const speedEl = document.querySelector('.speed input')

let idx = 1;
let speed = 200 / speedEl.value;

function loadWord() {
    textEl.innerHTML = text.slice(0, idx);
    idx++;
    setTimeout(loadWord, speed);
    if (idx > text.length) {
        idx = 1;
    }
}

speedEl.addEventListener('input', function (e) {
    speed = 200 / e.target.value;
})

loadWord();