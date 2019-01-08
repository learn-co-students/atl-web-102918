import React from 'react';
import DogList from './DogList'
import DogDetail from './DogDetail'

const DogContainer = (props) => {
  return (
    <div className="ui grid">
      <DogList width="six" />
      <DogDetail width="ten" />
    </div>
  )
}

export default DogContainer;
