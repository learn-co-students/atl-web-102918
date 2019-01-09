import React from 'react';
import DogListItem from './DogListItem';

const DogList = (props) => {
  console.log("dog list", props)
  // TODO: add click handler for the new dog item
  return (
    <div className={`${props.width} wide column`}>
      <div className="ui huge divided animated list">
        {props.dogs.map(x => <DogListItem dog={x} selectDog={props.selectDog} />)}
        <div className="item" onClick={props.toggleForm}>
          <div className="content">
            <a class="header">
              <i class="plus circle icon teal"></i>
              New Dog
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogList;
