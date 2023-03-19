const counters = document.querySelectorAll('.counter');
const open = document.querySelector('.open');


counters.forEach(item => {
    item.innerText = '0'
    const updateNumbers = () => {
        const target = item.getAttribute('data-target');
        let increase = +target * 0.004;
        let c = +item.innerText;

        if (c < target) {
            item.innerText = `${Math.round(increase + c)}`
            setTimeout(updateNumbers, 1)

        } else { item.innerText = target; }
    }
    updateNumbers();
})

