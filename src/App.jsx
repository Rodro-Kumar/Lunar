import React from "react";
import Nav from "./Component/Nav/Nav";
import Banner from "./Component/Nav/Banner/Banner";
import BusinessCard from "./Component/BusinessCard/BusinessCard";
import Consultation from "./Component/Consultation/Consultation";
import Testimonial from "./Component/Testimonial/Testimonial";
import Marketing from "./Component/Marketing/Marketing";
import Strategy from "./Component/Strategy/Strategy";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <BusinessCard />
      <Consultation />
      <Testimonial />
      <Marketing />
      <Strategy />
      <Footer />
    </>
  );
}

export default App;
