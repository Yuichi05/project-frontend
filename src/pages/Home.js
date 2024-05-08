import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Services from "../component/Services";
import Hero from "../component/Hero";
import Events from "../component/Events";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Events />
      <Footer/>
    </div>
  );
};

export default Home;
