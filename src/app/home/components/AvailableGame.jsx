import { useDispatch } from "react-redux";
import KeycloakService from "../../../services/KeycloakService";
import { gameGetSpecificAttemptAction } from "../../../store/actions/gameActions";
import { sessionCurrentGameSetAction } from "../../../store/actions/sessionActions";
import TdDeleteGamesTable from "./hoc/TdDeleteGamesTable";
import TdEditGamesTable from "./hoc/TdEditGamesTable";
import TdGamesTable from "./hoc/TdGamesTable";

const AvailableGame = ({ index, game }) => {

    const dispatch = useDispatch()
    const loggedIn = KeycloakService.getLoggedIn()
    const hasAdminRole = KeycloakService.hasRole(["admin"])

    // Tailwind class-variables
    let rowBg = index % 2 === 0 ? "bg-white" : "bg-gray-100"
    let rowGridCols = loggedIn ? "grid-cols-[auto,_270px,_120px,_120px,_80px,_80px]" : "grid-cols-[auto,_270px,_120px,_120px]"
    let rowHover = loggedIn && (game.state === "REGISTRATION" || game.state === "IN_PROGRESS") ? "hover:bg-gray-200 cursor-pointer" : ""

    // Event handlers
    const handleRowClick = event => {
        if (loggedIn) {
            dispatch(sessionCurrentGameSetAction(game.id))
            dispatch(gameGetSpecificAttemptAction(game.id))
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

    // Local component
    const TrGamesTable = ({ children }) => {
        return (
            <>
                <tr className={`border grid ${rowGridCols} gap-4 px-4 ${rowBg} ${rowHover}`} onClick={ handleRowClick }>
                    { children }
                </tr>
            </>
        )
    }


    return (
        <>
            <TrGamesTable>
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
            </TrGamesTable>
        </>
    )
}


export default AvailableGame
