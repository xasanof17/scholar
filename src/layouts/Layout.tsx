import React from "react";
// import TopLoader from "react-top-loader";
import { Meta } from "../meta";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="app">
      <Meta defaultTitle="Scholar Learning Centre" />
      
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
