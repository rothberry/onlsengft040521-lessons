import React, { Component } from "react"

// class Form extends Component {
//   // Solution 1: React.createRef()
//   constructor(props) {
//     super(props)
//     this.inputTodo = React.createRef()
//   }

//   handleInput = (e) => {
//     e.preventDefault()
//     console.log("inputTodo: ", this.inputTodo.current.value)
//   }

//   render() {
//     // onSubmit => form.addEventListener("submit", func)
//     return (
//       <form onSubmit={this.handleInput}>
//         <label>New Todo: </label>
//         <input type='text' name='new-todo' ref={this.inputTodo} />
//         <input type='submit' value='New Todo' />
//         {/* <input type='submit' value='New Todo' onClick={this.handleInput} /> */}
//       </form>
//     )
//   }
// }

class Form extends Component {
  // Solution 2: use the state of the component

  state = {
    title: "",
    author: "",
  }

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
      [e.target.name]: e.target.value,
    })
  }

  render() {
    // console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>New Todo: </label>
        <input
          type='text'
          name='title'
          placeholder="Write your note"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='author'
          placeholder="Who are you?"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <input type='submit' value='New Todo' />
      </form>
    )
  }
}

export default Form
