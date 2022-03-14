import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Game = () => {

    const { loggedIn } = useSelector(state => state.sessionReducer)
    if (!loggedIn) {
        return <Navigate to="/" />
    }

    return (
        <>
            <h1>Game page</h1>
        </>
    )
}


export default Game