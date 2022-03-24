export const ACTION_GAME_INIT = "[game] INIT"

export const ACTION_GAMES_GET_ATTEMPTING = "[getGames] ATTEMPT"
export const ACTION_GAMES_GET_SUCCESS = "[getGames] SUCCESS"
export const ACTION_GAMES_GET_ERROR = "[getGames] ERROR"

export const ACTION_GAME_GET_ATTEMPTING = "[getGame] ATTEMPT"
export const ACTION_GAME_GET_SUCCESS = "[getGame] SUCCESS"
export const ACTION_GAME_GET_ERROR = "[getGame] ERROR"

export const ACTION_GAME_CREATE_ATTEMPTING = "[createGame] ATTEMPT"
export const ACTION_GAME_CREATE_SUCCESS = "[createGame] SUCCESS"
export const ACTION_GAME_CREATE_ERROR = "[createGame] ERROR"

export const ACTION_GAME_DELETE_ATTEMPTING = "[deleteGame] ATTEMPT"
export const ACTION_GAME_DELETE_SUCCESS = "[deleteGame] SUCCESS"
export const ACTION_GAME_DELETE_ERROR = "[deleteGame] ERROR"

// Initial data
export const gameInitAction = () => ({
    type: ACTION_GAME_INIT,
})

// Get games
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

// Get specific game
export const gameGetAttemptAction = id => ({
    type: ACTION_GAME_GET_ATTEMPTING,
    payload: id
})

export const gameGetSuccessAction = game => ({
    type: ACTION_GAME_GET_SUCCESS,
    payload: game
})

export const gameGetErrorAction = error => ({
    type: ACTION_GAME_GET_ERROR,
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
export const gameDeleteAttemptAction = id => ({
    type: ACTION_GAME_DELETE_ATTEMPTING,
    payload: id,
})

export const gameDeleteSuccessAction = id => ({
    type: ACTION_GAME_DELETE_SUCCESS,
    payload: id,
})

export const gameDeleteErrorAction = error => ({
    type: ACTION_GAME_DELETE_ERROR,
    payload: error
})