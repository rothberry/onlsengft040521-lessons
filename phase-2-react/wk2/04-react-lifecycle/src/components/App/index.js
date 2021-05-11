import React, { Component } from "react"
import "./style.css"
import Counter from "../Counter/"

const timeImage =
  "https://static.wikia.nocookie.net/bojackhorseman/images/3/37/A%2BWhat%2BTime%2BIs%2BIt%2BRight%2BNow_logo.png"

console.clear()
class App extends Component {
  // premount
  constructor() {
    super()
    this.state = {
      location: "Constructor",
      currentTime: new Date().toLocaleTimeString(),
      createBtn: false,
    }
    console.log("Constructor")
  }

  // static getDerivedStateFromProps() {
  //   console.log("Get Derived State")
  //   return {
  //     location: "Derived State",
  //   }
  // }

  componentDidMount() {
    console.log("App Mounted")
  }

  componentWillUnmount() {
    console.log("App UnMounted")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should Update", nextProps, nextState)
    return this.state !== nextState
  }

  getCurrentTime = () => {
    console.log("getCurrentTime")
    const currentTime = new Date().toLocaleTimeString()
    this.setState({
      ...this.state,
      currentTime,
    })
  }

  createTimeBtn = async () => {
    await this.setState((prevState) => {
      return {
        createBtn: !prevState.createBtn,
      }
    })
    if (this.state.createBtn) {
      return (
        <Counter
          getCurrentTime={this.getCurrentTime}
          currentTime={this.state.currentTime}
          timeImage={timeImage}
        />
      )
    }
  }

  render() {
    console.log("Rendered", this.state)
    const { location, currentTime, createBtn } = this.state
    return (
      <div className='app-div'>
        <h1>{location}</h1>
        <button onClick={this.createTimeBtn}>Create button</button>
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
