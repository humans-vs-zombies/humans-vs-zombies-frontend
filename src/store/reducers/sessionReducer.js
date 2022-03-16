import { ACTION_SESSION_CURRENT_GAME_SET, ACTION_SESSION_LOGIN_ADMIN_SET, ACTION_SESSION_LOGIN_USER_SET, ACTION_SESSION_LOGOUT_SET } from "../actions/sessionActions"


const initialState = {
    user: "",
    loggedIn: false,
    userType: "",
    currentGame: "",
}


export const sessionReducer = (state = initialState, action) => {

    const userTypes = {
        USER: "user",
        ADMIN: "admin"
    }

    switch (action.type) {
        case ACTION_SESSION_LOGIN_USER_SET:
            return {
                ...state,
                user: action.payload,
                loggedIn: true,
                userType: userTypes.USER
            }

        case ACTION_SESSION_LOGIN_ADMIN_SET:
            return {
                ...state,
                user: action.payload,
                loggedIn: true,
                userType: userTypes.ADMIN
            }

        case ACTION_SESSION_LOGOUT_SET:
            return {
                ...initialState
            }

        case ACTION_SESSION_CURRENT_GAME_SET:
            return {
                ...state,
                currentGame: action.payload
            }

        default:
            return state
    }
}