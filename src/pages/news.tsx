import React from "react";
import Layout from "../layouts/Layout";
import { Meta } from "../meta";

const NewsPage = () => {
  return (
    <Layout>
      <Meta title="Scholar News" key="scholar news, news" />
      <section className="min-h-screen bg-white text-black">
        <div className="container">NewsPage</div>
      </section>
    </Layout>
  );
};

export default NewsPage;
