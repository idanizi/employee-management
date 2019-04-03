let dbMock = require('./employeesMock.json');

export default {
    get: async (url, params) => {
        if (params) {
            let result = [...dbMock];

            for (let key in params) {
                result = result
                    .filter(x =>
                        x[key]
                            .toLowerCase()
                            .indexOf(params[key].toLowerCase()) > -1)
            }

            return result
        }

        return dbMock;
    },
    post: async emp => dbMock.push(emp)
}