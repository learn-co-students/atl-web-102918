import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DogListItem = (props) => {
  return (
    <Link to={`/dogs/${props.dog.id}`} className="item">
      <img className="ui avatar image" alt="A magnificent doggo" src={props.dog.image_url} />
      <div className="content">
        <a className="header">{props.dog.name}</a>
      </div>
    </Link>
  )
}

// ownProps are the props from a parent node
const mapStateToProps = (state, ownProps) => {
  let dog = state.dogs.find(x => x.id === ownProps.id)
  return { dog: dog }
}

export default connect(mapStateToProps)(DogListItem);
