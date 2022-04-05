// const b = document.querySelector("body"); b.addEventListener("keypress", (e) => {
//     if (e.keyCode == 65) {
//         console.log(e)
//         let a = new Audio("./sounds/clap.wav")
//         a.play();
//     }
//     if (e.keyCode == 83) {
//         console.log(e)
//         let a = new Audio("./sounds/hihat.wav")
//         a.play();
//     }
//     if (e.keyCode == 68) {
//         console.log(e)
//         let a = new Audio("./sounds/kick.wav")
//         a.play();
//     }
//     if (e.keyCode == 70) {
//         console.log(e)
//         let a = new Audio("./sounds/openhat.wav")
//         a.play();
//     }
//     if (e.keyCode == 71) {
//         console.log(e)
//         let a = new Audio("./sounds/boom.wav")
//         a.play();
//     }
//     if (e.keyCode == 72) {
//         console.log(e)
//         let a = new Audio("./sounds/ride.wav")
//         a.play();
//     }
//     if (e.keyCode == 74) {
//         console.log(e)
//         let a = new Audio("./sounds/snare.wav")
//         a.play();
//     }
//     if (e.keyCode == 75) {
//         console.log(e)
//         let a = new Audio("./sounds/tom.wav")
//         a.play();
//     }
//     if (e.keyCode == 76) {
//         console.log(e)
//         let a = new Audio("./sounds/tink.wav")
//         a.play();
//     }
// })

let keyArray = document.querySelectorAll(".key");
let soundArray = document.querySelectorAll(".sound");
let body = document.querySelector("body");

for (let i = 0; i < keyArray.length; i++) {
    body.addEventListener("keypress", (event) => {
        if (event.keyCode == keyArray[i].getAttribute("data-key")) {
            let soundPath = new Audio(`./sounds/${soundArray[i].innerText}.wav`);
            soundPath.play();
        }
    })

    body.addEventListener("keydown", (event) => {
        if (event.keyCode == keyArray[i].getAttribute("data-key")) {
            keyArray[i].classList.add("playing")
        }
    })

    body.addEventListener("keyup", (event) => {
        if (event.keyCode == keyArray[i].getAttribute("data-key")) {
            keyArray[i].classList.remove("playing")
        }
    })
}