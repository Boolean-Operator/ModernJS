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
    let puzzle =''
    const makeCard = () => {
      return `<div class="scene scene--card">
      <div class="card">
        <span class="card__face card__face--front"></span>
        <span class="card__face card__face--back"></span>
      </div>
    </div>`
    }

    
    const flipCard = (letter) => {
      return `<div class="scene scene--card">
      <div class="card is-flipped">
        <span class="card__face card__face--front"></span>
        <span class="card__face card__face--back">${letter}</span>
      </div>
    </div>`
    }

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle = puzzle + flipCard(letter)
        
      } else {
        puzzle = puzzle + makeCard('')
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
      return `Congratulations!`
    } else if (this.status === 'failed') {
      let solution = this.word.join('')
      return `Nice Try.  The word was "${solution}"`
    } else {
      return `Remaining Guesses : ${this.remainingGuesses}`
    }
  }
}
