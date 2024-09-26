import React from "react";
import heroImage from "../../../../assets/images/Dashboard.png"; 
import arrow from '../../../../assets/images/arrow-right.png';

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center  text-white bg-[#224A4D]">

      <div className="text-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold mt-14 mb-4">
          Comprehensive Real Estate Digital Tool
        </h1>
        <p className="mb-6   text-xl">
          Elevate your online presence with intuitive property web pages and
          streamlined sales, with
          <span className="md:block">
            integrated transaction handling. Your all-in-one real estate success
            ecosystem.
          </span>
        </p>

        <div className="flex justify-center">
          <button className="flex items-center bg-[#389294]  text-white px-6 py-2 rounded-lg border border-transparent hover:bg-transparent hover:border-white transition duration-300">
            Join Us Now
            <img src={arrow} alt="Arrow Right Icon" className="ml-2 w-4 h-4" />
          
          </button>
        </div>
      </div>

      <div className="flex justify-center ">
        <img
          src={heroImage}
          alt="Hero"
          className=" w-full h-auto md:max-w-full lg:max-w-full "
        />
      </div>
      {/* <div className="w-full flex justify-center">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto "
        />
      </div> */}
    </div>
  );
};

export default HeroSection;


 //    object-cover max-w-xs md:max-w-md 
 
        // "
// max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-lg