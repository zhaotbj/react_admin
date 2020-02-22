import axios from 'axios';
const baseApi = ''
export default class Axios {
    static get(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: params
            }).then((response) => {
                resolve(response)
            }, err => {
                reject(err)
            })
        })
    }
}
