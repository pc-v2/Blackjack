const random = (min = 1, max = 12) => {
  let num = Math.random() * (max - min) + min;
  return Math.round(num);
};
// initialize HasBlackJack
let HasBlackJack = false;
let isAlive = true;

function startGame() {
  renderGame();
}

function renderGame() {
  let want_el = document.getElementById("want-el");
  let card_El = document.getElementById("cards-el");
  let sum_El = document.getElementById("sum-el");

  let firstCard = random();
  let secondCard = random();
  let button_el = document.getElementById("buttonRand");
  let sum = firstCard + secondCard;

  card_El.textContent = "Cards: " + firstCard + ", " + secondCard;
  sum_El.textContent = "Sum: " + sum;

  if (sum < 21) {
    want_el.textContent = "Do you want to draw a new card? 😊";
  } else if (sum === 21) {
    want_el.textContent = "You've Got a Blackjack 😎";
    HasBlackJack = true;
  } else {
    want_el.textContent = "sad lol 😢";
  }
  button_el.style.visibility = "hidden";
  console.log(sum_El.textContent);
  // console.log(isAlive);
}

let button_redo_el = document.getElementById("buttonRedo");
function redrawCard() {
  renderGame();
}

// Draw Cash !!!

//practice boolean conditions

// console.log(4 === 3); //false
// console.log(5 > 2); //true
// console.log(12 > 12); //false
// console.log(3 < 0); //false
// console.log(3 >= 3); //true
// console.log(11 <= 11); //true
// console.log(3 <= 2); //false
