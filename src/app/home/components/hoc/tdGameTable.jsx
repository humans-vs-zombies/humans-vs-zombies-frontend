import { useDispatch, useSelector } from "react-redux"
import { sessionCurrentGameSetAction } from "../../../../store/actions/sessionActions"

const TdGamesTable = ({ children, gameId }) => {

    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.sessionReducer)

    const handleGameBtnClick = event => {
        if (loggedIn) {
            dispatch(sessionCurrentGameSetAction(gameId))
        }
    }


    return (
        <td className="py-3 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ children }</td>
    )
}


export default TdGamesTable
