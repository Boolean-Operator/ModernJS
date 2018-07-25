'use strict'
class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toUpperCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }
  updateStatus() {
    const finished = this.word.every((elem) => this.guessedLetters.includes(elem) || elem === ' ')

    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
  get puzzle() {
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
  makeGuess(guess) {
    if (this.status !== 'playing') {
      return
    }

    guess = guess.toUpperCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses = this.remainingGuesses - 1
    }
    this.updateStatus()
  }
  get statusMessage() {

    if (this.status === 'finished') {
      return `Congratulations, you guess the word.`
    } else if (this.status === 'failed') {
      let solution = this.word.join('')
      return `Nice Try.  The word was "${solution}"`
    } else {
      return `Guesses remaining: ${this.remainingGuesses}`
    }
  } 
}

// conver statusMessage to custom getter
//convert getPuzzle to custom getter
//change usage in app.js
// test 