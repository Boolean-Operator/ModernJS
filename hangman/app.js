'use strict'
const gameEl = document.querySelector('#gameBoard')
const wordEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const usedLettersEl = document.querySelector('#usedLetters')
const game = new Hangman('New Jersey', 5)

wordEl.textContent = game.getPuzzle()
guessEl.textContent = `Remaining Guesses: ${game.remainingGuesses}`;
usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;
console.log(game.status);


window.addEventListener('keypress', function (e) {
  const guess = e.key;
  game.makeGuess(guess)
  wordEl.textContent = game.getPuzzle()
  guessEl.textContent = `Remaining Guesses: ${game.remainingGuesses}`;
  usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;
  console.log(game.status);
  
});




// const wordElement = document.querySelector('#puzzle-word')
// const remainingTurns = document.querySelector('#puzzle-turns')
// const submitWordButton = document.querySelector('#word-input')

// const guessElement = document.querySelector('#letter-guess')
// const guessButton = document.querySelector('#make-guess')


// submitWordButton.addEventListener('click', (e) => {
  //   const game = new Hangman(wordElement.value, remainingTurns.value);
  //   console.log(game);
  //   console.log(game.getPuzzle());
  // })
  
  
  
  // guessButton.addEventListener('click', (e) => {
    //   let guess = guessElement.value
    //   console.log(guess);
    //   Hangman.makeGuess(guess)
    // })
    
    
    // window.addEventListener('keypress', function (e) {
      //   const guess = e.key;
      //   game1.makeGuess(guess)
      //   console.log(game1.getPuzzle());
      //   console.log(` `);

      // })