import { useDispatch, useSelector } from "react-redux";
import { sessionCurrentGameSetAction } from "../../../store/actions/sessionActions";
import TdGamesTable from "./hoc/tdGameTable";
import TdMessageGamesTable from "./hoc/tdMessageGamesTable";

const AvailableGame = ({ index, game }) => {

    const { loggedIn } = useSelector(state => state.sessionReducer)
    const { gamesGetAttempting, gamesGetSuccess, gamesGetError, gamesGetErrorMessage } = useSelector(state => state.gameReducer)

    // Tailwind class-variables
    let rowBg = index % 2 === 0 ? "bg-white" : "bg-gray-100"
    let rowHover = loggedIn ? "hover:bg-gray-200 cursor-pointer" : ""

    const TrGamesTable = ({ children }) => {
        return (
            <>
                { (
                    gamesGetAttempting ||
                    (gamesGetSuccess && game === undefined) ||
                    gamesGetError
                    ) && 
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
                { gamesGetError &&
                    <TdMessageGamesTable>{ gamesGetErrorMessage }</TdMessageGamesTable>
                }
                { gamesGetSuccess && game !== undefined &&
                <>
                    <TdGamesTable gameId={ game.id }>{ game.title }</TdGamesTable>
                    <TdGamesTable gameId={ game.id }>{ game.date }</TdGamesTable>
                    <TdGamesTable gameId={ game.id }>{ game.participants }</TdGamesTable>
                    <TdGamesTable gameId={ game.id }>{ game.state }</TdGamesTable>
                </>
                }
                </TrGamesTable>
            </tbody>
        </>
    )
}


export default AvailableGame
