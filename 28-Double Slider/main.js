const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const slidesLength = rightSlide.querySelectorAll('div').length
const containerSlide = document.querySelector('.slider-container')

let activeSlideIndex = 0

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeslide('up'))
downButton.addEventListener('click', () => changeslide('down'))

function changeslide(direction) {
    const sliderHeight = containerSlide.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    }

    if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
} 