import * as constants from "./constants"

export const setBalance = (balance: number) => {
    return {
        type: constants.SET_BALANCE,
        balance
    }
}
export const deposit = (deposit: number) => {
    return {
        type: constants.DEPOSIT,
        deposit
    }
}
export const withdraw = (withdrawal: number) => {
    return {
        type: constants.WITHDRAW,
        withdrawal
    }
}