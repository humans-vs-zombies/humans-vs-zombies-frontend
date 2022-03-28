import React from "react";

export const SquadPlayerListElement = ({ player }) => {
  return (
    <div className="flex px-2 bg-gray-400 rounded m-2">
      <div className="p-2">{player.name}</div>
      <div className="p-2">Alive: {player.isAlive ? "Yes" : "No"}</div>
    </div>
  );
};
