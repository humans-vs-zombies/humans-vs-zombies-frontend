export const ACTION_SESSION_INIT = '[session] INIT'
export const ACTION_SESSION_LOGIN_USER_SET = '[userLoginSession] SET'
export const ACTION_SESSION_LOGIN_ADMIN_SET = '[adminLoginSession] SET'
export const ACTION_SESSION_LOGOUT_SET = '[logoutSession] SET'
export const ACTION_SESSION_CURRENT_GAME_SET = '[currentGameSession] SET'
export const ACTION_SESSION_CURRENT_SQUAD_SET = '[currentSquadSession] SET'


export const sessionInitAction = () => ({
    type: ACTION_SESSION_INIT
})

export const sessionLoginUserSetAction = user => ({
    type: ACTION_SESSION_LOGIN_USER_SET,
    payload: user
})

export const sessionLoginAdminSetAction = admin => ({
    type: ACTION_SESSION_LOGIN_ADMIN_SET,
    payload: admin
})

export const sessionLogoutSetAction = () => ({
    type: ACTION_SESSION_LOGOUT_SET
})

export const sessionCurrentGameSetAction = gameId => ({
    type: ACTION_SESSION_CURRENT_GAME_SET,
    payload: gameId
})

export const sessionCurrentSquadSetAction = squad => ({
    type: ACTION_SESSION_CURRENT_SQUAD_SET,
    payload: squad
})