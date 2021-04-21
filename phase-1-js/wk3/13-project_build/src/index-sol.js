// API Documentation
// https://www.openbrewerydb.org/documentation

const BASE_URL = "https://api.openbrewerydb.org/breweries"
const SEARCH_NAME_URL = BASE_URL + "/?by_name="
const SEARCH_CITY_URL = BASE_URL + "/?by_city="
const SEARCH_GEN_URL = BASE_URL + "/search?query="
const nav = document.querySelector(".nav")
const navSearch = nav.querySelector("#search-name")
const navAll = nav.querySelector("#brew-all")
const brewUl = document.getElementById("brew-list")
const brewProf = document.getElementById("brew-profile")
const searchFormName = document.getElementById("search-form-name")

const fetchAllBrew = () => {
  resetPage()
  fetch(BASE_URL)
  .then(response => response.json())
  .then(breweries => {
    breweries.forEach(brewery => {
      // console.log(brewery)
      renderBrewListItem(brewery)
    })
  })
}

const getBrewery = (event) => {
  const brewId = event.target.id
  fetch(BASE_URL + "/" + brewId)
  .then(response => response.json())
  .then(brewery => {
    renderBreweryPage(brewery)
  })
}

const renderBreweryPage = (brewery) => {
  const {id, name, city, state, brewery_type, website_url} = brewery
  resetPage()
  brewProf.innerHTML = `
    <div id="brew-card-${id}" class="brew-card">
      <h1>${name}</h1>
      <h2>${city}, ${state}</h2>
      <h3>${brewery_type}</h3>
    </div>
  `
}

const renderBrewListItem = brewery => {
  const {id, name, city, state} = brewery
  const brewLi = document.createElement("li")
  brewLi.id = id
  brewLi.className = "brew-list-item"
  brewLi.innerText = `${name}: ${city}, ${state}`
  brewLi.addEventListener("click", getBrewery)
  brewUl.append(brewLi)
}

const showSearchFormName = () => {
  searchDiv.hidden = !searchDiv.hidden
}

const searchBreweriesName = (e) => {
  e.preventDefault()
  const searchTerm = e.target[0].value
  fetch(SEARCH_NAME_URL + searchTerm + "&per_page=25")
  .then(response => response.json())
  .then(breweries => {
    resetPage()
    if (breweries.length > 0) {
      breweries.forEach(brewery => {
        renderBrewListItem(brewery)
      })
      e.target[0].value = ""
      searchDiv.hidden = true
    } else {
      brewProf.innerHTML = `<h3>There doesn't seem to be any breweries of that name!</h3>`
    }
  })
}

const resetPage = () => {
  brewProf.innerHTML = ""
  brewUl.innerHTML = ""
}

navAll.addEventListener("click", fetchAllBrew)
navSearch.addEventListener("click", showSearchFormName)
searchFormName.addEventListener("submit", searchBreweriesName)