import React from 'react';

const person = ( props ) => {
  return (
    <div>
      <p>here is {props.name} of age {props.age} year's old</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;