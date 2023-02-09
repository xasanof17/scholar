import Image from "next/image";
import React from "react";
import { YellowTitle } from "../widgets";

const courses = [
  { title: "General English", subtitle: "Scholar Learning Centre" },
  { title: "Russian", subtitle: "Scholar Learning Centre" },
  { title: "Math", subtitle: "Scholar Learning Centre" },
  { title: "Arabic", subtitle: "Scholar Learning Centre" },
  { title: "IELTS", subtitle: "Scholar Learning Centre" },
];

const Courses = () => {
  return (
    <section id="courses" className="py-[7%]">
      <div className="container">
        <YellowTitle title="Courses" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {courses.map((course, i) => (
            <div
              className="flex flex-col rounded-md border border-gray-300 p-3 shadow-md"
              key={i}
            >
              <div className="relative h-[100px] w-full">
                <Image
                  src="https://www.icot.ie/images/english/BannerGeneralEnglish.png"
                  alt="img"
                  fill
                />
              </div>
              <h3>{course.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
