import React from 'react';
import DogListItem from './DogListItem';

const DogList = (props) => {
  console.log("dog list", props)
  return (
    <div className={`${props.width} wide column`}>
      <div className="ui huge divided animated list">
        {props.dogs.map(x => <DogListItem dog={x} selectDog={props.selectDog} />)}
      </div>
    </div>
  )
}

export default DogList;
