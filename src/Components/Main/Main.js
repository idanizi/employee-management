import React, { Component } from 'react';
import { EmployeesList } from '../';
import { Statuses } from '../../models'
import './Main.css';

const UpdateStatus = (props) => (
    <div className="update-status">
        <h3>Update My Current Status:</h3>
        <select onChange={evt => props.statusChangedHandler(evt.target.value)} value={props.status}>
            {Object.entries(Statuses).map(([value, label], key) =>
                <option {...{ value, key }}>{label}</option>)}
        </select>
    </div>
)


export class Main extends Component {

    render() {

        let { displayName, status, statusChangedHandler, employees } = this.props;

        return (
            <div className="Main">
                <h1>Hello {displayName}, you are on {Statuses[status].toLowerCase().replace(/\s*on\s*/, '')} </h1>

                <UpdateStatus {...{ statusChangedHandler, status }} />
                <EmployeesList {...{ employees }} />
            </div>
        );
    }
}