import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootMiddleware from "./middleware/rootMiddleware";
import appReducer from "./reducers/rootReducer";


export default createStore(
    appReducer,
    composeWithDevTools(rootMiddleware)
)