import { GameAPI } from "../../api/GameAPI";
import { ACTION_GAMES_GET_ATTEMPTING, ACTION_GAMES_GET_ERROR, ACTION_GAMES_GET_SUCCESS, gamesGetErrorAction, gamesGetSuccessAction } from "../actions/gameActions";

export const gameMiddleware = ({ dispatch }) => next => action => {

    next(action)

    switch (action.type) {
        case ACTION_GAMES_GET_ATTEMPTING:
            console.log("attempting (middleware)")
            // Try to get games
            GameAPI.getGames()
            .then(res => {
                dispatch(gamesGetSuccessAction(res.data.payload))
            })
            .catch((error) => {
                dispatch(gamesGetErrorAction("Unable to fetch games (" + error.message + ")"))
            });
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