import { getAll, getByValue } from "../method/get";
import { post, uploadImage } from "../method/post";
import { put } from "../method/put";

export const getAllAnimal = async (token) => {
    return await getAll('animal', 'animal', token)
}

export const getAnimalBySpecies = async (species, token) => {
    return await getByValue('animal/getBySpecies', 'animal', species, token)
}

export const createAnimal = async (bodyData, token) => {
    return await post(bodyData, 'animal', 'id', token)
}

export const updateAnimal = async (bodyData, token) => {
    await put(bodyData, 'animal', token)
}

export const uploadImageAnimal = async (uri, type, value, token) => {
    await uploadImage(uri, 'images', type, value, token)
}