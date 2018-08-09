const Hangman = function (word, remainingGuesses) {
  this.word = word.toUpperCase().split('')
  this.guessedLetters = []
  this.remainingGuesses = remainingGuesses
  
}

Hangman.prototype.getPuzzle = function () {
  
  let puzzle = ''
  this.word.forEach((letter) => {
    if(this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })
  
  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  this.guessedLetters.push(guess.toUpperCase());
  this.remainingGuesses -= 1;
  this.getPuzzle()
  console.log(`Puzzle: ${this.getPuzzle()}`);
  console.log(`Used letters: ${this.guessedLetters}`);
  console.log(`Remainig guesses: ${this.remainingGuesses}`);

}


const game2 = new Hangman('New Jersey', 12)
game2.makeGuess('e')
game2.makeGuess('r')
game2.makeGuess('j')
game2.makeGuess('d')
game2.makeGuess('m')
game2.makeGuess('n')
game2.makeGuess('w')
game2.makeGuess('b')




// store word in array - DONE
// store all guesses in array -DONE
// guess one letter at a time - DONE
// compare one letter at time -
// update array of matched guesses
// match guess to word in third array


