import * as constants from "../actions/constants";

type ReduxAction = {
    type: string
    balance?: number
    deposit?: number
    withdrawal?: number
}

type BalanceState = {
    balance: number
}

const initialState = {
    balance: 0
}
const balance = (state: BalanceState = initialState , action: ReduxAction) => {
    switch(action.type) {
        case constants.SET_BALANCE:
        return {
            ...state,
            balance: action.balance,
        }
        break;
        case constants.DEPOSIT:
        return {
            ...state,
            // @ts-ignore
            balance: state.balance + action.deposit,
        }
        break;
        case constants.WITHDRAW:
        return {
            ...state,
            // @ts-ignore
            balance: state.balance - action.withdrawal,
        }
        break;

        default:
            return state
    }
}

export default balance