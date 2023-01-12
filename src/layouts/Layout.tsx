import React from "react";
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
      <main>{children}</main>
      <Footer />
    </div>
  );
}
