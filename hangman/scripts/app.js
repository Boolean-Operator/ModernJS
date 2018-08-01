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

wordCountSlider.addEventListener('change', () => {
  rangeValue.textContent = wordCountSlider.value
})

window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game.makeGuess(guess)
  
  for (let index = 0; index < cards.length; index++) {
    cards[index].addEventListener('keypress', function () {
      cards[index].classList.toggle('is-flipped');
    });
  }
  render()
})

const render = () => {
  rangeValue.textContent = wordCountSlider.value
  wordEl.innerHTML = game.puzzle
  console.log(typeof(wordEl.textContent));
  
  statusEl.textContent = game.statusMessage
  usedLettersEl.textContent = `Letters Used : ${game.guessedLetters}`;
}

const startGame = async () => {
  let wordCount = wordCountSlider.value
  const puzzle = await getPuzzle(wordCount)
  console.log(puzzle);
  const guesses = (Math.floor(puzzle.length / 7 * 2)) < 4
    ? 4
    : (Math.floor(puzzle.length / 7 * 2));
  game = new Hangman(puzzle, guesses)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)
// startGame()
