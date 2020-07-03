import React, { Component } from 'react';
import './App.css';
// radium is a wraper to handle inline sudo css properties
import Person from '../components/Persons/Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Me', age: 23 }
    ],
    otherState: 'Other state',
    showPerson: false 
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({},this.state.Person[personIndex]); // alternative
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }

  deleteHandler = (personIndex) => {
    // const persons = this.state.Person; // pointer to original array
    // const persons = this.state.Person.slice(); // give copy of array
    // BEST way is EC6
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render () {
    // inline styling 
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

    let persons = null
    if ( this.state.showPerson ) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return <Person
              click={() => this.deleteHandler(i)}    
              name={p.name}
              age={p.age}
              key={p.id}
              changed={(event) => this.nameChangeHandler(event, p.id)}/>
          })
        }
        </div>
      )
      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
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
 