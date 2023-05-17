// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrementBtn = () => {
    const randomValue = this.getRandomNum()
    this.setState(prevState => ({count: prevState.count + randomValue}))
  }

  render() {
    const {count} = this.state
    const isEvenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">
            Count <span className="number">{count}</span>
          </h1>
          <p className="para">Count is {isEvenOrOdd}</p>
          <button
            className="btn-ele"
            type="button"
            onClick={this.onIncrementBtn}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
