const random = (min = 1, max = 14) => {
  let num = Math.random() * (max - min) + min;
  return Math.round(num);
};

// initialize HasBlackJack
let HasBlackJack = false;
let isAlive = true;
let firstCard = random();
let secondCard = random();
let cards = [firstCard, secondCard];
let sum = cards[0] + cards[1];
let newCard = 0;

function startGame() {
  renderGame();
}

function renderGame() {
  let want_el = document.getElementById("want-el");
  let card_El = document.getElementById("cards-el");
  let sum_El = document.getElementById("sum-el");
  let button_el = document.getElementById("buttonRand");
  card_El.textContent = "Cards: " + cards[0] + ", " + cards[1];
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
  newCard = random();
  cards.push(newCard);
  sum += newCard;
  console.log(cards);
  renderGame();
}
