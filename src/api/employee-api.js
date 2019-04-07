import { baseApiUrl } from "./api-utils";
import ApiMock from "./mock/api-mock";

const route = ''; // todo: should be '/employee' when i have server & db

class EmployeeApi {

    create = emp => ApiMock.post(emp);

    find = params => ApiMock.get(baseApiUrl + route, params);

    findOne = params => ApiMock.get(baseApiUrl + route, params).then(res => res && res[0]);

    updateOne = (_id, data) => ApiMock.put({ _id }, data);
}

export default new EmployeeApi();