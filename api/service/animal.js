import { getAll } from "../method/get";

export const getAllAnimal = async () => {
    return await getAll('animal', 'animal')
}