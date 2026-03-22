const t = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}

t.onclick = () => {
    const d = document.documentElement;
    if (d.getAttribute("data-theme") === "dark") {
        d.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        d.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
};