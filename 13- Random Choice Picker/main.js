const text = document.querySelector('#text');
const choices = document.querySelector('.choices')

text.focus();

text.addEventListener('keyup', (e) => {
    createChoices(text.value);

    if (e.key == 'Enter') {
        setTimeout(() => { text.value = '' }, 10)


        RandomSelect();
    }
})

function RandomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomChoice = pickRandomChoice();
        highlightBackground(randomChoice);
        unHighlightBackground(randomChoice);
    }, 80);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomChoice = pickRandomChoice();
            highlightBackground(randomChoice);
        }, 80)
    }, times * 80)
}

function pickRandomChoice() {
    const choice = document.querySelectorAll('.choice');
    return choice[Math.round(Math.random() * choice.length)]
}

function highlightBackground(choice) {
    choice.classList.add('highlight');
}

function unHighlightBackground(choice) {
    setTimeout(() => {
        choice.classList.remove('highlight');
    }, 80)
}

function createChoices(input) {
    const textValue = input.trim().split(',').filter(item => item !== '').map(item => item.trim());

    choices.innerHTML = ''

    textValue.forEach(choice => {
        const choiceEl = document.createElement('span');
        choiceEl.classList.add('choice');
        choiceEl.innerText = choice

        choices.appendChild(choiceEl)
    });

}