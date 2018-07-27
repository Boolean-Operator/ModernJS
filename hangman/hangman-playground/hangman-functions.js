'use strict'

const Hangman = function (word, remainingGuesses) {
  this.word = word.toUpperCase().split('')
  this.guessedLetters = []
  this.remainingGuesses = remainingGuesses
  debugger
  console.log(this.word);
  console.log(this.guessedLetters);
  

}

Hangman.prototype.getPuzzle = function () {

  let puzzle = ''
  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  console.log(guess);
  debugger
  this.guessedLetters.push(guess.toUpperCase());
  this.remainingGuesses -= 1;
  debugger
  this.getPuzzle()
  console.log(`Puzzle: ${this.getPuzzle()}`);
  console.log(`Used letters: ${this.guessedLetters}`);
  console.log(`Remainig guesses: ${this.remainingGuesses}`);

}
