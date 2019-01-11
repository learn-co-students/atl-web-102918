import React from 'react'

let example = 42

const Side = (props) => {
  return (
    <div>
      { props.sides.join(", ") }
    </div>
  )
}

export default Side
// if you do export default, on the other side just import Side
// if you do export { example, Side}, then on the other side...

// export default class Foo extends React.Component { }
//  import { example } from './Side'
//  import { Side } from './Side'
//  import { example, Side } from './Side'
//  import { Side as cookies } from './Side'
//  import * from './Side'
