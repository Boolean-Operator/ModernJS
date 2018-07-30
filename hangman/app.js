'use strict'
const gameEl = document.querySelector('#gameBoard')
const wordEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const usedLettersEl = document.querySelector('#usedLetters')
let wordCount = document.getElementById('wordCount')
const newGame = document.getElementById('newGame')
const game = new Hangman("New Jersey", 3)
wordCount = 3
//let guesses = (Math.floor(data.puzzle.length / 5 * 2));

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

// HTTP request to meadio/puzzle
getPuzzle(wordCount).then((puzzle) => {
  console.log(puzzle);
}).catch((err) => {
      console.log(`Error:${err}`);
})


// HTTP request to restcountries.eu
let countryCode = 'GB'
getCountry(countryCode).then((country) => {
  console.log(country);
  console.log(`country Name: ${country.name}`);
}).catch((err) => {
  console.log(`Error: ${err}`);
}) 


getLocation().then((location) => {
  console.log(`Are you are located in ${location.city}, ${location.region}  ${location.country} ?`);
  
}).catch((err) => {
  console.log(`Error: ${err}`);
})

getLocation().then((location) => {
  return getCountry(location.country)
}).then((country) => {
  console.log(country.name);
}).catch((err) => {
  console.log(err);
  
})