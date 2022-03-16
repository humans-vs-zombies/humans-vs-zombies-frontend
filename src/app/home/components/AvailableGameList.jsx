import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { gamesGetAttemptAction, gamesGetErrorAction, gamesGetSuccessAction } from "../../../store/actions/gameActions"
import AvailableGame from "./AvailableGame"
import ThGamesTable from "./hoc/ThGamesTable"

const AvailableGameList = () => {

    const dispatch = useDispatch()
    const { gamesGetAttempting, gamesGetSuccess, gamesGetError } = useSelector(state => state.gameReducer)

    const [ localState, setLocalState ] = useState
    ({
        games: [],
    })

    useEffect(() => {
        dispatch(gamesGetAttemptAction())
        

        setTimeout(() => {
            // Emulate (un/)successful request
            let error = false;
            let emptyListReturned = false;
            
            if (error) {
                dispatch(gamesGetErrorAction("Unable to fetch games"))
            }
            else {
                let listWithGames = emptyListReturned ? [] : [
                    {
                        id: 1,
                        title: "Test title 1",
                        date: "01.03.2022 12:00",
                        participants: "10/50",
                        state: "In progress"
                    },
                    {
                        id: 2,
                        title: "Test title 2",
                        date: "25.03.2022 12:00",
                        participants: "20/50",
                        state: "Registration"
                    },
                    {
                        id: 3,
                        title: "Test title 3",
                        date: "31.03.2022 12:00",
                        participants: "30/50",
                        state: "Registration"
                    }
                ]

                setLocalState({
                    ...localState,
                    games: listWithGames
                })

                dispatch(gamesGetSuccessAction())
            }
        }, 800);
    }, [])


    const TbodyGamesTable = () => {
        return (
            <>
                { (
                    gamesGetAttempting ||
                    (gamesGetSuccess && (localState.games.length === 0)) ||
                    gamesGetError !== ""
                ) &&
                    <AvailableGame index={ 0 }/>
                }
                { gamesGetSuccess && (localState.games.length !== 0) && localState.games.map((game, index) => 
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
                <table className="border-collapse border-4 min-w-full">
                    <thead className="bg-gray-100">
                        <tr className="border-2">
                            <ThGamesTable>Title</ThGamesTable>
                            <ThGamesTable>Date</ThGamesTable>
                            <ThGamesTable>Participants</ThGamesTable>
                            <ThGamesTable>State</ThGamesTable>
                        </tr>
                    </thead>
                    <TbodyGamesTable />
                </table>
            </main>
        </>
    )
}


export default AvailableGameList