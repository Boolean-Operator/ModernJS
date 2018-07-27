'use strict'
const gameEl = document.querySelector('#gameBoard')
const wordEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const usedLettersEl = document.querySelector('#usedLetters')
const wordCount = document.getElementById('wordCount')
const newGame = document.getElementById('newGame')
const game = new Hangman("New Jersey", 3)
//let guesses = (Math.floor(data.puzzle.length / 5 * 2));
let wordCount = 3



newGame.addEventListener('click', () => {
  console.log('New Game');

})

wordCount.addEventListener('change', (e) => {
  count = wordCount.value
  console.log(count);
})

wordEl.textContent = game.puzzle
statusEl.textContent = game.statusMessage;
usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;


window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game.makeGuess(guess)
  wordEl.textContent = game.puzzle
  statusEl.textContent = game.statusMessage
  usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;
});

getPuzzle(wordCount, (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
}) 
