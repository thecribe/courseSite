import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const WhyChooseUs = () => {
  return (
    <section className="bg-blue-100/30  py-20 ">
      <div className="flex justify-between items-center box-width">
        <div className="blurb bg-white p-2 ">
          <Image
            src="/assets/course12.jpg"
            alt="pic"
            width={500}
            height={900}
            className="blurb"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div className=" w-full flex items-center justify-center  flex-col">
            <h3 className="sub-heading w-fit">Lorem ipsum dolor sit amet.</h3>
            <h2 className="heading-two ">Why Choose Us?</h2>
          </div>
          <p className="description text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            alias pariatur libero nihil animi, iste sunt in, cumque soluta fuga
            recusandae velit ut! In, ipsam!
          </p>
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-center items-center gap-5">
              <IoCheckmarkDoneSharp className="text-4xl text-blue-900" />
              <p className="text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                optio doloremque non esse excepturi ullam omnis ea facilis?
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <IoCheckmarkDoneSharp className="text-4xl text-blue-900" />
              <p className="text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                optio doloremque non esse excepturi ullam omnis ea facilis?
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <IoCheckmarkDoneSharp className="text-4xl text-blue-900" />
              <p className="text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                optio doloremque non esse excepturi ullam omnis ea facilis?
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <IoCheckmarkDoneSharp className="text-4xl text-blue-900" />
              <p className="text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                optio doloremque non esse excepturi ullam omnis ea facilis?
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <IoCheckmarkDoneSharp className="text-4xl text-blue-900" />
              <p className="text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                optio doloremque non esse excepturi ullam omnis ea facilis?
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-5">
            <div className="w-fit">
              <Button type="primary">About us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
