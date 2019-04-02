import React, { Component } from "react";
import { Statuses } from '../../Models';

//todo: delete test
const employeesMock = [
    {
        _id: 'idString12345',
        username: 'Idan@test.com',
        displayName: 'Idan',
        status: 'BUSINESS_TRIP'
    },
    {
        _id: 'idString12334',
        username: 'Tom@test.com',
        displayName: 'Tom',
        status: 'WORKING'
    },
    {
        _id: 'idString12346',
        username: 'Ofir@test.com',
        displayName: 'Ofir',
        status: 'LUNCH_TIME'
    },
]

export class EmployeesList extends Component {

    state = {
        query: '',
        filter: '',
        employees: [],
    }

    componentDidMount() {

        // todo: delete mock
        this.setState({ employees: employeesMock });
    }

    handleQueryChanged(evt) {
        let query = evt.target.value.toLowerCase();
        // todo: send to search api with timer timeout of 500ms to avoid back-end overflow

        this.setState({ query });
    }

    handleFilterChanged(evt) {
        let filter = evt.target.value;

        this.setState({ filter });
    }

    render() {

        let { query, filter, employees } = this.state;

        const filterEmployee = (emp) => {
            return (
                emp.displayName.toLowerCase().indexOf(query) > -1 &&
                    filter.length === 0 ? true : emp.status === filter
            );

        };

        return (
            <div className="EmployeesList">
                <h3>List of Employees:</h3>

                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        onChange={evt => this.handleQueryChanged(evt)}
                    />

                    <select onChange={evt => handleFilterChanged(evt)}>
                        <option selected disabled value=''>Filter By Status...</option>
                        {Object.entries(Statuses).map(([value, label], key) =>
                            <option {...{ value, key }}>{label}</option>)}
                    </select>
                </div>

                <div className="list-content">
                    <ui>
                        {employees.filter(filterEmployee).map(emp => (
                            <ul>
                                {`${emp.displayName} (${Statuses[emp.status]})`}
                            </ul>))}
                    </ui>
                </div>
            </div>
        );
    }
}