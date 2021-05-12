import React, { Component } from "react"
import MovieContainer from "../containers/MovieContainer"
import QuoteContainer from "../containers/QuoteContainer"
// require("dotenv").config()

const API_KEY = process.env["API_KEY"]
const LOTR_URL = "https://the-one-api.dev/v2/"

class App extends Component {
  state = {
    movies: [],
    selectedMovieId: "",
    characters: [],
    quote: {},
  }
  componentDidMount() {
    this.setMovies()
    // this.setCharacters()
  }

  fetchData = (term, id, secondTerm) => {
    let fetchedUrl
    if (!!id && !!secondTerm) {
      fetchedUrl = `${LOTR_URL}${term}/${id}/${secondTerm}`
    } else {
      fetchedUrl = `${LOTR_URL}${term}`
    }
    return fetch(fetchedUrl, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }).then((res) => res.json())
  }

  setMovies = async () => {
    const movieData = await this.fetchData("movie")
    this.setState({ movies: movieData["docs"] })
  }

  setCharacters = async () => {
    const characterData = await this.fetchData("character")
    this.setState({ characters: characterData["docs"] })
  }

  selectMovie = async (event) => {
    console.log(event.target.id)
    // url/movie/id/quote first of the docs array
    const quoteData = await this.fetchData("movie", event.target.id, "quote")
    const firstQuote = quoteData["docs"][0]
    this.setState({ quote: firstQuote })
  }

  render() {
    const { movies, characters, quote } = this.state
    // const mappedMovies = this.state.movies.map((movieObj) => {
    //   re`${LOTR_URL}${term}/${id}/${secondTerm}`
    // })
    return (
      <div>
        <h1>Lord Of the Rangs</h1>
        {/* {mappedMovies} */}
        <MovieContainer
          movies={movies}
          fetchData={this.fetchData}
          selectMovie={this.selectMovie}
        />
        <br />
        <QuoteContainer quote={quote} />
      </div>
    )
  }
}

export default App
