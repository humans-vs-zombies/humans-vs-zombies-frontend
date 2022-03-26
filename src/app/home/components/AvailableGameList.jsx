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

    // Style className constants
    const lableStyle = "block text-lg text-gray-700 font-bold mb-2 mt-6"
    const radioBtnContainerStyle = "inline-block"
    const radioBtnStyle = "hidden peer"
    const radioBtnLableStyle = "inline-grid bg-blue-500 hover:bg-blue-700 ml-4 my-4 text-white font-bold py-2 px-4 rounded peer-checked:bg-blue-800 focus:outline-none"
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
                <fieldset>
                    <label className={ lableStyle } htmlFor="participants">Filter:</label>
                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="filterRadioOptions" id="all" value="ALL" onChange={ handleOnBtnClickFilterGames } defaultChecked />
                        <label className={ radioBtnLableStyle } htmlFor="all">All</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="filterRadioOptions" id="configuration" value="CONFIGURATION" onChange={ handleOnBtnClickFilterGames } />
                        <label className={ radioBtnLableStyle } htmlFor="configuration">Configuration</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="filterRadioOptions" id="registration" value="REGISTRATION" onChange={ handleOnBtnClickFilterGames } />
                        <label className={ radioBtnLableStyle } htmlFor="registration">Registration</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="filterRadioOptions" id="in_progress" value="IN_PROGRESS" onChange={ handleOnBtnClickFilterGames } />
                        <label className={ radioBtnLableStyle } htmlFor="in_progress">In progress</label>
                    </div>

                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="filterRadioOptions" id="complete" value="COMPLETE" onChange={ handleOnBtnClickFilterGames } />
                        <label className={ radioBtnLableStyle } htmlFor="complete">Complete</label>
                    </div>
                </fieldset>
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