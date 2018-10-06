import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name: "Robin", age: 22 },
      { name: "Omar", age: 21 },
      { name: "Thibault", age: 26 },
    ]
  }

  switchNameHandler = (newName) => {
    console.log("Was clicked")
    this.setState({
      persons : [
        { name: newName, age: 22 },
        { name: "Omar", age: 21 },
        { name: "Thibault", age: 26 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name: event.target.value, age: 22 },
        { name: "Omar", age: 21 },
        { name: "Thibault", age: 26 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Im a React App !!</h1> 
        <button onClick={() => this.switchNameHandler("what ?")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        /> 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Wass up')} >
          My hobbies : JVC
        </Person> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> 
      </div>
    );
  }
}

export default App;
