import "./App.css"
import Login from "./Login"
import Signup from "./Signup"
import Profile from "./Profile"
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom"
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
  })

  const findMe = () => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((u) => {
          setLoggedIn(true)
          setUser(u)
        })
      }
    })
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data)
    //   if (!data.message) {
    //     setUser(data)
    //     setLoggedIn(true)
    //     history.push("/profile")
    //   }
    // })
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
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} handleLogout={handleLogout} />
        <Switch>
          <Route exact path='/signup'>
            <Signup setLoggedIn={setLoggedIn} setUser={setUser} />
          </Route>
          <Route exact path='/login'>
            <Login setLoggedIn={setLoggedIn} setUser={setUser} />
          </Route>
          <Route exact path='/profile'>
            <Profile user={user} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
