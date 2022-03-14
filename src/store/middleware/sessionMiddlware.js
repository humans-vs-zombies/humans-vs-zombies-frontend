import { ACTION_SESSION_LOGIN_USER_SET } from "../actions/sessionActions"


export const sessionMiddleware = () => next => action => {

    next(action)

    const userSessionKey = "user-ls"

    switch (action.type) {
        case ACTION_SESSION_LOGIN_USER_SET:
            localStorage.setItem(userSessionKey, JSON.stringify(action.payload))
            break
        default:
            break
    }
}