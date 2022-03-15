export const ACTION_GAMES_GET_ATTEMPTING = "[getGames] ATTEMPT"
export const ACTION_GAMES_GET_SUCCESS = "[getGames] SUCCESS"
export const ACTION_GAMES_GET_ERROR = "[getGames] ERROR"

export const gamesGetAttemptAction = (limit, offset) => ({
    type: ACTION_GAMES_GET_ATTEMPTING,
    payload: limit, offset
})

export const gamesGetSuccessAction = games => ({
    type: ACTION_GAMES_GET_SUCCESS,
    payload: games
})

export const gamesGetErrorAction = error => ({
    type: ACTION_GAMES_GET_ERROR,
    payload: error
})