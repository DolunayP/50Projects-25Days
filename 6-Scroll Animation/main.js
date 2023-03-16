const container = document.querySelector('.container');
const content = document.querySelectorAll('.content');

const showContent = () => {
    const triggerAnimation = window.innerHeight / 1.5 * 1.4;

    content.forEach(item => {
        const itemsTop = item.getBoundingClientRect().top;
        if (itemsTop < triggerAnimation) {
            item.classList.add('show');
        } else{
            item.classList.remove('show');
        }
    })
}

showContent();
window.addEventListener('scroll', showContent);