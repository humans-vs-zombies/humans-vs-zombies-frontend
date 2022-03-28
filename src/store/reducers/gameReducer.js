import { ACTION_GAME_DELETE_ATTEMPTING, ACTION_GAME_DELETE_ERROR, ACTION_GAME_DELETE_SUCCESS, ACTION_GAMES_GET_ATTEMPTING, ACTION_GAMES_GET_ERROR, ACTION_GAMES_GET_SUCCESS, ACTION_GAME_CREATE_ATTEMPTING, ACTION_GAME_CREATE_ERROR, ACTION_GAME_CREATE_SUCCESS, ACTION_GAME_INIT, ACTION_GAME_GET_SPECIFIC_ATTEMPTING, ACTION_GAME_GET_SPECIFIC_SUCCESS, ACTION_GAME_GET_SPECIFIC_ERROR, ACTION_GAME_UPDATE_ATTEMPTING, ACTION_GAME_UPDATE_SUCCESS, ACTION_GAME_UPDATE_ERROR, ACTION_GAME_NEXT_STATE_UPDATE_ERROR, ACTION_GAME_NEXT_STATE_UPDATE_SUCCESS, ACTION_GAME_NEXT_STATE_UPDATE_ATTEMPTING } from "../actions/gameActions"

const initialState = {
    gamesGetAttempting: false,
    gamesGetSuccess: false,
    gamesGetError: false,
    gamesGetErrorMessage: "",
    gamesGetNoMoreGamesToFetch: false,
    games: [],

    gameGetSpecificAttempting: false,
    gameGetSpecificSuccess: false,
    gameGetSpecificError: false,
    gameGetSpecificErrorMessage: "",
    currentGame: {
        title: "",
        description: "",
        dateFrom: "",
        dateTo: "",
        participants: "",
        state: "",
    },

    gameCreateAttempting: false,
    gameCreateSuccess: false,
    gameCreateError: false,
    gameCreateErrorMessage: "",

    gameUpdateAttempting: false,
    gameUpdateSuccess: false,
    gameUpdateError: false,
    gameUpdateErrorMessage: "",

    gameNextStateUpdateAttempting: false,
    gameNextStateUpdateSuccess: false,
    gameNextStateUpdateError: false,
    gameNextStateUpdateErrorMessage: "",

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

        // Get games
        case ACTION_GAMES_GET_ATTEMPTING:
            return {
                ...state,
                gamesGetAttempting: true,
                gamesGetSuccess: false,
                gamesGetError: false,
                gamesGetErrorMessage: "",
            }

        case ACTION_GAMES_GET_SUCCESS:
            if (action.payload === []) {
                return {
                    ...state,
                    gamesGetAttempting: false,
                    gamesGetSuccess: true,
                    gamesGetNoMoreGamesToFetch: true,
                }   
            }
            else if (action.payload.length < 20) {
                return {
                    ...state,
                    gamesGetAttempting: false,
                    gamesGetSuccess: true,
                    gamesGetNoMoreGamesToFetch: true,
                    games: [...state.games, ...action.payload]
                }
            }
            else {
                return {
                    ...state,
                    gamesGetAttempting: false,
                    gamesGetSuccess: true,
                    games: [...state.games, ...action.payload]
                }
            }

        case ACTION_GAMES_GET_ERROR:
            return {
                ...state,
                gamesGetAttempting: false,
                gamesGetError: true,
                gamesGetErrorMessage: action.payload,
            }

        // Get specific game
        case ACTION_GAME_GET_SPECIFIC_ATTEMPTING:
            return {
                ...state,
                gameGetSpecificAttempting: true,
                gameGetSpecificSuccess: false,
                gameGetSpecificError: false,
                gameGetSpecificErrorMessage: "",
                currentGame: initialState,
            }
        
        case ACTION_GAME_GET_SPECIFIC_SUCCESS:
            let fetchedGame = action.payload;
            return {
                ...state,
                gameGetSpecificAttempting: false,
                gameGetSpecificSuccess: true,
                currentGame: {
                    title: fetchedGame.name,
                    description: fetchedGame.description,
                    dateFrom: fetchedGame.dateFrom,
                    dateTo: fetchedGame.dateTo,
                    participants: fetchedGame.participants,
                    state: fetchedGame.state,
                },
            }
        
        case ACTION_GAME_GET_SPECIFIC_ERROR:
            return {
                ...state,
                gameGetSpecificAttempting: false,
                gameGetSpecificError: true,
                gameGetSpecificErrorMessage: action.payload,
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

        // Update
        case ACTION_GAME_UPDATE_ATTEMPTING:
            return {
                ...state,
                gameUpdateAttempting: true,
                gameUpdateSuccess: false,
                gameUpdateError: false,
                gameUpdateErrorMessage: "",
            }

        case ACTION_GAME_UPDATE_SUCCESS:
            return {
                ...state,
                gameUpdateAttempting: false,
                gameUpdateSuccess: true,
            }

        case ACTION_GAME_UPDATE_ERROR:
            return {
                ...state,
                gameUpdateAttempting: false,
                gameUpdateError: true,
                gameUpdateErrorMessage: action.payload,
            }

        // Update next game state
        case ACTION_GAME_NEXT_STATE_UPDATE_ATTEMPTING:
            return {
                ...state,
                gameNextStateUpdateAttempting: true,
                gameNextStateUpdateSuccess: false,
                gameNextStateUpdateError: false,
                gameNextStateUpdateErrorMessage: "",
            }

        case ACTION_GAME_NEXT_STATE_UPDATE_SUCCESS:
            return {
                ...state,
                gameNextStateUpdateAttempting: false,
                gameNextStateUpdateSuccess: true,
            }

        case ACTION_GAME_NEXT_STATE_UPDATE_ERROR:
            return {
                ...state,
                gameNextStateUpdateAttempting: false,
                gameNextStateUpdateError: true,
                gameNextStateUpdateErrorMessage: action.payload,
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