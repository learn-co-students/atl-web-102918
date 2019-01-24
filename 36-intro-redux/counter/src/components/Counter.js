import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })

  render() {
    return (
      <div className="Counter">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    )
  }
}

export default Counter;
