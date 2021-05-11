import React, { Component } from "react"
import "./style.css"

class Counter extends Component {
  componentDidMount() {
    console.log("Counter Mounted")
  }

  componentWillUnmount() {
    console.log("Counter UnMounted")
  }

  render() {
    const { getCurrentTime, currentTime, timeImage } = this.props
    return (
      <div>
        <button className='time-btn' onClick={getCurrentTime}>
          <img src={timeImage} alt='nupe' />
        </button>
        <div className='time'>
          {!!currentTime ? currentTime : "There is no time"}
        </div>
      </div>
    )
  }
}

export default Counter
