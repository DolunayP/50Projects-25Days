const addButton = document.querySelector('.add-note');
const notes = JSON.parse(localStorage.getItem('notes'))


if (notes) {
    notes.forEach(note => addNewNote(note))
}

addButton.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {


    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="buttons">
    <div class="edit"><i class="fas fa-edit"></i></div>
    <div class="delete"><i class="fas fa-trash"></i></div>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editEl = note.querySelector('.edit');
    const deleteEl = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text
    main.innerHTML = marked(text)

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS();
    })

    deleteEl.addEventListener('click', function () {
        note.remove();
        updateLS();
    })

    editEl.addEventListener('click', function () {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })


    document.body.appendChild(note)
}

function updateLS() {
    const notesText = document.querySelectorAll('textArea');
    const notesArr = []
    notesText.forEach(note => {
        notesArr.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(notesArr))

}
