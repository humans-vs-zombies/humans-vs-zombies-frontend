import { useSelector } from "react-redux";

const TdDeleteGamesTable = ({ children, gameId }) => {

    const { loggedIn, userType } = useSelector(state => state.sessionReducer)

    const handleDeleteGameClick = event => {
        if (loggedIn && userType === "admin") {
            console.log("Delete game with id: " + gameId);
        }
    }


    return (
        <td className="py-3 px-6 text-s text-left text-red-700 hover:underline" onClick={ handleDeleteGameClick }>{ children }</td>
    )
}


export default TdDeleteGamesTable
