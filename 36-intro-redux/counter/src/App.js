import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Store from './store';

console.log(Store)
// console.log(Store.getState())

// Store.dispatch({ type: 'ADD_ONE' })
/*
Brit's imagination of the inside of dispatch:
  let state = this.getState()
  let newState = this.reducer(state, action)
  this.swapState(newState)
*/

console.log(Store.getState())

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
