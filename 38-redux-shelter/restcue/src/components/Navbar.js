import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

const Navbar = (props) => {
    const menuClasses = `ui inverted ${props.color} menu`
    const iconClasses = `icon ${props.icon}`
    return (
      <div className={menuClasses}>
        <Link to="/" className="item">
          <h2 className="ui header">
            <i className={iconClasses}></i>
            <div className="content">RESTcue</div>
            <div className="sub header">A Shelter for only the best Doggos</div>
          </h2>
        </Link>
        <Link to="/about" className="item">
          About Us
        </Link>
        { props.user ?
          <a href="/" className="item" onClick={() => props.dispatch(logout())}>Logout</a> :
          <Link to="/login" className="item">
            Login
          </Link>
      }
      </div>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar);
