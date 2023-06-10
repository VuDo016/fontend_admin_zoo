import { getAll, getByValue1 } from "../method/get";
import { post, uploadImage } from "../method/post";
import { put } from "../method/put";

export const getAllEvent = async (token) => {
    return await getAll('event', 'events', token)
}

export const getEventByDate = async (date, token) => {
    return await getByValue1('event/getByDate', 'events', date, token)
}

export const createEvent = async (bodyData, token) => {
    return await post(bodyData, 'event', 'id', token)
}

export const updateEvent = async (bodyData, token) => {
    await put(bodyData, 'event', token)
}

export const uploadImageAnimal = async (uri, type, value, token) => {
    await uploadImage(uri, 'images', type, value, token)
}