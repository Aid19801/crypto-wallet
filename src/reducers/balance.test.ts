import balanceReducer from "./balance";
import * as constants from "../actions/constants"

describe("reducers | balance", () => {
    it("sets a balance", () => {
      const balance: number = 0
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual({ balance: 0 })
    })
    it("deposits into the balance", () => {
      const initialState: number = 5;
      const deposit: number = 10;
      expect(balanceReducer({ balance: initialState }, { type: constants.DEPOSIT, deposit })).toEqual({ balance: 15 })
    })
    it("withdraws from balance", () => {
      const initialState: number = 20;
      const withdrawal: number = 10;
      expect(balanceReducer({ balance: initialState}, { type: constants.WITHDRAW, withdrawal })).toEqual({ balance: 10 })
    })
})