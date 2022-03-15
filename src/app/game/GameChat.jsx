import React from "react";

export const GameChat = () => {
  return (
    <div className="absolute invisible md:visible bottom-1 right-1 opacity-10 hover:opacity-80">
      <div className="flex flex-col w-full md:w-80 md:h-60 bg-orange-500 rounded-lg gap-1 p-2">
        Chat
        <textarea disabled className="flex-grow" value={"Username1: Hello\nUsername2: Hello world!"}></textarea>
        <div className="flex gap-1">
            <input className="flex-grow-0" placeholder="Chat message"></input>
            <button className="rounded-md bg-gray-500">Send</button>
        </div>
      </div>
    </div>
  );
};
