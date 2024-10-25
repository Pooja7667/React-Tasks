import React from "react";
import { GiM3GreaseGun } from "react-icons/gi";

const SingleGun = ({type, shots, message}) => {
  return (
    <div className="h-[150px]">
      <h2 className="font-bold bg-yellow-400 text-black w-[200px] p-2 my-2 text-center rounded-xl">
        {type}
      </h2>
      <p className="text-sm text-gray-600">
        {message}
      </p>
      <div className="flex items-center gap-10 ">
        <GiM3GreaseGun className="text-[100px] mx-5 text-center" />
        <span className="font-bold bg-sky-300 text-black p-4 rounded-xl w-[300px] text-center">
          Bullets shot: {shots}
        </span>
      </div>
    </div>
  );
};

export default SingleGun;