import React from "react";
import Cover from "./UI/Cover";
import Courses from "./UI/Courses";
import Banner from "./UI/Banner";
import WhyChooseUs from "./UI/WhyChooseUs";

const page = () => {
  return (
    <section>
      <Cover />
      <Banner />
      <Courses />
      <WhyChooseUs />
    </section>
  );
};

export default page;
