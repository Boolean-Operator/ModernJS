const game1 = new Hangman('Cat', 3)

const renderGame = () => {
  document.querySelector('#gameBoard').appendChild(generateGameDOM())
}

const generateGameDOM = ()=> {
  
  const gameElem = document.createElement('div')
  const wordElem = document.createElement('p')
  const guessElem = document.createElement('p')
  
  window.addEventListener('keypress', function (e) {
    const guess = e.key;
    wordElem.textContent = game1.getPuzzle()
    guessElem.textContent = game1.makeGuess(guess)
    gameElem.appendChild(wordElem)
    gameElem.appendChild(guessElem)
  });
  return gameElem
}

renderGame()