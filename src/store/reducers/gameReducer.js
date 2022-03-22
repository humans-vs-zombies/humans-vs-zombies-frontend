import { ACTION_GAMES_DELETE_ATTEMPTING, ACTION_GAMES_DELETE_ERROR, ACTION_GAMES_DELETE_SUCCESS, ACTION_GAMES_GET_ATTEMPTING, ACTION_GAMES_GET_ERROR, ACTION_GAMES_GET_SUCCESS } from "../actions/gameActions"

const initialState = {
    gamesGetAttempting: false,
    gamesGetSuccess: false,
    gamesGetError: false,
    gamesGetErrorMessage: "",
    games: [],

    gameDeleteAttempting: false,
    gameDeleteSuccess: false,
    gameDeleteError: false,
    gameDeleteErrorMessage: "",
}


export const gameReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ACTION_GAMES_GET_ATTEMPTING:
            return {
                ...state,
                gamesGetAttempting: true,
                gamesGetSuccess: false,
                gamesGetError: false,
                gamesGetErrorMessage: "",
                games: [],
            }

        case ACTION_GAMES_GET_SUCCESS:
            return {
                ...state,
                gamesGetAttempting: false,
                gamesGetSuccess: true,
                games: action.payload,
            }

        case ACTION_GAMES_GET_ERROR:
            return {
                ...state,
                gamesGetAttempting: false,
                gamesGetError: true,
                gamesGetErrorMessage: action.payload,
            }

        case ACTION_GAMES_DELETE_ATTEMPTING:
            return {
                ...state,
                gameDeleteAttempting: true,
                gameDeleteSuccess: false,
                gameDeleteError: false,
                gameDeleteErrorMessage: "",
            }

        case ACTION_GAMES_DELETE_SUCCESS:
            return {
                ...state,
                gameDeleteAttempting: false,
                gameDeleteSuccess: true,
            }

        case ACTION_GAMES_DELETE_ERROR:
            return {
                ...state,
                gameDeleteAttempting: false,
                gameDeleteError: true,
                gameDeleteErrorMessage: action.payload,
            }

        default:
            return state
    }
}