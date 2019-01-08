import React from 'react';
import DogList from './DogList'
import DogDetail from './DogDetail'
import mockDogs from '../mock_data/dogs.js'

class DogContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      currentDog: mockDogs[0]
    }
  }

    render() {
      return (
        <div className="ui grid">
          <DogList width="six" />
          <DogDetail width="ten" dog={this.state.currentDog} />
        </div>
      )
    }
}

export default DogContainer;
