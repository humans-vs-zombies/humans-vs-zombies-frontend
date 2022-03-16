import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const EditGame = () => {

    const { loggedIn, userType } = useSelector(state => state.sessionReducer)


    return (
        <>
            { (!loggedIn || userType !== "admin") && <Navigate to="/" /> }
            <h1>Edit game Page</h1>
        </>
    )
}


export default EditGame