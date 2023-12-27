// function outer() {
//   let counter = 0
//   function inner() {
//     counter++ 
//     console.log(counter)
//   }
//   return inner 
// }
// const fn = outer()
// fn()
// fn()

// function sayMyName(name) {
//   console.log(`My name is ${name}`)
// }

// sayMyName('Walter White')
// sayMyName('Heisenberg')

const person = {
  name: 'Simon',
  sayMyName: function() {
    console.log(`My name is ${this.name}`)
  },
}

// person.sayMyName()

function sayMyName() {
  console.log(`My name is ${this.name}`)
}

// sayMyName.call(person)

function Person(name) {
  // this = {}
  this.name = name
}

const p1 = new Person('Simon')
const p2 = new Person('Art Vandelay')

console.log(p1.name, p2.name)