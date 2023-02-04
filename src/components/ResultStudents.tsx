import React from "react";
import Slider from "react-slick";
import { YellowTitle } from "../widgets";

const students = [
  { name: "john" },
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
        <YellowTitle title="Students Scores" />
        <Slider {...options}>
          {students.map((student, index) => (
            <div
              key={index}
              className="h-52 rounded-xl bg-yellow p-5 text-black"
            >
              <div className="grid grid-cols-12">
                <div className="col-span-6 before:content-['']">x</div>
                <div className="col-span-5">x</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ResultStudents;
