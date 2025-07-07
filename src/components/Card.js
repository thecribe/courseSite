import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-fit border-2 border-white shadow-xs shadow-blue-300 rounded-tr-2xl rounded-bl-2xl ">
      {children}
    </div>
  );
};

export default Card;
