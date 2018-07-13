let num = 109.9449

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// Random Number Formula

let min = 10
let max = 25

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(`Random number between ${min} and ${max} : ${randomNum}`);


// Guessing Game



let makeGuess = function (guess) {
  let min = 1
  let max = 5
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(`Random number between ${min} and ${max}. \nYou guessed ${guess} and the Number was ${randomNum}`); 
  return guess === randomNum
}

let result = makeGuess(5)
console.log(result);
