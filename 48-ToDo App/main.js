const todoContainer = document.querySelector('.todo-container');
const todoInput = document.querySelector('#todo-input');
const form = document.querySelector('#form')

todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

updateLS();
form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

function addTodo(todo) {
    let todoText = todoInput.value;

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        todoEl.classList.add('todo')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerHTML = `<p>${todoText}</p>`

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todoContainer.appendChild(todoEl)

        todoInput.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}
