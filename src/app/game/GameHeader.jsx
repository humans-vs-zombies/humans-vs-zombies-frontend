import React from 'react'
import { useSelector } from 'react-redux'

export const GameHeader = ({ inSquad }) => {

  const { currentGame } = useSelector(state => state.gameReducer)

  return (
    <div className="flex flex-grow bg-gray-300 md:py-2 md:px-6 p-0 px-3">
          <button className={`${inSquad ? "invisible" : ""}`}>Join</button>
          <div className="flex-grow text-center">
            <div className="font-bold">{ currentGame?.title ? currentGame.title : "No title" }</div>
            <div className="font-thin">{ currentGame?.description ?  currentGame.description : "No description" }</div>
          </div>
          <button>Rules</button>
        </div>
  )
}
