// student score, total possible score
// output-> You got a C(75%)!
// A 100-90, B 89-80, C 79-70, D 69-60 F 59-0

const calc = function (student, total) {
  const percent = student/total*100
  let letter = letterGrade(percent)
  return `You got a ${letter} (${percent}%)!`
}

let letterGrade = function (num) {
  if (num < 60) {
    return 'F'
  } else if (num < 70) {
    return 'D'
  } else if (num < 80) {
    return 'C'
  } else if (num < 90) {
    return 'B'
  } return 'A'
}

const response = calc(48, 50)
console.log(response);
