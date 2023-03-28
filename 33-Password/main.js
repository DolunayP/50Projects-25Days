const password = document.querySelector('#password');
const bg = document.querySelector('.background');
const form = document.querySelector('#form')
const formMessage = document.querySelector('.form-message')
const passwordRegex = /^[a-zA-Z0-9]{4,8}$/;


password.addEventListener('input', function () {
    const passwordLength = password.value.length;

    if (passwordLength >= 0) {
        bg.style.filter = `blur(${16 - (passwordLength * 2)}px)`
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const test = passwordRegex.test(password.value);
    if (test) {
        formMessage.innerHTML = `Şifre Geçerli`;
    } else {
        formMessage.innerHTML = `Şifre Geçersiz`;
    }
})
