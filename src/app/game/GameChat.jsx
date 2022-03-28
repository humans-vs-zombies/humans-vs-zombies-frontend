import React from "react";

export const GameChat = () => {
  return (
    <div className="absolute invisible md:visible bottom-1 right-1 opacity-10 hover:opacity-80">
      <div className="flex flex-col w-full md:w-80 md:h-60 bg-gray-500 rounded-lg gap-1 p-2 px-3">
        Chat
        <textarea disabled className="flex-grow" value={"Username1: Hello\nUsername2: Hello world!"}></textarea>
        <div className="flex gap-1">
            <input className="flex-grow" placeholder="Chat message"></input>
            <button className="rounded-md bg-blue-500 hover:bg-blue-600 px-2">Send</button>
        </div>
      </div>
    </div>
  );
};
