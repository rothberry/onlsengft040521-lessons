// ! Find DOM Nodes

const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const heartList = document.querySelector(".likes")
const pause = document.getElementById("pause")
const commentForm = document.getElementById("comment-form")
const commentList = document.getElementById("list")

// !Handlers
const minusCounter = () => {
  counter.innerText = parseInt(counter.innerText) - 1
}

const plusCounter = () => {
  counter.innerText = parseInt(counter.innerText) + 1
}

const heartNumber = () => {
  const heartLi = document.createElement("li")
  heartLi.innerText = `<3 ${counter.innerText}`
  heartList.prepend(heartLi)
  // heartList.append(heartLi)
}

let isPaused = true
let timer
const pauseCounter = () => {
  // pause or play the counter
  if (isPaused) {
    pause.innerText = "pause"
    timer = setInterval(plusCounter, 1000)
  } else {
    pause.innerText = "play"
    clearInterval(timer)
  }
  isPaused = !isPaused
  // hide the heart btn
  heart.hidden = !heart.hidden
}

const addComment = (event) => {
  event.preventDefault()
  const input = event.target.querySelector("#comment-input")
  const commentItem = document.createElement("li")
  commentItem.innerText = input.value
  commentList.prepend(commentItem)
  input.value = ""
}

// ! Event Listeners
minus.addEventListener("click", minusCounter)
plus.addEventListener("click", plusCounter)
heart.addEventListener("click", heartNumber)
pause.addEventListener("click", pauseCounter)
commentForm.addEventListener("submit", addComment)
