import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { BiDetail } from "react-icons/bi";

const Banner = () => {
  return (
    <section className=" bg-purple-950 transform -translate-y-10 py-12">
      <div className="box-width flex gap-5 items-center justify-between text-white">
        <div className="flex justify-center items-center gap-2">
          <IoBookOutline className="text-7xl" />
          <p className="tracking-wider text-2xl">
            Over 50 Online <br />
            Courses Available
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <GrCertificate className="text-7xl" />
          <p className="tracking-wider text-2xl">
            Instant <br />
            Certification
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <BiDetail className="text-7xl" />
          <p className="tracking-wider text-2xl">
            Fully Comprehensive <br />
            Courses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
