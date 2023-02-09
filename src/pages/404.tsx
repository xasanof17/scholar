import React from "react";
import Layout from "../layouts/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <section className="container flex min-h-[48vh] items-center justify-center">
        <h1 className="text-center text-2xl ss:text-3xl xs:text-4xl sm:text-5xl">
          <b>404!</b> Error. Not found{" "}
        </h1>
      </section>
    </Layout>
  );
};

export default ErrorPage;
