import { https } from "../http/http";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const cartData = JSON.parse(token);
    return cartData.accessToken
}

export const deleteByValue = async (url, value) => {
    const response = await fetch(https + url + '/' + value,
        {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() }
        })
    await response;
}

export const deleteBy2Value = async (url, value1, value2) => {
    const response = await fetch(https + url + '/' + value1 + '/' + value2,
        {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() }
        })
    await response;
}