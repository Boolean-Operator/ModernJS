'use strict'
// const gameEl = document.querySelector('#gameBoard')
const wordEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const usedLettersEl = document.querySelector('#usedLetters')
const newGame = document.querySelector('#reset')
const wordCountSlider = document.querySelector('#wordCount')
const rangeValue = document.querySelector('#rangeValue')
const cards = document.querySelectorAll('.card');
let game
console.log(cards);

wordCountSlider.addEventListener('change', () => {
  rangeValue.textContent = wordCountSlider.value
})


for (let index = 0; index < cards.length; index++) {
  cards[index].addEventListener('click', function () {
    cards[index].classList.toggle('is-flipped');
    render()
  });
}

const render = () => {
  wordEl.innerHTML = game.puzzle
  console.log(typeof(wordEl.innerHTML));
  statusEl.textContent = game.statusMessage
  usedLettersEl.textContent = `Letters Used : ${game.guessedLetters}`;
}

const startGame = async () => {
  rangeValue.textContent = wordCountSlider.value
  let wordCount = wordCountSlider.value
  const puzzle = await getPuzzle(wordCount)
  console.log(puzzle);
  const guesses = (Math.floor(puzzle.length / 7 * 2)) < 4
    ? 4
    : (Math.floor(puzzle.length / 7 * 2));
  game = new Hangman(puzzle, guesses)
  render()
}


window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game.makeGuess(guess)
  render()
})

newGame.addEventListener('click', startGame)

startGame()
