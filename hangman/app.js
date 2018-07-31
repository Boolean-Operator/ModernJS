'use strict'
// const gameEl = document.querySelector('#gameBoard')
const wordEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const usedLettersEl = document.querySelector('#usedLetters')
const newGame = document.querySelector('#reset')
const wordCountSlider = document.querySelector('#wordCount')
const rangeValue = document.querySelector('#rangeValue')
let game

wordCountSlider.addEventListener('change', () => {
  rangeValue.textContent = wordCountSlider.value
})

window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game.makeGuess(guess)
  render()
})

const render = () => {
  rangeValue.textContent = wordCountSlider.value
  wordEl.textContent = game.puzzle
  statusEl.textContent = game.statusMessage
  usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;
}

const startGame = async () => {
  let wordCount = wordCountSlider.value
  // console.log(wordCount);
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
