let name = '   Andrew Mead  '

// Length property

console.log(name.length);

// Convert to Upper Case

console.log(name.toUpperCase());
console.log("name".toUpperCase());

// Convert to Lower Case
console.log(name.toLowerCase());

let password = 'abc123pass12word'
console.log(password.includes('password'));
 
// Trim Method

console.log(name.trim());

// Challenge
// isValidPassword
// length is greater than 8 and doesnot contain word 'password'

let isValidPassword = function (password) {
 
  return password.length > 8 && !password.includes('password')
}



console.log(isValidPassword('asdfp'));
console.log(isValidPassword('asdfpabc123!@#$#$%^'));
console.log(isValidPassword('asdfppadfsppasswordsdf'));
