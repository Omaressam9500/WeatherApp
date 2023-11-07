import axios from "axios";


export const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
export enum SERVER {
    PROD = "http://api.weatherapi.com/v1/",
}

export const axiosAPI = axios.create({
    baseURL: SERVER.PROD,
    headers: headers,
});

axiosAPI.interceptors.response.use(function (response) {
    return response;

}, async function (error) {
    if (401 === error?.response?.status) {

    } else {
        return Promise.reject(error);
    }
})
