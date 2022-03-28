import React from "react";
import { useDispatch } from "react-redux";
import { sessionCurrentSquadSetAction } from "../../store/actions/sessionActions";

export const SquadListElement = ({ squad }) => {

  const dispatch = useDispatch()

  const handleBtnJoinSquadClick = (event) => {
    dispatch(sessionCurrentSquadSetAction(squad))
  }

  return (
    <div className="p-1">
      <div className="flex bg-gray-400 text-center items-center">
        <button className="whitespace-nowrap p-2">{squad.name}</button>
        <div className="sm:block hidden">{ squad.squadMembers.filter(sm => sm.player.human).length + "/" + squad.squadMembers.length}</div>
        <span className="md:block hidden pl-1">Alive</span>
        <button className="w-16" onClick={handleBtnJoinSquadClick}>Join</button>
      </div>
    </div>
  );
};
