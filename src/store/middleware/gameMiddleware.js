import { GameAPI } from "../../api/GameAPI";
import { ACTION_GAMES_DELETE_ATTEMPTING, ACTION_GAMES_GET_ATTEMPTING, ACTION_GAME_CREATE_ATTEMPTING, gameCreateErrorAction, gameCreateSuccessAction, gamesDeleteErrorAction, gamesDeleteSuccessAction, gamesGetErrorAction, gamesGetSuccessAction } from "../actions/gameActions";

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

        case ACTION_GAME_CREATE_ATTEMPTING:
            // Attept to create a game
            let game = action.payload;
            GameAPI.postGame(game.title, game.participants, game.dateFrom, game.dateTo, game.description)
            .then((res) => {
                dispatch(gameCreateSuccessAction())
            })
            .catch((error) => {
                dispatch(gameCreateErrorAction(error.message))
            })
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