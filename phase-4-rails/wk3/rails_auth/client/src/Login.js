import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

const RAILS_API = "http://localhost:3001/"

const Login = ({ setUser, setLoggedIn }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value)
    if (e.target.name === "password") setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // Send Login request to our backend
    const loginObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
    console.log(loginObj)
    fetch(RAILS_API + "login", loginObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!!data.id) {
          // set the current user to some higher state
          localStorage.setItem("user", data)
          setUser(data)
          setLoggedIn(true)
          history.push('/profile')
        } else {
          // display an error to the user
        }
      })
      .catch((err) => console.log(err))
  }

  // console.log(email, password)
  return (
    <div className='login-form'>
      <h1>Welcome Back!</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-4' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={handleChange}
            name='email'
            value={email}
          />
        </Form.Group>

        <Form.Group className='mb-4' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={handleChange}
            name='password'
            value={password}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
        <Link to='signup'>
          <Button variant='secondary'>Signup</Button>
        </Link>
      </Form>
    </div>
  )
}
export default Login
