import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Sushi = (props) => {
  let eaten = props.eaten.find(x => x.id === props.piece.id)
  return (
    <div className="sushi">
      <div className="plate"
           onClick={ (e) => props.eatSushi(props.piece) }>
        {
          !eaten &&  <img src={props.piece.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.piece.name} - ${props.piece.price}
      </h4>
    </div>
  )
}

let mapStateToProps = (state, ownProps) => {
  let sushiPiece = state.sushi.find(x => x.id === ownProps.id)
  return {
    piece: sushiPiece,
    eaten: state.eaten
  }
}

let mapDispatchToProps = (dispatch) => {
  return  {
    eatSushi: (sushi) => {
      dispatch({ type: 'EAT_SUSHI', sushi: sushi })
    }
  }
}

let ConnectedSushi = connect(mapStateToProps, mapDispatchToProps)(Sushi)

export default ConnectedSushi
