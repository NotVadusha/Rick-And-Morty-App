import axios from "axios";

export default class HttpService {
    constructor(url) {
        this.apiUrl = url;
        this.fetcher = axios;
    }

    get = async (url) => {
        try {
            return await axios.get(this.apiUrl + url);
        } catch (e) {
            return e;
        }
    }
}