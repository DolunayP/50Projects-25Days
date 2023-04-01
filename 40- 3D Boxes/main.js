const boxes = document.querySelector('.boxes')
const button = document.querySelector('.magic')


button.addEventListener('click', function () {
    boxes.classList.toggle('big')
})

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const box = document.createElement('div');
        box.classList.add('box');

        box.innerHTML = `<div class="box" style="background-position: ${-j * 125}px ${-i * 125}px;"></div>`

        boxes.appendChild(box);
    }

}