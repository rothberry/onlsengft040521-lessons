console.log("%c Hello, World!", "color: orange")

// querySelector is the universal finder func
const firstId = document.querySelector("#outer-node .first")
const firstClass = document.querySelector(".first")
// const findDiv = document.querySelectorAll("div")
// . => class   .first => finds class of first
// # => id      #outer-node=> finds id of outer-node
// "" => tag    div => finds first div tag

// console.log(firstId)
// console.log(firstClass)

// const secondId = document.getElementById("outer-node")
for (let i = 1; i <= 2; i++) {
  const secondId = document.getElementById(`inner-node-${i}`)
  // console.log(secondId)
}
// console.log(secondClass)
// console.log(secondTag)

const body = document.querySelector("body")
body.style.backgroundColor = "green"

const innerOne = firstClass.querySelector("#inner-node-1")
let img = document.createElement("img")
img.src = dankMemes[0]
innerOne.appendChild(img)

// Activity
/**
 * Select Elements and save them to variables
 * Delete 2 elements
 * Modify 2 elements
 * Create 2 new elements and add to the page
 */
