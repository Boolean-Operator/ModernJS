let greetUser = function (name) {
  console.log('Hello, ' + name + ' !');
}

greetUser('Mark');

let square = function (num) {
  let result = num*num;
  console.log(result);
  
  return result;
  
}

let value = square(2);


let convertFahr = function (temp) {
  let result = (temp-32) * 5/9;
  return result;
}

let tempOne = convertFahr(32);
let tempTwo = convertFahr(131);

console.log(tempOne);
console.log(tempTwo);
