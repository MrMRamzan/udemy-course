import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
// radium is a wraper to handle inline sudo css properties
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    Person: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Me', age: 23 }
    ],
    otherState: 'Other state',
    showPerson: false 
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.Person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.Person[personIndex]
    }
    // const person = Object.assign({},this.state.Person[personIndex]); // alternative
    person.name = e.target.value;
    const persons = [...this.state.Person];
    persons[personIndex] = person;

    this.setState({ Person: persons })
  }

  togglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }

  deleteHandler = (personIndex) => {
    // const persons = this.state.Person; // pointer to original array
    // const persons = this.state.Person.slice(); // give copy of array
    // BEST way is EC6
    const persons = [...this.state.Person]
    persons.splice(personIndex, 1);
    this.setState({Person: persons});
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
          {this.state.Person.map((p, i) => {
            return <ErrorBoundary key={p.id} ><Person
              click={() => this.deleteHandler(i)}    
              name={p.name}
              age={p.age} 
              changed={(event) => this.nameChangeHandler(event, p.id)}/></ ErrorBoundary>
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
      <StyleRoot>
        <div className="App">
          <h1> React from Udemy</h1>
          <button
            style={btnStyle}
            onClick={this.togglePersonHandler }>Update State</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
 