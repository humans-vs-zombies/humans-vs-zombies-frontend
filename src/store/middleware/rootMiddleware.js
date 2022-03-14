import { applyMiddleware } from "redux";
import { sessionMiddleware } from "./sessionMiddlware";


export default applyMiddleware(
    sessionMiddleware,
)