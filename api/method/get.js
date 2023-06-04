import { https } from "../http/http";

export const getAll = async (url, data) => {
    const response = await fetch( https + url);
    const resJson = await response.json();
    return resJson[data]
}

export const getAll1 = async (url) => {
    const response = await fetch( https + url);
    const resJson = await response.json();
    return resJson
}

export const getByValue = async (url, value, data) => {
    const response = await fetch( https + url + '/' + value );
    const resJson = await response.json();
    return resJson[data]
}