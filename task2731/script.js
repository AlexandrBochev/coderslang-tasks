const field = document.querySelector('.field');
const movesCounter = document.querySelector('.moves-counter span');
const congratulationMessage = document.querySelector('.congratulation-message span');
const modal = document.querySelector('.modal');
const tryAgain = document.getElementById('try-again');

var opened = [];
var matched = 0;
var moves  = 0;

function showModal() {
  congratulationMessage.innerHTML = moves;
  modal.style.display = 'block'
}

function addMove() {
  moves ++;
  movesCounter.innerHTML = moves;
}

function shuffle(arr) {
  let newArr = Object.values(arr)
  return newArr.sort(()=> Math.random()-0.5);
}

function logic() {
  if (opened.length === 2) {
    if (opened[0].getAttribute('type') !== opened[1].getAttribute('type')) {
      setTimeout(() => {
        opened[0].classList.remove('opened');
        opened[1].classList.remove('opened');
        opened = [];
      }, 1000);
    } else {
      opened[0].classList.add('match');
      opened[1].classList.add('match');
      opened = [];
      matched += 2;
    }
  }
}

function init() {
  let shuffled = [];
  matched = 0;
  moves  = 0;

  const cards = document.querySelectorAll('.card');

  modal.style.display = 'none'

  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (opened.length !== 2) {
        card.classList.add('opened');
        opened.push(card);
        addMove();
        logic();
      }
      if (matched === 16) {
        showModal();
      }
    });
    card.classList.remove('match');
  });

  

  shuffled = shuffle([...cards]);
  for (let i = 0; i < shuffled.length; i++) {
    field.append(shuffled[i]);
  } 
}

init()

tryAgain.addEventListener('click', () => {
  init();
});