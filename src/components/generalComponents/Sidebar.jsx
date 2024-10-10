import logo from '../../assets/icons/Group 1000002785.png'
import dasboardIcon from '../../assets/icons/home.png'
import manangeIcon from '../../assets/icons/building.png'
import transactionsIcon from '../../assets/icons/money-4.png'
import inquiriesIcon from '../../assets/icons/direct-inbox.png'
import messagesIcon from '../../assets/icons/sms.png'
import infoIcon from '../../assets/icons/info-circle.png'
import settingsIcon from '../../assets/icons/setting-2.png'
import logoutIcon from '../../assets/icons/logout.png'
import { Link,useLocation , useNavigate} from 'react-router-dom';
import { useContext } from 'react'
import DisplayContext from '../../context/DispalyContext'
import axios from 'axios'
import { baseurl } from '../../pages/authentication/company/company -signup'


const Sidebar = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate();
    const {display} = useContext(DisplayContext)

    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");

  
    const data = new FormData();
    data.append("refresh", refresh);

    const handleLogout = async () => {
try {
  const response = await axios.post(`${baseurl}api/v1/log-out`, data, {
    headers: {Authorization: `Bearer ${access}`}
    
  });

  console.log(response);
  if (response.status === 200) {
    navigate('/company-signin')
  }
} catch (error) {
  console.log(error)
}
      
    }
    
  return (
    <div className={`fixed z-10 ${display? ' translate-x-0': '-translate-x-[500px]'}  duration-300  xl:translate-x-0 xl:static w-[279px] text-[#F5F6F6] bg-[#203F41] min-h-screen py-[32px] flex flex-col justify-between items-center`}>
        
        <div>
            <img src={logo} alt="logo" />
        </div>

        

      <div className="w-full">
        <ul className="w-full">
          <li
            className={`${pathname.includes("/dashboard") && "border-l-[4px] border-white bg-[#389294]"}`}
          >
            <Link
              className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]"
              to={"/dashboard"}
            >
              <img src={dasboardIcon} alt="" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            className={`${pathname.includes("/manage-properties") && "border-l-[4px] border-white bg-[#389294]"}`}
          >
            <Link
              to={"/manage-properties"}
              className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]"
            >
              <img src={manangeIcon} alt="" />
              <span>Manage Properties</span>
            </Link>
          </li>
          <li className={`${pathname.includes("/transactions") && "border-l-[4px] border-white bg-[#389294]"}`}>
            <Link to={'/transactions'} className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
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
          <li
            className={`${pathname.includes("/messages") && "border-l-[4px] border-white bg-[#389294]"}`}
          >
            <Link
              className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]"
              to={"/messages"}
            >
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
          <li className={`${pathname.includes('/settings') && 'border-l-[4px] border-white bg-[#389294]'}`}>
            <Link to={'/settings'} className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
              <img src={settingsIcon} alt="" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full" onClick={handleLogout}>
        <Link className="flex items-center gap-3 py-[12px] pl-5 text-[20px] leading-[28px] tracking-[-0.75px]">
          <img src={logoutIcon} alt="" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
