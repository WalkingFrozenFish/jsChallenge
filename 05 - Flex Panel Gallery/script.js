let panel = document.querySelectorAll(".panel");

for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", handler)
}

function handler() {
    this.classList.toggle("open")
}

