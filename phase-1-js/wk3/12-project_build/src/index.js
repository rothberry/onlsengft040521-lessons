// API Documentation
// https://www.openbrewerydb.org/documentation

// How to start your project?
// - come up with a solid idea, that uses an api that your can communicate with

// ! All of our global constants and HTML nodes
const BASE_URL = "https://api.openbrewerydb.org/breweries"
const SEARCH_NAME_URL = BASE_URL + "/?by_name="
const SEARCH_CITY_URL = BASE_URL + "/?by_city="
const SEARCH_GEN_URL = BASE_URL + "/search?query="
const navAll = document.getElementById("brew-all")
const brewList = document.getElementById("brew-list")
const brewProf = document.getElementById("brew-profile")

// ! Event Handlers / Fetch handlers
const fetchAllBrew = () => {
  // send a GET request to our BASE_URL and then we need to render each brewery to the page
  resetPage()
  fetch(BASE_URL)
  .then(res => res.json())
  .then(breweries => {
    breweries.forEach(brewery => {
      // console.log(brewery)
      renderBrewListItem(brewery)
    })
  })
}

const getBrewery = (e) => {
  console.log(e.target.id)
  fetch(BASE_URL + "/" + e.target.id)
  .then(res => res.json())
  .then(brewery => {
    // console.log(brewery)
    renderBreweryPage(brewery)
  })
}

// ! Render functions
const renderBrewListItem = brewery => {
  const {name, city, id} = brewery
  const brewLi = document.createElement("li")
  brewLi.id = id
  brewLi.innerText = `${name} : ${city}`
  
  // we can create many dynamic event listeners that are attached to each li tag
  brewLi.addEventListener("click", getBrewery)
  
  brewList.append(brewLi)
}

const renderBreweryPage = brewery => {
  resetPage()
  const {id, name, city, state, brewery_type, website_url} = brewery

  const brewDiv = document.createElement("div")
  brewDiv.innerHTML = `
    <h1>${name}</h1>
    <h2>${city}, ${state}</h2>
    <h3>${brewery_type}</h3>
    <a href=${website_url}>Weblink</a>
  `
  brewProf.append(brewDiv)
}

// With single page applications, in order to go to a "new" page, you either have to replace elements, or wipe and replace

// ! Helper functions
const resetPage = () => {
  brewList.innerHTML = ""
  brewProf.innerHTML = ""
}

// ! Attach event listeners
navAll.addEventListener("click", fetchAllBrew)