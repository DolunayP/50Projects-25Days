const password = document.querySelector('#password');
const bg = document.querySelector('.background');


password.addEventListener('input', function () {
    const passwordLength = password.value.length;

    if (passwordLength >= 0) {
        bg.style.filter = `blur(${16 - (passwordLength * 2)}px)`
    }
});

