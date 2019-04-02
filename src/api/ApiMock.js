let dbMock = require('./employees.json');

export default {
    get: () => dbMock,
    post: emp => dbMock.push(emp)
}