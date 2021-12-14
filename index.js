let player = {
  name: "Andrew",
  chips: 100,
};

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// initialize hasBlackJack
let hasBlackJack = false;
let isAlive = true;
let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
let cards = [firstCard, secondCard];
let sum = cards[0] + cards[1];
let newCard = 0;
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let buttonEl = document.getElementById("buttonRand");
let buttonRedoEl = document.getElementById("buttonRedo");
let playerEl = document.getElementById("player-el");

buttonRedoEl.style.visibility = "hidden";

playerEl.textContent = player.name + " " + player.chips;

function startGame() {
  renderGame();
}

function renderGame() {
  buttonRedoEl.style.visibility = "visible";
  cardEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card? 😊";
  } else if (sum === 21) {
    messageEl.textContent = "You've Got a Blackjack 😎";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "sad lol 😢";
    isAlive = false;
  }
  buttonEl.style.visibility = "hidden";
  console.log(sumEl.textContent);
  // console.log(isAlive);
}

function redrawCard() {
  if (isAlive === true && hasBlackJack === false) {
    newCard = getRandomNumber();
    cards.push(newCard);
    sum += newCard;
    console.log(cards);
    renderGame();
  }
}
