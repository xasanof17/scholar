import type { NextPage } from "next";
import {
  About,
  Banner,
  Courses,
  Prices,
  ResultStudents,
  Teachers,
  WhyChooseUs,
} from "../components";
import { Meta } from "../meta";

const Home: NextPage = () => {
  return (
    <>
      <Meta description="Scholar Learning Centre" />
      <Banner
        subtitle="100% satisfaction guarantee"
        text="Private, 1-on-1 lessons with the expert instructor based on your goals and interests."
      />
      <About />
      <WhyChooseUs />
      <Teachers />
      <ResultStudents />
      <Prices />
      <Courses />
    </>
  );
};

export default Home;
