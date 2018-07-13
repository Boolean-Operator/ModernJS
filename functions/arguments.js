// Multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anon', score = 0) {
  // return 'Name: '+ name + ' -Score: ' + score
  return `Name: '${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText);

//Challenge area
let getTip = function (total, tipPercent = .20) {
  let percent = tipPercent *100
  let tip = total * tipPercent
  let totalBill = tip + total
  // return 'Bill: '+ total+' - Tip: '+ tip + ' - Total: ' + totalBill
  return `a ${percent}% tip on $ ${total} would be ${tip}. And the total bill would come to $ ${totalBill}. `
}

let tip = getTip(45.78, .25)
console.log(tip);

let name = 'jen'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old`);

