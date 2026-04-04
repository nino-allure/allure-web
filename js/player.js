document.querySelectorAll(".track").forEach(t => {
    const b = t.querySelector(".play");
    const a = t.querySelector("audio");

    b.onclick = () => {
        if (a.paused) {
            a.play();
            // Use current language for pause text
            const lang = localStorage.getItem('lang') || 'en';
            b.textContent = lang === 'ru' ? 'пауза' : 'pause';
        } else {
            a.pause();
            // Use current language for play text
            const lang = localStorage.getItem('lang') || 'en';
            b.textContent = lang === 'ru' ? 'играть' : 'play';
        }
    };
});