import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const GameHeader = () => {
  const { currentSquad } = useSelector((state) => state.sessionReducer);
  const { currentGame } = useSelector((state) => state.gameReducer);
  const navigate = useNavigate();

  const handleRulesBtnClick = (event) => {
    navigate("/rules");
  };

  return (
    <div className="flex flex-grow bg-gray-300 md:py-2 md:px-6 p-0 px-3 border-b-4 border-blue-700">
      <button
        className={`${
          currentSquad
            ? "invisible"
            : "bg-blue-500 hover:bg-blue-600 rounded px-2 text-white"
        }`}
      >
        Join
      </button>
      <div className="flex-grow text-center">
        <div className="font-bold text-xl">
          {currentGame?.title ? currentGame.title : "No title"}
        </div>
        <div className="font-thin">
          {currentGame?.description
            ? currentGame.description
            : "No description"}
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 rounded px-2 text-white"
        onClick={handleRulesBtnClick}
      >
        Rules
      </button>
    </div>
  );
};
