export const ACTION_SESSION_LOGIN_USER_SET = '[userLoginSession] SET'
export const ACTION_SESSION_LOGOUT_SET = '[logoutSession] SET'


export const sessionLoginUserSetAction = user => ({
    type: ACTION_SESSION_LOGIN_USER_SET,
    payload: user
})

export const sessionLogoutSetAction = () => ({
    type: ACTION_SESSION_LOGOUT_SET
})