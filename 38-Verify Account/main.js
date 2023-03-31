const digits = document.querySelectorAll('.digit')

digits[0].focus();

digits.forEach((digit, idx) => {
    digit.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            digits[idx].value = '';
            setTimeout(() => {
                digits[idx + 1].focus();
            }, 10);
        } else if (e.key == 'Backspace') {
            setTimeout(() => {
                digits[idx - 1].focus();
            }, 10);
        }
    })
})