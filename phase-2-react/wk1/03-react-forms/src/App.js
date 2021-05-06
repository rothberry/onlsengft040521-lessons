import "./App.css"
import React, { Component } from "react"
import List from "./List"

class App extends Component {
  render() {
    return (
      <div className='app-div'>
        <h1>Todo List</h1>
        <List test={"testo"} />
      </div>
    )
  }
}

export default App
