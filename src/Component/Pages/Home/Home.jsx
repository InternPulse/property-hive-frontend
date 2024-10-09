import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ContactUs from "./ContactUs/ContactUs";
import Subscription from "./NewsLetter/Subscription";
import Features from "../../../components/home/Features";
import Testimonial from "../../../components/home/carousel/Testimonial";

// Centralized section IDs
const sectionIds = {
  features: "features",
  testimonials: "testimonials",
  contact: "contact",
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <section id={sectionIds.features}>
        <Features />
      </section>

      <section id={sectionIds.testimonials}>
        <Testimonial />
      </section>

      <section id={sectionIds.contact}>
        <ContactUs />
      </section>

      <section>
        <Subscription />
      </section>
    </>
  );
};

export default Home;
