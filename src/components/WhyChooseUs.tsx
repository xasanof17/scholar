import React from "react";
import BenefitBox from "./BenefitBox";

const benefits = [
  {
    title: "One-On-One Teaching",
    text: "All Of Our Special Education Experts Have A Degree In Special Education",
    icon: "/favicon.ico",
  },
  {
    title: "24/7 Tutor Availability",
    text: "24/7 tutor availability assured at Scholar matched to your learning style!",
    icon: "/favicon.ico",
  },
  {
    title: "Interactive Whiteboard",
    text: "Our digital whiteboard equipped with audio-video-chat feautures.",
    icon: "/favicon.ico",
  },
  {
    title: "Affordable Prices",
    text: "Choose an experienced tutor that fits your budget.",
    icon: "/favicon.ico",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-[5%]">
      <div className="container">
        <div className="grid grid-rows-1">
          <div className="mb-14 flex flex-col items-center justify-center">
            <span className="subtitle mb-4">Why Choose Us</span>
            <h2 className="text-center text-3xl font-normal capitalize leading-tight ss:text-3xl sm:text-4xl xl:text-6xl">
              <b>Benefits</b> of online Tutoring Services{" "}
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow ">
                <b className="relative">at Scholar</b>
              </span>
            </h2>
          </div>
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {benefits.map(({ title, text, icon }, i) => (
              <BenefitBox title={title} text={text} icon={icon} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
