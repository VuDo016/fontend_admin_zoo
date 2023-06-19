import { https } from "../http/http";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const cartData = JSON.parse(token);
    return cartData.accessToken
}

export const put = async (bodyData, url) => {
    const response = await fetch(https + url,
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() },
            body: JSON.stringify(bodyData),
        })
    await response;
}

export const put1 = async (bodyData, url, data) => {
    const response = await fetch(https + url,
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() },
            body: JSON.stringify(bodyData),
        })
    const resJson = await response.json();

    return resJson[data]
}

export const update_Khachhang = async (body, idKH) => {
    const response = await fetch(https + 'account',
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() },
            body: JSON.stringify({
                id: idKH,
                first_name: body.first_name,
                name: body.name,
                gender: body.gender,
                birth_date: body.birth_date,
                address: body.address,
                phone: body.phone,
                email: body.email,
                avatar_url: body.avatar_url
            }),
        })
    const resJson = await response.json();

    if (resJson.message === "Update the user succeeds!")
        alert('Cập nhật thành công !!!')
    else
        alert('Cập nhật thất bại !!!')
}

export const update_PasswordKH = async (pass, newPass, idKH) => {
    const response = await fetch(https + 'account/updatePass',
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() },
            body: JSON.stringify({
                idKH: idKH,
                newPass: newPass,
                pass: pass
            }),
        })
    const resJson = await response.json();

    return resJson.message
}

export const updateByValue = async (url, value) => {
    const response = await fetch(https + url + '/' + value,
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': await getToken() }
        })
    const resJson = await response.json();

    return resJson
}