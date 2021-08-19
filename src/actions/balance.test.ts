import * as constants from "./constants"
import * as actions from "./balance";

describe("actions | balance", () => {
    it("creates an action to test the balance", () => {
        const balance = 0;
        const expectedAction = { type: constants.SET_BALANCE, balance }
        expect(actions.setBalance(0)).toEqual(expectedAction)
    })
    it("creates an action to deposit funds", () => {
        const deposit = 10;
        const expectedAction = { type: constants.DEPOSIT, deposit }
        expect(actions.deposit(10)).toEqual(expectedAction)
    })
    it("creates an action to withdraw the balance", () => {
        const withdrawal: number = 0;
        const expectedAction: object = { type: constants.WITHDRAW, withdrawal }
        expect(actions.withdraw(withdrawal)).toEqual(expectedAction)
    })
})