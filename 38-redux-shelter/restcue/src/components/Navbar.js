import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const menuClasses = `ui inverted ${props.color} menu`
    const iconClasses = `icon ${props.icon}`
    return (
      <div className={menuClasses}>
        <Link to="/" className="item">
          <h2 className="ui header">
            <i className={iconClasses}></i>
            <div className="content">{props.title}</div>
            <div className="sub header">{props.description}</div>
          </h2>
        </Link>
        <Link to="/about" className="item">
          About Us
        </Link>
        { props.user ?
          <a href="/" className="item" onClick={props.logout}>Logout</a> :
          <Link to="/login" className="item">
            Login
          </Link>
      }
      </div>
  )
}

export default Navbar;
