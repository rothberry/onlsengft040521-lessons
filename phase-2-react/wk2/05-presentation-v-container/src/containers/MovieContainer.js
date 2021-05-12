import React, { Component } from "react"
import Movie from "../components/Movie"

export default class MovieContainer extends Component {
  // state = {
  //   selectedMovieId: "",
  //   quote: {},
  // }

  // selectMovie = async (event) => {
  //   console.log(event.target.id)
  //   // url/movie/id/quote first of the docs array
  //   const quoteData = await this.props.fetchData(
  //     "movie",
  //     event.target.id,
  //     "quote"
  //   )
  //   const firstQuote = quoteData["docs"][0]
  //   this.setState({ quote: firstQuote })
  // }

  // fetchData = (term, id, secondTerm) => {
  //   let fetchedUrl
  //   if (!!id && !!secondTerm) {
  //     fetchedUrl = `${LOTR_URL}${term}/${id}/${secondTerm}`
  //   } else {
  //     fetchedUrl = `${LOTR_URL}${term}`
  //   }
  //   return fetch(fetchedUrl, {
  //     headers: {
  //       Authorization: `Bearer ${API_KEY}`,
  //     },
  //   }).then((res) => res.json())
  // }

  render() {
    const { movies, selectMovie } = this.props
    const mappedMovies = movies.map((movieObj) => {
      return <Movie movieObj={movieObj} selectMovie={selectMovie} />
    })
    return <div>{mappedMovies}</div>
  }
}
