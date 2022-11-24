let container = document.querySelector(".container");
let rateContainer = document.querySelector(".thankContainer");
let submit = document.getElementById("rate");
let rating = document.getElementById("rating");
let rates = document.querySelectorAll('.number');

submit.addEventListener("click", () => {
    rateContainer.classList.remove("hidden");
    container.style.display = "none"; 
} )

rates.forEach( function (rate) {
    rate.addEventListener("click", function () {
        console.log(rate.innerHTML);
        rating.innerHTML = rate.innerHTML;
    })
})