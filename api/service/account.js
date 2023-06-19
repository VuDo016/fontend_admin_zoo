import { getAll1, getByValue1, getByValue } from "../method/get";
import { post, uploadImage, post1, postnotData } from "../method/post";

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

export const getAllAccountID = async (id) => {
    return await getByValue1('account', id)
}

export const uploadImageUser = async (uri, type, value) => {
    await uploadImage(uri, 'images', type, value)
}

export const delImageFire = async (type, url, id) => {
    const body = {
        type,
        url,
        id
    }
    await postnotData(body, 'images/delImgByURL')
}
