
import notificationIcon from '../../assets/images/Group 1000002800.png'
import user from '../../assets/icons/Frame 1000010090.png'
import downArrow from '../../assets/icons/Profile arrow.png'
import hamburger_menu from '../../assets/hamburger.png'
import { useContext } from 'react'
import DisplayContext from '../../context/DispalyContext'
import PropTypes from 'prop-types'

const Navbar = ({pagetitle}) => {
    const {display,setDisplay} = useContext(DisplayContext)
    
  return (
    <nav className=' w-full bg-[#FCFDFD] pt-[16px] pb-[8px] px-2 xl:px-[40px] gap-0 md:gap-3 xl:gap-0 flex justify-between items-center'>
        <div>
            <h1 className='md:text-[20px] xl:text-[28px] leading-[36px] tracking-[-1px] font-semibold text-[#242828]'>{pagetitle}</h1>
        </div>

        <div>
            <input type="search" name="" id=""  placeholder='  Search Property' className='bg-[#F5F6F6] md:w-[461px] py-[2px] px-[8px] md:h-[48px]'/>
        </div>

        <div className='hidden xl:block'>
            <ul className='flex items-center gap-3'>
                <li><img src={notificationIcon} alt="" /></li>
                <li className='flex items-center  gap-2'>
                    <img src={user} alt="" className='size-[48px]  rounded-full object-contain'/>
                    <div className='flex items-center'><span>DreamHomes</span> <img src={downArrow} alt="" /></div>
                    
                </li>
            </ul>
        </div>

        <div className=' xl:hidden'>
            <div className='' >
                <img src={hamburger_menu} onClick={()=>setDisplay(!display)} className='size-6 md:size-10 object-contain' alt="" />
            </div>
        </div>

    </nav>
  );
};

Navbar.propTypes = {
  pagetitle: PropTypes.string.isRequired,
};

export default Navbar;
