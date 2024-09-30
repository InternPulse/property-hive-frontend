import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ContactUs from "./ContactUs/ContactUs";
import Subscription from "./NewsLetter/Subscription";
import Features from "../../../components/home/Features";
import Testimonial from "../../../components/home/carousel/Testimonial";
import Footer from "../../../components/home/footer/footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section id="features">
        <Features />
      </section>
      <section id="testimonal">
        <Testimonial />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Subscription />
      <Footer />
    </>
  );
};

export default Home;
