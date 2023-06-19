import { getAll1, getAll, getByValue } from "../method/get"
import { put1, updateByValue } from "../method/put"

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
    return await getByValue('ticket/pageTicket', 'billData', page)
}

export const getPageTicketExpired= async (page) => {
    return await getByValue('ticket/pageTicketExpired', 'billData', page)
}

export const getNumberPage = async (choice) => {
    let result = []
    choice ? result = await getByValue('ticket/pageTicketExpired', 'totalPages', 1) :  result = await getByValue('ticket/pageTicket', 'totalPages', 1)
    return result
}

export const scanQRcode= async (body) => {
    return await put1(body, 'ticket/scanQRcode', 'message')
}

export const getBillCancel = async () => {
    return await getAll('ticket/billCancle', 'bills')
}

export const updateBillCancel = async (id) => {
    await updateByValue('ticket/updateBilltoCancle', id)
}