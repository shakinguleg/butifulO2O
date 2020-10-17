import axios from 'axios';
import { HOST_URL } from './url';

class Http {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    request(url, method = "GET", data) {
        let config = {
            url,
            baseURL: this.baseURL,
            method,
        }
        if (method == "GET") {
            config = {
                ...config,
                params: data
            }
        } else if (method == "POST") {
            config = {
                ...config,
                data
            }

        }
        return axios.create().request(config)
    }

    get(url, data = {}) {
        return this.request(url, "GET", data)
    }
    post(url, data = "") {
        return this.request(url, "POST", data)
    }



}
export default new Http(HOST_URL)