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
    otherState: 'Other state' 
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
  render () {
    return (
      <div className="App">
        <h1> React from Udemy</h1>
        <button onClick={() => this.switchNameHandler('newName with Arrow') }>Update State</button>
        <Person 
          name={this.state.Person[0].name} 
          age={this.state.Person[0].age} />
        <Person 
          name={this.state.Person[1].name}
          click={this.switchNameHandler.bind(this, 'newName')}  
          age={this.state.Person[1].age} />Props: children rendered text
        <Person 
          name={this.state.Person[2].name} 
          age={this.state.Person[2].age} />
      </div>
    );
  }
}

export default App;
