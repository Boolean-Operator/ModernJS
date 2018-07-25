class Person {
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
  set fullName(fullName) {
    const name = fullName.split(' ')
    this.firstName = name[0]
    this.lastName = name[1]

  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age,
  position, likes) {
    super(firstName,lastName,age, likes)
    this.position = position
  }
  getBio() {
    return `${this.fullName} is a ${this.position}`

  }
  getYearsLeft() { 
    return 65 - this.age
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status} the class.`
  }
  updateGrade(points) {
    this.grade += points
  }
}
const me = new Employee('Mark', 'Graybill', 52, 'Programmer',['Building wooden boats', 'Biking', 'Snow skiing'])
console.log(me.getBio());
me.fullName = 'Logan Graybill'
console.log(me.getBio());


const person2 = new Person ('Clancey', 'Turner', 27)
console.log(person2.getBio());

const student1 = new Student('Logan', 'Todd', 8, 65, [] )
console.log(student1.getBio());
student1.updateGrade(25);
console.log(student1.getBio());


const student2 = new Student('Tammy-Jean', 'Smith', 8, 72, [] )
console.log(student2.getBio());
student2.fullName = "Sara-Jean Turner"
console.log(student2.getBio());
student2.updateGrade(-15);
console.log(student2.getBio());

