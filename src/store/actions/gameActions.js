export const ACTION_GAME_INIT = "[game] INIT"

export const ACTION_GAMES_GET_ATTEMPTING = "[getGames] ATTEMPT"
export const ACTION_GAMES_GET_SUCCESS = "[getGames] SUCCESS"
export const ACTION_GAMES_GET_ERROR = "[getGames] ERROR"

export const ACTION_GAME_CREATE_ATTEMPTING = "[createGame] ATTEMPT"
export const ACTION_GAME_CREATE_SUCCESS = "[createGame] SUCCESS"
export const ACTION_GAME_CREATE_ERROR = "[createGame] ERROR"

export const ACTION_GAMES_DELETE_ATTEMPTING = "[deleteGames] ATTEMPT"
export const ACTION_GAMES_DELETE_SUCCESS = "[deleteGames] SUCCESS"
export const ACTION_GAMES_DELETE_ERROR = "[deleteGames] ERROR"

// Initial data
export const gameInitAction = () => ({
    type: ACTION_GAME_INIT,
})

// Get
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

// Create
export const gameCreateAttemptAction = game => ({
    type: ACTION_GAME_CREATE_ATTEMPTING,
    payload: game
})

export const gameCreateSuccessAction = () => ({
    type: ACTION_GAME_CREATE_SUCCESS,
})

export const gameCreateErrorAction = error => ({
    type: ACTION_GAME_CREATE_ERROR,
    payload: error
})

// Delete
export const gamesDeleteAttemptAction = id => ({
    type: ACTION_GAMES_DELETE_ATTEMPTING,
    payload: id,
})

export const gamesDeleteSuccessAction = id => ({
    type: ACTION_GAMES_DELETE_SUCCESS,
    payload: id,
})

export const gamesDeleteErrorAction = error => ({
    type: ACTION_GAMES_DELETE_ERROR,
    payload: error
})