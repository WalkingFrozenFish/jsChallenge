let hour = document.querySelector(".hour-hand");
let min = document.querySelector(".min-hand");
let second = document.querySelector(".second-hand");

second.style.transformOrigin = "right";
min.style.transformOrigin = "right";
hour.style.transformOrigin = "right";

setInterval(() => {
    second.style.transform = `rotate(${360 / 60 * (new Date().getSeconds())}deg)`;
    min.style.transform = `rotate(${360 / 60 * (new Date().getMinutes())}deg)`;
    hour.style.transform = `rotate(${360 / 24 * (new Date().getHours()) * 2}deg)`;
}, 1000)