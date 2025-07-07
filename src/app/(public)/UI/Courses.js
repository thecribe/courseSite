"use client";
import React, { useEffect, useState } from "react";
import CoursesCategory from "./Courses/CoursesCategory";
import { courseCategories } from "@/datasets";
import Button from "@/components/Button";
import CourseCard from "./Courses/CourseCard";

const Courses = () => {
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
    <section className="py-20 w-full flex flex-col gap-10">
      <div className="box-width w-full flex justify-center items-center flex-col">
        <h3 className="sub-heading w-fit">Lorem ipsum dolor sit amet.</h3>
        <h2 className="heading-two text-center">
          Lorem ipsusm dolor, sit amet consectetur
        </h2>
        <p className="description w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          alias pariatur libero nihil animi, iste sunt in, cumque soluta fuga
          recusandae velit ut! In, ipsam!
        </p>
      </div>
      <div className="w-full box-width flex flex-col gap-5 justify-center items-center">
        <CoursesCategory
          courseCategories={courseCategories}
          categoryClickHandler={(e) => setCategory(e)}
        />
        <div className="w-full grid grid-cols-4 gap-10 px-20 my-10">
          <CourseCard>
            <div className="w-[150px] h-[150px]">hello1</div>
          </CourseCard>
          <CourseCard>
            <div className="w-[150px] h-[150px]">hello1</div>
          </CourseCard>
          <CourseCard>
            <div className="w-[150px] h-[150px]">hello1</div>
          </CourseCard>
          <CourseCard>
            <div className="w-[150px] h-[150px]">hello1</div>
          </CourseCard>
          <CourseCard>
            <div className="w-[150px] h-[150px]">hello1</div>
          </CourseCard>
          <CourseCard>
            <div className="w-[150px] h-[150px]">hello1</div>
          </CourseCard>
          <CourseCard>
            <div className="w-[150px] h-[150px]">hello1</div>
          </CourseCard>
          <CourseCard>
            <div className="w-[150px] h-[150px]">hello1</div>
          </CourseCard>
        </div>
        <div className="w-fit">
          <Button type="outline">All Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
