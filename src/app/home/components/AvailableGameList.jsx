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
    const radioBtnContainerStyle = "inline-block"
    const radioBtnStyle = "hidden peer"
    const radioBtnLableStyle = "inline-grid bg-blue-500 hover:bg-blue-700 ml-4 my-1 text-white font-bold py-2 px-4 rounded peer-checked:bg-blue-800 focus:outline-none"
    
    useEffect(() => {
        dispatch(gamesGetAttemptAction())
    }, [dispatch])

    const handleOnBtnClickFilterGames = ({ target }) => {
        dispatch(gamesGetAttemptAction(target.value))
    }

    // Event handler
    const handleScroll = event => {
        const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
        if (bottom) {
            console.log("At bottom, refresh more games!");
        }
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
                    <label className="block text-lg mb-2 mt-6" htmlFor="participants">Filter:</label>
                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="filterRadioOptions" id="all" value="ALL" onChange={ handleOnBtnClickFilterGames } defaultChecked />
                        <label className={ radioBtnLableStyle } htmlFor="all">All</label>
                    </div>

                    { hasAdminRole &&
                    <div className={ radioBtnContainerStyle }>
                        <input className={ radioBtnStyle } type="radio" name="filterRadioOptions" id="configuration" value="CONFIGURATION" onChange={ handleOnBtnClickFilterGames } />
                        <label className={ radioBtnLableStyle } htmlFor="configuration">Configuration</label>
                    </div>
                    }

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
                    <table className="border-collapse border-4 mt-3 min-w-full">
                        <thead className="bg-gray-100 grid w-full">
                            <tr className="border-2 grid grid-cols-[auto,_270px,_120px,_120px,_80px,_80px] gap-4 px-4">
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
                        <tbody className="bg-grey-light grid auto-rows-min overflow-y-scroll h-64 w-full" onScroll={ handleScroll }>
                        <TbodyGamesTable />
                        </tbody>
                    </table>
            </main>
        </>
    )
}


export default AvailableGameList