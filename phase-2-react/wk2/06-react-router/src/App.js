import "./App.css"
import React, { Component } from "react"
import Home from "./components/Home"
import Coffee from "./components/Coffee"
import Painting from "./components/Painting"
import NavBar from "./components/NavBar"
import { Route, Switch } from "react-router-dom"

import paintingsData from "./paintings.json"

const navArray = [
  {
    icon: "home",
    link: "",
    title: "Home",
    isActive: false,
  },
  {
    icon: "paint brush",
    link: "paintings",
    title: "Paintings",
    isActive: false,
  },
  {
    icon: "coffee",
    link: "coffee",
    title: "Coffee",
    isActive: false,
  },
]

class App extends Component {
  state = {
    navArray,
  }

  setActive = (e) => {
    const navTest = e.target.innerText
      ? e.target.innerText
      : e.target.parentElement.innerText.split("\t")[1]
    // console.log(navTest)

    this.setState((prevState) => {
      const newNavArray = prevState.navArray.map((navObj) => {
        navObj.isActive = navObj.title === navTest
        return navObj
      })
      return {
        navArray: newNavArray,
      }
    })
  }

  pickPageWithoutRouter = () => {
    // Find the active tab
    const activeTab = this.state.navArray.find((item) => item.isActive)
    if (!!activeTab) {
      switch (activeTab.title) {
        case "Home":
          return <Home />
        case "Paintings":
          return <Painting />
        case "Coffee":
          return <Coffee />
        default:
          return
      }
    }
  }

  render() {
    const { navArray } = this.state
    return (
      <>
        <NavBar navArray={navArray} setActive={this.setActive} color={"teal"} />
        {/* <div className='App'>{this.pickPageWithoutRouter()}</div> */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/paintings'>
            <Painting />
          </Route>
          <Route path='/coffee'>
            <Coffee />
          </Route>
        </Switch>
      </>
    )
  }
}

export default App
