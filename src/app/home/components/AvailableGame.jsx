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
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString('en-EN', options)
    }

    const formattedGameState = () => {
        let gameState = "-"
        switch (game.state) {
            case "CONFIGURATION":
                gameState = "Configuration";
            case "REGISTRATION":
                gameState = "Registration";
            case "IN PROGRESS":
                gameState = "In progress";
            case "COMPLETE":
                gameState = "Complete";               
        }

        return gameState;
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
                    <TdGamesTable>{ game.name }</TdGamesTable>
                    <TdGamesTable>{ formattedDateFrom() }</TdGamesTable>
                    <TdGamesTable>{ formattedPertisipants() }</TdGamesTable>
                    <TdGamesTable>{ formattedGameState() }</TdGamesTable>
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
