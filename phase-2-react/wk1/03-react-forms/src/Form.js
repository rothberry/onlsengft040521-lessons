import React, { Component } from "react"

export class Form1 extends Component {
  // Solution 1: React.createRef()
  constructor(props) {
    super(props)
    this.inputTitle = React.createRef()
    this.inputAuthor = React.createRef()
  }
  // const inputTitle = useRef("")

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log("inputTitle: ", this.inputTitle.current.value)
    // console.log("inputAuthor: ", this.inputAuthor.current.value)
    this.props.addNewTodo({
      title: this.inputTitle.current.value,
      author: this.inputAuthor.current.value,
    })
  }

  render() {
    // onSubmit => form.addEventListener("submit", func)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>New Todo: </label>
        <input
          type='text'
          name='title'
          placeholder='Write your note'
          ref={this.inputTitle}
        />
        <input
          type='text'
          name='author'
          placeholder='Who are you?'
          ref={this.inputAuthor}
        />
        <input type='submit' value='New Todo' />
        {/* <input type='submit' value='New Todo' onClick={this.handleInput} /> */}
      </form>
    )
  }
}

export class Form2 extends Component {
  // Solution 2: use the state of the component

  state = {
    title: "asf",
    author: "asd",
  }

  // styling = () => {
  //   return {
  //     backgroundColor: "blue",
  //     padding: "5%",
  //   }
  // }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewTodo(this.state)
    // fetch(url, postObj)
  }

  handleChange = (e) => {
    // we want to update the state with whatever changed
    // this.state.title = e.target // ?
    this.setState({
      // ...this.state,
      // title: e.target.value,
      // author: e.target.value,
      [e.target.name]: e.target.value,
    })
  }

  render() {
    // console.log(this.state)
    const styling = {
      backgroundColor: "grey",
      padding: "1%",
    }
    return (
      <form onSubmit={this.handleSubmit} style={styling}>
        <label for='title'>New Todo: </label>
        <input
          type='text'
          name='title'
          placeholder='Write your note'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='author'
          placeholder='Who are you?'
          value={this.state.author}
          onChange={this.handleChange}
        />
        <input type='submit' value='New Todo' />
      </form>
    )
  }
}
