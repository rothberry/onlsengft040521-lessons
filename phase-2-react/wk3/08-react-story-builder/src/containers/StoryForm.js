import React, { Component } from "react"
import Word from "./Word"

export default class StoryForm extends Component {
  state = {
    title: "",
    summary: "",
    body: "",
    word: "",
    definition: "",
    pronunciation: "",
  }

  changeWord = ({word, definition, pronunciation}) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        word,
        definition,
        pronunciation,
      }
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const postReqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch("http://localhost:3001/stories", postReqObj)
    .then(res => res.json())
    .then(data => {
      alert(`Created a new story ${data.title}`)
      // React Router history.push navigates the that new url
      // either go to the newly created story?
      console.log(this.props)
      this.props.addStory(data)
      this.props.history.push("/stories/" + data.id)
      // go to the storyIndex (container)
      // this.props.history.push("/stories")
    })
  }

  render() {
    return (
      <div>
        <Word changeWord={this.changeWord} />
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label><br />
          <input name="title" onChange={this.handleChange} value={this.state.title} type="text" />
          <br />
          <label>Summary: </label><br />
          <input name="summary" onChange={this.handleChange} value={this.state.summary} type="text" />
          <br />
          <label>Body: </label><br />
          <textarea name="body" onChange={this.handleChange} value={this.state.body} type="textarea" />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
