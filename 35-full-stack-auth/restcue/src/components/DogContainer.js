import React from 'react';
import { Switch, Route } from 'react-router-dom'

import API from '../services/Backend';
import DogList from './DogList'
import DogDetail from './DogDetail'
import DogForm from './DogForm'

class DogContainer extends React.Component {

  state = {
      dogs: []
    }

  componentDidMount() {
    fetch(`${API}/dogs`)
      .then(res => res.json())
      .then(json => this.setState({ dogs: json }))
  }

  addDog = (dog) => {
    let newDogs = this.state.dogs.concat(dog)
    this.setState({ dogs: newDogs })
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
        <Switch>
          <Route path="/dogs/new" render={() => {
            return <DogForm addDog={this.addDog} />
          }} />
          <Route path="/dogs/:id" render={({ match }) => {
            let dogId = parseInt(match.params.id)
            let dog = this.state.dogs.find(dog => dog.id === dogId)
            return dog ? <DogDetail width="ten" dog={dog} /> : null;
          }} />
        </Switch>
      </div>
    )
  }
}

export default DogContainer;
