const wordEl = document.querySelector('#puzzle')

word = "Longer puzzle problem";
puzzleWord = word.toUpperCase().split('');
word = word.toUpperCase().split('')
word = word.reverse()

window.addEventListener('keypress', (e) => {
  let guess = e.key;
  guess = guess.toUpperCase()
  for (let index = 0; index < puzzleWord.length; index++) {
    if (puzzleWord[index] === guess) {
      cards[index].classList.add('is-flipped')
    }
  }
})

word.forEach((letter) => {
  return wordEl.insertAdjacentHTML('afterbegin',`<div class="scene scene--card"><div class="card"><span class="card__face card__face--front"></span><span class="card__face card__face--back">${letter}</span>< /div></div>`);
})

var cards = document.querySelectorAll('.card');
for (let index = 0; index < puzzleWord.length; index++) {
  if (puzzleWord[index] === ' ') {
    cards[index].classList.toggle('is-flipped')
  }
}

// integrate flip feature into hangman for WoF game 
// add unique and badGuess filter 


