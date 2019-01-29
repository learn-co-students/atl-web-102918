import React from 'react';

const DogDetail = (props) => {
  console.log(props)
  return (
    <div className={`ui card ${props.width} wide column`}>
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

export default DogDetail;
