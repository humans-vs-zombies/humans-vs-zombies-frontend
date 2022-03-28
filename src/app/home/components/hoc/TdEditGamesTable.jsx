import { useNavigate } from "react-router-dom";

const TdEditGamesTable = ({ children }) => {

    const navigate = useNavigate();

    const handleEditGameClick = event => {
            navigate("/game/edit")
    }


    return (
        <td className="py-3 text-s text-blue-700 hover:underline lg:text-center" onClick={ handleEditGameClick }>{ children }</td>
    )
}


export default TdEditGamesTable
