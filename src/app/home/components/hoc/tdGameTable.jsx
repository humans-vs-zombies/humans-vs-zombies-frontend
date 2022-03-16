import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const TdGamesTable = ({ children }) => {

    const { loggedIn } = useSelector(state => state.sessionReducer)
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
