import React from 'react';
import { connect } from 'react-redux';

const DogDetail = (props) => {
  return (
    <div className={`ui card ten wide column`}>
      <div className="image">
        <img alt="A magnificent doggo" src={props.dog.image_url} />
      </div>
      <div className="content">
        <a className="header">{props.dog.name}</a>
        <div className="meta">
          <span className="date">{props.dog.age}</span>
        </div>
        <div className="description">
          {props.dog.description}
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          {props.dog.likes}
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const dogId = parseInt(ownProps.match.params.id)
  const dog = state.dogs.find(x => x.id === dogId)
  return { dog: dog }
}

export default connect(mapStateToProps)(DogDetail);
