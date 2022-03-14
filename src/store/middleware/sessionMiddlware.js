import { ACTION_SESSION_INIT, ACTION_SESSION_LOGIN_ADMIN_SET, ACTION_SESSION_LOGIN_USER_SET, ACTION_SESSION_LOGOUT_SET, sessionLoginAdminSetAction, sessionLoginUserSetAction } from "../actions/sessionActions"


export const sessionMiddleware = ({ dispatch }) => next => action => {

    next(action)

    const userSessionKey = "user-ls"

    switch (action.type) {
        case ACTION_SESSION_INIT:
            const storedUserSession = localStorage.getItem(userSessionKey)
            if (storedUserSession) {
                const userSession = JSON.parse(storedUserSession)
                if (userSession.userType === "user") {
                    dispatch(sessionLoginUserSetAction(userSession))
                }
                else if (userSession.userType === "admin") {
                    dispatch(sessionLoginAdminSetAction(userSession))
                }
            }
            break
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