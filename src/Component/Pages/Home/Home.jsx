import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ContactUs from "./ContactUs/ContactUs";
import Subscription from "./NewsLetter/Subscription";




const Home = () => { 
  return (
    <>
      <HeroSection />
      <section id="contact">
        <ContactUs />
      </section>
      <Subscription />
    </>
  );
};

export default Home