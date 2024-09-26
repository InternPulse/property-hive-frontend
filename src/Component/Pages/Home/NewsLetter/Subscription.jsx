import React from "react";
import subscription from "../../../../assets/images/subscription-img.png";

const Subscription = () => {
  return (
    <div className="bg-teal-900 text-white py-10  pl-10 pr-0 flex items-center gap-28 justify-between h-[404px]">
      {/* Left Text Section */}
      <div className="w-2/5">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with the Latest Listings
        </h2>
        <p className="mb-6">
          Subscribe to receive exclusive property deals, and news straight to
          your inbox.
        </p>

        <div className="flex space-x-4">
          <div>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-3 rounded-lg w-[328px] text-black"
            />
          </div>
          <div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="w-3/5 h-[404px]">
        <img
          src={subscription}
          alt="Working on laptop"
          className="h-[404px] w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Subscription;
