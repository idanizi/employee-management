import React, { Component } from 'react';
import { EmployeesList } from '../';
import { Statuses } from '../../Models'

function usernameToHelloName(username) {
    // todo: build regex to return hello formated name
    return username;
}

const UpdateStatus = (props) => (
    <div className="update-status">
        <h5>Update My Current Status:</h5>
        <select onChange={props.updateStatusHandler}>
            {Object.entries(Statuses).map(([value, label], key) =>
                <option {...{ value, key }}>{label}</option>)}
        </select>
    </div>
)


export class Main extends Component {

    render() {

        let { username, status, updateStatusHandler } = this.props;

        // todo: delete test
        updateStatusHandler = _ => console.log('update status handler');

        return (
            <div className="Main">
                <h2>Hello {usernameToHelloName(username)}, You are {status.toLowerCase()} </h2>

                <UpdateStatus {...{ updateStatusHandler }} />

                <EmployeesList />
                <div></div>
            </div>
        );
    }
}