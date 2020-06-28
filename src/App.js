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

  switchNameHandler = () => {
    this.setState({
    Person: [
      {name: 'MaxUpdated', age: 28},
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
        <button onClick={ this.switchNameHandler }>Update State</button>
        <Person name={this.state.Person[0].name} age={this.state.Person[0].age} />
        <Person name={this.state.Person[1].name} age={this.state.Person[1].age} />
        <Person name={this.state.Person[2].name} age={this.state.Person[2].age} />
      </div>
    );
  }
}

export default App;
