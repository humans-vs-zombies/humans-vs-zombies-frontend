import { useDispatch, useSelector } from "react-redux";
import { sessionCurrentGameSetAction } from "../../../store/actions/sessionActions";
import TdMessageGamesTable from "./hoc/tdMessageGamesTable";

const AvailableGame = ({ index, game }) => {

    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.sessionReducer)
    const { gamesGetAttempting, gamesGetSuccess, gamesGetError } = useSelector(state => state.gameReducer)

    // Tailwind class-variables
    let rowBg = index % 2 === 0 ? "bg-white" : "bg-gray-100"
    let rowHover = loggedIn ? "hover:bg-gray-200 cursor-pointer" : ""

    const handleGameBtnClick = event => {
        if (loggedIn) {
            dispatch(sessionCurrentGameSetAction(game.id))
        }
    }

    const TrGamesTable = ({ children }) => {
        return (
            <>
                { (gamesGetAttempting ||
                  (gamesGetSuccess && game === undefined)) && 
                    <tr className={`border ${rowBg}`}>
                        { children }
                    </tr>
                }
                { gamesGetSuccess && game !== undefined &&
                    <tr className={`border ${rowBg} ${rowHover}`}>
                        { children }
                    </tr>
                }
            </>
        )
    }

    return (
        <>
            <tbody>
                <TrGamesTable>
                { gamesGetAttempting &&
                    <TdMessageGamesTable>Loading...</TdMessageGamesTable>
                }
                { gamesGetSuccess && game === undefined &&
                    <TdMessageGamesTable>No games found</TdMessageGamesTable>
                }
                { gamesGetSuccess && game !== undefined &&
                <>
                    <td className="py-3 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ game.title }</td>
                    <td className="py-3 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ game.date }</td>
                    <td className="py-3 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ game.participants}</td>
                    <td className="py-3 px-6 text-s text-left" onClick={ handleGameBtnClick }>{ game.state }</td>
                </>
                }
                </TrGamesTable>
            </tbody>
        </>
    )
}


export default AvailableGame
