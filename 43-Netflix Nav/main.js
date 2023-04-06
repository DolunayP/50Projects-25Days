const openBtn = document.querySelector('.nav-open')
const closeBtn = document.querySelector('.nav-close')
const nav = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
    nav.forEach(item => {
        item.classList.add('visible')
    });
})

closeBtn.addEventListener('click', () => {
    nav.forEach(item => {
        item.classList.remove('visible')
    });
})
