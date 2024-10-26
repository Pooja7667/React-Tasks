import React from "react";

/**
 * Button Component
 * This component renders the start/exit button for the Tic Tac Toe game.
 */
const Button = ({ start, setStart }) => {
  return (
    <div className="lg:my-4 my-10">
      <button
        className="bg-yellow-400 hover:bg-sky-500 text-black p-2 lg:w-[200px] w-[100px] font-bold rounded-xl"
        onClick={() => setStart(!start)}
      >
        {start ? "Exit" : "Start"}
      </button>
    </div>
  );
};

export default Button;
