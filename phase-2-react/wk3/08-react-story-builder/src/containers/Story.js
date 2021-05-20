/* eslint-disable */
import React, { Component } from "react"

export class Story extends Component {
  state = {
    story: {
      title: "",
      summary: "",
      body: "",
      word: "",
      definition: "",
      pronunciation: "",
    },
  }

  componentDidMount() {
    // fetch data for that story
    // Use the react router, to grab the id from the url
    this.findWord()
  }

  findWord = () => {
    const wordID = this.props.match.params.id
    fetch("http://localhost:3001/stories/" + wordID)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ story: data })
      })
  }

  render() {
    const { story: { title, summary, body, word, definition, pronunciation} } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <h1>Your word is {word}</h1>
        <span>{summary}</span>
        <hr />
        <p>{body}</p>
        <hr />
      </div>
    )
  }
}


export class Story2 extends Component {
  
  render() {
    // Find story by using the id, and the state of the app
    debugger
    const wordID = this.props.match.params.id
    const findStory = this.props.stories.find( s => s.id == wordID)
    const { story: { title, summary, body, word, definition, pronunciation} } = findStory
    return (
      <div>
        <h1>Your word is {word}</h1>
        <h3>Definition: {definition}</h3>
        <h3>Pronunciation: {pronunciation}</h3>
        <hr />
        <h4>{title}</h4>
        <span>{summary}</span>
        <p>{body}</p>
        <hr />
      </div>
    )

  }
}
