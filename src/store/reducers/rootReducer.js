import { combineReducers } from "redux";
import { sessionReducer } from "./sessionReducer"
import { gameReducer } from "./gameReducer";


const appReducer = combineReducers({
    sessionReducer,
    gameReducer,
})

export default appReducer;