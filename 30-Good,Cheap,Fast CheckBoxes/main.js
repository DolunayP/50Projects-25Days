const labelEl = document.querySelectorAll('.label');
const good = document.querySelector('#good')
const fast = document.querySelector('#fast')
const cheap = document.querySelector('#cheap')
const checkBoxes = document.querySelectorAll('.toggle')


checkBoxes.forEach(toggle => { toggle.addEventListener('change', (e) => changeOneClicked(e)) })

function changeOneClicked(e) {
    if (good.checked && cheap.checked && fast.checked) {
        if (e.target === good) {
            fast.checked = false;
        }
        if (e.target === fast) {
            cheap.checked = false;
        }
        if (e.target === cheap) {
            good.checked = false;
        }
    }
}
