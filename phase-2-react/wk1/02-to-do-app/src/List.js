import React, { Component } from "react"
import Item from "./Item"

const initialTodos = [
  { title: "Laundry", id: 1 },
  { title: "Trash", id: 2 },
  { title: "The Dishes", id: 3 },
]

class List extends Component {
  // Add state to list
  // in our state, we will have a list of todos from our "database"

  // ? How do we get state into a class comp
  // constructor(props) {
  //   super(props) // brings in all the parent func
  //   this.state = { todos: initialTodos }
  // }

  state = {
    todos: initialTodos,
    count: 0,
    status: false,
  }

  handleDelete = (event) => {
    console.log("deleting", event.target)
    // if we update the state, the whole comp will rerender

    // this.setState is ASYNC similar to fetch
    this.setState((prevState) => {
      const id = Number(event.target.parentElement.id)
      // remove the todo with id
      const newTodos = prevState.todos.filter((todo) => todo.id !== id)
      console.log("in setState: ", newTodos)
      // actually setting the new state
      return {
        ...this.state,
        todos: newTodos,
      }
    })
    console.log("here!")
  }

  render() {
    console.log("in render: ", this.state)
    // Loop over the todos and create listItems

    const { todos } = this.state

    const listItems = todos.map(({ id, title }) => {
      // return <li id={todo.id}>{todo.title}</li>
      // const { id, title } = todo
      return <Item id={id} title={title} handleOnDelete={this.handleDelete} />
    })

    return <ul className='list'>{listItems}</ul>
  }
}

export default List
