import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Game = () => {

    const { loggedIn } = useSelector(state => state.sessionReducer)

    return (
        <>
            { !loggedIn && <Navigate to="/" /> }
            <h1>Game page</h1>
        </>
    )
}


export default Game