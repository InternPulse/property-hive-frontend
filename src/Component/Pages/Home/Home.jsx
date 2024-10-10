import HeroSection from "./HeroSection/HeroSection";
import ContactUs from "./ContactUs/ContactUs";
import Subscription from "./NewsLetter/Subscription";
import Features from "../../../components/home/Features";
import Testimonial from "../../../components/home/carousel/Testimonial";
import Footer from "../../../components/home/footer/footer";




const Home = () => { 
  return (
    <div className="bg-white">
      <HeroSection />
      <Features />
    <Testimonial />
      <section id="contact">
        <ContactUs />
      </section>
      <Subscription />
    </>
  );
};

export default Home