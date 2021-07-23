import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({ loggedIn, handleLogout }) => {
  if (loggedIn) {
    return (
      <div className='nav-bar'>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className='nav-bar'>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    )
  }
}

export default NavBar
