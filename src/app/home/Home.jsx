import { useNavigate } from "react-router-dom";
import KeycloakService from "../../services/KeycloakService";
import AvailableGameList from "./components/AvailableGameList"

const Home = () => {

    const loggedIn = KeycloakService.getLoggedIn()
    const hasAdminRole = KeycloakService.hasRole(["admin"])
    const navigate = useNavigate();

    const handleBtnOnClickNewGame = event => {
        if (loggedIn) {
            navigate("/game/create")   
        }
    }

    return (
        <>
            <h1>Home Page</h1>
            <AvailableGameList />
            { loggedIn && hasAdminRole &&
            <div className="grid my-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit justify-self-center" onClick={ handleBtnOnClickNewGame }>New Game</button>
            </div>
            }
        </>
    )
}


export default Home