import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button Has been clicked <br />
          <span className="counter-value">{count}</span>times
        </h1>
        <p className="para">click the button increase the count</p>
        <div className="button-cont">
          <button className="button" type="button" onClick={this.onIncrement}>
            Click me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
