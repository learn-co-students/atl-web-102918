import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import API from '../services/Backend';
import { loginSuccess } from '../actions';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(payload => {
      localStorage.setItem("token", payload.token)
      localStorage.setItem("name", payload.name)
      this.props.dispatch(loginSuccess(payload.name))
      this.props.history.push("/")
    })
  }

  render() {
    return (
      <form class="ui form" onSubmit={this.handleSubmit}>
        <div class="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })} />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        <button class="ui button" type="submit">Submit</button>
      </form>
    )
  }

}

export default connect()(Login);
