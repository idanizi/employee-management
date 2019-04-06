import React, { Component } from 'react';
import { EmployeesList } from '../';
import { Statuses } from '../../models'
import './Main.css';
import UserContext from '../../contexts/user-context';

const UpdateStatus = (props) => (
    <div className="update-status">
        <h3>Update My Current Status:</h3>
        <UserContext.Consumer>
            {({ status, statusChangedHandler }) => (
                <select onChange={evt => statusChangedHandler(evt.target.value)} value={status}>
                    {Object.entries(Statuses).map(([value, label], key) =>
                        <option {...{ value, key }}>{label}</option>)}
                </select>
            )}
        </UserContext.Consumer>
    </div>
)


export class Main extends Component {

    render() {

        return (
            <div className="Main">
                <UserContext.Consumer>{({ displayName, status }) =>
                    <h1>Hello {displayName}, you are on {Statuses[status].toLowerCase().replace(/\s*on\s*/, '')} </h1>}
                </UserContext.Consumer>

                <UpdateStatus />
                <EmployeesList />
            </div>
        );
    }
}