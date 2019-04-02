import React, { Component } from 'react';
import './App.css';
import { Guest, Main } from './Components';

class App extends Component {

  state = {
    connected: false,
    username: 'default-username',
    status: 'default-status',
  }

  handleUserNameChanged(username) {
    this.setState({ username });
  }

  render() {

    let { connected, username, status } = this.state;

    // todo: delete test
    connected = true;

    return (
      <div className="App">
        {
          connected ?
            <Main username={username} status={status} /> :
            <Guest usernameChangeHandler={this.handleUserNameChanged.bind(this)} />
        }
      </div>
    );
  }
}

export default App;
