// Filter Lab

// Goal is to understand how to use the .filter() array method

// Takes in an arr of strs and return a matching list of drivers
// case insensitive
const findMatching = (searchName, drivers) => {
  return drivers.filter((driver) => {
    // where driver is searchName
    // need to return what datatype? => boolean
    return driver.toLowerCase() === searchName.toLowerCase()
  })
}

// returns all drivers whose names begin with the provided letters.
const fuzzyMatch = (letters, drivers) => {
  return drivers.filter((driver) => {
    // check if the first 2 letters of driver is letters
    // console.log("Driver:\t", driver)
    const slicedName = driver.slice(0, 2).toLowerCase()
    return slicedName === letters.toLowerCase()
  })
}

const matchName = (driversArrObj, searchName) => {
  const foundsNames = driversArrObj.filter((driverObj) => {
    // console.log("driverObjName:\t", driverObj.name)
    return driverObj.name === searchName
  })
  // further manipulate our filtered array before returning
  return foundsNames
}

const matchHometown = (driversArrObj, searchTown) => {
  return driversArrObj.filter((driverObj) => {
    // console.log("driverObjName:\t", driverObj.name)
    return driverObj.hometown === searchTown
  })
}

// describe blah as array equal to arr

const drivers = [
  "Mike",
  "Richard",
  "phil",
  "Brinton",
  "Matt",
  "Phil",
  "Michael",
]

const driversArrObj = [
  {
    name: "Mike",
    hometown: "Westchester",
  },
  {
    name: "Richard",
    hometown: "Brooklyn",
  },
  {
    name: "Brinton",
    hometown: "Eugene",
  },
  {
    name: "Phil",
    hometown: "Queens",
  },
  {
    name: "Phil",
    hometown: "Detroit",
  },
  {
    name: "Phil",
    hometown: "Eugene",
  },
]

// const findPhils = findMatching("phil", drivers) // => ["phil", "Phil"]
// console.log(findPhils)

// const findMi = fuzzyMatch("mi", drivers) // => ["Mike", "Michael"]
// console.log(findMi)

// const findPhilsArr = matchName(driversArrObj, "Phil")
// const findEugene = matchHometown(driversArrObj, "Eugene")

// console.log("findPhilsArr\t", findPhilsArr)
// console.log("findEugene\t", findEugene)

// ! ++++++++++++++++++++++++++++++++++++++
// Control Flow
// function scuberGreetingForFeet(feet) {
const scuberGreetingForFeet = (feet) => {
  // if (feet <= 400) dothis
  // or if (feet is over 2000) do this
  // or if (feet is over 2500) do this
  if (feet <= 400) {
    return "free"
  } else if (feet > 2500) {
    return "Nope"
  } else if (feet > 2000) {
    return "30 bycks"
  } else {
    return "sure?"
  }
}

console.log(scuberGreetingForFeet(199)) // free
console.log(scuberGreetingForFeet(2001)) // 30
console.log(scuberGreetingForFeet(2501)) // nope
console.log(scuberGreetingForFeet(555)) // sure?
