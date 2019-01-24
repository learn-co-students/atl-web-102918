import React from 'react';
import Store from '../store';

const increment = () => {
  Store.dispatch({ type: 'ADD_ONE' })
}

const decrement = () => {
  Store.dispatch({ type: 'SUB_ONE' })
}

class Counter extends React.Component {
  componentDidMount() {
    Store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="Counter">
        <h1>Count: {Store.getState().count}</h1>
        <button onClick={decrement}> - </button>
        <button onClick={increment}> + </button>
      </div>
    )
  }
}

export default Counter;
