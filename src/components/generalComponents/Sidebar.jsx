import manangeIcon from "@/src/assets/icons/building.png";
import inquiriesIcon from "@/src/assets/icons/direct-inbox.png";
import logo from "@/src/assets/icons/Group 1000002785.png";

import dasboardIcon from "@/src/assets/icons/home.png";
import infoIcon from "@/src/assets/icons/info-circle.png";
import logoutIcon from "@/src/assets/icons/logout.png";
import transactionsIcon from "@/src/assets/icons/money-4.png";
import settingsIcon from "@/src/assets/icons/setting-2.png";
import messagesIcon from "@/src/assets/icons/sms.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex min-h-screen w-[279px] flex-col items-center justify-between bg-[#203F41] py-[32px] text-[#F5F6F6]">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="w-full">
        <ul className="w-full">
          <li className="">
            <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
              <img src={dasboardIcon} alt="" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
              <img src={manangeIcon} alt="" />
              <span>Manage Properties</span>
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
              <img src={transactionsIcon} alt="" />
              <span>Transactions</span>
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
              <img src={inquiriesIcon} alt="" />
              <span>Inquiries</span>
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
              <img src={messagesIcon} alt="" />
              <span>Messages</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full">
        <ul className="w-full">
          <li className="">
            <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
              <img src={infoIcon} alt="" />
              <span>Help & Support</span>
            </Link>
          </li>
          <li className="">
            <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
              <img src={settingsIcon} alt="" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full">
        <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
          <img src={logoutIcon} alt="" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
