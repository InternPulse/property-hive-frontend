
import React from "react";
import {
  Area,
  AreaChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

import global from "../../src/assets/global.png";
import circle from "../../src/assets/add-circle.png";
import icon from "../../src/assets/icon.png";
import icon2 from "../../src/assets/icon2.png";
import icon3 from "../../src/assets/icon3.png";
import icon4 from "../../src/assets/icon4.png";
import { Link } from "react-router-dom";

const websiteData = [
  { name: "sep 8", views: 100 },
  { name: "sep 9", views: 150 },
  { name: "sep 10", views: 200 },
  { name: "sep 11", views: 400 },
  { name: "sep 12", views: 300 },
  { name: "sep 13", views: 350 },
  { name: "sep 14", views: 500 },
];

const earningsData = [
  { name: "sep 1", earnings: 500000 },
  { name: "Sep 2", earnings: 1500000 },
  { name: "Sep 3", earnings: 2500000 },
  { name: "Sep 4", earnings: 2000000 },
  { name: "Sep 5", earnings: 1800000 },
  { name: "Sep 6", earnings: 2500000 },
  { name: "Sep 7", earnings: 3000000 },
];

//statsCard component
const StatsCard = ({ title, value, footer }) => (
  <div className="bg-[#fcfdfd] pt-5 pb-4 px-6 rounded-md border border-[#e5e8e7] w-full flex flex-col items-center sm:w-[196px] h-auto sm:h-[192px]">
    {/* Icon */}
    <img src={icon} alt="icon" className="w-6 h-6 mb-2 " />

    {/* Title */}
    <h2 className="font-medium text-lg sm:text-[18px] leading-6 tracking-[-0.5px] mb-1">
      {title}
    </h2>

    {/* Value */}
    <p className="font-medium text-3xl sm:text-[32px] leading-[40px] tracking-[-1px] text-[#242828] mb-1">
      {value}
    </p>

    {/* Footer */}
    <p className="bg-[#f3faf9] text-[#049ab6] px-4 py-1 rounded border-0 text-sm w-[124px] h-[28px] leading-[20px] tracking-[-0.5px]">
      {footer}
    </p>
  </div>
);
const StatsCard2 = ({ title, value, footer }) => (
  <div className="bg-[#fcfdfd] pt-5 pb-4 px-6 rounded-md border border-[#e5e8e7] w-full flex flex-col items-center sm:w-[196px] h-auto sm:h-[192px]">
    {/* Icon */}
    <img src={icon2} alt="icon" className="w-6 h-6 mb-2 " />

    {/* Title */}
    <h2 className="font-medium text-lg sm:text-[18px] leading-6 tracking-[-0.5px] mb-1">
      {title}
    </h2>

    {/* Value */}
    <p className="font-medium text-3xl sm:text-[32px] leading-[40px] tracking-[-1px] text-[#242828] mb-1">
      {value}
    </p>

    {/* Footer */}
    <p className="bg-[#e5f3ff] text-[#0095ff] px-4 py-1 rounded border-0 text-sm w-[141px] h-[28px] leading-[20px] tracking-[-0.5px]">
      {footer}
    </p>
  </div>
);
const StatsCard3 = ({ title, value, footer }) => (
  <div className="bg-[#fcfdfd] pt-5 pb-4 px-6 rounded-md border border-[#e5e8e7] w-full flex flex-col items-center sm:w-[196px] h-auto sm:h-[192px]">
    {/* Icon */}
    <img src={icon3} alt="icon" className="w-6 h-6 mb-2 " />

    {/* Title */}
    <h2 className="font-medium text-lg sm:text-[18px] leading-6 tracking-[-0.5px] mb-1">
      {title}
    </h2>

    {/* Value */}
    <p className="font-medium text-3xl sm:text-[32px] leading-[40px] tracking-[-1px] text-[#242828] mb-1">
      {value}
    </p>

    {/* Footer */}
    <p className="bg-[#f1fbea] text-[#5fc92e] px-4 py-1 rounded border-0 text-sm w-[111px] h-[28px] leading-[20px] tracking-[-0.5px]">
      {footer}
    </p>
  </div>
);

//websiteStatsChart
const websiteStatsChart = () => (
  <div className="h-32">
    <ResponsiveContainer>
      <BarChart data={websiteData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey=" name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="views" fill=" #389294" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// EarningsStatsChart
const EarningsStatsChart = () => (
  <div className="h-64">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={earningsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="earnings" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
const Dashboard = () => {
  return (
    <main className="  w-full  mx-auto p-4 md:p-6">
      <header className="flex flex-col mb-6 md:flex-row justify-between items-start md:items-center">
        {/* Title */}
        <h1 className="w-[182px] h-[44px] top-[124px] left-[319px] font-semibold text-[#242828] text-[36px] leading-[44px] tracking-[-1px]">
          Dashboard
        </h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          {/* Manage Webpage Button */}
          <button className="bg-[#389294] w-[215px] h-[48px] text-[#FAFDFE] px-[20px] py-[12px] rounded-[8px] flex items-center justify-center">
            Manage Webpage
            <img
              src={global}
              className="inline ml-2"
              alt="manage webpage icon"
            />
          </button>

          {/* Add Property Button */}

          <Link to={'/manage-properties/add-property'} className="bg-[#fafdfe] text-[#389294] border border-[#389294] rounded-[8px] px-[20px] py-[12px] w-[178px] h-[48px]  flex items-center justify-center">
            Add Property
            <img src={circle} className="inline ml-2" alt="add property icon" />
          </Link>
        </div>
      </header>

      <section className="flex w-full ">
        {/* card  */}

        <section className="flex flex-col w-3/4">
          <section className=" bg-[#fcfdfd]  w-[653px] h-[289px] pt-[16px] pb-[24px] px-[16px] rounded-[12px]">
            <h2 className=" font-medium text-[24px] leading-[32px] tracking-[-1px] text-[#242828] mb-4">
              Properties
            </h2>
            <article className="flex gap-[8px]">
              <StatsCard
                title="Total Listings"
                value="100"
                footer="2 added today"
              />
              <StatsCard2
                title="Active Listings"
                value="70"
                footer="5 Paused listings"
              />
              <StatsCard3
                title="Properties Sold"
                value="20"
                footer="2 sold today"
              />
            </article>
          </section>

          {/* finance */}
          <section className=" bg-[#fcfdfd] mt-4  w-[653px] h-[289px] pt-[16px] pb-[24px] px-[16px] rounded-[12px]">
            <h2 className=" font-medium text-[24px] leading-[32px] tracking-[-1px] text-[#242828] mb-4">
              Finances
            </h2>
            <div className="flex gap-6">
              <div className=" w-1/2 bg-[#fcfdfd] border border-[#e5e8e7] pl-2 rounded">
                <div className="flex justify-between pt-4 w-[274px] h-[40px] gap-4">
                  <p className=" px-1 font-medium text-[20px] leading-[28px] tracking-[-0.75px] text-[#4B5353]">
                    Available Earnings
                  </p>
                  <img
                    src={icon4}
                    alt="finance icon"
                    className="w-[40px] h-[40px]"
                  />
                </div>

                <div className=" mt-6">
                  <p className="font-medium text-[26px] leading-[36px] tracking-[-1px] text-[#242828]">
                    ₦500,000,000
                  </p>
                </div>

                <div className="mt-6 ">
                  <button className=" rounded-[8px]  text-[#389294] border border-[#389294] px-4 py-1">
                    {" "}
                    withdraw &#8595;
                  </button>
                </div>
              </div>

              {/* gtatu */}
              <div className="flex flex-col gap-4 w-1/2">
                <div className="bg-[#fcfdfd] border border-[#e5e8e7] p-4 rounded-lg flex-1">
                  <p className="text-sm font-medium text-[#4B5353] flex justify-between items-center ">
                    Today’s Earnings
                    <span className="text-[#5FC92E] text-xs ">
                      &#8593;+2%{" "}
                      <span className="text-[#4b5353]">from last month</span>
                    </span>
                  </p>
                  <p className="text-[28px] font-medium text-[#242828] leading-9 tracking-[-1px] mt-2">
                    ₦100,000,000
                  </p>
                </div>
                <div className="bg-[#fcfdfd] border border-[#e5e8e7]  p-4 rounded-lg flex-1">
                  <p className="text-sm font-medium text-[#4B5353] flex justify-between items-center ">
                    Today’s Earnings
                    <span className="text-[#5FC92E] text-xs ">
                      &#8593;+2%{" "}
                      <span className="text-[#4b5353]">from last month</span>
                    </span>
                  </p>
                  <p className="text-[28px] font-medium text-[#242828] leading-9 tracking-[-1px] mt-2">
                    ₦100,000,000
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="flex flex-col w-1/2 h-3/4 ">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium text-[24px] leading-[32px] tracking-[-1px] w-[153px] h-[32px] text-[#242828]">
                Website Stats
              </h2>
              <div className="flex gap-[8px]">
                <button className="px-[8px] py-[4px] w-[58px] h-[28px] text-sm font-medium text-[#242828] text-[14px] leading-[20px] tracking-[-0.5px]  bg-[#D6F1EF] rounded-[4px] focus:outline-none">
                  Week
                </button>
                <button className="px-[8px] py-[4px] w-[58px] h-[28px] text-sm font-medium text-[#242828] text-[14px] leading-[20px] tracking-[-0.5px]  bg-transparent rounded-[4px] focus:outline-none">
                  Month
                </button>
                <button className="px-[8px] py-[4px] w-[58px] h-[28px] text-sm font-medium text-[#242828] text-[14px] leading-[20px] tracking-[-0.5px]  bg-transparent rounded-[4px] focus:outline-none">
                  Year
                </button>
              </div>
            </div>

            <div className="flex">
              <div className=" flex flex-col">
                <div className="flex gap-2">
                  <p className="text-2xl font-medium text-[#4B5353] mb-1">
                    1987
                  </p>
                  <p>views</p>
                </div>

                <div className="flex ">
                  {" "}
                  <span className="text-[#5FC92E] text-sm font-medium">
                    ↑ 2% <span className="text-[#4B5353]"> from last</span>
                  </span>
                </div>
              </div>

              <div className=" relative w-full">
                <button className="absolute right-0 top-0 text-sm text-[#4B5353] px-[8px] py-[2px] rounded-[4px] border border-[#389294] bg-transparent font-medium text-[16px] leading-[24px] tracking-[-0.5px]">
                  Sept 11 - Sept 18{" "}
                  <span className="text-[#389294]">&#8595;</span>
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={465}>
              <BarChart
                data={websiteData}
                margin={{ top: 5, right: 0, left: -18, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="views" fill="#389294" barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </section>

      {/* Earning stats */}
      <section className="bg-[#FCFDFD] px-[16px] pt-[16px] pb-[24px] rounded-[12px] w-full max-w-4xl mt-[40px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#242828] font-medium text-[24px] leading-[32px] tracking-[-1px]">
            Earnings Stats
          </h2>
          <div className="flex space-x-2">
            <button className="px-[8px] py-[4px] w-[58px] h-[28px] text-sm font-medium text-[#242828] text-[14px] leading-[20px] tracking-[-0.5px]  bg-[#D6F1EF] rounded-[4px] focus:outline-none">
              Week
            </button>
            <button className="px-[8px] py-[4px] w-[58px] h-[28px] text-sm font-medium text-[#242828] text-[14px] leading-[20px] tracking-[-0.5px]  bg-transparent rounded-[4px] focus:outline-none">
              Month
            </button>
            <button className="px-[8px] py-[4px] w-[58px] h-[28px] text-sm font-medium text-[#242828] text-[14px] leading-[20px] tracking-[-0.5px]  bg-transparent rounded-[4px] focus:outline-none">
              Year
            </button>
          </div>
        </div>

        <div className="flex">
          <p className="text-[#255A5D] font-medium text-[28px] leading-[36px] tracking-[-1px]">
            ₦30,000,000
          </p>
          <p className="text-[#EE454F] text-[16px] font-medium leading-[24px] tracking-[-0.5px]">
            ↓ 2% from last week
          </p>
          <div className=" relative w-full">
            <button className="absolute right-0 top-0 text-sm text-[#4B5353] px-[8px] py-[2px] rounded-[4px] border border-[#389294] bg-transparent font-medium text-[16px] leading-[24px] tracking-[-0.5px]">
              Sept 11 - Sept 18 <span className="text-[#389294]">&#8595;</span>
            </button>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={earningsData}
            margin={{ top: 5, right: 0, left: 18, bottom: 5 }}
          >
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#008080"
              fill="rgba(0, 128, 128, 0.2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </main>
  );
};

export default Dashboard;
