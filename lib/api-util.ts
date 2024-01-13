import axios from "axios"
var backendUrl = "http://localhost:3001/api" 
const apiUtil = {
    backendUrl: backendUrl,
    async postRequest(endPoint: String, data = {}, headers = {}): Promise<any> {
        const url = backendUrl + endPoint
        const options = {
            headers: {
                ...headers
            },
        }
        return this.safeAxios("POST", url, data, options)
    },
    
    async getRequest(endPoint: String, headers = {}): Promise<any> {
        const url = backendUrl + endPoint
        const options = {
            headers: {
                ...headers
            }
        }
        return this.safeAxios("GET", url, undefined, options)
    },

    async safeAxios(method: any, url: any, data: any | undefined, options = {}): Promise<any> {
        const axiosOptions = {
            method,
            url,
            data,
            ...options
        }
        return new Promise(resolve => {
            axios(axiosOptions).then((response) => {
                resolve({error: null, data: response?.data})
            }).catch((error) => {
                resolve({error: error?.response?.data, data: null})
            })
        })
    }
}
export default apiUtil