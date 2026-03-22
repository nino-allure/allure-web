document.querySelectorAll(".track").forEach(t => {
    const b = t.querySelector(".play");
    const a = t.querySelector("audio");

    b.onclick = () => {
        if (a.paused) {
            a.play();
            b.textContent = "pause";
        } else {
            a.pause();
            b.textContent = "play";
        }
    };
});