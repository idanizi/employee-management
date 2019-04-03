import React, { Component } from 'react';
import './App.css';
import { Guest, Main } from './Components';

class App extends Component {

  state = {
    connected: false,
    username: '',
    status: '',
  }

  usernameChangedHandler = (username) => {
    this.setState({ username });
  }

  statusChangedHandler = (status) => this.setState({ status });

  loginHandler = () => {
    if (this.state.username.length > 0)
      this.setState({ connected: true });
  }

  render() {

    let { connected, username, status } = this.state;
    const { usernameChangedHandler, statusChangedHandler,
      loginHandler } = this;

    return (
      <div className="App">
        {
          connected ?
            <Main {...{ statusChangedHandler, username, status }} /> :
            <Guest {...{ usernameChangedHandler, loginHandler }} />
        }
      </div>
    );
  }
}

export default App;
