import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import DogContainer from './components/DogContainer'
import AboutUs from './components/AboutUs'
import Login from './components/Login'

const App = (props) => {
  return (
    <div className="App ui container">
      <Navbar color="teal" icon="paw" />
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/" component={DogContainer} />
      </Switch>
    </div>
  )
}

export default App;
