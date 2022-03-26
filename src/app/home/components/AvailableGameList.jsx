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
    
    useEffect(() => {
        dispatch(gamesGetAttemptAction())
    }, [dispatch])


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
                <button className="bg-blue-500 hover:bg-blue-700 ml-4 my-4 text-white font-bold py-2 px-4 rounded">All</button>
                <button className="bg-blue-500 hover:bg-blue-700 ml-4 my-4 text-white font-bold py-2 px-4 rounded">Configuration</button>
                <button className="bg-blue-500 hover:bg-blue-700 ml-4 my-4 text-white font-bold py-2 px-4 rounded">Registration</button>
                <button className="bg-blue-500 hover:bg-blue-700 ml-4 my-4 text-white font-bold py-2 px-4 rounded">In progress</button>
                <button className="bg-blue-500 hover:bg-blue-700 ml-4 my-4 text-white font-bold py-2 px-4 rounded">Complete</button>
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