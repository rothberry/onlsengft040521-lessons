// ! ES6 Deep Dive (Arrow Functions, Variable Declaration, Destructuring)

// * Destructuring???

// Used for Objects to simplify assigning variables

// Obj Destructuring!
const spaceship = {
  pilot: "elon musk",
  navigator: "zucc",
  chef2: "gordon ramsay",
  chef3: "gordon ramsay",
  chef4: "gordon ramsay",
  chef5: "gordon ramsay",
  chef6: "gordon ramsay",
  chef7: "gordon ramsay",
  chef8: "gordon ramsay",
  chef9: "gordon ramsay",
  chef: "gordon ramsay",
}

// want to access the name elon?
// console.log(spaceship.pilot)
// console.log(spaceship.navigator)
// console.log(spaceship.chef)

// DON'T REPEAT YOURSELF => DRY

const createALongSentence = (obj) => {
  // *Long coded
  // return `the pilot ${obj.pilot} was making a trip to mars and needed ${obj.navigator} the nav to tell ${obj.chef} that he was hungry`

  // *long destructuring
  // const pilot = obj.pilot
  // const navigator = obj.navigator
  // const chef = obj.chef

  // *True destructuring
  const { pilot, navigator, chef } = obj

  return `the pilot ${pilot} was making a trip to mars and needed ${navigator} the nav to tell ${chef} that he was hungry`
}

// console.log(createALongSentence(spaceship))

// Array Destructuring!

const names = ["Eli", "Tyler", "Joel"]

// *long destructuring
const a = names[0]
const b = names[1]
const c = names[2]

const [tyler, joel, eli] = names
// console.log("tyler: ", tyler, "joel: ", joel, "eli: ", eli)
// difference between the array dst and obj dst is that the order matters for the array

// !++++++++++++++++++++++++++++++++++++
// Spread Operator

// spread or Object.assign()

const firstTwoDays = { mon: "Monday", tues: "Tues" }
const firstThreeDays = { ...firstTwoDays, wed: "Wed" }
const copyAttempt1 = firstTwoDays
const copyAttempt2 = { ...firstTwoDays }
// const firstThreeDays2 = Object.assign(firstTwoDays, { wed: "Wed" })
// * const firstThreeDays = { mon: "Monday", tues: "Tues", wed: "Wed" }
// console.log("initial")
// console.log(firstTwoDays)
// console.log(firstThreeDays)
// console.log(firstThreeDays2)
firstTwoDays.mon = "memorial day"
// console.log("next")
// console.log(firstTwoDays)
// console.log(copyAttempt1)
// console.log(copyAttempt2)
// console.log(firstThreeDays)

// !+++++++++++++++++++++++++++++++++++

// SLICE => non-destructive
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// return from index 1 to 6
// arr[1] -> arr[6]
// console.log(arr.slice(0, 3))
// console.log(arr)
// array.slice(startingIndex, endingIndex)

// SPLICE => destructive
// console.log(arr.splice(5, 2, { num: 879 }))
// console.log(arr)
// array.splice(startingIndex, amount to remove, things to add)

// !+++++++++++++++++++++++++++
// Arrow Functions and the 'this' keyword

console.log("ARROW")
function doThis() {
  console.log(this)
}

const doThisArrow = () => {
  console.log(this)
}
const dog = {
  name: "Chauncy",
  favFood: ["carrots", "pizza", "treats"],
  sayName: function () {
    console.log("func: ", this)
    // same as dog.name + "!!!"
    return this.name + "!!!"
  },
  // when NOT to use arrow functions
  barkName: () => {
    console.log("arrow: ", this)
    // this => {}, this {}.name === undefined
    return this.name + " BOORK!!!"
  },
  test: this,
}

console.log(dog.name)
console.log(dog.favFood)
console.log(dog.sayName())
console.log(dog.barkName())
console.log(dog.test)
