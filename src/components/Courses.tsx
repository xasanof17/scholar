import React from "react";
import { YellowTitle } from "../widgets";

const courses = [
  { title: "Course", subtitle: "Scholar Learning Centre" },
  { title: "Course", subtitle: "Scholar Learning Centre" },
  { title: "Course", subtitle: "Scholar Learning Centre" },
  { title: "Course", subtitle: "Scholar Learning Centre" },
  { title: "Course", subtitle: "Scholar Learning Centre" },
];

const Courses = () => {
  return (
    <section id="courses" className="pt-[9%]">
      <div className="container">
        <YellowTitle title="Courses" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {courses.map((course, i) => (
            <div className="flex flex-col rounded-md border border-gray-300 p-3 shadow-md" key={i}>
              <h3>{course.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
