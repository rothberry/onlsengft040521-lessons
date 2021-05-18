import React, { Component } from "react"

class MoneyForm extends Component {

  constructor() {
    super()
    this.state = {
      amount: 0
    }
    this.inputAmount = React.createRef()
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      amount: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={(event) => this.props.addMoney(event, this.state.amount)}> */}
        {/* <form onSubmit={(event) => this.props.addMoney(event, Number(this.inputAmount.current.value))}> */}
        <form onSubmit={this.props.addMoney}>
          <input name='amount' type='number' value={this.state.amount} onChange={this.handleChange} ref={this.inputAmount}/>
          <input name='submit' type='submit' value='Add Money' />
        </form>
      </div>
    )
  }
}

export default MoneyForm
