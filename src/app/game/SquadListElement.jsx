import React from "react";

export const SquadListElement = ({ squad }) => {
  return (
    <div className="p-1">
      <div className="flex bg-gray-400 text-center items-center">
        <button className="whitespace-nowrap p-2">{squad.name}</button>
        <div className="md:block hidden">4/10</div>
        <button className="w-16">Join</button>
      </div>
    </div>
  );
};
