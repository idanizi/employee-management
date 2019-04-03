import React, { Component } from 'react';
import './App.css';
import { Guest, Main } from './Components';
import EmployeeApi from "./Api/EmployeeApi";

class App extends Component {

  state = {
    connected: false,
    username: '',
    status: '',
    displayName: '',
  }

  usernameChangedHandler = (username) => {
    this.setState({ username });
  }

  statusChangedHandler = (status) => this.setState({ status });

  loginHandler = () => {
    let { username } = this.state;
    if (username.length > 0) {
      EmployeeApi.findOne({ username })
        .then(emp => {
          if (emp) {
            let { displayName, status } = emp;
            console.log({emp})
            this.setState({ displayName, status, connected: true })
          }
        })
    }
  }

  render() {

    let { connected, displayName, status } = this.state;
    const { usernameChangedHandler, statusChangedHandler,
      loginHandler } = this;

    return (
      <div className="App">
        {
          connected ?
            <Main {...{ statusChangedHandler, displayName, status }} /> :
            <Guest {...{ usernameChangedHandler, loginHandler }} />
        }
      </div>
    );
  }
}

export default App;
