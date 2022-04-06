let spacing = document.querySelector("#spacing");
let blur = document.querySelector("#blur");
let base = document.querySelector("#base");
let image = document.querySelector("img");

image.style.padding = `${spacing.value}px`;
image.style.filter = `blur(${blur.value}px)`;
image.style.backgroundColor = base.value;

spacing.addEventListener("input", (e) => {
    image.style.padding = `${e.target.value}px`;
})

blur.addEventListener("input", (e) => {
    image.style.filter = `blur(${e.target.value}px)`;
})

base.addEventListener("input", (e) => {
    image.style.backgroundColor = e.target.value;
})