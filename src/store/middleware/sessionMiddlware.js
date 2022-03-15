import { ACTION_SESSION_CURRENT_GAME_SET, ACTION_SESSION_INIT, ACTION_SESSION_LOGIN_ADMIN_SET, ACTION_SESSION_LOGIN_USER_SET, ACTION_SESSION_LOGOUT_SET, sessionLoginAdminSetAction, sessionLoginUserSetAction, sessionCurrentGameSetAction } from "../actions/sessionActions"


export const sessionMiddleware = ({ dispatch }) => next => action => {

    next(action)

    const userSessionKey = "user-ls"
    const currentGameSessionKey = "currentGame-ls"

    switch (action.type) {
        case ACTION_SESSION_INIT:
            // If there is a user in localstorage, then set state for loggedin user
            const storedUserSession = localStorage.getItem(userSessionKey)
            if (storedUserSession) {
                const userSession = JSON.parse(storedUserSession)
                if (userSession.userType === "user") {
                    dispatch(sessionLoginUserSetAction(userSession))
                }
                else if (userSession.userType === "admin") {
                    dispatch(sessionLoginAdminSetAction(userSession))
                }
                // If there is a current game in localstorage, then set state for current game
                const storedCurrentGameSession = localStorage.getItem(currentGameSessionKey)
                if (storedCurrentGameSession) {
                    const currentGameSession = JSON.parse(storedCurrentGameSession)
                    dispatch(sessionCurrentGameSetAction(currentGameSession))
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
            localStorage.removeItem(currentGameSessionKey)
            localStorage.removeItem(userSessionKey)
            break

        case ACTION_SESSION_CURRENT_GAME_SET:
            localStorage.setItem(currentGameSessionKey, JSON.stringify(action.payload))
            break
            
        default:
            break
    }
}