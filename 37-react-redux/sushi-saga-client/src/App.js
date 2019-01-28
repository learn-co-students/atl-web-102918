import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    budget: 100,
    eaten: []
  }

  buySushi = (sushi) => {
    if(sushi.price <= this.state.budget) {
      this.setState({
        budget: this.state.budget - sushi.price,
        eaten: this.state.eaten.concat(sushi)
       })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} />
        <Table budget={this.state.budget} eaten={this.state.eaten} />
      </div>
    );
  }
}

let addBlue = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} color="blue" />
  }
}

// let addBlue = (WrappedComponent) => {
//   return class extends Component {
//     render() {
//       <WrappedComponent {...props} color="blue" />
//     }
//   }
// }

let blueApp = addBlue(App)

// state will always be the current value of store.getState()
let mapStateToProps = (state) => {
  return {
    reduxStuff: state.reduxSushi
  }
}

// connect is a function that _makes_ a Higher Order Component
// let withProps = connect(mapStateToProps)
// console.log(withProps)
// connect returns a HOC, that's what withProps is!
// i can call withProps with a component to get a new component.
// let extendedApp = withProps(App)
// console.log(extendedApp)

let extendedApp = connect(mapStateToProps)(App)

export default extendedApp;
