'use strict'

const wordElement = document.querySelector('#puzzle-word')
const remainingTurns = document.querySelector('#puzzle-turns')
const submitWordButton = document.querySelector('#word-input')

const guessElement = document.querySelector('#letter-guess')
const guessButton = document.querySelector('#make-guess')



submitWordButton.addEventListener('click', (e) => {
  const game = new Hangman(wordElement.value, remainingTurns.value);
  console.log(game);
  console.log(game.getPuzzle());
})



guessButton.addEventListener('click', (e) => {
  let guess = guessElement.value
  console.log(guess);
  Hangman.makeGuess(guess)
})

