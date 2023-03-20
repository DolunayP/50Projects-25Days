const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2c80d16557365ce10efac79974c78f0&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=c2c80d16557365ce10efac79974c78f0&query="';

const form = document.querySelector('form');
const input = document.querySelector('.search');
const container = document.querySelector('.container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchWord = input.value;

    if (searchWord && searchWord != '') {
        getMovies(SEARCH_URL + searchWord);
        input.value = '';
    } else {
        window.location.reload();
    }
})

getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    showMovies(data.results);
}

function showMovies(movies) {
    container.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie-box');
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}">
            <div class="text">
                <div class="movie-name">${title}</div>
                <div class="movie-point">${vote_average}</div>
            </div>
            <div class="movie-info">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
        `;
        container.appendChild(movieEl);
    });
}