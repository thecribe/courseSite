import Card from "@/components/Card";
import React from "react";

const CourseCard = ({ children }) => {
  return (
    <Card>
      <div className="m-2 w-[250px] h-[300px] categoryCard border-2 rounded-tr-2xl rounded-bl-2xl border-transparent transition duration-500 cursor-pointer p-2">
        {children}
      </div>
    </Card>
  );
};

export default CourseCard;
