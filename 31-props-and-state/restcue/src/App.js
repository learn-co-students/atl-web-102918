import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    // let descFn = () => "A dog shelter"
    let desc = "A Shelter for only the best Doggos"
    return (
      <div className="App">
        <Navbar color="teal" icon="paw" title="RESTcue" description={desc} />
      </div>
    );
  }
}

export default App;
