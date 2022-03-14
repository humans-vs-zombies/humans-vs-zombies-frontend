import React from "react";

export const SquadListElement = ({ squad }) => {
  return (
    <div>
        <button className="whitespace-nowrap p-2">{squad.name}</button>
    </div>
  )
};
