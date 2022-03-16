import { applyMiddleware } from "redux";
import { gameMiddleware } from "./gameMiddleware";
import { sessionMiddleware } from "./sessionMiddlware";


export default applyMiddleware(
    sessionMiddleware,
    gameMiddleware,
)