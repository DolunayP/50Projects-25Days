const list = document.querySelectorAll('nav ul li');
const content = document.querySelectorAll('.content')

list.forEach((li, idx) => {
    li.addEventListener('click', function () {
        removeActive();
        removeShow();


        li.classList.add('active');
        content[idx].classList.add('show');
    })
});


function removeActive() {
    list.forEach(item => {
        item.classList.remove('active')
    })
}

function removeShow() {
    content.forEach(item => {
        item.classList.remove('show')
    })
}