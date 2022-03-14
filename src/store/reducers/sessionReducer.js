import { ACTION_SESSION_LOGIN_USER_SET } from "../actions/sessionActions"


const initialState = {
    user: "",
    loggedIn: false,
    userType: ""
}


export const sessionReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_SESSION_LOGIN_USER_SET:
            return {
                ...state,
                user: action.payload,
                loggedIn: true,
                userType: "user"
            }
        default:
            return state
    }
}