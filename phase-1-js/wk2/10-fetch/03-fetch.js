// Intro to Fetch, Apis, and the Internet!

/**
 * What is an API?
 * => Application Programming Interface
 * => Endpoints of data
 *
 * What is JSON?
 * => JavaScript Object Notation
 *
 *
 * How the entire internet works
 * => Connected computers that send information back and forth
 * Client (your computer) sends a request to a server(facebook.com), and the reponse is sent back to the client. THe client interprets that response through your browser
 *
 *
 * HTTP Request and Response Cycle
 * Types of Requests
 * - GET  => Read from a site
 * - POST => We have formdata that we want to add to a server/database(db)
 * - PUT / PATCH => Edit existing data
 * - DELETE => Remove data from a server/db
 *
 * API Tools
 * - Insomnia.rest
 * - Postman
 * - cUrl
 * - Vscode ext call HTTP Client
 * - fetch (js)
 * - HTTPClient/HTTParty (Ruby)
 *
 *
 * What is fetch?
 * - Used for getting/sending information from a server
 * - What is the return of fetch(url) => Promise
 *
 * Promise
 * => it is promising to do something *if* it returns
 * => IOU some data
 * no guarantee that it will return data
 * fetch will always be *asynchronous*
 *
 * if fetch was synchronous:
 * we'd be stuck waiting for every individual request
 *
 * Stages of a fetch:
 * Send a req to our endpoint
 * "instant" return is a Promise
 * once the reponse is "processed" we need to convert to json
 * .then takes a callback func where the local variable is the return of the previous function
 *
 * .then we process the data however WE want to
 *
 *
 */
// const fetch = require("fetch")

const getFetch = () => {
  return (
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      // .then((data) => console.log)
      .then((data) => {
        data.map((pokemon) => {
          console.log(pokemon)
          // html element with the pokemon data
        })
      })
  )
}

const postFetch = (pokemonDataObj) => {
  const reqObj = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemonDataObj),
  }
  return fetch("https://pokeapi.co/api/v2/pokemon/", reqObj)
    .then((response) => response.json())
    .then((data) => console.log)
}

// const generalFetch = () => {
//   fetch(url, requestObj)
//   .then(response => response.json())
//   .then(data => use the data somehow)
// }

getFetch()
// console.log(fetchPoke())
