// JavaScript Array Methods

// iteration?
// Looping over a set of data(arrays)

// let nameo = "phil" => ["p", "h", "i", "l"]
// nameo[0]
let array = ["phil", "dave", "joel", "eli", "philw"]
// console.log(array[0], array[1])

// and loop where the index of the arrays moves some direction

// forEach loop=> actually shorthand for a for loop
// declaration; termination condition; movement
// for (let i = 0; i < array.length; i++) {
//   let name = array[i]
//   console.log(name)
// }

// const callback = (name) => console.log(name)
// array.forEach(callback)
// console.log(array)
// array.forEach((name) => {
//   name = name + "sssss"
//   console.log(name)
// })
// console.log(array)
// array method using a CALLBACK FUNCTION

// Callback function is always an arrow function
// foreach=> args === the local variable name for each element of the array

// ? MAP
// loops over the array and modifies wach element

const mappedArray = array.map((name) => name + " is awesome!")
// console.log("map", mappedArray)
// * USING A FOREACH LOOP

let eachMapArray = []
array.forEach((name) => {
  eachMapArray.push(name + " is awesome!")
})
// console.log("eachMap", eachMapArray)

// ? FIND
// want to find joel
// what should the return of the .find be?
// .find will return the FIRST element that matches your condition
// array.find(element => boolean find condtion)
// console.log(array.find((name) => name[0] === "p"))
// console.log(
//   "find",
//   array.find((name) => {
//     console.log("akhfgsahkfga", name)
//     return name[1] === "o"
//   })
// )

// ? find with forEach
let foundName
array.forEach((name) => {
  // console.log("akhfgsahkfga", name)
  if (name[1] === "o") {
    foundName = name
  }
})
// console.log("findEach", foundName)

// ? FILTER
// the same syntax as the .find, but now it will return alll elements that match your condition
// console.log(array.filter((name) => name[0] === "p"))

// find all that contains an 'e'
console.log(
  array.filter((name) => {
    // console.log("akfhgsa", name)
    return name.includes("e")
    // return name[1] === "o"
  })
)

// ? filter with forEach
let foundNames = []
array.forEach((name) => {
  if (name.includes("e")) {
    foundNames.push(name)
  }
})
console.log(foundNames)

// Using objects
const winLose = ["w", "l", "w", "w", "l", "w", "w", "w"]

// w => 5
// l => 2
const count = {} // {"w": 5, "l", 2}

winLose.forEach((key) => {
  // check if the key exists in the object
  if (count[key]) {
    count[key] += 1
  } else {
    count[key] = 1
  }
})

// console.log(count)

// What is an Object?
// const array = ["phil", "dave", "joel", "eli", "philw"]
// const arrObj = { 0: "phil", 1: "dave", 2: "joel", 3: "eli", 4: "philw" }
// arrObj[0]

// console.log("Array ", typeof [])
// console.log("Object ", typeof {})

// an Object is a key and value pair

// let obj = { key: value }

let people = {
  phil: "the teach",
  sophie: ["the swing", "the whiteboarder"],
  travis: "the clueless coder",
}

const names = Object.keys(people)
// console.log(names)
const titles = Object.values(people)
// console.log(titles)
const peopleEntries = Object.entries(people)
// console.log(people)
// console.log(peopleEntries)

// We want to reove all null values from a given array

let candies = [
  ["reeses", "M&Ms"],
  [null],
  null,
  "kit-kat",
  null,
  undefined,
  10,
  { name: "snickers" },
]

let flatCandies = candies.reduce((acc, val) => acc.concat(val), [])

// console.log(
//   flatCandies.filter((candy) => {
//     console.log("akhfgashghf", candy)
//     // first check if object, then add the candy.name conditional
//     return typeof candy === "string"
//     // || typeof candy["name"] === "string"
//   })
// )
