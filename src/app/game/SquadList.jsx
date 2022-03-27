import React from "react";
import { SquadListElement } from "./SquadListElement";

export const SquadList = ({ squads }) => {
  return (
    <>
      {squads.map((squad) => (
        <SquadListElement squad={squad} key={squad.id} />
      ))}
    </>
  );
};
