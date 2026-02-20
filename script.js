let cleverTextEl = document.querySelector("#clever-text");
let cleverButtonEl = document.querySelector("#clever-button");
let cleverButtonOneEl = document.querySelector("#clever-button-one");

cleverButtonEl.addEventListener("click", () => {
    cleverTextEl.classList.toggle("text-black");
});

cleverButtonOneEl.addEventListener("click", () => {
    cleverTextEl.classList.toggle("hidden")
})