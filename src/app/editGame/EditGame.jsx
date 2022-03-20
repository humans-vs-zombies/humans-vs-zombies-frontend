import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import GameForm from "./components/GameForm"


const EditGame = () => {

    const { loggedIn, userType } = useSelector(state => state.sessionReducer)


    return (
        <>
            { (!loggedIn || userType !== "admin") && <Navigate to="/" /> }
            <h1>Edit game Page</h1>
            <main>
                <GameForm />
            </main>
        </>
    )
}


export default EditGame