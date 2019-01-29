import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import API from '../services/Backend';
import DogList from './DogList'
import DogDetail from './DogDetail'
import DogForm from './DogForm'
import { connect } from 'react-redux';

class DogContainer extends React.Component {

  componentDidMount() {
    fetch(`${API}/dogs`)
      .then(res => res.json())
      .then(json => this.props.dispatch({ type: 'FETCHED_DOGS', dogs: json }))
  }

  render = () => {
    return (
      <div className="ui grid container">
        <DogList />
        <Switch>
          <Route path="/dogs/new" render={() => (
            localStorage.getItem("name") ? (
              <DogForm />
            ) : <Redirect to="/login" />
          )} />
          <Route path="/dogs/:id" component={DogDetail} />
        </Switch>
      </div>
    )
  }
}

// DogContainer won't re-render on redux state changes
// (Because there's no mapStateToProps, so its props never change)
// It does get access to store.dispatch() because of null mapDispatchToProps
DogContainer = connect(null, null)(DogContainer);

export default DogContainer;
