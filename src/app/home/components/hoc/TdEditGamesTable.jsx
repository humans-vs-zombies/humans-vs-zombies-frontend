import { useNavigate } from "react-router-dom";

const TdEditGamesTable = ({ children }) => {

    const navigate = useNavigate();

    const handleEditGameClick = event => {
            navigate("/game/edit")
    }


    return (
        <td className="py-3 px-6 text-s text-left text-blue-700 hover:underline" onClick={ handleEditGameClick }>{ children }</td>
    )
}


export default TdEditGamesTable
