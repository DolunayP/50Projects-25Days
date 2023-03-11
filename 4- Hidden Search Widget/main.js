const search = document.querySelector('.search');
const open = document.querySelector('.open');
const close = document.querySelector('.close')

open.addEventListener('click', function () {
    search.classList.add('active');
    open.style.zIndex = '0';
    close.style.zIndex = '1';
})

close.addEventListener('click', function () {
    search.classList.remove('active');
    open.style.zIndex = '1';
    close.style.zIndex = '0';
})