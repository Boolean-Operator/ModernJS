let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author} has approximately ${myBook.pageCount} pages.`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} was also written by ${myBook.author}`);

let person = {
  name: 'Logan',
  age: 8,
  location: "Camden, DE"
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);


