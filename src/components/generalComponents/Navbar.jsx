import notificationIcon from '../../assets/Group 1000002800.png'
import user from '../../assets/Frame 1000010090.png'
import downArrow from '../../assets/Profile arrow.png'

const Navbar = ({pagetitle}) => {
  return (
    <nav className=' w-full bg-[#FCFDFD] pt-[16px] pb-[8px] px-[40px] flex justify-between'>
        <div>
            <h1 className='text-[28px] leading-[36px] tracking-[-1px] font-semibold text-[#242828]'>Manage Properties</h1>
        </div>

        <div>
            <input type="search" name="" id=""  placeholder='  Search Property' className='bg-[#F5F6F6] w-[461px] py-[2px] px-[8px] h-[48px]'/>
        </div>

        <div>
            <ul className='flex items-center gap-3'>
                <li><img src={notificationIcon} alt="" /></li>
                <li className='flex items-center  gap-2'>
                    <img src={user} alt="" className='size-[48px]  rounded-full object-contain'/>
                    <div className='flex items-center'><span>DreamHomes</span> <img src={downArrow} alt="" /></div>
                    
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar