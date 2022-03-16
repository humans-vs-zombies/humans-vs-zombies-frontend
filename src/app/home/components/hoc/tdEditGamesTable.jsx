import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TdEditGamesTable = ({ children }) => {

    const { loggedIn, userType } = useSelector(state => state.sessionReducer)
    const navigate = useNavigate();

    const handleEditGameClick = event => {
        if (loggedIn && userType === "admin") {
            navigate("/game/edit")
        }
    }


    return (
        <td className="py-3 px-6 text-s text-left text-blue-700 hover:underline" onClick={ handleEditGameClick }>{ children }</td>
    )
}


export default TdEditGamesTable
