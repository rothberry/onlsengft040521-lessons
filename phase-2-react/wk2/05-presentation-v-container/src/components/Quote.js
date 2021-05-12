import React, { Component } from "react"

export default class Quote extends Component {
  render() {
    const { quoteObj } = this.props
    return <h3>{quoteObj.dialog}</h3>
  }
}
