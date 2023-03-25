const slides = document.querySelectorAll('.slider img');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const slider = document.querySelector('.slider')
let idx = 0;

let interval = setInterval(autoChange, 4000);

function autoChange() {
    idx++
    changeSlide();
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(autoChange, 4000)
}

function changeSlide() {
    if (idx < 0) {
        idx = slides.length - 1;
    } else if (idx >= slides.length) {
        idx = 0;
    }
    slider.style.transform = `translateX(${-idx * 500}px)`
}

prevBtn.addEventListener('click', function () {
    idx--;
    changeSlide();
    resetInterval();
})

nextBtn.addEventListener('click', function () {
    idx++;
    changeSlide();
    resetInterval();
})