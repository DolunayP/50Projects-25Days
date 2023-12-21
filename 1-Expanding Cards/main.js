const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 2; i <= 5; i++) {
        container.innerHTML += `<div class="card" style="background-image: url(img/${i}.png);">
            <h3> Lorem ipsum dolor sit</h3>
        </div>`
    }

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            removeActiveClass();
            card.classList.add('active')
        })
    })

    function removeActiveClass() {
        cards.forEach(card => { card.classList.remove('active') })
    }
})


