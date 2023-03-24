const photo = document.querySelector('.photo');
const times = document.querySelector('.times')

let clickTimes = 0;

const showHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const insideX = x - leftOffset;
    const insideY = y - topOffset;

    heart.style.top = `${insideY}px`
    heart.style.left = `${insideX}px`

    photo.appendChild(heart);

    times.innerHTML = ++clickTimes;
    setTimeout(() => {
        heart.remove();
    }, 2500);
}
photo.addEventListener('dblclick', showHeart);

