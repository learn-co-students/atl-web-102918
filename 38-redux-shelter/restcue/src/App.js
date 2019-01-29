import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import DogContainer from './components/DogContainer'
import AboutUs from './components/AboutUs'
import Login from './components/Login'

class App extends Component {

  state = {
    user: localStorage.getItem("name")
  }

  updateUser = (user) => {
    this.setState({ user: user })
  }

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }

  render() {
    // let descFn = () => "A dog shelter"
    let desc = "A Shelter for only the best Doggos"
    return (
      <div className="App ui container">
        <Navbar user={this.state.user} logout={this.logout} color="teal" icon="paw" title="RESTcue" description={desc} />
        <Switch>
          <Route path="/about" component={AboutUs} />
          <Route path="/login" render={() => {
              return <Login updateUser={this.updateUser} />
          }} />
          <Route path="/" component={DogContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
