const canvas = document.querySelector('canvas');
const toolbox = document.querySelector('.toolbox');
const increaseEl = document.querySelector('.increase');
const decreaseEl = document.querySelector('.decrease');
const colorEl = document.querySelector('#color');
const clearEl = document.querySelector('.clear');
const sizeEl = document.querySelector('.size');
const ctx = canvas.getContext('2d')


let size = 10;
let color = 'black';
let x;
let y;
let isDown = false;

sizeEl.innerHTML = size;

toolbox.addEventListener('click', function (e) {
    if (e.target.matches('.increase') && size < 50) {
        size += 5;
        sizeEl.innerHTML = size;
    } else if (e.target.matches('.decrease') && size > 5) {
        size -= 5;
        sizeEl.innerHTML = size;
    } else if (e.target.matches('.clear')) {
        size = 10;
        sizeEl.innerHTML = size;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    } else if (e.target.matches('#color ')) {
        colorEl.addEventListener('change', function (el) {
            color = el.target.value;
        })
    }
});



canvas.addEventListener('mousedown', function (e) {
    isDown = true;

    x = e.offsetX;
    y = e.offsetY;

})

canvas.addEventListener('mouseup', function (e) {
    isDown = false;

    x = undefined;
    y = undefined;

})

canvas.addEventListener('mousemove', function (e) {
    if (isDown) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }

})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

drawCircle(600, 600);
