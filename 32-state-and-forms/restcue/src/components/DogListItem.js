import React from 'react';

const DogListItem = (props) => {
  console.log("dog list item", props)
  let clickHandler = (event) => {
    props.selectDog(props.dog.id)
  }
  return (
    <div className="item" onClick={clickHandler}>
      <img className="ui avatar image" src={props.dog.image_url} />
      <div className="content">
        <a className="header">{props.dog.name}</a>
      </div>
    </div>
  )
}

export default DogListItem;
