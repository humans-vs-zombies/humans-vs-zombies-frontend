import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import KeycloakService from "../../../services/KeycloakService"
import { gamesGetAttemptAction } from "../../../store/actions/gameActions"
import AvailableGame from "./AvailableGame"
import ThGamesTable from "./hoc/ThGamesTable"

const AvailableGameList = () => {

    const dispatch = useDispatch()
    const loggedIn = KeycloakService.getLoggedIn()
    const hasAdminRole = KeycloakService.hasRole(["admin"])
    const { gamesGetAttempting, gamesGetSuccess, gamesGetError, games } = useSelector(state => state.gameReducer)
    const filterBtnStyle = "bg-blue-500 hover:bg-blue-700 ml-4 my-4 text-white font-bold py-2 px-4 rounded"
    
    useEffect(() => {
        dispatch(gamesGetAttemptAction())
    }, [dispatch])

    const handleOnBtnClickFilterGames = ({ target }) => {
        console.log("Get filtered games: " + target.value);
        dispatch(gamesGetAttemptAction(target.value))
    }

    const TbodyGamesTable = () => {
        return (
            <>
                { (
                    gamesGetAttempting ||
                    (gamesGetSuccess && (games.length === 0)) ||
                    gamesGetError
                ) &&
                    <AvailableGame index={ 0 }/>
                }
                { gamesGetSuccess && (games.length > 0) && games.map((game, index) => 
                    <AvailableGame
                        key={ index }
                        game={ game }
                        index={ index }/>
                ) }
            </>
        )
    }


    return (
        <>
            <main>
                <h2>Available games</h2>
                <button className={ filterBtnStyle } value="ALL" onClick={ handleOnBtnClickFilterGames }>All</button>
                <button className={ filterBtnStyle } value="CONFIGURATION" onClick={ handleOnBtnClickFilterGames }>Configuration</button>
                <button className={ filterBtnStyle } value="REGISTRATION" onClick={ handleOnBtnClickFilterGames }>Registration</button>
                <button className={ filterBtnStyle } value="IN_PROGRESS" onClick={ handleOnBtnClickFilterGames }>In progress</button>
                <button className={ filterBtnStyle } value="COMPLETE" onClick={ handleOnBtnClickFilterGames }>Complete</button>
                <table className="border-collapse border-4 min-w-full">
                    <thead className="bg-gray-100">
                        <tr className="border-2">
                            <ThGamesTable>Title</ThGamesTable>
                            <ThGamesTable>Date</ThGamesTable>
                            <ThGamesTable>Participants</ThGamesTable>
                            <ThGamesTable>State</ThGamesTable>
                            { loggedIn && hasAdminRole && !gamesGetError && (games.length > 0) &&
                        <>
                            <ThGamesTable></ThGamesTable>
                            <ThGamesTable></ThGamesTable>
                        </>
                            }
                        </tr>
                    </thead>
                    <TbodyGamesTable />
                </table>
            </main>
        </>
    )
}


export default AvailableGameList