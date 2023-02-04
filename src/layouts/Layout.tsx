import Head from "next/head";
import React from "react";
import { Phone } from "../components";
// import TopLoader from "react-top-loader";
import { Meta } from "../meta";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
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
