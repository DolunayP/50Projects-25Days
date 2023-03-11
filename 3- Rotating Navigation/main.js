const closeNav = document.querySelector('#close');
const showNav = document.querySelector('#open');
const container = document.querySelector('.container');
const nav = document.querySelectorAll('nav ul li');

closeNav.addEventListener('click', function () {
    container.classList.remove('show-nav');
    nav.forEach(li => {
        li.classList.remove('slide-nav')
    });
})

showNav.addEventListener('click', function () {
    container.classList.add('show-nav');
    nav.forEach(li => {
        li.classList.add('slide-nav')
    });
})