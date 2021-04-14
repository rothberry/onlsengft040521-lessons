// ! JavaScript Events!

// Events are fired inside the browser window and tend to attached to a specific element
// - HTML Element
// - set of html elements
// - whole document
// - entire windows

// Examples:?
// * Click
// * Submit
// Hovering
// * pressing a key
// resizing
// focusiung
// * waiting for page to load
// errors
// * onChange

// Syntax:
// node.addEventListener("type of event", callback function)
// Type of Event => 'click', 'submit', etc...
// Func => What to do when the event is triggered

// ? Can use 'defer' on the script tag instead
// document.addEventListener("DOMContentLoaded", () => {
//   const alertBtn = document.getElementById("alert")
//   console.log(alertBtn)
// })

// find your node
const body = document.querySelector("body")
const commentsList = document.getElementById("comments-list")
const btns = document.getElementById("btn-all")
const alertBtn = document.getElementById("alert")
const logBtn = document.getElementById("log")
const errorBtn = document.getElementById("error")

// Create your triggered functionality
const alertUser = (event) => {
  console.log(event.target)
  alert("CLICKEEDDDD")
}

const logUser = () => {
  console.log("hi, whazzup")
}

// assign functionality to node with an action
alertBtn.addEventListener("click", alertUser)
logBtn.addEventListener("click", logUser)
errorBtn.addEventListener("click", () => {
  console.log("ERROR 404")
})

const btn = document.createElement("btn")
btn.className = "btn"
btn.innerText = "Change Color"
btns.appendChild(btn)

const changeColor = () => {
  body.style.backgroundColor = "blue"
}

btn.addEventListener("click", changeColor)

// ! Forms

const commentForm = document.getElementById("comment-form")

const submitForm = (event) => {
  event.preventDefault()
  console.log(event)
  // will stop whatever the default action of the event is
  // const newComment = commentForm.querySelector("#new-comment").value
  const newComment = event.target.querySelector("#new-comment").value

  const li = document.createElement("li")
  li.innerText = newComment
  commentsList.appendChild(li)
  event.target.querySelector("#new-comment").value = ""

  console.log("Submitted")
}
commentForm.addEventListener("submit", submitForm)
