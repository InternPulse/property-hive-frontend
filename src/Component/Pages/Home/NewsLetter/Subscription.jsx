import React from "react";
import subscription from "../../../../assets/images/subscription-img.png";

const Subscription = () => {
  return (
    <div className="bg-teal-900 text-white py-10 px-4 md:px-10 flex flex-col md:flex-row items-center gap-10 md:gap-28 justify-between h-auto md:h-[404px]">
      {/* Left Text Section */}
      <div className="w-full md:w-2/5 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Updated with the Latest Listings
        </h2>
        <p className="mb-6">
          Subscribe to receive exclusive property deals, and news straight to
          your inbox.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="p-3 rounded-lg w-full md:w-[328px] text-black"
          />
          <button className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-lg w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-full md:w-3/5 h-[250px] md:h-[404px] mt-8 md:mt-0">
        <img
          src={subscription}
          alt="Working on laptop"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Subscription;
