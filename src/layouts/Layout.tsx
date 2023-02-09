import Head from "next/head";
import React from "react";
import { Phone } from "../components";
import { Meta } from "../meta";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NextNProgress from "nextjs-progressbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Meta defaultTitle="Scholar Learning Centre" />
      <div className="app">
        <NextNProgress
          color="#FFDA3C"
          startPosition={0.5}
          stopDelayMs={400}
          height={5}
          showOnShallow={false}
        />
        <Navbar />
        <main className="main">
          {children}
          <Phone />
        </main>
        <Footer />
      </div>
    </>
  );
}
