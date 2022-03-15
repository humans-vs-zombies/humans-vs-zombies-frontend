import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { GameHeader } from "./GameHeader";
import { GameMap } from "./GameMap";
import { BiteCodeInput } from "./BiteCodeInput";
import { SquadList } from "./SquadList";
import { BiteCodeDisplay } from "./BiteCodeDisplay";
import { GameChat } from "./GameChat";

const Game = () => {
  const { loggedIn } = useSelector((state) => state.sessionReducer);
  //TODO: fetch squad state using redux
  const inSquad = false;
  const isZombie = false;
  const biteCode = "1234";

  return (
    <>
      {!loggedIn && <Navigate to="/" />}
      <div className="h-full flex flex-col bg-orange-400">
        <GameHeader inSquad={inSquad} />

        <div className="h-full flex flex-grow bg-red-600 h-100 overflow-clip">
          {!inSquad && (
            <div className="flex-grow-0 text-center sm:block hidden bg-blue-600 md:px-2 overflow-y-scroll">
              <h1 className="font-semibold">Squads</h1>
              <SquadList
                squads={Array.from({ length: 10 }, (_, i) => "Squad " + i).map(
                  (name) => {
                    return {
                      name,
                      players: Array.from({ length: 10 }, (_) => {
                        return {
                          name: "asd",
                          isAlive: Math.random() * 100 > 50,
                        };
                      }),
                    };
                  }
                )}
              />
            </div>
          )}
          <div className="flex-grow bg-green-600 text-center relative">
            <GameMap />
            <GameChat />
            <div className="absolute sm:top-1 sm:right-1 sm:w-64 top-0 right-auto w-full content-center">
              <div className="w-full h-10 p-1 bg-red-500 sm:rounded-lg">
                {isZombie ? (
                  <BiteCodeInput />
                ) : (
                  <BiteCodeDisplay code={biteCode} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
