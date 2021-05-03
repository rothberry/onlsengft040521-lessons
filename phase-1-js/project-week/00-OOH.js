let arr = [
  {
    strIngred1: "1ingred",
    strIngred2: "2ingred",
    strIngred3: "3ingred",
    strIngred4: "4ingred",
    strIngred5: "5ingred",
    strIngred6: "6ingred",
    strMeas1: "1meas",
    strMeas2: "2meas",
    strMeas3: "3meas",
    strMeas4: "4meas",
    strMeas5: "5meas",
    strMeas6: "6meas",
    strMeal: "Test1",
  },
  {
    strIngred1: "1ingred2222",
    strIngred2: "2ingred2222",
    strIngred3: "3ingred2222",
    strIngred4: "4ingred2222",
    strIngred5: "5ingred2222",
    strIngred6: "6ingred2222",
    strMeas1: "1meas2222",
    strMeas2: "2meas2222",
    strMeas3: "3meas2222",
    strMeas4: "4meas2222",
    strMeas5: "5meas2222",
    strMeas6: "6meas2222",
    strMeal: "Test2",
  },
]

// first we need to find the obj who's strMeal matches our mealTerm
const findMeal = mealTerm => {
  return arr.find(mealObj => mealObj.strMeal === mealTerm)
}

// return an array of all the full ingred strings
// or just use the data to display instantly
const createIngredientsList = (mealObj) => {
  // mealTerm = event.target.innerText
  // check if foundMeal.fullIngredientArr exists
  if (!mealObj.fullIngredientArr) {
    console.log("creating arr")
    let fullIngredientArr = []
    for (let i = 1; i <= 6; i++) {
      // foundMeal["strMeas1"] => foundMeal[strMeas${i}]
      const fullIngredientStr = mealObj[`strMeas${i}`] + " " + mealObj[`strIngred${i}`]
      fullIngredientArr.push(fullIngredientStr)
      // console.log(foundMeal["strMeal"], fullIngredientStr)
    }
    mealObj["fullIngredientArr"] = fullIngredientArr
  }
  return mealObj
}


const displayIngredients = (mealObj, ingredientList) => {

  // loop over mealObj.fullArr or ingredientList
  // and create your DOM elements from that

}
// console.log(createIngredientsList("Test2"))
// createIngredientsList(findMeal("Test1"))
// createIngredientsList(arr[1])

const songs = [
  "Porter Robinson - Look at the Sky",
  "Lido - Rise",
  "STUCA - Where we are",
  "BADRAPPER - VERSACE PILLS [CODE ZERO REMIX]",
  "Illenium - Leaving (AWAY Remix)",
  "luupy - my glasses literally broke I can't see anything",
  "Kompany - Feel It All",
  "Safari Chan - D E E P E R",
  "Mersiv, Fryar - Paradise",
]
const mostRecentSongs = (songs) => {
  songs.forEach((song,  idx) => {
    console.log(`${idx + 1}: ${song}`)
  })
}

mostRecentSongs(songs)