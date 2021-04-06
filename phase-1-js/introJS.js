// Intro to JavaScript!

// What do we use JavaScript for?

// adding functionality to websites
// interacting with a website

// To have things interact with your browser/html withouta page refresh

// DOM => Document Object Model

// Variables
// in js, we have to declare our variables

// var name = "Phil" => can be reassigned
// let name = "Phil" => can be reassigned
// const name = "Phil" => cannot be reassigned

// let name = "Phil"
// sayHello(name)
function sayHello(name) {
  console.log(`Hello ${name}`)
}
// sayHello(name)

// Another way to write a func
let sayHello2 = function (name) {
  console.log(`Hello ${name}`)
}
// console.log(sayHello2)
// sayHello2(name)

// Arrow Functions!
// arrow functions will bind to their current scope
// ES6 Syntax

const greeting = (name) => {
  let time = "Morning"
  // console.log(`Good ${time} ${name}!`)
  return `Good ${time} ${name}!`
}
// console.log(greeting(name))

// Parts of a function
/**
 const(declaration) functionName = (arguments/parameters) =>(arrow) {
  code block
  return
 }
 */

// Conditionals

// if-elseif-else...
// if you have a chain of if-elseif-.... there will only be one return, and it will be the first thing that satifies a
// let num1 = 2
// let num2 = 2
// if num1 > num2 clg 1 is bigger
// if num2 > num1 clg 2 is bigger

const ifElse = (num1, num2) => {
  if (num1 > num2) {
    console.log("1 is bigger!")
  } else {
    console.log("2 is bigger!")
  }
}
// ifElse(num1, num2)

const ifElseIf = (num) => {
  if (num > 50) {
    console.log("first!")
  } else if (num > 10 && num <= 50) {
    console.log("second!")
  } else if (num <= 10) {
    console.log("third!")
  } else {
    console.log("nope")
  }
}
// be careful of js Number vs a Number in a string
// ifElseIf("jgasfdhk")

// switch statment
// if-elseif chain where you only are comparing one value

const switchCase = (x) => {
  // if x equals something

  // if (x === "Hello") {
  //   console.log("hi")
  // } else if (x === "GoodBye") {
  //   console.log("GB")
  // } else {
  //   console.log("qooooooq")
  // }

  switch (x) {
    case "Hello":
      console.log("Hi")
      break
    case "GoodBye":
      console.log("Seeya!")
      break
    default:
      console.log("woooooooow")
  }
}

// switchCase("Hello")
// ternary statement => shorthand for a if-else block
const tern = (y) => {
  // if (y === "Sup") {
  //   console.log("sup dude")
  // } else {
  //   console.log("rude")
  // }
  return y === "Sup" ? "sup dude" : "rude"
}
// console.log(tern("Sup"))

// incrementing/decrementing

let num = 1
// console.log(num++)
// console.log(++num)
// console.log(typeof greeting)

// Scoping
// Variables are defined to a certain block, can only use var inside you their scope
let name = "Phil"

function greeting2() {
  let name = "Travis"
  if (name == "Travis") {
    name = "Joel"
  }
  console.log(name)
}

// greeting2()

let num1 = 10
let num2 = "10"
console.log(typeof num1)
console.log(typeof num2)
// Number => convert any datatype to a number
// parseInt => convert string to Integer
console.log(num1 === num2)

// Datatypes in Javascript?

// String
// Number
// Boolean
// Object
// Array => technically just an object
// NaN
// undefined
