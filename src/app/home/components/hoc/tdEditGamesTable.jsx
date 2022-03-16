import { useDispatch, useSelector } from "react-redux"

const TdEditGamesTable = ({ children, gameId }) => {

    const { loggedIn, userType } = useSelector(state => state.sessionReducer)

    const handleEditBtnClick = event => {
        if (loggedIn && userType === "admin") {
            console.log("Go to edit page to edit game with id: " + gameId);
        }
    }


    return (
        <td className="py-3 px-6 text-s text-left" onClick={ handleEditBtnClick }>{ children }</td>
    )
}


export default TdEditGamesTable
