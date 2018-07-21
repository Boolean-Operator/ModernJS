const Hangman = function ( word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = ['e','j']
  
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


const game2 = new Hangman('New Jersey', 12)
console.log(game2.getPuzzle());
