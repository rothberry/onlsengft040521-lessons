import React, { Component } from "react"
import "./style.css"
import Counter from "../Counter"

const timeImage =
  "https://static.wikia.nocookie.net/bojackhorseman/images/3/37/A%2BWhat%2BTime%2BIs%2BIt%2BRight%2BNow_logo.png"
const url = "https://pokeapi.co/api/v2/"
console.clear()
class App extends Component {
  // premount
  constructor() {
    super()
    this.state = {
      location: "Constructor!",
      currentTime: "",
      createBtn: false,
      poke: {},
    }
    console.log("Constructor App")
  }

  fetchPoke = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ poke: data })
      })
  }
  // static getDerivedStateFromProps() {
  //   console.log("Derived State App")
  //   return null
  //   return {
  //     location: "Derived",
  //   }
  // }

  componentDidMount() {
    console.log("Mounted App")
    // this.fetchPoke()
    setTimeout(this.timer, 3000)
  }

  timer = () => {
    this.setState({ location: "NUUUUPE" })
  }

  // if the state changes, then it triggers a rerender automatically
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Updating App")
    return this.state !== nextState
  }

  createTimeBtn = () => {
    this.setState((prevState) => {
      return {
        createBtn: !prevState.createBtn,
      }
    })
  }
  getCurrentTime = () => {
    console.log("Getting Time")
    const currentTime = new Date().toLocaleTimeString()
    this.setState({ currentTime })
  }

  render() {
    console.log("Rendered App", this.state)
    const { location, currentTime, createBtn } = this.state
    return (
      <div className='app-div'>
        <h1>{location}</h1>
        <button className='btn' onClick={this.createTimeBtn}>
          Toggle Time
        </button>
        {!!createBtn ? (
          <Counter
            getCurrentTime={this.getCurrentTime}
            currentTime={currentTime}
            timeImage={timeImage}
          />
        ) : null}
      </div>
    )
  }
}

export default App
