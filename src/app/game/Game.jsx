import { useDispatch, useSelector } from "react-redux";
import { GameHeader } from "./GameHeader";
import { GameMap } from "./GameMap";
import { BiteCodeInput } from "./BiteCodeInput";
import { SquadList } from "./SquadList";
import { BiteCodeDisplay } from "./BiteCodeDisplay";
import { GameChat } from "./GameChat";
import { sessionCurrentSquadSetAction } from "../../store/actions/sessionActions";

import { SquadPlayerListElement } from "./SquadPlayerListElement";
import { useEffect } from "react";
import { squadsGetAttemptAction } from "../../store/actions/squadActions";
const Game = () => {
  const dispatch = useDispatch()
  const { squads } = useSelector(state => state.squadReducer)
  const { currentGameId, currentSquad } = useSelector(state => state.sessionReducer)
  const isZombie = true;
  const biteCode = "1234";

  useEffect(() => {
    dispatch(squadsGetAttemptAction(currentGameId))
  }, [currentGameId, dispatch])

  const handleBtnLeaveSquadClick = () => {
    dispatch(sessionCurrentSquadSetAction(undefined))
  }

  return (
    <>
      <div className="h-full flex flex-col">
        <GameHeader />

        <div className="h-full flex flex-grow h-100 overflow-clip">
          <div className="flex-grow-0 text-center sm:block hidden bg-gray-100 md:px-2 relative md:p-2">
            {!currentSquad &&
              <>
                 <h1 className="font-semibold">Squads</h1>
                <SquadList
                  squads={squads}
                />
              </>}
              { currentSquad && <>
                <h1 className="font-semibold">Current squad</h1>
                {currentSquad.squadMembers.map(member => <SquadPlayerListElement player={member.player} />)}
              </>}
            {currentSquad && <button className="absolute bg-blue-500 hover:bg-blue-600 w-full left-0 bottom-0 p-2 text-white" onClick={handleBtnLeaveSquadClick}>Leave</button>}
          </div>
          <div className="flex-grow bg-gray-400 text-center relative">
            <GameMap />
            <GameChat />
            <div className="absolute sm:top-1 sm:right-1 sm:w-64 top-0 right-auto w-full content-center">
              <div className="w-full h-10 p-1 sm:rounded-lg">
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
