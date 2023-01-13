import React from "react";

import Slider from "react-slick";

const teachers = [
  { name: "Teacher Azim" },
  { name: "Teacher Azim" },
  { name: "Teacher Azim" },
  { name: "Teacher Azim" },
];

const Teachers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="my-[10%]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium">
            Our{" "}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow ">
              <b className="relative">Teachers</b>
            </span>
          </h2>
        </div>
        <div className="relative mt-16 ">
          {/* <Slider {...settings}>
            {teachers.map((teacher, i) => (
              <div key={i}></div>
            ))}
          </Slider> */}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
