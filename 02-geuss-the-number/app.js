let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const inputElenment = document.querySelector("input");
const feedbackElement = document.getElementById("feedback");
const attemptElement = document.getElementById("attempt");
const guessButton = document.querySelector("button");
const resetButton = document.getElementById("reset");

guessButton.addEventListener("click", () => {
    const userGuess = Number(inputElenment.value);
    attempts++;
    if(userGuess < randomNumber) {
        feedbackElement.textContent = "Too Low!🔻 Try a higher number.";
    } else if(userGuess > randomNumber) {
        feedbackElement.textContent = "Too High!🔺 Try a lower number.";
    } else {
        feedbackElement.textContent = "🎉Congratulaitons! You guessed it!🏆"
    };
    
    attemptElement.textContent = attempts;
    // inputElenment.value = '';
});

resetButton.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    inputElenment.value = "";
    feedbackElement.textContent = "";
    attemptElement.textContent = "0";
});