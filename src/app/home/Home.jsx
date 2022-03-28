import { useNavigate } from "react-router-dom";
import KeycloakService from "../../services/KeycloakService";
import CenterChild from "../commonComponents/hoc/CenterChild";
import AvailableGameList from "./components/AvailableGameList"

const Home = () => {

    const loggedIn = KeycloakService.getLoggedIn()
    const hasAdminRole = KeycloakService.hasRole(["admin"])
    const navigate = useNavigate();

    const handleBtnOnClickNewGame = event => {
        navigate("/game/create")
    }

    return (
        <>
            <CenterChild>
                <h1 className="py-6 text-xl md:text-2xl">Available Games</h1>
            </CenterChild>
            <CenterChild>
                <AvailableGameList />
            </CenterChild>
            { loggedIn && hasAdminRole &&
            <CenterChild>
                <button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit justify-self-center" onClick={ handleBtnOnClickNewGame }>New Game</button>
            </CenterChild>
            }
        </>
    )
}


export default Home