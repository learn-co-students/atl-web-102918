import React from 'react';
import DogList from './DogList'
import DogDetail from './DogDetail'

class DogContainer extends React.Component {

  state = {
      dogs: [],
      currentDogId: null
    }

  componentDidMount() {
    fetch("http://localhost:3000/dogs")
      .then(res => res.json())
      .then(json => this.setState({ dogs: json }))
  }

  selectDog = (id) => {
    this.setState({ currentDogId: id })
  }

  render = () => {
    let currentDog = this.state.dogs.find(dog => dog.id == this.state.currentDogId)
    return (
      <div className="ui grid container">
        <DogList width="six" dogs={this.state.dogs} selectDog={this.selectDog} />
        {currentDog ? <DogDetail width="ten" dog={currentDog} /> : null}
      </div>
    )
  }
}

export default DogContainer;
