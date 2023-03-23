const messageBox = document.querySelector('.message-box');
const btn = document.querySelector('.btn');

const messageArray = [
    'message 1', 'message 2', 'message 3', 'message 4'
]
const typeArray = [
    'success', 'warning', 'error'
]


btn.addEventListener('click', () => getMessage());

function getMessage(message, type) {
    const notif = document.createElement('div');
    notif.classList.add('message');
    notif.classList.add(type ? type : getRandomType());
    notif.innerText = message ? message : getRandomMessage();
    messageBox.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3500)

};

function getRandomMessage() {
    const message = messageArray[Math.floor(Math.random() * messageArray.length)];
    return message;
}

function getRandomType() {
    const type = typeArray[Math.floor(Math.random() * typeArray.length)];
    return type;
}