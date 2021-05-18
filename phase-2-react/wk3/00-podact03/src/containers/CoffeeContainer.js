// TODO map all your coffee components here
import React, { Component } from 'react'
import Coffee from '../components/Coffee'

class CoffeeContainer extends Component {
  render() {
    const {coffees} = this.props
    const mappedCoffees = coffees.map(coffee => <Coffee coffee={coffee}/>)
    return (
      <ul className="coffee-container">
        {mappedCoffees}
      </ul>
    )
  }
}

export default CoffeeContainer