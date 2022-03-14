export const ACTION_SESSION_LOGIN_USER_SET = '[userLoginSession] SET'


export const sessionLoginUserSetAction = user => ({
    type: ACTION_SESSION_LOGIN_USER_SET,
    payload: user
})