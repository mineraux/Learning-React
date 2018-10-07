import React, { Component } from 'react';
import './App.css';
import Validation from "./Components/Validation/Validation"
import Char from './Components/Char/Char'

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({userInput: updatedText})
    
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)} />
    })

    return (
      <div className="App">
        <input type="text" value={this.userInput} onChange={this.inputChangeHandler} />
        <p>{this.state.userInput}</p>
        <Validation inputLenght = {this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
