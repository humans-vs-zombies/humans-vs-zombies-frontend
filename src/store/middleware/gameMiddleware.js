import { GameAPI } from "../../api/GameAPI";
import { ACTION_GAMES_DELETE_ATTEMPTING, ACTION_GAMES_GET_ATTEMPTING, gamesDeleteErrorAction, gamesDeleteSuccessAction, gamesGetErrorAction, gamesGetSuccessAction } from "../actions/gameActions";

export const gameMiddleware = ({ dispatch, params }) => next => action => {

    next(action)

    switch (action.type) {
        case ACTION_GAMES_GET_ATTEMPTING:
            // Attempt to get games
            GameAPI.getGames()
            .then(res => {
                dispatch(gamesGetSuccessAction(res.data.payload))
            })
            .catch((error) => {
                dispatch(gamesGetErrorAction("Unable to fetch games (" + error.message + ")"))
            });
            break
        
        case ACTION_GAMES_DELETE_ATTEMPTING:
            // Attempt to delete a game
            GameAPI.deleteGame(action.payload)
            .then(res => {
                dispatch(gamesDeleteSuccessAction(action.payload))
            })
            .catch((error) => {
                dispatch(gamesDeleteErrorAction())
            });
            break

        default:
            break
    }
}