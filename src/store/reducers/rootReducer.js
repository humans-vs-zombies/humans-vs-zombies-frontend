import { combineReducers } from "redux";
import { sessionReducer } from "./sessionReducer"


const appReducer = combineReducers({
    sessionReducer,
})

export default appReducer;