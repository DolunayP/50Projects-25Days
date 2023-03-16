const joke = document.querySelector('.joke');
const button = document.querySelector('.btn')

generateJoke();
async function generateJoke() {
    const config = {
        headers: {
            accept: 'application/json',

        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json();

    joke.innerHTML = `${data.joke}`;
}

button.addEventListener('click', generateJoke);
