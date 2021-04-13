// Truthy vs Falsey

// Turning a return of anything into a boolean

// Bang operator => !

const testTruthy = (arg) => {
  // if arg is truthy, then return this
  if (!!arg) {
    // arg, !!arg, `truthy`
  } else {
    // arg, !!arg, `falsey`
  }
}

// Truthy
testTruthy("a")
testTruthy([])
testTruthy({})
testTruthy(555)
testTruthy(-555)

// Falsey
testTruthy(null)
testTruthy(undefined)
testTruthy(NaN)
testTruthy(0)
testTruthy("")

// ? Questions

/**
    What are all the datatypes in JavaScript?
    - Objects (Arrays)
    - Strings
    - Numbers (Int, Float, Doubles)
    - Booleans
    - undefined
    - NaN

    What is Looping over an Array called? 
    - Iteration

    What are the variable scopes?
    - Global
    - Local
    -- Class (ObjectOriented)
    -- Instance (OO)
    -- Enumerables / iterables

    What are some JavaScript iteration methods?
    What is the RETURN of each array method:
      .forEach  =>  undefined
      .map      =>  Array, Length given === length returned
      .find     => An Element
      .filter   => Array
    What is an Object?
    - Key Value Pair
 */
// console.log("\nArray methods")
// console.log([1, 2, 3].forEach((x) => x + 1))
// console.log([1, 2, 3].map((x) => x + 1))
// console.log([1, 2, 3].find((x) => x === 2))
// console.log([1, 2, 3].filter((x) => x === 2))
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
  let w = 0,
    l = 0,
    t = 0

  arr.forEach((game) => {
    if (game === "w") {
      w++
    } else if (game === "l") {
      l++
    } else {
      t++
    }
  })
  return {
    wins: w,
    losses: l,
    ties: t,
  }
  return { w, l, t }

  let obj = {}
  arr.forEach((game) => {
    // check if obj["l"] exists?
    // if so, increase the count by 1
    // or start count at 1
    !!obj[game] ? (obj[game] += 1) : (obj[game] = 1)
  })
  return obj
}
// Return an object with number of wins/loses/ties

const displayRecord = (arr) => {
  const { w, l, t } = createRecordObj(arr)
  return `You've got ${w} wins, ${l} loses, and ${t} ties`
}
// Return a string saying => "You've got X Wins, X Loses.. etc"

const displayRecordArr = (arr) => {
  let obj = {}
  return arr.map((game) => {
    !!obj[game] ? (obj[game] += 1) : (obj[game] = 1)
    return game + obj[game]
  })
}
// Return a new array by adding the current num of w/l/t to the array => ["w1", "l1", "w2"...]

const findFirstTie = (arr) => {
  // Your Code Here
  // hint: find with index....
  const foundIndex = arr.findIndex((game) => {
    return game === "t"
  })
  return `The first tie was game ${foundIndex + 1}`
}
// Return a string of the first tie, along with which game it was

const arr1 = "wwwlllwlwtlwlwltlw".split("")

console.log(createRecordObj(arr1))
console.log(displayRecord(arr1))
console.log(displayRecordArr(arr1))
console.log(findFirstTie(arr1))
// ['w', 'w', 'l', 't'... ]
