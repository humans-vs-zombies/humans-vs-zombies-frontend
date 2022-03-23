import { GameAPI } from "../../api/GameAPI";
import AvailableGameList from "./components/AvailableGameList"

const Home = () => {

    const handleBtnOnClickNewGame = event => {
        GameAPI.postGame();
    }

    return (
        <>
            <h1>Home Page</h1>
            <AvailableGameList />
            <div className="grid my-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit justify-self-center" onClick={ handleBtnOnClickNewGame }>New Game</button>
            </div>
        </>
    )
}


export default Home