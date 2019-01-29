import React from 'react';
import { Link } from 'react-router-dom';

import DogListItem from './DogListItem';
import { connect } from 'react-redux';

const DogList = (props) => {
  return (
    <div className={`six wide column`}>
      <div className="ui huge divided animated list">
        {props.dogs.map(x => <DogListItem key={x.id} id={x.id} />)}
        <span to="/dogs/new" className="item">
          <div className="content">
            <Link to="/dogs/new" className="header">
              <i className="plus circle icon teal"></i>
              New Dog
            </Link>
          </div>
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs
  }
}

const ReduxDogList = connect(mapStateToProps)(DogList)

export default ReduxDogList;
