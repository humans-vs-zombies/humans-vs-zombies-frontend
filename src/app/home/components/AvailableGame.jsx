import { useDispatch, useSelector } from "react-redux";
import { sessionCurrentGameSetAction } from "../../../store/actions/sessionActions";
import TdEditGamesTable from "./hoc/tdEditGamesTable";
import TdGamesTable from "./hoc/tdGameTable";
import TdMessageGamesTable from "./hoc/tdMessageGamesTable";

const AvailableGame = ({ index, game }) => {

    const dispatch = useDispatch()
    const { loggedIn, userType } = useSelector(state => state.sessionReducer)
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
                    <tr className={`border ${rowBg}`} onClick={ handleRowClick }>
                        { children }
                    </tr>
                }
                { gamesGetSuccess && game !== undefined &&
                    <tr className={`border ${rowBg} ${rowHover}`} onClick={ handleRowClick }>
                        { children }
                    </tr>
                }
            </>
        )
    }

    const handleRowClick = event => {
        if (loggedIn) {
            dispatch(sessionCurrentGameSetAction(game.id))
            console.log("Row clicked");
        }
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
                    <TdGamesTable>{ game.title }</TdGamesTable>
                    <TdGamesTable>{ game.date }</TdGamesTable>
                    <TdGamesTable>{ game.participants }</TdGamesTable>
                    <TdGamesTable>{ game.state }</TdGamesTable>
                    { loggedIn && userType === "admin" &&
                        <TdEditGamesTable>Edit</TdEditGamesTable>
                    }
                </>
                }
                </TrGamesTable>
            </tbody>
        </>
    )
}


export default AvailableGame
