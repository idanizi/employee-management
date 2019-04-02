import APIUtils, { baseApiUrl } from "./APIUtils";
import ApiMock from "./ApiMock";

const route = ''; // todo: should be '/employee' when i have server & db

export default {
    getAll: () =>  ApiMock.get(baseApiUrl + route),
    post: emp => ApiMock.post(emp),
}