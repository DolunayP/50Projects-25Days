const pokeContainer = document.querySelector('.poke-container');
const searchInput = document.querySelector('input');
const pokeAmount = 151;
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff ",
};

//amount of poke
const countPoke = async () => {
    for (let i = 1; i <= pokeAmount; i++) {
        getPoke(i);
    };
};
//get datas from PokeApi
const getPoke = async (num) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    let res = await fetch(url);
    let data = await res.json();
    createPoke(data);
}

//display datas on screen
const createPoke = (poke) => {
    let name = poke.name[0].toUpperCase() + poke.name.slice(1);
    let id = poke.id.toString().padStart(3, "0");
    let type = poke.types[0].type.name;
    let weight = poke.weight;
    const color = colors[type];

    pokeContainer.innerHTML += `
    <div class="poke-card" style="background-color:${color}">
        <img class="poke-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
        <h3 class="poke-name">${name}</h3>
        <p class="poke-id">#${id}</p>
        <p class="poke-weight">${weight} kg</p>
        <p class="poke-type">Type: ${type}</p>
    </div>`
}
countPoke();

//SearchBar
searchInput.addEventListener('input', function (e) {
    const pokeName = document.querySelectorAll('.poke-name');
    let inputValue = searchInput.value.trim().toLowerCase();

    pokeName.forEach((el) => {
        if (el.innerHTML.toLowerCase().includes(inputValue)) {
            el.parentElement.style.display = 'flex'
        } else {
            el.parentElement.style.display = 'none'
        }
    });
})
