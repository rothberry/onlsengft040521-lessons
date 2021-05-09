import React, { Component } from "react"
import Item from "./Item"
import { Form1, Form2 } from "./Form"
const sampleURL = "http://localhost:3001"

const initialTodos = [
  { title: "Laundry", author: "phil", id: 1 },
  { title: "Trash", author: "chauncy", id: 2 },
  { title: "The Dishes", author: "jill", id: 3 },
]

class List extends Component {
  state = {
    todos: initialTodos,
    count: initialTodos.length,
  }

  // addNewTodo(formData) { needs to bind
  addNewTodo = (formData) => {
    console.log("new todo: ", formData)
    // add our new todo to the state.todos
    const newTodo = {
      id: this.state.count + 1,
      title: formData.title,
      author: formData.author,
    }
    this.setState((prevState) => {
      return {
        count: ++prevState.count,
        todos: [...prevState.todos, newTodo],
      }
    })
  }

  postNewTodo = (formData) => {
    // Create or fix our formData obj to send to the DB
    const newTodo = {
      id: this.state.count + 1,
      title: formData.title,
      author: formData.author,
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
            count: ++prevState.count,
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
  }

  render() {
    // console.log("in render: ", this.state)
    // Loop over the todos and create listItems

    const { todos } = this.state
    const listItems = todos.map(({ id, title, author }) => {
      // return <li id={todo.id}>{todo.title}</li>
      // const { id, title } = todo
      return (
        <Item
          id={id}
          title={title}
          author={author}
          handleOnDelete={this.handleDelete}
        />
      )
    })

    return (
      <div>
        <Form1 addNewTodo={this.addNewTodo} />
        <ul className='list'>{listItems}</ul>
      </div>
    )
  }
}

export default List
