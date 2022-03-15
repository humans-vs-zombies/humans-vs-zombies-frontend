import React from "react";

export const SquadListElement = ({ squad }) => {
  return (
    <div className="p-1">
      <div className="flex bg-gray-400 text-center items-center">
        <button className="whitespace-nowrap p-2">{squad.name}</button>
        <div className="sm:block hidden">{ squad.players.filter(p => p.isAlive).length + "/" + squad.players.length}</div>
        <span className="md:block hidden pl-1">Alive</span>
        <button className="w-16">Join</button>
      </div>
    </div>
  );
};
