import { useDispatch, useSelector } from "react-redux";
import { GameHeader } from "./GameHeader";
import { GameMap } from "./GameMap";
import { BiteCodeInput } from "./BiteCodeInput";
import { SquadList } from "./SquadList";
import { BiteCodeDisplay } from "./BiteCodeDisplay";
import { GameChat } from "./GameChat";
import { sessionCurrentSquadSetAction } from "../../store/actions/sessionActions";
import { useEffect } from "react";
import { squadsGetAttemptAction } from "../../store/actions/squadActions";

const Game = () => {
  const dispatch = useDispatch()
  //TODO: fetch squad state using redux
  const { currentGameId } = useSelector(state => state.sessionReducer)
  const { squads, currentSquad } = useSelector(state => state.squadReducer)
  const isZombie = false;
  const biteCode = "1234";

  useEffect(() => {
    dispatch(squadsGetAttemptAction(currentGameId))
  })

  const handleBtnLeaveSquadClick = () => {
    dispatch(sessionCurrentSquadSetAction(undefined))
  }

  return (
    <>
      <div className="h-full flex flex-col bg-orange-400">
        <GameHeader inSquad={currentSquad} />

        <div className="h-full flex flex-grow bg-red-600 h-100 overflow-clip">
          <div className="flex-grow-0 text-center sm:block hidden bg-blue-600 md:px-2 overflow-y-scroll relative md:p-2">
            {!currentSquad &&
              <>
                <h1 className="font-semibold">Squads</h1>
                <SquadList squads={squads}
                />
              </>}
              { currentSquad && <>
                <h1 className="font-semibold">Current squad</h1>
                { /* TODO: Map to component */ }
                {currentSquad.players.map(player => (
                  <div>{player.name}</div>
                ))}
              </>}
            {currentSquad && <button className="absolute bg-red-600 w-full rounded left-0 bottom-0 p-2" onClick={handleBtnLeaveSquadClick}>Leave</button>}
          </div>
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
