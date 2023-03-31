const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    if (!password) {
        return;
    }
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', function () {
    let character = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(character, hasLower, hasUpper, hasNumber, hasSymbol)
})

function generatePassword(length, lower, upper, number, symbol) {
    let generatedPassword = ''

    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(type => Object.values(type)[0])

    if (typesCount === 0) {
        return ''
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })

    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}