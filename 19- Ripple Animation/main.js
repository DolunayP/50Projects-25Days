const circle = document.querySelector('.circle');
const btn = document.querySelectorAll('.btn');

btn.forEach(item => {
    item.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        item.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600)

    })
})