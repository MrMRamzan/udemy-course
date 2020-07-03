import React from "react";

const cockpit = (props) => {
  const btnStyle = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '5px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }
  if (props.showPerson) {
    btnStyle.backgroundColor = 'red';
    btnStyle[':hover'] = {
      backgroundColor: 'lightred',
      color: 'black'
    }
  }
  return(
    <>
      <h1> React from Udemy</h1>
      <button
      style={btnStyle}
      onClick={props.toggle}>Update State</button>
    </>
    )
  }

export default cockpit;
