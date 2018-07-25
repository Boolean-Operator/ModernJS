'use strict'
const gameEl = document.querySelector('#gameBoard')
const wordEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const usedLettersEl = document.querySelector('#usedLetters')
const game = new Hangman('New Jersey', 3)

wordEl.textContent = game.puzzle
statusEl.textContent = game.statusMessage;
usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;


window.addEventListener('keypress', function (e) {
  const guess = e.key;
  game.makeGuess(guess)
  wordEl.textContent = game.puzzle
  statusEl.textContent = game.statusMessage
  usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;
  
});