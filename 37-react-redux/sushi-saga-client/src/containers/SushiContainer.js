import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux';

class SushiContainer extends Component {
  state = {
    offset: 0
  }

  nextOffset = () => {
    this.setState({ offset: this.state.offset + 4 })
  }
  render(){
    let shownSushi = this.props.allSushi.slice(this.state.offset, this.state.offset + 4)

    return (
      <div className="belt">
        {shownSushi.map(x => <Sushi id={x.id} key={x.id} />)}
        <MoreButton increaseOffset={this.nextOffset} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    allSushi: state.sushi
  }
}

let ConnectedSushiContainer = connect(mapStateToProps)(SushiContainer)

export default ConnectedSushiContainer;
