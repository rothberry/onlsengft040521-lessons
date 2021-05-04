import React, { Component } from "react"

// Class needs a this.props
class MyDiv extends Component {
  render() {
    console.log(this.props)
    const { name, isCool } = this.props
    return <li>It's {name}!</li>
  }
}

// const MyDiv = (props) => {
//   console.log(props)
//   return <li>It's {props.name}!</li>
// }

export default MyDiv
