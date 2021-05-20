import React, { Component } from "react"

class Word extends Component {
  state = {
    word: "",
    definition: "",
    pronunciation: "",
  }

  componentDidMount() {
    this.fetchWord()
  }

  fetchWord = async () => {
    // const data = await this.fetchWord()
    console.log("fetchWord")
    fetch("https://random-words-api.vercel.app/word")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data: ", data)
        const w = data[0]
        this.setState(w)
        this.props.changeWord(w)
      })
  }

  render() {
    return (
      <div>
        {!!this.state.word ? (
          <div>
            <h1>Your word is {this.state.word}</h1>
            <h3>Definition: {this.state.definition}</h3>
            <h3>Pronunciation: {this.state.pronunciation}</h3>
            <button onClick={this.fetchWord}>Try a different Word</button>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <hr />
      </div>
    )
  }
}

export default Word
