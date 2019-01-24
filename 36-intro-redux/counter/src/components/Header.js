import React from 'react';
import Store from '../store';
import logo from '../logo.svg';

const renderDescription = () => {
  let count = Store.getState().count;
  let message = null;
  if (count < 5) { message = "The count is below 5" }
  if (count >= 5 && count < 10) { message = "The count is between 5 and 10" }
  if (count >= 10) { message = "The count is greater than ten" }
  return message
}

class Header extends React.Component {
  componentDidMount() {
      Store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{renderDescription()}</p>
      </header>
    )    
  }
}

export default Header;
