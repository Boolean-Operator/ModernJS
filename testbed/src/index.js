const calculateAverage = (thing, ...numbers) => {
  let sum = 0
  numbers.forEach((num) => sum += num)
  const average = sum/numbers.length
  return `The avearge ${thing} is ${average}.`
}

console.log(calculateAverage('grade', 0, 100, 88, 64));



const printTeam = (teamName, coach, ...players) => {
  
  console.log(`Team: ${teamName}`)
  console.log(`Coach: ${coach}`)
  console.log(`Players: ${players.join(', ')}`)
  
}

printTeam('Libery', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry', 'JimmyJohn', 'Billy Ray', 'Andre', 'John', 'Cashmir', 'Quest')



const team = {
  name: 'Libery',
  coach: 'Casey Penn',
  players: ['Marge', 'Sherry', 'JimmyJohn', 'Billy Ray', 'Andre', 'John', 'Cashmir', 'Quest']
}

printTeam( team.name, team.coach, ...team.players)

let cities = ['New York', 'Denver', 'Las Vegas']
console.log(cities);

cities = [...cities, 'Paris', 'Milan']
console.log(cities);

let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017
}
console.log(house);

let newHouse = {
  basement: true,
  garage: true,
  garageCapacity: 2,
  ...house,
  bedrooms: 3

}

console.log(newHouse);

let person = {
  name: 'Billy Ray',
  age: 102
}

let location = {
  city: "Philly",
  country: "USA"
}

let overview = {
  ...person,
  ...location
}

console.log(person);
console.log(location);
console.log(overview);


// Destructuring

const todo = {
  id: 'sldakgfui123',
  text: 'Pay the bills',
  completed: false
}

const printTodo = ({ text, completed}) => {
  console.log(`Text: ${text}, Completed: ${completed}`)
}

printTodo(todo)

const { text:todoText, completed, details = "No details provides",  ...others} = todo

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [65, 0, 13]
const [firstItem, ...otherItems] = age

console.log(firstItem);
console.log(otherItems);





