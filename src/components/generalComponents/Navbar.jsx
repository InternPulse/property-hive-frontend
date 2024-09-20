import user from "@/src/assets/icons/Frame 1000010090.png";
import notificationIcon from "@/src/assets/icons/Group 1000002800.png";
import downArrow from "@/src/assets/icons/Profile arrow.png";
import { PropTypes } from "prop-types";

const Navbar = ({ pagetitle = "Dashboard" }) => {
  return (
    <nav className="flex w-full items-center justify-between bg-[#FCFDFD] px-10 pb-2 pt-4 md:gap-8">
      <div>
        <h1 className="shrink-0 text-[28px] font-semibold leading-[36px] tracking-[-1px] text-[#242828]">
          {pagetitle}
        </h1>
      </div>

      <div>
        <input
          type="search"
          name=""
          id=""
          placeholder="  Search Property"
          className="h-12 bg-[#F5F6F6] px-2 py-0.5"
        />
      </div>

      <div>
        <ul className="flex items-center gap-3">
          <li>
            <img src={notificationIcon} alt="" />
          </li>
          <li className="flex items-center gap-2">
            <img
              src={user}
              alt=""
              className="size-[48px] rounded-full object-contain"
            />
            <div className="flex items-center">
              <span>DreamHomes</span> <img src={downArrow} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  pagetitle: PropTypes.string.isRequired,
};

export default Navbar;
