import { ACTION_SESSION_LOGIN_ADMIN_SET, ACTION_SESSION_LOGIN_USER_SET, ACTION_SESSION_LOGOUT_SET } from "../actions/sessionActions"


export const sessionMiddleware = () => next => action => {

    next(action)

    const userSessionKey = "user-ls"

    switch (action.type) {
        case ACTION_SESSION_LOGIN_USER_SET:
            localStorage.setItem(userSessionKey, JSON.stringify(action.payload))
            break
        case ACTION_SESSION_LOGIN_ADMIN_SET:
            localStorage.setItem(userSessionKey, JSON.stringify(action.payload))
            break
        case ACTION_SESSION_LOGOUT_SET:
            localStorage.removeItem(userSessionKey)
            break
        default:
            break
    }
}