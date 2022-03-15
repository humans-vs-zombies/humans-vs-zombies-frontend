import { useDispatch } from "react-redux";
import { sessionCurrentGameSetAction } from "../../../store/actions/sessionActions";

const AvailableGame = ({ index, game }) => {

    const dispatch = useDispatch()

    // Tailwind class-variables
    let rowBg = index % 2 === 0 ? "" : "bg-gray-100"

    const handleGameBtnClick = event => {
        dispatch(sessionCurrentGameSetAction(game.id))
    }

    return (
        <>
            <tbody>
                <tr className={`border ${rowBg} hover:bg-gray-200 cursor-pointer`}>
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
