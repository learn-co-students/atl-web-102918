import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    // let descFn = () => "A dog shelter"
    let desc = "A Shelter for only the best Doggos"
    return (
      <div className="App">
        <Navbar color="teal" icon="paw" title="RESTcue" description={desc} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
