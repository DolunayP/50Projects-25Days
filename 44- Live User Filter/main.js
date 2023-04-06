const result = document.querySelector('#result')
const input = document.querySelector('#filter')
const listItems = [];


getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=40');
    const data = await res.json()
    const results = data.results;

    // clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li);

        li.innerHTML = `
        <img src="${user.picture.large}">
        <div class="user-info" 
        <h4> ${user.name.title} ${user.name.first} ${user.name.last} </h4>
        <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `
        result.appendChild(li);
    })

}




input.addEventListener('input', (e) => searchUser(e.target.value.toLowerCase().trim()))

function searchUser(input) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(input)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')


        }
    })}


