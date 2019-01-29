import React from 'react';
import { connect } from 'react-redux';
import { addDog } from '../actions';

class DogForm extends React.Component {

  state = {
    errors: "",
    image_url: "",
    name: "",
    age: "",
    description: "",
    likes: 1,
    adopted: false
  }

  saveDog = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(dog => {
      if (dog.errors === undefined) {
        this.setState({ errors: "" })
        this.props.dispatch(addDog(dog))
      } else {
        this.setState({ errors: dog.errors })
      }
    })
  }

  render = () =>
    <form class="ui form" onSubmit={this.saveDog}>
    { this.state.errors ?
      <div class="ui negative message">
        <div class="header">
          We couldn't save your data.
        </div>
        <p>{this.state.errors}</p>
      </div> :
      null
    }
      <div class="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Name"
          onChange={(e) => this.setState({ name: e.target.value })} />
      </div>
      <div class="field">
        <label>Image URL</label>
        <input type="text" name="image_url" placeholder="Image URL"
          onChange={(e) => this.setState({ image_url: e.target.value })} />
      </div>
      <div class="field">
        <label>Likes</label>
        <input type="number" name="likes" placeholder="1"
          onChange={(e) => this.setState({ likes: e.target.value })} />
      </div>
      <button class="ui button" type="submit">Submit</button>

    </form>
}

export default connect()(DogForm);
