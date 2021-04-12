// Map as a function

const myMapSquared = (arr) => {
  // create output array
  let output = []
  // loop over arr
  for (let i = 0; i < arr.length; i++) {
    const changedElement = arr[i] * arr[i]
    output.push(changedElement)
    // if (i === 1) break
  }
  return output
  // push changed element into output arr
}

const arr1 = [1, 2, 3, 4, 5]
console.log(myMapSquared(arr1))

const jsMap = arr1.map((num) => num * num)
console.log(arr1)
// console.log(jsMap)
