export const ACTION_SQUAD_INIT = "[squad] INIT"

export const ACTION_SQUAD_GET_ATTEMPTING = "[getGames] ATTEMPT"
export const ACTION_SQUAD_GET_SUCCESS = "[getGames] SUCCESS"
export const ACTION_SQUAD_GET_ERROR = "[getGames] ERROR"

export const squadInitAction = () => ({
    type: ACTION_SQUAD_INIT,
})

export const squadsGetAttemptAction = gameId => ({
    type: ACTION_SQUAD_GET_ATTEMPTING,
    gameId
})

export const squadsGetSuccessAction = squads => ({
    type: ACTION_SQUAD_GET_SUCCESS,
    payload: squads
})

export const squadsGetErrorAction = error => ({
    type: ACTION_SQUAD_GET_ERROR,
    payload: error
})