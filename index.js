const card1 = document.querySelector(".card");
const thankYou = document.querySelector(".selected-card");
const submitBtn = document.querySelector(".btn-submit");
const ratingNum = document.querySelectorAll(".btn");
let rateNum = document.querySelector("span");

let finalAnswer = false;

ratingNum.forEach((numBtn) => {
  numBtn.addEventListener("click", function () {
    if (finalAnswer) {
      resetNumBtnsActive(ratingNum);

      numBtn.classList.add("selected");
      finalAnswer = Number(numBtn.value);

      console.log(finalAnswer);
    } else {
      finalAnswer = Number(numBtn.value); //truthy.
      numBtn.classList.add("selected");

      console.log(finalAnswer);
    }
  });
});

submitBtn.addEventListener("click", function () {
  // we check if  finalAnswer is truthy
  if (finalAnswer) {
    card1.classList.add("card-display");
    thankYou.classList.remove("selected-card-display");
    rateNum.innerHTML = finalAnswer;
  } else {
    card1.classList.remove("card-display");
    thankYou.classList.add("selected-card-display");
  }
});

// Removes 'selected' class from all number buttons
function resetNumBtnsActive(buttons) {
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
}
