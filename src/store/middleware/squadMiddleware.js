import { SquadAPI } from "../../api/SquadAPI";
import { ACTION_SQUAD_GET_ATTEMPTING, squadsGetErrorAction, squadsGetSuccessAction } from "../actions/squadActions";

export const squadMiddleware = ({ dispatch }) => next => action => {


    switch (action.state) {

        case ACTION_SQUAD_GET_ATTEMPTING:
            
            SquadAPI.getSquadsFilteredByGameId(action.gameId).then(res => {
                dispatch(squadsGetSuccessAction(res.data.payload))
            })
            .catch((error) => {
                dispatch(squadsGetErrorAction("Unable to fetch squad (" + error.message + ")"))
            });
            break

        default:
            break

    }

}
