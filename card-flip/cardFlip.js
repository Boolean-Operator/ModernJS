    
word = "puzzle problem";
puzzleWord = word.toUpperCase().split('');
word = word.toUpperCase().split('')
word = word.reverse()
console.log(word);
console.log(puzzleWord);


const wordEl = document.querySelector('#puzzle')

window.addEventListener('keypress', (e) => {
  let guess = e.key;
  guess = guess.toUpperCase()
  for (let index = 0; index < puzzleWord.length; index++) {
    if (puzzleWord[index] === guess) {
      cards[index].classList.toggle('is-flipped')
    }
  }
})

word.forEach((letter) => {
  return wordEl.insertAdjacentHTML('afterbegin',`<div class="scene scene--card"><div class="card"><span class="card__face card__face--front"></span><span class="card__face card__face--back">${letter}</span>< /div></div>`);
})

console.log(wordEl);
var cards = document.querySelectorAll('.card');



for (let index = 0; index < cards.length; index++) {
  cards[index].addEventListener('click', function () {
    cards[index].classList.toggle('is-flipped');
  });
}



