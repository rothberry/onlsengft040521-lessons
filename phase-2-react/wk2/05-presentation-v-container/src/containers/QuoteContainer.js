import React, { Component } from "react"
import Quote from "../components/Quote"

export default class QuoteContainer extends Component {
  render() {
    const { quote } = this.props
    return (
      <div>
        <h1>Quotes</h1>
        <Quote quoteObj={quote} />
      </div>
    )
  }
}
