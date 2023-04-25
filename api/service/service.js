import { getAll } from "../method/get";

export const getVehicle = async () => {
    return await getAll('service', 'vehicleTickets')
}

export const getBoating = async () => {
    return await getAll('service', 'boatingTickets')
}

export const getTentRentals = async () => {
    return await getAll('service', 'tentRentals')
}