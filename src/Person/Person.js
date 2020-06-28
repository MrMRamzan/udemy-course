import React from 'react';

const person = ( props ) => {
  return (
    <div>
      <p onClick={props.click}>here is {props.name} of age {props.age} year's old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;