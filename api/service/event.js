import { getAll, getByValue1 } from "../method/get";
import { post, uploadImage } from "../method/post";
import { put } from "../method/put";
import { deleteByValue } from "../method/delete";

export const getAllEvent = async() => {
    return await getAll('event', 'events')
}

export const getEventByDate = async (date) => {
    return await getByValue1('event/getByDate', 'events', date)
}

export const createEvent = async (bodyData) => {
    return await post(bodyData, 'event', 'id')
}

export const updateEvent = async (bodyData) => {
    await put(bodyData, 'event')
}

export const deleteEvent = async (value) => {
    await deleteByValue('event', value)
}