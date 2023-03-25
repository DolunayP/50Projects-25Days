const container = document.querySelector('.container')
const square = 500;
const color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

for (let i = 0; i < square; i++) {

    const squares = document.createElement('div')
    squares.classList.add('square');

    squares.addEventListener('mouseover', () => squareHover(squares))
    squares.addEventListener('mouseout', () => removeHighlight(squares))


    container.appendChild(squares);
}

function squareHover(square) {
    const color = getRandomColor();

    square.style.backgroundColor = `${color}`
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeHighlight(square) {
    square.style.backgroundColor = '#1c1c1c';
    square.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
    return color[Math.floor(Math.random() * color.length)]
}