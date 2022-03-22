import { useDispatch } from "react-redux";
import KeycloakService from "../../../../services/KeycloakService";
import { gamesDeleteAttemptAction } from "../../../../store/actions/gameActions";


const TdDeleteGamesTable = ({ children, gameId }) => {

    const dispatch = useDispatch()
    const loggedIn = KeycloakService.getLoggedIn()
    const hasAdminRole = KeycloakService.hasRole(["admin"])

    const handleDeleteGameClick = event => {
        if (loggedIn && hasAdminRole) {
            console.log("Delete game with id: " + gameId);
            dispatch(gamesDeleteAttemptAction(gameId))
        }
    }


    return (
        <td className="py-3 px-6 text-s text-left text-red-700 hover:underline" onClick={ handleDeleteGameClick }>{ children }</td>
    )
}


export default TdDeleteGamesTable
