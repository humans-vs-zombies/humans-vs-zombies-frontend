import { useDispatch } from "react-redux";
import KeycloakService from "../../../../services/KeycloakService";
import { gameDeleteAttemptAction } from "../../../../store/actions/gameActions";


const TdDeleteGamesTable = ({ children, gameId }) => {

    const dispatch = useDispatch()
    const loggedIn = KeycloakService.getLoggedIn()
    const hasAdminRole = KeycloakService.hasRole(["admin"])

    const handleDeleteGameClick = event => {
        if (loggedIn && hasAdminRole) {
            if (window.confirm("Are you sure you wish to remove this game?")) {
                dispatch(gameDeleteAttemptAction(gameId))   
            }
        }
    }


    return (
        <td className="py-3 text-s text-red-700 hover:underline lg:text-center" onClick={ handleDeleteGameClick }>{ children }</td>
    )
}


export default TdDeleteGamesTable
