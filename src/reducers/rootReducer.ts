import { combineReducers } from "redux";
import balanceReducer from "./balance";

const rootReducer = combineReducers({
    balance: balanceReducer
})

export default rootReducer;