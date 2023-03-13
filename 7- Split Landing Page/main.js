const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    left.style.width = 75 + '%';
    right.style.width = 25 + '%';
});

right.addEventListener('mouseenter', () => {
    left.style.width = 25 + '%';
    right.style.width = 75 + '%';
});

container.addEventListener('mouseleave', () => {
    left.style.width = 50 + '%';
    right.style.width = 50 + '%';
});