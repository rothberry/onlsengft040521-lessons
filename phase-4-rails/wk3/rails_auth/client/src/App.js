import "./App.css"
import Login from "./Login"
import Signup from "./Signup"
import Profile from "./Profile"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { useState, useEffect } from "react"

const App = () => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(true)

  // Component Mounting
  useEffect(() => {
    // send a fetch to our user#show to see if there is a user in the session
    // save our session/cookies/token to our localStorage
    if (!!localStorage.user) {
      setUser(localStorage.user)
      setLoggedIn(true)
    }
  }, [])

  const handleLogout = (e) => {
    const delObj = {
      method: "DELETE",
    }
    fetch("http://localhost:3001/logout", delObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setLoggedIn(false)
        setUser({})
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='App'>
      <BrowserRouter>
        {loggedIn ? <button onClick={handleLogout}>Logout</button> : null}
        <Switch>
          {/* <Route exact path='/login' component={Login} /> */}
          <Route
            exact
            path='/login'
            render={(routeProps) => (
              <Login setUser={setUser} setLoggedIn={setLoggedIn} />
            )}
          />
          <Route exact path='/signup' component={Signup} />
          {loggedIn ? (
            <Route path='/profile' component={Profile} />
          ) : (
            <Redirect to='/login' component={Login} />
          )}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
