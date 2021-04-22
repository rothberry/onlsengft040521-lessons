// ! Find DOM Nodes
const url = 'https://randomuser.me/api/'
const fetchBtn = document.getElementById("fetch")
const personDiv = document.getElementById("person-container")
// ! Handlers

// ! Event Listeners

// ! Add Fetch functionality

// * Solution 1
const fetchPerson = () => {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data.results[0])
    createPerson(data.results[0])
  })
}

const createPerson = (person) => {
  const div = document.createElement("div")
  div.id = person.id.value
  const name = document.createElement("h1")
  const emailTag = document.createElement("h2")
  const img = document.createElement("img")

  const {email} = person
  const {first, last, title } = person.name
  const pic = person.picture.medium
  name.innerText = `${title}. ${first} ${last}`
  emailTag.innerText = email
  img.src = pic

  div.append(name, emailTag, img)
  document.body.append(div)
}


// * Solution 2
const fetchPerson2 = () => {
  return fetch(url)
  .then(res => res.json())
}

const fetchHandler = async () => {
  const data = await fetchPerson2()
  console.log(data.results[0])
  const person = data.results[0]
  createOnePerson(person)
}

const createOnePerson = person => {
  const {email} = person
  const {first, last, title } = person.name
  const pic = person.picture.medium
  personDiv.innerHTML = `
  <div id=${person.id} >
  <h1>${title}. ${first} ${last}</h1>
  <h2>${email}</h2>
  <img src=${pic}>
  </div>
  `
}

const resetPersonContainer = () => {
  personDiv.innerHTML = ""
}

fetchBtn.addEventListener("click", fetchPerson)
// fetchBtn.addEventListener("click", fetchHandler)