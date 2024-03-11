function setNight() {
    document.body.classList.add("nightmode");
    localStorage.setItem("dayNight", "night");
}

function setDay() {
    document.body.classList.remove("nightmode");
    localStorage.setItem("dayNight", "day");
}

const dayNight = localStorage.getItem("dayNight");

if (dayNight == "night") {
    setNight();
} else {
    setDay();
}

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
    setNight();
} else {
    setDay();
}

document.querySelector("#day").addEventListener("click", setDay);
document.querySelector("#night").addEventListener("click", setNight);
