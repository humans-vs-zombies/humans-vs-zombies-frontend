import React from 'react'

export const GameHeader = ({ inSquad }) => {
  return (
    <div className="flex flex-grow bg-gray-300 md:py-2 md:px-6 p-0 px-3">
          <button className={`${inSquad ? "invisible" : ""}`}>Join</button>
          <div className="flex-grow text-center">
            <div className="font-bold">Game Name</div>
            <div className="font-thin">Game description</div>
          </div>
          <button>Rules</button>
        </div>
  )
}
