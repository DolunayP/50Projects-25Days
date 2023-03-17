const faqIcon = document.querySelectorAll('.faq-icon')

faqIcon.forEach(item => {
    item.addEventListener('click', function () {
        item.parentNode.classList.toggle('active');
    })
})
