// ? Questions

/**
    What are all the datatypes in JavaScript?
    - Objects (arrays)
    - Booleans
    - Strings (Symbols)
    - Numbers
    - undefined/null
    - NaN

    What is Looping over an Array called?
    - Iteration

    What are the variable scopes?
    - Global => can be used anywhere
    - Local => confined to a certain scope
    -- static
    -- Class (Object Oriented)
    -- Instance (Object Oriented)
    -- Enumberables/Iterables (variable element used in iteration)

    What are some JavaScript iteration methods?
    What is the RETURN of each array method:
    - .forEach  => undefined
    - .map      => Array of the same length as the original 
    - .find     => The first Element that matches the return condition
    - .filter   => Array of all elements that match criteria

    What is an Object?
    - Key Value Pairs

    Truthy vs Falsey
    - Truthy => some data that is mostly true

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

console.log("Truthy")
const testTruthy = (arg) => {
  // Bang operator
  // => !
  if (!!arg) {
    console.log(arg, !!arg, "Truthy")
  } else {
    console.log(arg, !!arg, "Falsey")
  }
}

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
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// ! ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ! PAIR PROGRAMMING!

// Given an Array(arr) of wins('w'), loses('l'), & ties('t')

const createRecordObj = (arr) => {
  // Your Code Here
  // const wins = arr.filter((x) => x === "w").length
  // const losses = arr.filter((x) => x === "l").length
  // const ties = arr.filter((x) => x === "t").length
  // return { wins, losses, ties }
  // let wins = 0,
  //   losses = 0,
  //   ties = 0
  // arr.forEach((game) => {
  //   if (game === "w") {
  //     wins++
  //   } else if (game === "l") {
  //     losses++
  //   } else {
  //     ties++
  //   }
  // })
  // return { wins, losses, ties }

  let obj = {}
  arr.forEach((game) => {
    // check to see if key of [game] exists in the obj
    console.log(obj)
    !!obj[game] ? obj[game]++ : (obj[game] = 1)
  })
  return obj
}
// Return an OBJECT with number of wins/loses/ties
// {
//   w: num_wins,
//   l: num_losses,
//   t: num_ties,
// }

const displayRecord = (arr) => {
  // Your Code Here
  // hint: utilize the previous function
}
// Return a string saying => "You've got X Wins, X Loses.. etc"

const displayRecordArr = (arr) => {
  // Your Code Here
  // hint: use logic from first function
}
// Return a new array by adding the current num of w/l/t to the array => ["w1", "l1", "w2"...]

const findFirstTie = (arr) => {
  // Your Code Here
  // hint: find with index....
}
// Return a string of the first tie, along with which game it was

const arr1 = "wwwlllwlwtlwlwltlw".split("")
// ['w', 'w', 'l', 't'... ]

console.log("\nConsole Testing!\n")
console.log(createRecordObj(arr1))
console.log(displayRecord(arr1))
console.log(displayRecordArr(arr1))
console.log(findFirstTie(arr1))
