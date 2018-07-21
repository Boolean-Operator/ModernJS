const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.guessedLetters = []
  this.remainingGuesses = remainingGuesses
  this.solution = []
  this.word.forEach((elem) => {
    this.solution = buildSolution(elem)
  })
}

function getAllIndexes(word, val) {
  let indexes = []
  let i;
  for (i = 0; i < word.length; i++) {
    if (word[i] === val)
      indexes.push(i);
  }
  return indexes
}

let arr = []
function buildSolution(elem) {
  if (elem !== ' ') {
    arr.push('*')
  } else {
    arr.push(elem)
  }
  return arr
}




Hangman.prototype.getPuzzle = function (letter) {
  this.guessedLetters.push(letter);
  this.remainingGuesses -= 1;

  let index = getAllIndexes(this.word, letter)

  for (let i = 0; i < index.length; i++) {
    this.solution[index[i]] = letter
  }

  console.log(`Puzzle: ${this.solution.join('')}`);
  console.log(`Used letters: ${this.guessedLetters}`);
  console.log(`Remainig guesses: ${this.remainingGuesses}`);
}


const game2 = new Hangman('New Jersey', 12)
game2.getPuzzle('e')
game2.getPuzzle('r')
game2.getPuzzle('j')
game2.getPuzzle('d')
game2.getPuzzle('m')
game2.getPuzzle('n')
game2.getPuzzle('w')
game2.getPuzzle('b')




// store word in array - DONE
// store all guesses in array -DONE
// guess one letter at a time - DONE
// compare one letter at time -
// update array of matched guesses
// match guess to word in third array


