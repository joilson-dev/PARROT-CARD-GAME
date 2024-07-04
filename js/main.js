let cardsQuantity;
let cards = [];

while (isNaN(cardsQuantity) || cardsQuantity < 4 || cardsQuantity > 14 || cardsQuantity % 2 !== 0) {
  let input = prompt('Quantas cartas deseja jogar? Insira um número entre 4 e 14');
  cardsQuantity = parseInt(input);
  console.log(cardsQuantity)
}

function createCards() {
  for (let index = 0; index < cardsQuantity / 2; index++) {
    let cardPath = `./img/${index + 1}.gif`;
    cards.push({ cardPath: cardPath, pair: index });
    cards.push({ cardPath: cardPath, pair: index });
  }
}

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function renderCards(cards) {
  let listCards = document.querySelector('ul.cards');
  listCards.innerHTML = '';
  cards.forEach((card, index) => {
    listCards.innerHTML += `<li class="card" data-index="${index}" onclick="eventClick(this)">
      <div class="front">
        <img src="img/back.png">
      </div>
      <div class="back">
        <img src="${card.cardPath}">
      </div>
    </li>`
  });
}

let indexClick1Card = null;
let indexClick2Card = null;
let moves = 0;


function eventClick(card) {
  if (card.classList.contains('turn-card') || indexClick2Card) return;

  card.classList.add('turn-card');
  moves++;

  if (!indexClick1Card) {
    indexClick1Card = card;
  } else {
    indexClick2Card = card;
  }
}