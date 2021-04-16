// ? Questions

/**
    What are all the datatypes in JavaScript?
    - Objects (Arrays)
    - Strings (Symbols)
    - Numbers
    - Booleans
    - null / NaN / undefined

    What is Looping over an Array called?
    - iteration

    What are the variable scopes?
    - Global => use it anywhere
    - Local => confined to a specific code block
    -- Class (Object Oriented)
    -- Instance (Object Oriented)
    -- Enumberables/Iterables (variable element used in iteration) 

    What are some JavaScript array looping methods?
    What is the RETURN of each array method:
    - .forEach    => undefined
    - .map        => Array using the modifying condtions
    - .find       => the first element that matches your criteria
    - .filter     => Array of everything that matches your criteria

    What is an Object?
    - {something: somethingElse}
    - {key: value} => pairs

    Truthy vs Falsey
    - things that are mostly true or mostly false
    - Language dependent

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

const testTruthy = (arg) => {
  // Js allows us to pass in truthy data as an arg
  // Bang Operator (!)
  // !truthy => false
  // !falsey => true
  // !!truthy => true
  // !!falsey => false

  if (!!arg) {
    console.log(arg, "Truthy")
  } else {
    console.log(arg, "Falsey")
  }
}

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

// ! ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ! PAIR PROGRAMMING!

// Given an Array(arr) of wins('w'), loses('l'), & ties('t')

const createRecordObj = (games) => {
  // * Solution 1 (Number counters)
  let w = 0,
    l = 0,
    t = 0

  games.forEach((game) => {
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

  // * Solution 2 (Filter Methods)
  // * Filters through the array 3 times
  const wins = games.filter((game) => game === "w").length
  const losses = games.filter((game) => game === "l").length
  const times = games.filter((game) => game === "t").length
  return { wins, losses, ties }

  // * Solution 3
  // * Dynamic Object Counter
  let obj = {}
  games.forEach((game) => {
    // check if obj["l"] exists?
    // if so, increase the count by 1
    // or start count at 1
    if (game === "w" || game === "l" || game === "t") {
      !!obj[game] ? obj[game]++ : (obj[game] = 1)
    }
  })
  return obj
}
// * Return an OBJECT with number of wins/loses/ties
// {
//   w: num_wins,
//   l: num_losses,
//   t: num_ties,
// }

const displayRecord = (games) => {
  const { wins, losses, ties } = createRecordObj(games)
  return `You've got ${wins} wins, ${losses} loses, and ${ties} ties`
}
// * Return a string saying => "You've got X Wins, X Loses.. etc"

const displayRecordArr = (games) => {
  // * Solution 1
  let w = 0
  l = 0
  t = 0
  const newWLRecord = games.map((game) => {
    if (game === "w") {
      w++
      return `${game}${w}`
    } else if (game === "l") {
      l++
      return `${game}${l}`
    } else if (game === "t") {
      t++
      return `${game}${t}`
    }
  })
  return newWLRecord

  // * Solution 2
  let obj = {}
  return games.map((game) => {
    !!obj[game] ? (obj[game] += 1) : (obj[game] = 1)
    return game + obj[game]
  })
}
// * Return a new array by adding the current num of w/l/t to the array => ["w1", "l1", "w2"...]

const findFirstTie = (games) => {
  // * Solution 1
  return `Game ${games.indexOf(`t`) + 1} was the first tie`

  // * Solution 2
  const foundIndex = games.findIndex((game) => game === "t")
  return `The first tie was game ${foundIndex + 1}`
}
// * Return a string of the first tie, along with which game it was

const games = "wwwlllwlwtlwlwltlw".split("") // ['w', 'w', 'l', 't'... ]

console.log("\nConsole Testing!\n")
console.log("test Arr:\t", games.toString())
console.log("createRecordObj:\t", createRecordObj(games))
console.log("displayRecord:\t\t", displayRecord(games))
console.log("displayRecordArr:\t", displayRecordArr(games))
console.log("findFirstTie:\t\t", findFirstTie(games))
