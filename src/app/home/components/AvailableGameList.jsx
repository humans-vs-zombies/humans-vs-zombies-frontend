import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import KeycloakService from "../../../services/KeycloakService"
import { gameInitAction, gamesGetAttemptAction } from "../../../store/actions/gameActions"
import AvailableGame from "./AvailableGame"
import TdMessageGamesTable from "./hoc/TdMessageGamesTable"
import ThGamesTable from "./hoc/ThGamesTable"

const AvailableGameList = () => {

    const dispatch = useDispatch()
    const loggedIn = KeycloakService.getLoggedIn()
    const hasAdminRole = KeycloakService.hasRole(["admin"])
    const { gamesGetAttempting, gamesGetSuccess, gamesGetError, gamesGetErrorMessage, games } = useSelector(state => state.gameReducer)
    const [ offset, setOffset ] = useState(0)
    const [ stateToFilterBy, setStateToFilterBy ] = useState("")

    // Style className constants
    const radioBtnContainerStyle = "inline-block"
    const radioBtnStyle = "hidden peer"
    const radioBtnLableStyle = "inline-grid bg-blue-500 hover:bg-blue-700 ml-4 my-1 text-white font-bold py-2 px-4 rounded peer-checked:bg-blue-800 focus:outline-none"
    let rowGridCols = hasAdminRole ? "lg:grid-cols-[auto,_270px,_120px,_120px,_80px,_80px]" : "lg:grid-cols-[auto,_270px,_120px,_120px]"
    
    useEffect(() => {
        if (offset === 0) {
            dispatch(gameInitAction())
            dispatch(gamesGetAttemptAction(7, offset, stateToFilterBy))
        }
        else {
            setTimeout(() => {
                dispatch(gamesGetAttemptAction(7, offset, stateToFilterBy))
            }, 500);
        }
    }, [dispatch, offset, stateToFilterBy])

    // Event handler
    const handleOnBtnClickFilterGames = ({ target }) => {
        dispatch(gameInitAction())
        setOffset(0)
        setStateToFilterBy(target.value)
    }

    const handleScroll = event => {
        const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
        if (bottom) {
            setOffset(offset +1)
        }
    }

    // Local components
    const TrMessageGamesTable = ({ children }) => {
        return (
            <>
                <tr className={`border grid ${rowGridCols} gap-4 px-4 bg-white`}>
                    { children }
                </tr>
            </>
        )
    }

    const TrGamesTable = () => {
        return (
            <>
                { (games.length > 0) && games.map((game, index) => 
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
                <fieldset>
                    <label className="block text-lg mb-2 lg:mt-10" htmlFor="participants">Filter:</label>
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
                <table className="border-collapse border-4 mt-3 min-w-full grid grid-cols-[auto,_1fr] lg:block">
                    <thead className="bg-gray-100 grid w-full">
                        <tr className={`border-2 grid ${rowGridCols} gap-4 px-4`}>
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
                        <TrGamesTable />
                        <TrMessageGamesTable>
                        { gamesGetAttempting &&
                            <TdMessageGamesTable>Loading...</TdMessageGamesTable>
                        }
                        { gamesGetSuccess && (games.length <= 0) &&
                            <TdMessageGamesTable>No games found</TdMessageGamesTable>
                        }
                        { gamesGetError &&
                            <TdMessageGamesTable>{ gamesGetErrorMessage }</TdMessageGamesTable>
                        }
                        </TrMessageGamesTable>
                    </tbody>
                </table>
            </main>
        </>
    )
}


export default AvailableGameList