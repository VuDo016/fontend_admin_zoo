import { getAll, getByValue } from "../method/get";
import { post, uploadImage } from "../method/post";
import { put } from "../method/put";
import { deleteByValue, deleteBy2Value } from "../method/delete";

export const getAllAnimal = async() => {
    return await getAll('animal', 'animal')
}

export const getAnimalBySpecies = async (species) => {
    return await getByValue('animal/getBySpecies', 'animal', species)
}

export const createAnimal = async (bodyData) => {
    return await post(bodyData, 'animal', 'id')
}

export const updateAnimal = async (bodyData) => {
    await put(bodyData, 'animal')
}

export const uploadImageAnimal = async (uri, type, value) => {
    await uploadImage(uri, 'images', type, value)
}

export const deleteAnimal = async (value) => {
    await deleteByValue('animal', value)
}

export const deleteAnimalImg = async (type, value) => {
    await deleteBy2Value('images', type, value)
}

