import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { YellowTitle } from "../widgets";
import lines from "../assets/img/lines.png";

const students = [
  { name: "john", results: ["1.0", "8.0", "6.0", "8.0"], overall: 7.5 },
  { name: "john", results: ["8.0", "8.0", "6.0", "8.0"], overall: 7.5 },
  { name: "john", results: ["8.0", "8.0", "6.0", "8.0"], overall: 7.5 },
  { name: "john", results: ["8.0", "8.0", "6.0", "8.0"], overall: 7.5 },
  { name: "john", results: ["8.0", "8.0", "6.0", "8.0"], overall: 7.5 },
  { name: "john", results: ["8.0", "8.0", "6.0", "8.0"], overall: 7.5 },
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
    <section className="py-[4%]">
      <div className="container">
        <YellowTitle title="Students Scores" />
        <Slider {...options}>
          {students.map((student, index) => (
            <div key={index} className="rounded-xl bg-yellow p-5 text-black">
              <div className="sm:grid-rows-0 grid grid-rows-2 md:grid-cols-12">
                <div className="relative col-span-7">
                  <Image
                    src={lines}
                    alt="lines"
                    width={1000}
                    height={1000}
                    className="absolute -top-[280px]"
                  />
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-2 gap-4">
                    {student.results.map((item, i) => (
                      <p key={i} className="">
                        {i === 0 && (
                          <span className="text-3xl">
                            Listening: <b className="text-4xl">{item}</b>
                          </span>
                        )}
                        {i === 1 && (
                          <span className="text-3xl">
                            Reading: <b className="text-4xl">{item}</b>
                          </span>
                        )}
                        {i === 2 && (
                          <span className="text-3xl">
                            Writing: <b className="text-4xl">{item}</b>
                          </span>
                        )}
                        {i === 3 && (
                          <span className="text-3xl">
                            Speaking: <b className="text-4xl">{item}</b>
                          </span>
                        )}
                      </p>
                    ))}
                  </div>
                  {student.overall && (
                    <p className="text-center text-5xl font-extrabold">
                      Overall: <span>{student.overall}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ResultStudents;
