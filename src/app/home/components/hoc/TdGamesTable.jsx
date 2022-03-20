import { useNavigate } from "react-router-dom"
import UserService from "../../../../services/UserService";


const TdGamesTable = ({ children }) => {

    const loggedIn = UserService.getLoggedIn()
    const navigate = useNavigate();

    const handleGameClick = event => {
        if (loggedIn) {
            navigate("/game")   
        }
    }

    
    return (
        <td className="py-3 px-6 text-s text-left" onClick={ handleGameClick }>{ children }</td>
    )
}


export default TdGamesTable
