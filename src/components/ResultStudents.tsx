import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { YellowTitle } from "../widgets";
import lines from "../assets/img/lines.png";

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
                <div className="relative col-span-6">
                  <Image
                    src={lines}
                    alt="lines"
                    width={500}
                    height={500}
                    className="absolute -top-10"
                  />
                </div>
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
