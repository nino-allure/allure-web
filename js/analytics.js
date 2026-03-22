document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", () => {
        console.log("click:", el.innerText || el.href);
    });
});