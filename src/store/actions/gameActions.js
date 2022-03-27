export const ACTION_GAME_INIT = "[game] INIT"

export const ACTION_GAMES_GET_ATTEMPTING = "[getGames] ATTEMPT"
export const ACTION_GAMES_GET_SUCCESS = "[getGames] SUCCESS"
export const ACTION_GAMES_GET_ERROR = "[getGames] ERROR"

export const ACTION_GAME_GET_SPECIFIC_ATTEMPTING = "[getSpecificGame] ATTEMPT"
export const ACTION_GAME_GET_SPECIFIC_SUCCESS = "[getSpecificGame] SUCCESS"
export const ACTION_GAME_GET_SPECIFIC_ERROR = "[getSpecificGame] ERROR"

export const ACTION_GAME_CREATE_ATTEMPTING = "[createGame] ATTEMPT"
export const ACTION_GAME_CREATE_SUCCESS = "[createGame] SUCCESS"
export const ACTION_GAME_CREATE_ERROR = "[createGame] ERROR"

export const ACTION_GAME_UPDATE_ATTEMPTING = "[updateGame] ATTEMPT"
export const ACTION_GAME_UPDATE_SUCCESS = "[updateGame] SUCCESS"
export const ACTION_GAME_UPDATE_ERROR = "[updateGame] ERROR"

export const ACTION_GAME_NEXT_STATE_UPDATE_ATTEMPTING = "[updateNextGameState] ATTEMPT"
export const ACTION_GAME_NEXT_STATE_UPDATE_SUCCESS = "[updateNextGameState] SUCCESS"
export const ACTION_GAME_NEXT_STATE_UPDATE_ERROR = "[updateNextGameState] ERROR"

export const ACTION_GAME_DELETE_ATTEMPTING = "[deleteGame] ATTEMPT"
export const ACTION_GAME_DELETE_SUCCESS = "[deleteGame] SUCCESS"
export const ACTION_GAME_DELETE_ERROR = "[deleteGame] ERROR"

// Initial data
export const gameInitAction = () => ({
    type: ACTION_GAME_INIT,
})

// Get games
export const gamesGetAttemptAction = (limit, offset, state) => ({
    type: ACTION_GAMES_GET_ATTEMPTING,
    limit: limit,
    offset: offset,
    state: state,
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
export const gameGetSpecificAttemptAction = id => ({
    type: ACTION_GAME_GET_SPECIFIC_ATTEMPTING,
    payload: id
})

export const gameGetSpecificSuccessAction = game => ({
    type: ACTION_GAME_GET_SPECIFIC_SUCCESS,
    payload: game
})

export const gameGetSpesificErrorAction = error => ({
    type: ACTION_GAME_GET_SPECIFIC_ERROR,
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

// Update
export const gameUpdateAttemptAction = (id, game, goToNextState) => ({
    type: ACTION_GAME_UPDATE_ATTEMPTING,
    id: id,
    game: game,
    goToNextState: goToNextState,
})

export const gameUpdateSuccessAction = () => ({
    type: ACTION_GAME_UPDATE_SUCCESS,
})

export const gameUpdateErrorAction = error => ({
    type: ACTION_GAME_UPDATE_ERROR,
    payload: error
})

// Update next state
export const gameNextStateUpdateAttemptAction = id => ({
    type: ACTION_GAME_NEXT_STATE_UPDATE_ATTEMPTING,
    payload: id,
})

export const gameNextStateUpdateSuccessAction = () => ({
    type: ACTION_GAME_NEXT_STATE_UPDATE_SUCCESS,
})

export const gameNextStateUpdateErrorAction = error => ({
    type: ACTION_GAME_NEXT_STATE_UPDATE_ERROR,
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