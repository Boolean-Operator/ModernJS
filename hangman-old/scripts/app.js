'use strict'

const puzzleEl = document.querySelector('#puzzle')
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
  puzzleEl.innerHTML = ''
  rangeValue.textContent = wordCountSlider.value
  statusEl.textContent = game.statusMessage
  usedLettersEl.textContent = `Letters Used : ${game.guessedLetters}`;
  game.puzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })
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
startGame()
