// API Documentation
// https://www.openbrewerydb.org/documentation

// ! All of our global constants and HTML nodes
const BASE_URL = "https://api.openbrewerydb.org/breweries"
const SEARCH_NAME_URL = BASE_URL + "/?by_name="
const SEARCH_CITY_URL = BASE_URL + "/?by_city="
const SEARCH_GEN_URL = BASE_URL + "/search?query="
const navAll = document.getElementById("brew-all")
const navSearch = document.getElementById("search-name")
const brewList = document.getElementById("brew-list")
const brewProf = document.getElementById("brew-profile")
const searchForm = document.getElementById("search-form-name")

// ! Event Handlers / Fetch handlers
const fetchAllBrew = async () => {
  // send a GET request to our BASE_URL and then we need to render each brewery to the page
  resetPage()
  // fetchAllBrewAsync()
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((breweries) => {
      breweries.forEach((brewery) => {
        // console.log(brewery)
        renderBrewListItem(brewery)
      })
    })
  // let breweries = await fetchAllBrewAsync()
  //   breweries.forEach(brewery => {
  //     // console.log(brewery)
  //     renderBrewListItem(brewery)
  //   })
}

// async function fetchAllBrewAsync () {}
const fetchAllBrewAsync = async () => {
  let res = await fetch(BASE_URL)
  let breweries = await res.json()
  breweries.forEach((brewery) => {
    // console.log(brewery)
    renderBrewListItem(brewery)
  })
}

const getBrewery = (e) => {
  console.log(e.target.parentElement.id)
  fetch(BASE_URL + "/" + e.target.parentElement.id)
    .then((res) => res.json())
    .then((brewery) => {
      // console.log(brewery)
      renderBreweryPage(brewery)
    })
}

const handleLikes = (e) => {
  let numLikes = Number(e.target.innerText.slice(7))
  numLikes++
  e.target.innerText = "Likes: " + numLikes
}

const showSearchForm = (e) => {
  // turn our search form visible (not hidden)
  searchForm.hidden = !searchForm.hidden
}

const handleSearch = (e) => {
  e.preventDefault()
  resetPage()
  const term = e.target.querySelector('input[name="search-name"]').value

  fetch(SEARCH_NAME_URL + term)
    .then((res) => res.json())
    .then((results) => {
      results.forEach((brewery) => {
        renderBrewListItem(brewery)
      })
      e.target[0].value = ""
      searchForm.hidden = true
    })
}

const assignLikeButtons = () => {
  const likeButtons = document.querySelectorAll("li button")
  likeButtons.forEach((button) => {
    button.addEventListener("click", handleLikes)
  })
}

const assignLink = () => {
  const brewLinks = document.querySelectorAll("li a")
  brewLinks.forEach((links) => {
    links.addEventListener("click", getBrewery)
  })
}

// ! Render functions
const renderBrewListItem = (brewery) => {
  const { name, city, id } = brewery
  const brewLi = document.createElement("li")
  const brewA = document.createElement("a")
  const brewBtn = document.createElement("button")
  brewLi.id = id

  brewA.innerText = `${name} : ${city}`
  brewBtn.innerText = "Likes: 0"
  // we can create many dynamic event listeners that are attached to each li tag
  brewA.addEventListener("click", getBrewery)
  brewBtn.addEventListener("click", handleLikes)

  brewLi.append(brewA, brewBtn)
  brewList.append(brewLi)
}

const renderBreweryPage = (brewery) => {
  resetPage()
  const { id, name, city, state, brewery_type, website_url } = brewery

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
// navAll.addEventListener("click", fetchAllBrewAsync)
navAll.addEventListener("click", fetchAllBrew)
navSearch.addEventListener("click", showSearchForm)
searchForm.addEventListener("submit", handleSearch)
