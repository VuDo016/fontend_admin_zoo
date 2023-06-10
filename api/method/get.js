import { https } from "../http/http";

export const getAll = async (url, data, token) => {
    const response = await fetch(https + url,
        {
            method: "GET",
            headers: { 'Authorization': token }
        });
    const resJson = await response.json();
    return resJson[data]
}

export const getAll1 = async (url) => {
    const response = await fetch(https + url);
    const resJson = await response.json();
    return resJson
}

export const getByValue = async (url, data, value, token) => {
    const response = await fetch(https + url + '/' + value,
    {
        method: "GET",
        headers: { 'Authorization': token }
    });
    const resJson = await response.json();
    return resJson[data]
}

export const getByValue1 = async (url, data, value, token) => {
    const response = await fetch(https + url + '/' + value,
    {
        method: "GET",
        headers: { 'Authorization': token }
    });
    const resJson = await response.json();
    return resJson[data]
}