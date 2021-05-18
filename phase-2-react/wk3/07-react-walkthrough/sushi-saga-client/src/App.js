import React, { Component } from "react"
import SushiContainer from "./containers/SushiContainer"
import Table from "./containers/Table"
import MoneyForm from './components/MoneyForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    startingIndex: 0,
    eaten: [],
    currentSushi: [],
    money: 100,
  }

  componentDidMount() {
    this.fetchSushis()
  }

  fetchSushis = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        const fourSushiArray = data.slice(0, 4)
        this.setState({
          currentSushi: fourSushiArray,
          sushis: data,
          startingIndex: this.state.startingIndex + 4,
        })
      })
  }

  moreSushi = (e) => {
    console.log("More Sush")
    const fourSushiArray = this.state.sushis.slice(
      this.state.startingIndex,
      this.state.startingIndex + 4
    )
    this.setState({
      currentSushi: fourSushiArray,
      startingIndex: this.state.startingIndex + 4,
    })
  }

  eat = (event) => {
    // add the clicked sushi to the eaten array
    const current = this.state.sushis.find((s) => s.id == event.target.id)
    if (!!current && current.price <= this.state.money) {
      this.setState({
        eaten: [...this.state.eaten, current],
        money: this.state.money - current.price
      })
    }
  }

  // BONUS
  addMoney = (e, amount) => {
    e.preventDefault()
    // ? Using the target amount
    if (!amount) {
      amount = parseInt(e.target[0].value)
    }

    // ? Using the amount from state as an argument
    this.setState({
      money: this.state.money + amount
    })
  }

  render() {
    // console.log(this.state.currentSushi)
    const { sushis, eaten, currentSushi, money } = this.state
    return (
      <div className='app'>
        {/* Pass down 4 sushis to the container */}
        <SushiContainer
          fourSushis={currentSushi}
          moreSushi={this.moreSushi}
          eat={this.eat}
          allSushis={sushis}
          eaten={eaten}
        />
        <Table eaten={eaten} money={money}/>
        <br />
        <MoneyForm addMoney={this.addMoney}/>
      </div>
    )
  }
}

export default App
