import React, { Component } from 'react';
import './App.css';
import UserInput from "./User/UserInput/UserInput"
import UserOutput from "./User/UserOutput/UserOutput"

class App extends Component {

  state = {
    username:"Trafal"
  }

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} change={this.changeNameHandler} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
