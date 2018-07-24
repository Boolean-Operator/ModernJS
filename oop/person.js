class PersonClass {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
  }
  setName(fullName) {
    const name = fullName.split(' ')
    this.firstName = name[0]
    this.lastName = name[1]

  }
}

const myPerson = new PersonClass('Mark', 'Graybill', 52, ['Building wooden boats', 'Biking', 'Snow skiing'])
console.log(myPerson.getBio());
myPerson.setName('Logan Graybill');
console.log(myPerson.getBio());



const Person = function (fName, lName, age, likes= []) {
  this.firstName = fName
  this.lastName = lName
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`

  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })

  return bio
}


Person.prototype.setName = function (fullName) {
  const name = fullName.split(' ')
  this.firstName = name[0] 
  this.lastName = name[1]
  
}



const me = new Person('Mark', "Graybill", 52, ['Wooden Boats', 'Biking', 'Soccer', 'Learning new skills'])
me.setName('Alex Turner')
console.log(me.getBio());

const person2 = new Person('Bill', 'Newman', 28)
console.log(person2.getBio());


