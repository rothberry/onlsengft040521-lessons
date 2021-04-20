/**
 * Using the json-server to mimic and outside server/api
 * 
 * CRUD => HTTP
 * Create => POST
 * Read   => GET
 * Update => PUT/PATCH
 * Delete => DELETE
 * 
 */

// Step 1: On the page load, we want to fetch all the drivers that are in the db and render them on the page
// Step 2: Add a new driver using the form
// Step 3: Use the reponse of the POST to add new driver to the container
// Step 4: (Opt) Add Delete button to each driver card, and delete from 'server' and page on click


const BASE_URL = "http://localhost:3000/drivers"

// * Finding the Global Elements
const driverContainer = document.getElementById("drivers-container")
const driverForm = document.getElementById("driver-form")
// * Used to set each drivers id
let maxDriverId

// * Done on Page load to fetch all the drivers (GET) from the API
const fetchAllDrivers = () => {
  fetch(BASE_URL)
  .then(response => response.json())
  .then(drivers  => {
    // Just moves the id so there's no overlap
    maxDriverId = Math.max(...drivers.map(d => d.id))
    // We are given an array of drivers, so we have to loop over that and render each driver individually
    drivers.forEach(driver => { 
      // ? pick your poison
      // renderDriverInnerHTML(driver)
      renderDriverElements(driver)
    })
  })
}

// * Triggered on Submission of form and sends a (POST) request to our API
const postNewDriver = (event) => {
  event.preventDefault() // When we are submitting a form, we usually will need to prevent it from reloading
  const inputs = event.target // gives us all the form data
  // * Next we can set the values from the form to their respective variables
  const name = inputs[0].value
  const car = inputs[1].value
  const img = inputs[2].value
  ++maxDriverId // moves our id up

  // * Here we will create the formData Object to send as gthe body in our POST request
  const formData = {
    id: maxDriverId,
    name, car, img
  }
  
  // * Obj to send with all the headers, body, and request type
  const postReqObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify(formData) // Gotta stringify that data
  }

  fetch(BASE_URL, postReqObj)
  .then(response => response.json())
  .then(newDriver => {
    // console.log(newDriver)
    // renderDriverInnerHTML(newDriver)
    renderDriverElements(newDriver)
  })
}

// * Attached to each delete button on each card and sends a (DELETE) request to our API
const deleteDriver = event => {
  const deleteReqObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  const id = event.target.id.slice(7) // plucks out the id
  fetch(BASE_URL + "/" + id, deleteReqObj)
  // * Notice that we don't need to process our deleted object, we just need to remove the card from the page
  event.target.parentElement.remove()
}

// * Render function creating elements and appending them together
const renderDriverElements = driver => {
  const { id, name, car, img } = driver

  // create a bunch of elements, and append them to each other
  const div = document.createElement("div")
  const h1 = document.createElement("h1")
  const h2 = document.createElement("h2")
  const image = document.createElement("img")
  const deleteBtn = document.createElement("button")
  
  div.id = "card-" + id
  h1.innerText = name
  h2.innerText = car
  image.src = img
  image.alt = "nupe2"
  deleteBtn.id = "delete-" + id
  deleteBtn.innerText = "DELETE"
  
  div.append(h1, h2, image, deleteBtn)
  driverContainer.append(div)
  deleteBtn.addEventListener("click", deleteDriver)
}

// * Render function using a longform string with interpolation
const renderDriverInnerHTML = driver => {
  const { id, name, car, img } = driver
  // create the card/render
  const cardHTML = `
    <div id="card-${id}" class="card flex">
      <h1>${name}</h1>
      <h2>${car}</h2>
      <img src=${img} alt="nupe">
      <button id="delete-${id}">Delete</button>
    </div>
  `
  const card = document.createElement("div")
  card.innerHTML = cardHTML
  driverContainer.appendChild(card)

  const deleteBtn = document.getElementById(`delete-${id}`)
  deleteBtn.addEventListener("click", deleteDriver)
}

// Global Event Listeners
driverForm.addEventListener("submit", postNewDriver) // submit is an event on the form itself
document.addEventListener("DOMContentLoaded", fetchAllDrivers) // fetch all drivers when the page loads