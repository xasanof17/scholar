import React from "react";
import Slider from "react-slick";

const students = [
  { name: "john" },
  { name: "john" },
  { name: "john" },
  { name: "john" },
  { name: "john" },
];

const ResultStudents = () => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="mt-10">
      <div className="container">
        <div className="mb-16 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium">
            Our{" "}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow">
              <b className="relative">Students Scores</b>
            </span>
          </h2>
        </div>
        <Slider {...options}>
          {students.map((student, index) => (
            <div key={index}>{student.name}</div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ResultStudents;
