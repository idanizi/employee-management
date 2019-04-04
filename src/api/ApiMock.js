import { isString } from 'util';
import uuid from "uuid/v4";

// import { get } from 'http';

/** @type {[]} */
let dbMock = require('./employeesMock.json');

const areEqualKeyValue = (x, params, key) => {
    if (isString(x[key])) {
        return x[key]
            .toLowerCase()
            .indexOf(params[key].toLowerCase()) > -1;
    }

    return x[key] === params[key];
}

class ApiMock {

    get = async (url, params) => {
        if (params) {
            let result = [...dbMock];

            for (let key in params) {
                result = result
                    .filter(x => areEqualKeyValue(x, params, key))
            }

            return result
        }

        return dbMock;
    }

    post = async emp => {
        if(!emp._id)
            emp._id = uuid();
        
        dbMock.push(emp);
        
        return emp;
    };

    put = async (params, data) => {
        const record = dbMock.find(x =>
            Object.keys(params).every(key =>
                areEqualKeyValue(x, params, key)));

        if (!record) return null;

        Object.keys(data).forEach(key => record[key] = data[key]);
        
        return record;
    }

    patch = async (params, data) => {
        const records = dbMock.filter(x =>
            Object.keys(params).every(key =>
                areEqualKeyValue(x, params, key)));

        records.forEach(record => Object.keys(data).forEach(key => record[key] = data[key]));

        return records;
    }
}

export default new ApiMock();