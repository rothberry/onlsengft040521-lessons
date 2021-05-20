import React from "react"
import { NavLink } from "react-router-dom"

const styleLink = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

const Nav = () => {
  return (
    <div>
      {/* Add NavLink to Home */}
      <NavLink
        to='/'
        exact
        style={styleLink}
        activeStyle={{ background: "darkblue" }}
      >
        Home
      </NavLink>
      {/* Add NavLink to Stories */}
      <NavLink
        to='/stories'
        exact
        style={styleLink}
        activeStyle={{ background: "darkblue" }}
      >
        Stories
      </NavLink>
      <NavLink
        to='/stories/new'
        exact
        style={styleLink}
        activeStyle={{ background: "darkblue" }}
      >
        New Story
      </NavLink>

    </div>
  )
}

export default Nav
