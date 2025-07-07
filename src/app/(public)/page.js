import React from "react";
import Cover from "./UI/Cover";
import Courses from "./UI/Courses";
import Banner from "./UI/Banner";

const page = () => {
  return (
    <section>
      <Cover />
      <Banner />
      <Courses />
    </section>
  );
};

export default page;
