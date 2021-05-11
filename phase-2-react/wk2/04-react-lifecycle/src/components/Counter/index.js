import React, { Component } from "react"
import "./style.css"

class Counter extends Component {
  componentDidMount() {
    console.log("Mounting Counter")
  }

  componentWillUnmount() {
    console.log("UnMounting Counter")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Updating Counter")
    return this.props.currentTime !== nextProps.currentTime
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
