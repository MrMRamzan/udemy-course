import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    Person: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Me', age: 23}
    ],
    otherState: 'Other state',
    showPerson: false 
  }

  switchNameHandler = (newName) => {
    this.setState({
      Person: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Me', age: 23}
      ],
      otherState: 'Other state' 
    })
  }

  nameChangeHandler = (e) => {
    this.setState({
      Person: [
        {name: 'Manu', age: 28},
        {name: e.target.value, age: 29},
        {name: 'Me', age: 23}
      ],
      otherState: 'Other state'
    })
  }
  togglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }
  render () {
    // inline styling 
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '5px',
      cursor: 'pointer'
    }

    let persons = null
    if ( this.state.showPerson ) {
      persons = (
        <div>  
          <Person 
            name={this.state.Person[0].name} 
            age={this.state.Person[0].age} />
          <Person 
            name={this.state.Person[1].name}
            click={this.switchNameHandler.bind(this, 'newName')}  
            age={this.state.Person[1].age}
            changed={this.nameChangeHandler}>Props: children rendered text</Person>
          <Person 
            name={this.state.Person[2].name} 
            age={this.state.Person[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1> React from Udemy</h1>
        <button
          style={btnStyle}
          onClick={this.togglePersonHandler }>Update State</button>
        {persons}
      </div>
    );
  }
}

export default App;
