// Your code goes here
const computerResponse = document.querySelector("#computer-response");
const nameForm = document.querySelector("#name-form");
const userInput = document.querySelector("#user-input");

nameForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents for from refreshing use without action value
  const value = userInput.value;
  const enemiesArray = ["Joker", "Juggernaut", "Venom", "Dabura", "Frieza"];

  if (enemiesArray.includes(value)) {
    computerResponse.textContent = "Go Away!";
  } else {
    computerResponse.textContent = "Hello" + " " + value + "!";
  }
});
