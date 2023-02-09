import React from "react";

const About = () => {
  return (
    <section id="about" className="hidden py-[7%] sm:py-[10%] md:block">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative">
            <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-md bg-[#7DC3DD]"></div>
            <div className="absolute bottom-0 right-10 z-20 h-[300px] w-[300px] rounded-md bg-yellow"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="subtitle mb-4">About us</span>
            <h2 className="leading-taught max-w-[350px] text-2xl">
              <b>Talented and Highly Qualified</b> Tutors to Serve You for
              Online Help.
            </h2>
            <p className="my-10 text-xl text-light">
              MyTutor is the best online tutoring platform in the world. Founded
              in 2010 and located in Uzbekistan. MyTutor provides queality
              experiences and support for students{" "}
            </p>
            <button className="btn-yellow rounded-full capitalize">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
