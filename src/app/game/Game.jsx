import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { SquadList } from "./SquadList";

const Game = () => {
  const { loggedIn } = useSelector((state) => state.sessionReducer);
  //TODO: fetch squad state using redux
  const inSquad = false;
  const isZombie = false;

  return (
    <>
      {!loggedIn && <Navigate to="/" />}
      <div className="h-full flex flex-col bg-orange-400">
        <div className="flex flex-grow bg-gray-300 md:py-2 md:px-6 p-0 px-3">
          <button className={`${inSquad ? "invisible" : ""}`}>Join</button>
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
          <div className="flex-grow bg-green-600 text-center relative">
            <div className="h-full w-full">
              {/*
                <iframe class="gmap_iframe" title="map" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dyre halses gate 1&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            */}
            </div>
            <div className="absolute sm:top-1 sm:right-1 sm:w-64 top-0 right-auto w-full content-center">
              <div className="w-full h-10 p-1 bg-red-500 sm:rounded-lg">
                {!isZombie && <div>Bite code: 1234</div>}
                {isZombie && (
                  <input
                    class="w-full h-full"
                    placeholder="Bite code"
                    type="number"
                    onKeyUp={(event) => {
                      if (event.which === 13) alert("Submit on enter test");
                    }}
                  ></input>
                )}
              </div>
            </div>
            <div className="absolute invisible md:visible bottom-1 right-1">
              <div className="w-full md:w-64 md:h-40 bg-orange-500 rounded-lg">
                Chat
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
