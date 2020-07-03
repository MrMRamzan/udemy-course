import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  render() {
    return this.props.persons.map((p, i) => {
      return <Person
        click={() => this.props.clicked(i)}    
        name={p.name}
        age={p.age}
        key={p.id}
        changed={(event) => this.props.changed(event, p.id)}/>
    })
  }
 }

export default Persons;
