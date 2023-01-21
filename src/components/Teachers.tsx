import React, { useState } from "react";
import { motion } from "framer-motion";
import TeacherSlider from "./TeacherSlider";
import { YellowTitle } from "../widgets";

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
        <YellowTitle title="Teachers" />
        <TeacherSlider teachers={teachers} />
      </div>
    </section>
  );
};

export default Teachers;
