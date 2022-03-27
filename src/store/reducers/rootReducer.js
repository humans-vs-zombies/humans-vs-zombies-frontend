import { combineReducers } from "redux";
import { sessionReducer } from "./sessionReducer"
import { gameReducer } from "./gameReducer";
import { squadReducer } from "./squadReducer";


const appReducer = combineReducers({
    sessionReducer,
    gameReducer,
    squadReducer
})

export default appReducer;