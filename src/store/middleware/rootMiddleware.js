import { applyMiddleware } from "redux";
import { gameMiddleware } from "./gameMiddleware";
import { sessionMiddleware } from "./sessionMiddlware";
import { squadMiddleware } from "./squadMiddleware";


export default applyMiddleware(
    sessionMiddleware,
    gameMiddleware,
    squadMiddleware
)