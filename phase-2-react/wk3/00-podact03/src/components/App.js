// TODO Control where all the props/state need to be directed through
import React, { Component } from "react"
import CoffeeContainer from "../containers/CoffeeContainer"
import CoffeeForm from "./CoffeeForm"

const initialCoffees = [
  {
    name: "Costa Rican",
    size: "12 oz",
  },
  {
    name: "Blueberry Crumble Cake",
    size: "8 oz",
  },
  {
    name: "Guatemalan",
    size: "24 oz",
  },
]

class App extends Component {
  state = {
    coffees: initialCoffees,
  }

  addCoffee = (coffeeObj) => {
    this.setState((prevState) => {
      return {
        coffees: [...prevState.coffees, coffeeObj],
      }
    })
  }

  render() {
    const { coffees } = this.state
    return (
      <div className='App'>
        COFOFFEEE
        {/* Bring in the Container and Form */}
        <CoffeeForm addCoffee={this.addCoffee} />
        <br />
        <CoffeeContainer coffees={coffees} />
      </div>
    )
  }
}

export default App
