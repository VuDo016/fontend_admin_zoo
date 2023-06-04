import { getAll1, getAll, getByValue } from "../method/get"

export const getStatistical = async () => {
    return await getAll1('ticket/statistical')
}

export const getDataChart = async () => {
    return await getAll1('ticket/chart')
}

export const getBillTenLast = async () => {
    return await getAll('ticket/billTenLast', 'bills')
}

export const getPageTicket= async (page) => {
    return await getByValue('ticket/pageTicket', page, 'billData')
}

export const getPageTicketExpired= async (page) => {
    return await getByValue('ticket/pageTicketExpired', page, 'billData')
}

export const getNumberPage = async (choice) => {
    let result = []
    choice ? result = await getByValue('ticket/pageTicketExpired', 1, 'totalPages') :  result = await getByValue('ticket/pageTicket', 1, 'totalPages')
    return result
}