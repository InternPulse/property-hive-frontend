import { useContext } from "react";
import hamburger_menu from "../../assets/hamburger.png";
import user from "../../assets/icons/Frame 1000010090.png";
import notificationIcon from "../../assets/icons/Group 1000002800.png";
import downArrow from "../../assets/icons/Profile arrow.png";
import DisplayContext from "../../context/DispalyContext";

const Navbar = ({ pagetitle }) => {
  const { display, setDisplay } = useContext(DisplayContext);

  return (
    <nav className="flex w-full items-center justify-between gap-0 bg-[#FCFDFD] px-2 pb-[8px] pt-[16px] md:gap-3 xl:gap-0 xl:px-[40px]">
      <div>
        <h1 className="font-semibold leading-[36px] tracking-[-1px] text-[#242828] md:text-[20px] xl:text-[28px]">
          {pagetitle}
        </h1>
      </div>

      <div>
        <input
          type="search"
          name=""
          id=""
          placeholder="  Search Property"
          className="bg-[#F5F6F6] px-[8px] py-[2px] md:h-[48px] md:w-[461px]"
        />
      </div>

      <div className="hidden xl:block">
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

      <div className="xl:hidden">
        <div className="">
          <img
            src={hamburger_menu}
            onClick={() => setDisplay(!display)}
            className="size-6 object-contain md:size-10"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
