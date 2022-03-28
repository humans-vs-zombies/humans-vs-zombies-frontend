import React from "react";

export const SquadPlayerListElement = ({ player }) => {
  return (
    <div className="flex px-2 bg-blue-500 hover:bg-blue-600 rounded m-2 text-center text-white">
      <div className="p-2">{player.name}</div>
      <div className="p-2 flex-grow text-right">Alive: {player.human ? "Yes" : "No"}</div>
    </div>
  );
};
