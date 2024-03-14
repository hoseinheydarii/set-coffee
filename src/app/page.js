import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Latest />
    </>
  );
};

export default Home;
