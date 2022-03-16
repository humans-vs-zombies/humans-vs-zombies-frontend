import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { gamesGetAttemptAction, gamesGetErrorAction, gamesGetSuccessAction } from "../../../store/actions/gameActions"
import AvailableGame from "./AvailableGame"

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
                dispatch(gamesGetErrorAction())
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



    return (
        <>
            <main>
                <h2>Available games</h2>
                <table className="border-collapse border-4 min-w-full">
                    <thead className="bg-gray-100">
                        <tr className="border-2">
                            <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">Title</th>
                            <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">Date</th>
                            <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">Participants</th>
                            <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">State</th>
                        </tr>
                    </thead>
                    { gamesGetAttempting && <AvailableGame 
                        index={ 0 }/>
                    }
                    { localState.games.map((game, index) => 
                    <AvailableGame
                        key={ index }
                        game={ game }
                        index={ index }/>
                     ) }
                </table>
            </main>
        </>
    )
}


export default AvailableGameList