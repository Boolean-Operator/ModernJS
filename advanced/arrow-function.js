const square = (num) => num * num

const squareLong = (num) => {
  return num * num
}

console.log(square(5));

const people = [{
  name: 'Mark',
  age: 52
}, {
  name: 'Kami',
  age: 42
  }, {
  name: 'Logan',
  age: 8
  }]


// const under30 = people.filter(function (person) {
//   return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)
console.log(under30);

const age22 = people.filter((person) => person.age === 42)
console.log(`Filter: ${age22[0].name}`);
  
const age22find = people.find((person) => person.age === 42)
console.log(`Find: ${age22find.name}`);
  