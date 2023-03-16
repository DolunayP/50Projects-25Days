const sounds = ['boo', 'applause', 'wrong', 'tada', 'gasp', 'victory']
const body = document.querySelector('body');

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', function () {
        stopSound();

        const audio = document.querySelectorAll('audio');
        audio.forEach(aud => {
            if (aud.src.includes(sound)) {
                aud.play();
            }
        })
    })

    document.querySelector('.buttons').appendChild(btn);
    
    body.addEventListener('click', (e) => {
        if (!e.target.matches('.btn'))
            stopSound();
    });
});

function stopSound() {
    const audio = document.querySelectorAll('audio');
    audio.forEach(aud => {
        aud.pause();
        aud.currentTime = 0;
    });
}

