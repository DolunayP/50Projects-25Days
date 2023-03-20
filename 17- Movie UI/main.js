const cup = document.querySelector('.cup');
const smallCups = document.querySelectorAll('.small-cups');
const percentage = document.querySelector('.percentage');
const liters = document.querySelector('.liters');
const remained = document.querySelector('.remained small')

smallCups.forEach((item, idx) => {
    item.addEventListener('click', function () {
        fillCups(idx);
    })
})

function fillCups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups[idx + 1].classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((full, index) => {
        if (idx >= index) {
            full.classList.add('full');
        } else {
            full.classList.remove('full');
        }
    });

    updateCup(idx);
}

function updateCup(index) {
    let fillPercentage = (index + 1) * 12.5;
    percentage.style.height = fillPercentage + '%';
    percentage.innerText = fillPercentage + '%';
    let hesap = (2 - ((index + 1) * 250 / 1000));
    liters.innerText = hesap + 'L';

    if (fillPercentage === 100) {
        remained.style.display = 'none';
        liters.style.display = 'none';
    } else {
        remained.style.display = 'flex';
        liters.style.display = 'flex';
    }
}