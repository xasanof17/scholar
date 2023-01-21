import React from "react";
import Slider from "react-slick";
import { YellowTitle } from "../widgets";

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
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <section className="mt-10">
      <div className="container">
        <YellowTitle title="Students Scores" />
        <Slider {...options}>
          {students.map((student, index) => (
            <div key={index} className="sliderBlock">
              {student.name}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ResultStudents;
