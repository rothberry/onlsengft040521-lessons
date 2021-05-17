// TODO Control where all the props/state need to be directed through
import React, { Component } from "react"

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
  render() {
    return (
      <div className='App'>
        Create your coffee app here!
        {/* Bring in the Container and Form */}
      </div>
    )
  }
}

export default App