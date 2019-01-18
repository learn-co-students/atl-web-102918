import React from 'react';
import { Link } from 'react-router-dom';

import DogListItem from './DogListItem';

const DogList = (props) => {
  return (
    <div className={`${props.width} wide column`}>
      <div className="ui huge divided animated list">
        {props.dogs.map(x => <DogListItem key={x.id} dog={x} selectDog={props.selectDog} />)}
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

export default DogList;
