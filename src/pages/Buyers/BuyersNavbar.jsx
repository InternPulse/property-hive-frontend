
import logo from '../../assets/logos/Left Nav.svg'
import { useLocation,useNavigate } from 'react-router-dom'

const user = localStorage.getItem("userData")

const BuyersNavbar = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
  return (
    <nav className='h-[96px] flex justify-between items-center px-16'>
        <div><img src={logo} alt="" /></div>

        <ul className='flex gap-4'>
            <li className='text-[16px] leading-6 tracking-[-0.5px] text-[#3F86FA]'>Home</li>
            <li className={`text-[16px] leading-6 tracking-[-0.5px] text-[#3F86FA] ${pathname === '/properties/buyers' && 'border-b border-[#3F86FA]' }`}>Properties</li>
            <li className='text-[16px] leading-6 tracking-[-0.5px] text-[#3F86FA]'>About Us</li>
            <li className='text-[16px] leading-6 tracking-[-0.5px] text-[#3F86FA]'>Contact Us</li>
        </ul>

        {user ?
        <div>
        <button className='w-[127px] h-[48px] rounded-lg px-[20px] py-[12px] bg-[#3F86FA] text-white font-medium text-[16px] leading-6 tracking-[-0.5px]' >Dashboard</button>
    </div>
        :
        <div className='flex gap-4'>
            
            <div>
                <button className='w-[127px] h-[48px] rounded-lg px-[20px] py-[12px] text-[#3F86FA] border border-[#3F86FA] font-medium text-[16px] leading-6 tracking-[-0.5px]' onClick={()=>navigate('/buyer-signin')}>Sign In</button>
            </div>
            <div>
            <button className='w-[127px] h-[48px] rounded-lg px-[20px] py-[12px] bg-[#3F86FA] text-white font-medium text-[16px] leading-6 tracking-[-0.5px]' onClick={()=>navigate('/buyer-signup')}>Sign Up</button>
            </div>
        </div>
        }
    </nav>
  )
}

export default BuyersNavbar