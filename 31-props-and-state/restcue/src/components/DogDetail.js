import React from 'react';

const DogDetail = (props) => {
  return (
    <div className={`${props.width} wide column`}>
      <div class="ui card">
        <div class="image">
          <img src={props.dog.imageUrl} />
        </div>
        <div class="content">
          <a class="header">{props.dog.name}</a>
          <div class="meta">
            <span class="date">{props.dog.age}</span>
          </div>
          <div class="description">
            {props.dog.description}
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            {props.dog.likes}
          </a>
        </div>
      </div>
    </div>
  )
}

export default DogDetail;
