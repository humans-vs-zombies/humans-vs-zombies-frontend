import { useNavigate } from "react-router-dom"
import KeycloakService from "../../../../services/KeycloakService";


const TdGamesTable = ({ children, gameState }) => {

    const loggedIn = KeycloakService.getLoggedIn()
    const navigate = useNavigate();

    const handleGameClick = event => {
        if (loggedIn && (gameState === "REGISTRATION" || gameState === "IN_PROGRESS")) {
            navigate("/game")
        }
    }

    
    return (
        <td className="py-3 px-6 text-s text-left" onClick={ handleGameClick }>{ children }</td>
    )
}


export default TdGamesTable
