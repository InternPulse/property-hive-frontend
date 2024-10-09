import heroImage from "../../../../assets/Dashboard.svg"; 
import arrow from '../../../../assets/images/arrow-right.png';

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-white bg-[#224A4D]">

      <div className="text-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold mt-14 mb-4">
          Comprehensive Real Estate Digital Tool
        </h1>
        <p className="mb-6  text-xl">
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
    </div>
  );
};

export default HeroSection;