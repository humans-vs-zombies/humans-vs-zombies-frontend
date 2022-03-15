import { ACTION_GAMES_GET_ATTEMPTING, ACTION_GAMES_GET_ERROR, ACTION_GAMES_GET_SUCCESS } from "../actions/gameActions"

const initialState = {
    gamesGetAttempting: false,
    gamesGetSuccess: false,
    gamesGetError: ""
}


export const gameReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ACTION_GAMES_GET_ATTEMPTING:
            return {
                ...state,
                gamesGetAttempting: true,
                gamesGetSuccess: false,
                gamesGetError: "",
            }

        case ACTION_GAMES_GET_SUCCESS:
            return {
                ...state,
                gamesGetAttempting: false,
                gamesGetSuccess: true,
                //...initialState?
            }

        case ACTION_GAMES_GET_ERROR:
            return {
                ...state,
                gamesGetAttempting: false,
                gamesGetError: action.payload,
            }

        default:
            return state
    }
}