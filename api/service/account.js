import { getAll1, getByValue1 } from "../method/get";
import { post1 } from "../method/post";

export const getAllAccountByRoll = async (role) => {
    return await getByValue1('account/all', role)
}

export const getAccessTokenNew = async (refreshToken) => {
    const bodyData = {
        refreshToken
    }
    return await post1(bodyData, 'account/token')
}

export const searchAccount = async (role, value) => {
    return await getAll1('account/search/' + role + '?keyword=' + value)
}
