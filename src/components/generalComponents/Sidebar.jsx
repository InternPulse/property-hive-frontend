import logo from '../../assets/Group 1000002785.png'
import dasboardIcon from '../../assets/home.png'
import manangeIcon from '../../assets/buliding.png'
import transactionsIcon from '../../assets/money-4.png'
import inquiriesIcon from '../../assets/direct-inbox.png'
import messagesIcon from '../../assets/sms.png'
import infoIcon from '../../assets/info-circle.png'
import settingsIcon from '../../assets/setting-2.png'
import logoutIcon from '../../assets/logout.png'
import { Link,useLocation } from 'react-router-dom';
import { useContext } from 'react'
import DisplayContext from '../../context/DispalyContext'

const Sidebar = () => {
    const {pathname} = useLocation()
    const {display} = useContext(DisplayContext)
    
  return (
    <div className={`fixed z-10 ${display? ' translate-x-0': '-translate-x-[500px]'}  duration-300  xl:translate-x-0 xl:static w-[279px] text-[#F5F6F6] bg-[#203F41] min-h-screen py-[32px] flex flex-col justify-between items-center`}>
        
        <div>
            <img src={logo} alt="logo" />
        </div>

        <div className=' w-full '>
            <ul className='w-full '>
                <li className={`${pathname.includes('/dashboard') && 'border-l-[4px] border-white bg-[#389294]'}`}><Link className='pl-5 flex items-center gap-3 py-[12px] text-[20px] leading-[28px] tracking-[-0.75px]' to={'/dashboard'}><img src={dasboardIcon} alt="" /><span>Dashboard</span></Link></li>
                <li className={`${pathname.includes('/manage-properties') && 'border-l-[4px] border-white bg-[#389294]'}`}><Link to={'/manage-properties'} className='pl-5 flex items-center gap-3 py-[12px] text-[20px] leading-[28px] tracking-[-0.75px]'><img src={manangeIcon} alt="" /><span>Manage Properties</span></Link></li>
                <li className=''><Link className='pl-5 flex items-center gap-3 py-[12px] text-[20px] leading-[28px] tracking-[-0.75px]'><img src={transactionsIcon} alt="" /><span>Transactions</span></Link></li>
                <li className=''><Link className='pl-5 flex items-center gap-3 py-[12px] text-[20px] leading-[28px] tracking-[-0.75px]'><img src={inquiriesIcon} alt="" /><span>Inquiries</span></Link></li>
                <li className={`${pathname.includes('/messages') && 'border-l-[4px] border-white bg-[#389294]'}`}><Link className='pl-5 flex items-center gap-3 py-[12px] text-[20px] leading-[28px] tracking-[-0.75px]' to={'/messages'}><img src={messagesIcon} alt="" /><span>Messages</span></Link></li>
            </ul>
        </div>

        <div className=' w-full '>
            <ul className='w-full '>
            <li className=''><Link className='pl-5 flex items-center gap-3 py-[12px] text-[20px] leading-[28px] tracking-[-0.75px]'><img src={infoIcon} alt="" /><span>Help & Support</span></Link></li>
            <li className=''><Link className='pl-5 flex items-center gap-3 py-[12px] text-[20px] leading-[28px] tracking-[-0.75px]'><img src={settingsIcon} alt="" /><span>Settings</span></Link></li>
            </ul>
        </div>

        <div className='w-full '>
        <Link className='pl-5 flex items-center gap-3 py-[12px] text-[20px] leading-[28px] tracking-[-0.75px]'><img src={logoutIcon} alt="" /><span>Logout</span></Link>
        </div>
    </div>
  )
}

export default Sidebar