import { EmblaCarousel } from "./carousel/Carousel";
import image1 from '../../assets/Landing-Page.png'
import image2 from '../../assets/Featured-Section.png'
import image3 from '../../assets/Properties-section.png'
import image4 from '../../assets/Top.png'
import image5 from '../../assets/Properties(1).png'
import image6 from '../../assets/Finances.png'


const Features = () => {
	return (
    <div className="bg-[#FCFDFD] pt-[48px] pb-[60px] ">
      <div className="mx-20 xl:mx-36">
        <EmblaCarousel />
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="leading-12 pb-5 text-4xl font-semibold text-[#255A5D] lg:text-5xl pt-[61px]">
            Features
          </h1>
          <p className="text-lg text-[#4B5353] sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
            We’re committed to providing a comprehensive suite of features
            designed to elevate your experience and drive success.
          </p>
        </div>
        <div className="relative mt-[68px]">
          <div className="flex flex-col justify-between space-y-7 lg:flex-row">
            <div className="mt-24  lg:mt-44">
              <h4 className="w-40 rounded-full border border-[#2B7376] bg-[#ECFFFF] p-1.5 mb-[18px] text-center text-base font-light text-[#2B7376] md:text-base lg:text-base xl:w-[195px] xl:text-lg">
                Tailored Showcase
              </h4>
              <h1 className="text-2xl font-bold lg:text-3xl">
                Personalized landing page
              </h1>
              <p className="mt-3 text-base font-normal text-[#242828] lg:text-xl">
                Create fully customized webpages that effectively showcase{" "}
                <br />
                your properties. Each page can be tailored to include <br />
                your company’s logo and color scheme, ensuring a cohesive and{" "}
                <br />
                branded experience. With integrated features like payment,{" "}
                <br />
                messaging and inquiry systems, client engagement is seamless and
                efficient.
              </p>
            </div>
            <div className="flex w-[440px] flex-col items-center justify-center space-y-3 rounded-2xl border bg-[#F5F6F6] p-7 shadow-2xl lg:w-[480px]">
              <img src={image1} className="border" sizes={100} />
              <img src={image2} className="border" />
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between space-y-7 lg:flex-row">
            <div className="flex w-[400px] flex-col items-center justify-center space-y-3 rounded-2xl border bg-[#F5F6F6] p-7 shadow-2xl lg:w-[480px]">
              <img src={image3} className="border" />
              <img src={image4} className="border" />
            </div>
            <div className="mt-40">
              <h4 className="w-48 rounded-full border border-[#2B7376] bg-[#ECFFFF] p-1.5 mb-[16px] text-center text-base font-light text-[#2B7376] md:text-base lg:text-base xl:w-[195px] xl:text-lg">
                Effortless Navigation
              </h4>
              <h1 className="text-2xl font-bold lg:text-3xl">
                Easy-to-Use Interface
              </h1>
              <p className="mt-3 text-base font-normal text-[#242828] lg:text-xl">
                Our platform is intuitively designed, enabling real estate
                <br /> companies to effortlessly create, manage, and handle
                <br />
                properties listing and transactions. No technical expertise is
                <br /> required—just a few clicks, and you are on your way to
                <br /> driving success.
              </p>
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-between space-y-7 lg:flex-row">
            <div className="mt-24 lg:mt-44">
              <h4 className="w-40 rounded-full border border-[#2B7376] bg-[#ECFFFF] p-1.5 text-center text-base font-light text-[#2B7376] md:text-base lg:text-base xl:w-[195px] xl:text-lg">
                Tailored Showcase
              </h4>
              <h1 className="text-2xl font-bold lg:text-3xl">
                Personalized landing page
              </h1>
              <p className="mt-3 text-base font-normal text-[#242828] lg:text-xl">
                Create fully customized webpages that effectively showcase{" "}
                <br />
                your properties. Each page can be tailored to include <br />
                your company’s logo and color scheme, ensuring a cohesive and{" "}
                <br />
                branded experience. With integrated features like payment,{" "}
                <br />
                messaging and inquiry systems, client engagement is seamless and
                efficient.
              </p>
            </div>
            <div className="flex w-[400px] flex-col items-center justify-center space-y-3 rounded-2xl border bg-[#F5F6F6] p-7  shadow-2xl lg:w-[480px]">
              <img src={image5} className="border" />
              <img src={image6} className="border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
