import React, { Component } from 'react'
import Painting from '../components/Painting'

export default class PaintingContainer extends Component {

  render() {
    const mappedPaintings = paintings.map(painting => {
      return (
        <Painting painting={painting} />
      )
    })
    return (
      <div className="painting-container">
        {mappedPaintings}
      </div>
    )
  }
}
