import React, { Component } from "react"
import Item from "./Item"
import Form from "./Form"

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

  addNewTodo = (formData) => {
    console.log("new todo: ", formData)
    // add our new todo to the state.todos
    const newTodo = {
      id: this.state.todos.length + 1,
      title: formData.title,
    }
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, newTodo],
      }
    })
  }

  postNewTodo = (formData) => {
    // Create or fix our formData obj to send to the DB
    const newTodo = {
      id: this.state.todos.length + 1,
      title: formData.title,
    }
    const postReqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer Token <API_KEY>",
      },
      body: JSON.stringify(newTodo),
    }
    // Send data to server/backend
    fetch(sampleURL, postReqObj)
      .then((res) => res.json())
      .then((backendData) => {
        this.setState((prevState) => {
          return {
            todos: [...prevState.todos, backendData],
          }
        })
      })
      .catch((err) => console.log(err))
  }

  handleDelete = (event) => {
    console.log("deleting", event.target)
    this.setState((prevState) => {
      const id = Number(event.target.parentElement.id)
      const newTodos = prevState.todos.filter((todo) => todo.id !== id)
      console.log("in setState: ", newTodos)
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

    return (
      <div>
        <Form addNewTodo={this.addNewTodo} />
        <ul className='list'>{listItems}</ul>
      </div>
    )
  }
}

export default List
