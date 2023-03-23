const card = document.querySelector('.card');
const cardHeader = document.querySelector('.card-header');
const cardTitle = document.querySelector('.card-title');
const cardDesc = document.querySelector('.card-desc');
const authorName = document.querySelector('.name');
const authorImg = document.querySelector('.author-img')
const authorDate = document.querySelector('.date')

const animatedBg = document.querySelectorAll('.animated-bg');

function getCard() {

    cardHeader.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt = "" /> '
    cardTitle.innerHTML = 'Card Title'
    cardDesc.innerHTML = 'lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit sakdlas lasd alsdlaw.    '
    authorDate.innerHTML = 'Oct 20,2021'
    authorName.innerHTML = 'John Doe'
    authorImg.classList.remove('animated-bg');

    animatedBg.forEach(animate => {
        animate.classList.remove('animated-bg', 'animated-text');
    });
}
setTimeout(getCard, 2000)
