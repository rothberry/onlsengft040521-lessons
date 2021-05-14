import React, { useState, useEffect } from "react"
import "./style.css"
import Counter from "../Counter"

const timeImage =
  "https://static.wikia.nocookie.net/bojackhorseman/images/3/37/A%2BWhat%2BTime%2BIs%2BIt%2BRight%2BNow_logo.png"
const url = "https://pokeapi.co/api/v2/"
console.clear()

const AppHook = () => {
  // premount
  // constructor() {
  //   super()
  //   this.state = {
  //     location: "Constructor!",
  //     currentTime: "",
  //     createBtn: false,
  //     poke: {},
  //     count: 0,
  //   }
  //   console.log("Constructor App")
  // }
  const [location, setLocation] = useState("UsingHooks")
  const [currentTime, setCurrentTime] = useState("")
  const [createBtn, setCreateBtn] = useState(false)
  const [poke, setPoke] = useState([])

  const fetchPoke = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // this.setState({ poke: data })
        setPoke(data)
      })
  }

  // componentDidMount()
  useEffect(() => {
    console.log("Mounted App")
    fetchPoke()
  }, [])

  useEffect(() => {
    console.log("Changing Poke")
  }, [location])

  useEffect(() => {
    console.log("Any change")
  })

  // if the state changes, then it triggers a rerender automatically
  const createTimeBtn = () => {
    // this.setState((prevState) => {
    //   return {
    //     createBtn: !prevState.createBtn,
    //   }
    // })
    setCreateBtn(!createBtn)
  }

  const getCurrentTime = () => {
    console.log("Getting Time")
    const current = new Date().toLocaleTimeString()
    // this.setState({ current })
    setCurrentTime(current)
  }
  // console.log(poke)
  return (
    <div className='app-div'>
      <h1>{location}</h1>
      <button className='btn' onClick={createTimeBtn}>
        Toggle Time
      </button>
      {!!createBtn ? (
        <Counter
          getCurrentTime={getCurrentTime}
          currentTime={currentTime}
          timeImage={timeImage}
        />
      ) : null}
    </div>
  )
}

export default AppHook
