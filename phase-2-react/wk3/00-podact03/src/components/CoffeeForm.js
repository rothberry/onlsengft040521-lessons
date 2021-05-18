// TODO Use this component to create a form to add a new coffee to our state
import React, { Component } from "react"

class CoffeeForm extends Component {
  state = {
    name: "",
    size: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCoffee(this.state)
    this.setState({
      name: "",
      size: "",
    })
  }

  render() {
    return (
      <form className='coffee-form' onSubmit={this.handleSubmit}>
        {/* Input Name */}
        <input
          type='text'
          name='name'
          placeholder='Name of Your Coffee'
          onChange={this.handleChange}
          value={this.state.name}
        />
        {/* Input Size */}
        <input
          type='text'
          name='size'
          placeholder='How much coffee?'
          onChange={this.handleChange}
          value={this.state.size}
        />
        <input type='submit' value='Add your coffee' />
      </form>
    )
  }
}

export default CoffeeForm
