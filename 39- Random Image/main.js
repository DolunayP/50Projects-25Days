const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5;

for (let i = 0; i < rows * 4; i++) {
    const div = document.createElement('div');
    div.classList.add('image');
    div.innerHTML = `<img src="${unsplashURL}${getRandomSize()}" alt="image">`

    container.appendChild(div);
}

function getRandomSize() {
    const size = `${getRandomNumber()}x${getRandomNumber()}`
    console.log(size)
    return size
}

function getRandomNumber() {
    return Math.floor(Math.random() * rows) + 300;
}