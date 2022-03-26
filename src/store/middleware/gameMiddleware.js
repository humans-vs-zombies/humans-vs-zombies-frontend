import { GameAPI } from "../../api/GameAPI";
import { ACTION_GAME_DELETE_ATTEMPTING, ACTION_GAMES_GET_ATTEMPTING, ACTION_GAME_CREATE_ATTEMPTING, gameCreateErrorAction, gameCreateSuccessAction, gameInitAction, gameDeleteErrorAction, gameDeleteSuccessAction, gamesGetErrorAction, gamesGetSuccessAction, ACTION_GAME_GET_SPECIFIC_ATTEMPTING, gameGetSpecificSuccessAction, gameGetSpesificErrorAction, ACTION_GAME_UPDATE_ATTEMPTING, gameUpdateSuccessAction, gameUpdateErrorAction, gameNextStateUpdateSuccessAction, gameNextStateUpdateErrorAction, ACTION_GAME_NEXT_STATE_UPDATE_ATTEMPTING, gameNextStateUpdateAttemptAction } from "../actions/gameActions";

export const gameMiddleware = ({ dispatch }) => next => action => {

    next(action)

    let game;

    switch (action.type) {
        case ACTION_GAMES_GET_ATTEMPTING:
            // Attempt to get games
            let apiRequest

            switch(action.state) {
                case "CONFIGURATION":
                    apiRequest = GameAPI.getGames()
                    break
                case "REGISTRATION":
                    apiRequest = GameAPI.getGamesFilteredByState(action.state)
                    break
                case "IN_PROGRESS":
                    apiRequest = GameAPI.getGamesFilteredByState(action.state)
                    break
                case "COMPLETE":
                    apiRequest = GameAPI.getGamesFilteredByState(action.state)
                    break
                default:
                    apiRequest = GameAPI.getGames()
                    break                                        
            }

            apiRequest
            .then(res => {
                dispatch(gamesGetSuccessAction(res.data.payload))
            })
            .catch((error) => {
                dispatch(gamesGetErrorAction("Unable to fetch games (" + error.message + ")"))
            });
            break

        case ACTION_GAME_GET_SPECIFIC_ATTEMPTING:
            // Attempt to get spesific game
            GameAPI.getGame(action.payload)
            .then(res => {
                dispatch(gameGetSpecificSuccessAction(res.data.payload))
            })
            .catch((error) => {
                dispatch(gameGetSpesificErrorAction("Unable to fetch the game (" + error.message + ")"))
            });
            break

        case ACTION_GAME_CREATE_ATTEMPTING:
            // Attempt to create a game
            game = action.payload;
            GameAPI.postGame(game.title, game.participants, game.dateFrom, game.dateTo, game.description)
            .then((res) => {
                dispatch(gameCreateSuccessAction())
                dispatch(gameInitAction())
            })
            .catch((error) => {
                dispatch(gameCreateErrorAction(error.message))
            })
            break
        
        case ACTION_GAME_UPDATE_ATTEMPTING:
            // Attempt to update game
            game = action.game;
            GameAPI.putGame(action.id, game.title, game.participants, game.dateFrom, game.dateTo, game.description, game.state)
            .then((res) => {
                dispatch(gameUpdateSuccessAction())
                if (action.goToNextState === "yes") {
                    dispatch(gameNextStateUpdateAttemptAction(action.id))
                }
                else {
                    dispatch(gameInitAction())
                }
            })
            .catch((error) => {
                dispatch(gameUpdateErrorAction("Unable to update the game (" + error.message + ")"))
            })
            break

        case ACTION_GAME_NEXT_STATE_UPDATE_ATTEMPTING:
            // Attempt to update next game state
            GameAPI.postNextGameState(action.payload)
            .then((res) => {
                dispatch(gameNextStateUpdateSuccessAction())
                dispatch(gameInitAction())
            })
            .catch((error) => {
                dispatch(gameNextStateUpdateErrorAction("Unable to go to next game state (" + error.message + ")"))
            })
            break
        
        case ACTION_GAME_DELETE_ATTEMPTING:
            // Attempt to delete a game
            GameAPI.deleteGame(action.payload)
            .then(res => {
                dispatch(gameDeleteSuccessAction(action.payload))
            })
            .catch((error) => {
                dispatch(gameDeleteErrorAction("Unable to delete the game (" + error.message + ")"))
            });
            break

        default:
            break
    }
}