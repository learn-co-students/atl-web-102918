import React from 'react';
import DogList from './DogList'
import DogDetail from './DogDetail'
import DogForm from './DogForm'

class DogContainer extends React.Component {

  state = {
      showForm: false,
      dogs: [],
      currentDogId: null
    }

  componentDidMount() {
    fetch("http://localhost:3000/dogs")
      .then(res => res.json())
      .then(json => this.setState({ dogs: json }))
  }

  showForm = () => {
    this.setState({ showForm: true })
  }

  selectDog = (id) => {
    this.setState({ showForm: false, currentDogId: id })
  }

  rightPane = () => {
    if (this.state.showForm) {
      return <DogForm />
    } else if (this.state.currentDogId) {
      let currentDog = this.state.dogs.find(dog => dog.id == this.state.currentDogId)
      return <DogDetail width="ten" dog={currentDog} />
    } else {
      return null
    }
  }

  render = () => {
    return (
      <div className="ui grid container">
        <DogList
          width="six"
          dogs={this.state.dogs}
          selectDog={this.selectDog}
          toggleForm={this.showForm}
        />
        {this.rightPane()}
      </div>
    )
  }
}

export default DogContainer;
