import type { NextPage } from "next";
import Image from "next/image";
import { Banner } from "../components";
import RootLayout from "../layouts/Layout";
import { Meta } from "../meta";

const Home: NextPage = () => {
  return (
    <>
      {/* <Meta /> */}
      <Banner
        subtitle="100% satisfaction guarantee"
        text="Private, 1-on-1 lessons with the expert instructor based on your goals and interests."
      />
      <h1 className="h-screen">Hello World</h1>
    </>
  );
};

export default Home;
