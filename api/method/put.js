import { https } from "../http/http";

export const put = async (bodyData, url, token) => {
    const response = await fetch(https + url,
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token },
            body: JSON.stringify(bodyData),
        })
    await response;
}