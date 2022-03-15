import { useDispatch, useSelector } from "react-redux";
import { sessionCurrentGameSetAction } from "../../../store/actions/sessionActions";

const AvailableGame = ({ index, game }) => {

    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.sessionReducer)

    // Tailwind class-variables
    let rowBg = index % 2 === 0 ? "bg-white" : "bg-gray-100"
    let rowHover = loggedIn ? "hover:bg-gray-200 cursor-pointer" : ""

    const handleGameBtnClick = event => {
        dispatch(sessionCurrentGameSetAction(game.id))
    }

    return (
        <>
            <tbody>
                <tr className={`border ${rowBg} ${rowHover}`}>
                    <td className="py-2 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ game.title }</td>
                    <td className="py-2 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ game.date }</td>
                    <td className="py-2 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ game.participants}</td>
                    <td className="py-2 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ game.state }</td>
                </tr>
            </tbody>
        </>
    )
}


export default AvailableGame
