import { ACTION_GAME_DELETE_ATTEMPTING, ACTION_GAME_DELETE_ERROR, ACTION_GAME_DELETE_SUCCESS, ACTION_GAMES_GET_ATTEMPTING, ACTION_GAMES_GET_ERROR, ACTION_GAMES_GET_SUCCESS, ACTION_GAME_CREATE_ATTEMPTING, ACTION_GAME_CREATE_ERROR, ACTION_GAME_CREATE_SUCCESS, ACTION_GAME_INIT } from "../actions/gameActions"

const initialState = {
    gamesGetAttempting: false,
    gamesGetSuccess: false,
    gamesGetError: false,
    gamesGetErrorMessage: "",
    games: [],

    gameCreateAttempting: false,
    gameCreateSuccess: false,
    gameCreateError: false,
    gameCreateErrorMessage: "",

    gameDeleteAttempting: false,
    gameDeleteSuccess: false,
    gameDeleteError: false,
    gameDeleteErrorMessage: "",
}


export const gameReducer = (state = initialState, action) => {
    
    switch (action.type) {
        // Init
        case ACTION_GAME_INIT:
            return {
                ...initialState
            }

        // Get
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

        // Create
        case ACTION_GAME_CREATE_ATTEMPTING:
            return {
                ...state,
                gameCreateAttempting: true,
                gameCreateSuccess: false,
                gameCreateError: false,
                gameCreateErrorMessage: "",
            }

        case ACTION_GAME_CREATE_SUCCESS:
            return {
                ...state,
                gameCreateAttempting: false,
                gameCreateSuccess: true,
            }

        case ACTION_GAME_CREATE_ERROR:
            return {
                ...state,
                gameCreateAttempting: false,
                gameCreateError: true,
                gameCreateErrorMessage: action.payload,
            }

        // Delete
        case ACTION_GAME_DELETE_ATTEMPTING:
            return {
                ...state,
                gameDeleteAttempting: true,
                gameDeleteSuccess: false,
                gameDeleteError: false,
                gameDeleteErrorMessage: "",
            }

        case ACTION_GAME_DELETE_SUCCESS:
            return {
                ...state,
                gameDeleteAttempting: false,
                gameDeleteSuccess: true,
                games: state.games.filter(game => game.id !== action.payload),
            }

        case ACTION_GAME_DELETE_ERROR:
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