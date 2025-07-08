"use client";
import React, { useEffect, useState } from "react";
import CoursesCategory from "./Courses/CoursesCategory";
import { courseCategories, courses } from "@/datasets";
import Button from "@/components/Button";
import CourseCard from "./Courses/CourseCard";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { useCart } from "@/context/cartContext";

const Courses = () => {
  const [category, setCategory] = useState({});

  const { cart, setCart } = useCart();

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
          {courses.map(
            (eachCourse, index) =>
              eachCourse.categorySlug === category.slug && (
                <CourseCard key={index}>
                  <div className="w-full h-full flex flex-col gap-2 justify-between rounded-tr-2xl">
                    <div className="w-full ">
                      <Image
                        src="/assets/course1.jpg"
                        alt="corse1"
                        width={250}
                        height={100}
                        style={{ objectFit: "cover" }}
                        className="rounded-tr-2xl"
                      />
                    </div>
                    <h3 className="text-sm tracking-wider text-blue-900 font-bold">
                      {eachCourse.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="text-xs flex gap-2 items-center">
                        <MdAccessTime /> <p>{eachCourse.duration}</p>
                      </div>
                      <div className="">
                        <p className="text-blue-900 font-extrabold">
                          {eachCourse.price}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <div
                        className="w-fit"
                        onClick={() => setCart([...cart, eachCourse])}
                      >
                        <Button type="cart-outline">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </CourseCard>
              )
          )}
        </div>
        <div className="w-fit">
          <Button type="outline">All Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
