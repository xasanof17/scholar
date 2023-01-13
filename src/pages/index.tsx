import type { NextPage } from "next";
import { About, Banner, Teachers, WhyChooseUs } from "../components";
import { Meta } from "../meta";

const Home: NextPage = () => {
  return (
    <>
      <Meta description="Scholar Learning Centre"/>
      <Banner
        subtitle="100% satisfaction guarantee"
        text="Private, 1-on-1 lessons with the expert instructor based on your goals and interests."
      />
      <About />
      <WhyChooseUs />
      <Teachers/>
      <h1 className="h-screen">Hello World</h1>
    </>
  );
};

export default Home;
