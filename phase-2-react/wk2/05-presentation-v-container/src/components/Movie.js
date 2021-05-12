import React, { Component } from "react"

export default class Movie extends Component {
  render() {
    const { movieObj, selectMovie } = this.props
    const { name, _id } = movieObj
    return (
      <p id={_id} onClick={selectMovie}>
        {name}
      </p>
    )
  }
}
