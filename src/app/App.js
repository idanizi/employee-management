import React, { Component } from 'react';
import './App.css';
import EmployeeApi from "../api/EmployeeApi";
import { Main, Guest } from "../components";

function usernameToDisplayName(username) {
  // todo: build regex to return hello formated name
  return username;
}

class App extends Component {

  state = {
    connected: false,
    username: '',
    status: '',
    displayName: '',
    _id: '',
    employees: [],
  }

  usernameChangedHandler = (username) => {
    this.setState({ username });
  }

  statusChangedHandler = async (status) => {
    this.setState({ status });
    await EmployeeApi.updateOne(this.state._id, { status })
    this.updateEmployeesState();
  }

  updateEmployeesState = () => {
    EmployeeApi.find({})
      .then(employees => this.setState({ employees }))
  }

  loginHandler = async () => {
    let { username } = this.state;
    if (username.length > 0) {
      let emp = await EmployeeApi.findOne({ username });

      if (!emp) {
        /* user not found, create new user */
        emp = {
          username,
          displayName: usernameToDisplayName(username),
          status: 'WORKING',
        }

        emp = await EmployeeApi.create(emp);
      }


      console.log({ emp });

      await new Promise(res => this.setState({ ...emp, connected: true }, res()));
      this.updateEmployeesState();
    }
  }

  render() {

    let { connected, displayName, status, employees } = this.state;
    const { usernameChangedHandler, statusChangedHandler,
      loginHandler } = this;

    return (
      <div className="App">
        {
          connected ?
            <Main {...{ statusChangedHandler, displayName, status, employees }} /> :
            <Guest {...{ usernameChangedHandler, loginHandler }} />
        }
      </div>
    );
  }
}

export default App;
