const slides = document.querySelectorAll('.slide');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const container = document.querySelector('.container');
const sliderContainer = document.querySelector('.slider-background')

activeSlide = 0;
console.log(slides)
bgBody();
function setBody() {
    container.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slides[activeSlide].classList.add('active');

    })

}

leftArrow.addEventListener('click', function () {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setSlide();
    setBody();
})

rightArrow.addEventListener('click', function () {
    activeSlide++;
    if (activeSlide >= slides.length) {
        activeSlide = 0;
    }

    setBody();
    setSlide();
})