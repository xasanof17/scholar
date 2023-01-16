import React, { useState } from "react";
import { motion } from "framer-motion";
import TeacherSlider from "./TeacherSlider";

const teachers = [
  { name: "Teacher Azim" },
  { name: "Teacher Azim" },
  { name: "Teacher Azim" },
  { name: "Teacher Azim" },
  { name: "Teacher Azim" },
  { name: "Teacher Azim" },
];

const Teachers = () => {
  return (
    <section className="my-[10%]">
      <div className="container">
        <div className="mb-16 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium">
            Our{" "}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow">
              <b className="relative">Teachers</b>
            </span>
          </h2>
        </div>
        <TeacherSlider teachers={teachers}/>
      </div>
    </section>
  );
};

export default Teachers;
