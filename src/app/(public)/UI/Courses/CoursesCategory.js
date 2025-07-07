import React, { useEffect, useState } from "react";

const CoursesCategory = ({ categoryClickHandler, courseCategories }) => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    const initiateDefaultCat = () => {
      if (courseCategories.length > 0) {
        setCategory(courseCategories[0]);
      }
    };

    initiateDefaultCat();
  }, [courseCategories]);
  return (
    <div className="w-full flex justify-center items-center flex-col gap-5">
      <div className=" rounded-4xl w-fit flex divide-x-2 divide-blue-100/70 text-sm tracking-wider border-2 border-blue-100/70 ">
        {courseCategories.map((cat, index) => {
          return (
            <p
              key={index}
              className={`px-5 py-2 categoryMenu cursor-pointer text-gray-500 transition-all ${
                category.slug === cat.slug && `bg-blue-900 text-white`
              }`}
              onClick={() => {
                setCategory(cat);
                categoryClickHandler(cat);
              }}
            >
              {cat.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesCategory;
