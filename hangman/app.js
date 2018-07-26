'use strict'
const gameEl = document.querySelector('#gameBoard')
const wordEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const usedLettersEl = document.querySelector('#usedLetters')
const game = new Hangman('New Jersey', 3)

wordEl.textContent = game.puzzle
statusEl.textContent = game.statusMessage;
usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;


window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game.makeGuess(guess)
  wordEl.textContent = game.puzzle
  statusEl.textContent = game.statusMessage
  usedLettersEl.textContent = `Used Letters: ${game.guessedLetters}`;
});

// Make an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    console.log(data.puzzle);
    console.log(Math.floor(data.puzzle.length/5*2));
  } else if (e.target.readyState === 4) {
    console.log('An error has occured.');
    
  }
})
request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = 'US'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    let country = data.find((elem) => elem.alpha2Code === countryCode)
    console.log(country.name);
  } else if (e.target.readyState === 4 ) {
    console.log('Unable to fetch data.');
    
  }
})
countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()


//  let text = request
//   console.log(text);
 


