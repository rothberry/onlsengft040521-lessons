import "./App.css"
import Login from "./Login"
import Signup from "./Signup"
import Profile from "./Profile"
import { Redirect, Route, Switch, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "./NavBar"

const App = () => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  let history = useHistory()

  // Component Did Mount
  useEffect(() => {
    findMe()
  }, [])

  useEffect(() => {
    console.log(user, loggedIn)
  }, [loggedIn])

  const findMe = () => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        console.log("me: ", data)
        if (!data.message) {
          setUser(data)
          setLoggedIn(true)
          history.push("/profile")
        }
        // .then((r) => {
        //   if (r.ok) {
        //     r.json().then((u) => {
        //       setLoggedIn(true)
        //       setUser(u)
        //     })
        //   }
        // })
      })
  }

  const handleLogout = (e) => {
    const delObj = {
      method: "DELETE",
    }
    fetch("/logout", delObj)
      .then((res) => res.json())
      .then(() => {
        setLoggedIn(false)
        setUser({})
        history.push("/login")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='App'>
      <NavBar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route exact path='/signup'>
          <Signup setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route exact path='/login'>
          <Login setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        {loggedIn ? (
          <Route exact path='/profile'>
            <Profile user={user} />
          </Route>
        ) : (
          <Redirect to='/login' />
        )}
      </Switch>
    </div>
  )
}

export default App
