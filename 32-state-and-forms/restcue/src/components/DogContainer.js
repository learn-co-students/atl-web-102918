import React from 'react';
import DogList from './DogList'
import DogDetail from './DogDetail'
import mockDogs from '../mock_data/dogs.js'

class DogContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      dogs: mockDogs,
      currentDogId: 1
    }
  }

  // a method that takes an Id and sets the currentDogId to that value
  selectDog(id) {
    this.setState({ currentDogId: parseInt(id) })
  }

  render() {
    let currentDog = this.state.dogs.find(dog => dog.id == this.state.currentDogId)
    return (
      <div className="ui grid container">
        <DogList width="six" dogs={this.state.dogs} selectDog={(id) => this.selectDog(id)} />
        <DogDetail width="ten" dog={currentDog} />
      </div>
    )
  }
}

export default DogContainer;
