import { ACTION_GAMES_GET_ATTEMPTING, ACTION_GAMES_GET_ERROR, ACTION_GAMES_GET_SUCCESS } from "../actions/gameActions";

export const gameMiddleware = ({ dispatch }) => next => action => {

    next(action)

    switch (action.type) {
        case ACTION_GAMES_GET_ATTEMPTING:
            console.log("attempting (middleware)")
            break

        case ACTION_GAMES_GET_SUCCESS:
            console.log("success (middleware)")
            break

        case ACTION_GAMES_GET_ERROR:
            console.log("error (middleware)")
            break

        default:
            break
    }
}