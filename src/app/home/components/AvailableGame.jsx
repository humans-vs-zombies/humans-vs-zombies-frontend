import { useDispatch, useSelector } from "react-redux";
import KeycloakService from "../../../services/KeycloakService";
import { sessionCurrentGameSetAction } from "../../../store/actions/sessionActions";
import TdDeleteGamesTable from "./hoc/TdDeleteGamesTable";
import TdEditGamesTable from "./hoc/TdEditGamesTable";
import TdGamesTable from "./hoc/TdGamesTable";
import TdMessageGamesTable from "./hoc/TdMessageGamesTable";

const AvailableGame = ({ index, game }) => {

    const dispatch = useDispatch()
    const loggedIn = KeycloakService.getLoggedIn()
    const hasAdminRole = KeycloakService.hasRole(["admin"])
    const { gamesGetAttempting, gamesGetSuccess, gamesGetError, gamesGetErrorMessage } = useSelector(state => state.gameReducer)

    // Tailwind class-variables
    let rowBg = index % 2 === 0 ? "bg-white" : "bg-gray-100"
    let rowHover = ""
    if (game !== undefined) {
        rowHover = loggedIn && (game.state === "REGISTRATION" || game.state === "IN_PROGRESS") ? "hover:bg-gray-200 cursor-pointer" : ""
    }

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
        }
    }

    // Format table output
    const formattedDateFrom = () => {
        const date = new Date(game.dateFrom);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
        return date.toLocaleDateString('en-EN', options)
    }

    const formattedGameState = () => {
        switch (game.state) {
            case "CONFIGURATION":
                return "Configuration";
            case "REGISTRATION":
                return "Registration";
            case "IN_PROGRESS":
                return "In progress";
            case "COMPLETE":
                return "Complete";
            default: return "-";
        }
    }

    const formattedPertisipants = () => {
        return game.players.length + "/" + game.participants;
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
                    <TdGamesTable gameState={ game.state }>{ game.name }</TdGamesTable>
                    <TdGamesTable gameState={ game.state }>{ formattedDateFrom() }</TdGamesTable>
                    <TdGamesTable gameState={ game.state }>{ formattedPertisipants() }</TdGamesTable>
                    <TdGamesTable gameState={ game.state }>{ formattedGameState() }</TdGamesTable>
                    { loggedIn && hasAdminRole &&
                <>
                    <TdEditGamesTable>Edit</TdEditGamesTable>
                    <TdDeleteGamesTable gameId={ game.id }>Delete</TdDeleteGamesTable>
                </>
                    }
                </>
                }
                </TrGamesTable>
            </tbody>
        </>
    )
}


export default AvailableGame
