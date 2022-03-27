import { ACTION_SQUAD_INIT, ACTION_SQUAD_GET_ATTEMPTING, ACTION_SQUAD_GET_SUCCESS, ACTION_SQUAD_GET_ERROR } from "../actions/squadActions"

const initialState = {
    
    currentSquad: "",

    squadsGetAttempting: false,
    squadsGetSuccess: false,
    squadsGetError: false,
    squadsGetErrorMessage: "",
    squads: Array.from({ length: 10 }, (_, i) => "Squad " + i).map(
        (name, index) => {
          return {
            id: index,
            name,
            players: Array.from({ length: 10 }, (_, i) => {
              return {
                name: "Player " + i,
                isAlive: Math.random() * 100 > 50,
              };
            }),
          };
        }
      ),

}

export const squadReducer = (state = initialState, action) => {

    switch (action.type) {

        case ACTION_SQUAD_INIT:
            return {
                ...initialState
            }

        case ACTION_SQUAD_GET_ATTEMPTING:
            return {
                ...state,
                squadsGetAttempting: true,
                squadsGetSuccess: false,
                squadsGetError: false,
                squadsGetErrorMessage: "",
                squads: [],
            }

        case ACTION_SQUAD_GET_SUCCESS:
            return {
                ...state,
                squadsGetAttempting: false,
                squadsGetSuccess: true,
                squads: action.payload,
            }

        case ACTION_SQUAD_GET_ERROR:
            return {
                ...state,
                squadsGetAttempting: false,
                squadsGetError: true,
                squadsGetErrorMessage: action.payload,
            }

            default:
                return state

    }

}