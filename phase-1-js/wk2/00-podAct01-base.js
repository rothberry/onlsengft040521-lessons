// ? Questions

/**
    What are all the datatypes in JavaScript?

    What is Looping over an Array called?

    What are the variable scopes?

    What are some JavaScript array looping methods?
    What is the RETURN of each array method:

    What is an Object?

    Truthy vs Falsey

 */

let nums = [1, 2, 3, 4, 5]
const foreach = nums.forEach((x) => x + 1)
const newMap = nums.map((x) => x + 1)
const findNum = nums.find((x) => x === 2)
const filterNums = nums.filter((x) => x === 2)

// console.log("\nArray methods")
// console.log("foreach:\t", foreach)
// console.log("newMap:\t", newMap)
// console.log("findNum:\t", findNum)
// console.log("filterNums:\t", filterNums)

const testTruthy = (arg) => {}

// console.log("\nTruthy\n")
// testTruthy("a")
// testTruthy("")
// testTruthy([])
// testTruthy({})
// testTruthy(55)
// testTruthy(0)
// testTruthy(undefined)
// testTruthy(null)
// testTruthy(NaN)

/**
 *
 *
 *
 */

// ! ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ! PAIR PROGRAMMING!

// Given an Array(arr) of wins('w'), loses('l'), & ties('t')

const createRecordObj = (games) => {
  // Your Code Here
}
// * Return an OBJECT with number of wins/loses/ties
// {
//   w: num_wins,
//   l: num_losses,
//   t: num_ties,
// }

const displayRecord = (games) => {
  // Your Code Here
  // hint: utilize the previous function
}
// * Return a string saying => "You've got X Wins, X Loses.. etc"

const displayRecordArr = (games) => {
  // Your Code Here
  // hint: use logic from first function
}
// * Return a new array by adding the current num of w/l/t to the array => ["w1", "l1", "w2"...]

const findFirstTie = (games) => {
  // Your Code Here
  // hint: find with index....
}
// * Return a string of the first tie, along with which game it was

const games = "wwwlllwlwtlwlwltlw".split("") // ['w', 'w', 'l', 't'... ]

console.log("\nConsole Testing!\n")
console.log("test Arr:\t", games.toString())
console.log("createRecordObj:\t", createRecordObj(games))
console.log("displayRecord:\t\t", displayRecord(games))
console.log("displayRecordArr:\t", displayRecordArr(games))
console.log("findFirstTie:\t\t", findFirstTie(games))
