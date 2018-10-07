import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { id: 'id1', name: "Robin", age: 22 },
      { id: 'id2', name: "Omar", age: 21 },
      { id: 'id3', name: "Thibault", age: 26 },
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })
        }
        </div>
      )
    } 

    return (
      <div className="App">
        <h1>Im a React App !!</h1> 
        <button onClick={this.togglePersonsHandler}>Switch Name</button>        
        { persons }
      </div>
    );
  }
}

export default App;
