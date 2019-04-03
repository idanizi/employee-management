import React, { Component } from 'react';
import { EmployeesList } from '../';
import { Statuses } from '../../Models'
import './Main.css';

function usernameToHelloName(username) {
    // todo: build regex to return hello formated name
    return username;
}

const UpdateStatus = (props) => (
    <div className="update-status">
        <h3>Update My Current Status:</h3>
        <select onChange={props.updateStatusHandler} value={props.status}>
            {Object.entries(Statuses).map(([value, label], key) =>
                <option {...{ value, key }}>{label}</option>)}
        </select>
    </div>
)


export class Main extends Component {

    render() {

        let { displayName, status, updateStatusHandler } = this.props;

        // todo: delete test
        updateStatusHandler = _ => console.log('update status handler');

        return (
            <div className="Main">
                <h1>Hello {displayName}, you are {Statuses[status].toLowerCase()} </h1>

                <UpdateStatus {...{ updateStatusHandler, status }} />
                <EmployeesList />
            </div>
        );
    }
}