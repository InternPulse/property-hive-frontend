import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "./authentication/company/company -signup";

const getDashboard = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const { data } = await axios.get(`${baseurl}api/v1/dashboard/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

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
  <div className="flex h-auto w-full flex-col items-center rounded-md border border-[#e5e8e7] bg-[#fcfdfd] px-6 pb-4 pt-5 sm:h-[192px] sm:w-[196px]">
    {/* Icon */}
    <img src="/dashboard-images/Icon.png" alt="icon" className="mb-2 h-6 w-6" />

    {/* Title */}
    <h2 className="mb-1 text-lg font-medium leading-6 tracking-[-0.5px] sm:text-[18px]">
      {title}
    </h2>

    {/* Value */}
    <p className="mb-1 text-3xl font-medium leading-[40px] tracking-[-1px] text-[#242828] sm:text-[32px]">
      {value}
    </p>

    {/* Footer */}
    <p className="h-[28px] w-[124px] rounded border-0 bg-[#f3faf9] px-4 py-1 text-sm leading-[20px] tracking-[-0.5px] text-[#049ab6]">
      {footer}
    </p>
  </div>
);
const StatsCard2 = ({ title, value, footer }) => (
  <div className="flex h-auto w-full flex-col items-center rounded-md border border-[#e5e8e7] bg-[#fcfdfd] px-6 pb-4 pt-5 sm:h-[192px] sm:w-[196px]">
    {/* Icon */}
    <img
      src="/dashboard-images/icon2.png"
      alt="icon"
      className="mb-2 h-6 w-6"
    />

    {/* Title */}
    <h2 className="mb-1 text-lg font-medium leading-6 tracking-[-0.5px] sm:text-[18px]">
      {title}
    </h2>

    {/* Value */}
    <p className="mb-1 text-3xl font-medium leading-[40px] tracking-[-1px] text-[#242828] sm:text-[32px]">
      {value}
    </p>

    {/* Footer */}
    <p className="h-[28px] w-[141px] rounded border-0 bg-[#e5f3ff] px-4 py-1 text-sm leading-[20px] tracking-[-0.5px] text-[#0095ff]">
      {footer}
    </p>
  </div>
);
const StatsCard3 = ({ title, value, footer }) => (
  <div className="flex h-auto w-full flex-col items-center rounded-md border border-[#e5e8e7] bg-[#fcfdfd] px-6 pb-4 pt-5 sm:h-[192px] sm:w-[196px]">
    {/* Icon */}
    <img src="dashboard-images/icon3" alt="icon" className="mb-2 h-6 w-6" />

    {/* Title */}
    <h2 className="mb-1 text-lg font-medium leading-6 tracking-[-0.5px] sm:text-[18px]">
      {title}
    </h2>

    {/* Value */}
    <p className="mb-1 text-3xl font-medium leading-[40px] tracking-[-1px] text-[#242828] sm:text-[32px]">
      {value}
    </p>

    {/* Footer */}
    <p className="h-[28px] w-[111px] rounded border-0 bg-[#f1fbea] px-4 py-1 text-sm leading-[20px] tracking-[-0.5px] text-[#5fc92e]">
      {footer}
    </p>
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
  const [dashboard, setDashboard] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getDashboard();

        const transformedData = data.timestamp.map((date, index) => ({
          timestamp: date,
          profile_views: data.profile_views[index],
        }));

        // adding  the transformedData array to the existing Api object data
        data.newData = transformedData;

        console.log(data);
        setDashboard(data);
      } catch (error) {
        setError("Failed to load dashboard data.Please try again!");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center font-medium text-red-500">{error}</div>;
  }

  return (
    <main className="mx-auto w-full p-4 md:p-6">
      <header className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
        {/* Title */}
        <h1 className="left-[319px] top-[124px] h-[44px] w-[182px] text-[36px] font-semibold leading-[44px] tracking-[-1px] text-[#242828]">
          Dashboard
        </h1>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row">
          {/* Manage Webpage Button */}
          <button className="flex h-[48px] w-[215px] items-center justify-center rounded-[8px] bg-[#389294] px-[20px] py-[12px] text-[#FAFDFE]">
            Manage Webpage
            <img
              src="/dashboard-images/global.png"
              className="ml-2 inline"
              alt="manage webpage icon"
            />
          </button>

          {/* Add Property Button */}

          <Link
            to={"/manage-properties/add-property"}
            className="flex h-[48px] w-[178px] items-center justify-center rounded-[8px] border border-[#389294] bg-[#fafdfe] px-[20px] py-[12px] text-[#389294]"
          >
            Add Property
            <img
              src="/dashboard-images/add-circle.png"
              className="ml-2 inline"
              alt="add property icon"
            />
          </Link>
        </div>
      </header>

      <section className="flex w-full">
        {/* card  */}

        <section className="flex w-3/4 flex-col">
          <section className="h-[289px] w-[653px] rounded-[12px] bg-[#fcfdfd] px-[16px] pb-[24px] pt-[16px]">
            <h2 className="mb-4 text-[24px] font-medium leading-[32px] tracking-[-1px] text-[#242828]">
              Properties
            </h2>
            <article className="flex gap-[8px]">
              <StatsCard
                title="Total Listings"
                value={dashboard?.total_listings}
                footer="2 added today"
              />
              <StatsCard2
                title="Active Listings"
                value={dashboard?.active_listings}
                footer="5 Paused listings"
              />
              <StatsCard3
                title="Properties Sold"
                value={dashboard?.sold_properties}
                footer="2 sold today"
              />
            </article>
          </section>

          {/* finance */}
          <section className="mt-4 h-[289px] w-[653px] rounded-[12px] bg-[#fcfdfd] px-[16px] pb-[24px] pt-[16px]">
            <h2 className="mb-4 text-[24px] font-medium leading-[32px] tracking-[-1px] text-[#242828]">
              Finances
            </h2>
            <div className="flex gap-6">
              <div className="w-1/2 rounded border border-[#e5e8e7] bg-[#fcfdfd] pl-2">
                <div className="flex h-[40px] w-[274px] justify-between gap-4 pt-4">
                  <p className="px-1 text-[20px] font-medium leading-[28px] tracking-[-0.75px] text-[#4B5353]">
                    Available Earnings
                  </p>
                  <img
                    src="/dashboard-images/icon4"
                    alt="finance icon"
                    className="h-[40px] w-[40px]"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-[26px] font-medium leading-[36px] tracking-[-1px] text-[#242828]">
                    ₦500,000,000
                  </p>
                </div>

                <div className="mt-6">
                  <button className="rounded-[8px] border border-[#389294] px-4 py-1 text-[#389294]">
                    {" "}
                    withdraw &#8595;
                  </button>
                </div>
              </div>

              {/* gtatu */}
              <div className="flex w-1/2 flex-col gap-4">
                <div className="flex-1 rounded-lg border border-[#e5e8e7] bg-[#fcfdfd] p-4">
                  <p className="flex items-center justify-between text-sm font-medium text-[#4B5353]">
                    Today’s Earnings
                    <span className="text-xs text-[#5FC92E]">
                      &#8593;+2%{" "}
                      <span className="text-[#4b5353]">from last month</span>
                    </span>
                  </p>
                  <p className="mt-2 text-[28px] font-medium leading-9 tracking-[-1px] text-[#242828]">
                    ₦100,000,000
                  </p>
                </div>
                <div className="flex-1 rounded-lg border border-[#e5e8e7] bg-[#fcfdfd] p-4">
                  <p className="flex items-center justify-between text-sm font-medium text-[#4B5353]">
                    Today’s Earnings
                    <span className="text-xs text-[#5FC92E]">
                      &#8593;+2%{" "}
                      <span className="text-[#4b5353]">from last month</span>
                    </span>
                  </p>
                  <p className="mt-2 text-[28px] font-medium leading-9 tracking-[-1px] text-[#242828]">
                    ₦100,000,000
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="flex h-3/4 w-1/2 flex-col">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="h-[32px] w-[153px] text-[24px] font-medium leading-[32px] tracking-[-1px] text-[#242828]">
                Website Stats
              </h2>
              <div className="flex gap-[8px]">
                <button className="h-[28px] w-[58px] rounded-[4px] bg-[#D6F1EF] px-[8px] py-[4px] text-[14px] text-sm font-medium leading-[20px] tracking-[-0.5px] text-[#242828] focus:outline-none">
                  Week
                </button>
                <button className="h-[28px] w-[58px] rounded-[4px] bg-transparent px-[8px] py-[4px] text-[14px] text-sm font-medium leading-[20px] tracking-[-0.5px] text-[#242828] focus:outline-none">
                  Month
                </button>
                <button className="h-[28px] w-[58px] rounded-[4px] bg-transparent px-[8px] py-[4px] text-[14px] text-sm font-medium leading-[20px] tracking-[-0.5px] text-[#242828] focus:outline-none">
                  Year
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <p className="mb-1 text-2xl font-medium text-[#4B5353]">
                    1987
                  </p>
                  <p>views</p>
                </div>

                <div className="flex">
                  {" "}
                  <span className="text-sm font-medium text-[#5FC92E]">
                    ↑ 2% <span className="text-[#4B5353]"> from last</span>
                  </span>
                </div>
              </div>

              <div className="relative w-full">
                <button className="absolute right-0 top-0 rounded-[4px] border border-[#389294] bg-transparent px-[8px] py-[2px] text-[16px] text-sm font-medium leading-[24px] tracking-[-0.5px] text-[#4B5353]">
                  Sept 11 - Sept 18{" "}
                  <span className="text-[#389294]">&#8595;</span>
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={465}>
              <BarChart
                data={dashboard?.newData}
                margin={{ top: 5, right: 0, left: -18, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" tickLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="profile_views" fill="#389294" barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </section>

      {/* Earning stats */}
      <section className="mt-[40px] w-full max-w-4xl rounded-[12px] bg-[#FCFDFD] px-[16px] pb-[24px] pt-[16px]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[24px] font-medium leading-[32px] tracking-[-1px] text-[#242828]">
            Earnings Stats
          </h2>
          <div className="flex space-x-2">
            <button className="h-[28px] w-[58px] rounded-[4px] bg-[#D6F1EF] px-[8px] py-[4px] text-[14px] text-sm font-medium leading-[20px] tracking-[-0.5px] text-[#242828] focus:outline-none">
              Week
            </button>
            <button className="h-[28px] w-[58px] rounded-[4px] bg-transparent px-[8px] py-[4px] text-[14px] text-sm font-medium leading-[20px] tracking-[-0.5px] text-[#242828] focus:outline-none">
              Month
            </button>
            <button className="h-[28px] w-[58px] rounded-[4px] bg-transparent px-[8px] py-[4px] text-[14px] text-sm font-medium leading-[20px] tracking-[-0.5px] text-[#242828] focus:outline-none">
              Year
            </button>
          </div>
        </div>

        <div className="flex">
          <p className="text-[28px] font-medium leading-[36px] tracking-[-1px] text-[#255A5D]">
            ₦30,000,000
          </p>
          <p className="text-[16px] font-medium leading-[24px] tracking-[-0.5px] text-[#EE454F]">
            ↓ 2% from last week
          </p>
          <div className="relative w-full">
            <button className="absolute right-0 top-0 rounded-[4px] border border-[#389294] bg-transparent px-[8px] py-[2px] text-[16px] text-sm font-medium leading-[24px] tracking-[-0.5px] text-[#4B5353]">
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
