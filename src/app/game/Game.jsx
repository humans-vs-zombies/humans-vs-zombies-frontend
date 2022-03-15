import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { SquadList } from "./SquadList";

const Game = () => {
  const { loggedIn } = useSelector((state) => state.sessionReducer);
  const inSquad = false;

  return (
    <>
      {!loggedIn && <Navigate to="/" />}
      <div className="h-full flex flex-col bg-orange-400">
        <div className="flex flex-grow bg-gray-300 md:py-2 md:px-6 p-0 px-3">
          <button className={`${ inSquad ? "invisible" : ""}`}>Join</button>
          <div className="flex-grow text-center">
            <div className="font-bold">Game Name</div>
            <div className="font-thin">Game description</div>
          </div>
          <button>Rules</button>
        </div>

        <div className="h-full flex flex-grow bg-red-600 h-100 overflow-clip">
          {!inSquad && (
            <div className="flex-grow-0 text-center sm:block hidden bg-blue-600 md:px-2 overflow-y-scroll">
              <h1 className="font-semibold">Squads</h1>
              <SquadList
                squads={Array.from(
                  { length: 10 },
                  (_, i) => "Squad " + (i + 1)
                ).map((name) => {
                  return {
                    name,
                    players: Array.from({ length: 10 }, (_, i) => {
                      return { name: "asd", isAlive: Math.random() * 100 > 50 };
                    }),
                  };
                })}
              />
            </div>
          )}
          <div className="flex-grow bg-green-600 text-center">Map</div>
        </div>
      </div>
    </>
  );
};

export default Game;
