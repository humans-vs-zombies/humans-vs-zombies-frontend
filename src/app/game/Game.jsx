import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { SquadList } from "./SquadList";

const Game = () => {
  const { loggedIn } = useSelector((state) => state.sessionReducer);

  return (
    <>
      {!loggedIn && <Navigate to="/" />}
      <div className="h-full flex flex-col bg-orange-400">
        <div className="flex flex-grow bg-gray-300 md:pt-2 p-0 px-4">
          <button>Join</button>
          <div className="flex-grow text-center">
            <div className="font-bold">Game Name</div>
            <div className="font-thin">Game description</div>
          </div>
          <button>Rules</button>
        </div>

        <div className="h-full flex flex-grow bg-red-600 h-100">
          <div className="flex-grow-0 text-center bg-blue-600 md:px-2">
            <h1 className="font-semibold">Squads</h1>
            <SquadList
              squads={[
                { name: "Squad 1" },
                { name: "Squad 2" },
                { name: "Squad 3" },
              ]}
            />
          </div>
          <div className="flex-grow bg-green-600 text-center align">Map</div>
        </div>
      </div>
    </>
  );
};

export default Game;
