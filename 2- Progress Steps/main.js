const progress = document.querySelector('.progress');
const steps = document.querySelectorAll('.step');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let active = 1;

console.log(steps.length)

prev.addEventListener('click', function () {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
})

next.addEventListener('click', function () {
    active++;
    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
})

function updateProgress() {

    steps.forEach((step, index) => {
        if (active > index) {
            step.classList.add('active')
        } else { step.classList.remove('active') }
    });

    const activeClass = document.querySelectorAll('.active')
    progress.style.width = (activeClass.length - 1) / (steps.length - 1) * 100 + '%';

    if (active === 1) {
        prev.disabled = true;
    } else if (active === steps.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

};
