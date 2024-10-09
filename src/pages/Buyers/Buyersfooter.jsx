import React from 'react'
import logo from '../../assets/icons/Vector (1).svg'
import facebook from  '../../assets/icons/Symbol.svg'
import twitter from  '../../assets/icons/Symbol (1).svg'
import instagram from  '../../assets/icons/Symbol (2).svg'
import linkedIn from  '../../assets/icons/Symbol (3).svg'

const Buyersfooter = () => {
  return (
    <footer className='bg-[#3F86FA] text-white pt-[56px] px-[7rem]'>
     <div className='flex border-b border-white justify-between py-4'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-center'><img src={logo} alt="" /></div>
        <span className='font-medium leading-5 text-[14px] '>Let’s find your perfect home</span>
        <ul className='flex items-center gap-6'>
          <li className='cursor-pointer'><img src={facebook} alt="" /></li>
          <li className='cursor-pointer'><img src={twitter} alt="" /></li>
          <li className='cursor-pointer'><img src={instagram} alt="" /></li>
          <li className='cursor-pointer'><img src={linkedIn} alt="" /></li>
        </ul>
      </div>

      <div>
        <ul className='flex flex-col gap-2'>
          <li className='text-[16px] leading-6 tracking-[-0.5px] font-medium'>Home</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Why choose us</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Features</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Payment Options</li>
        </ul>
      </div>

      <div>
      <ul className='flex flex-col gap-2'>
          <li className='text-[16px] leading-6 tracking-[-0.5px] font-medium'>Properties</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Residential Properties</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Commercial Properties</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Luxury Properties</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>New Listings</li>
        </ul>
      </div>

      <div>
      <ul className='flex flex-col gap-2'>
          <li className='text-[16px] leading-6 tracking-[-0.5px] font-medium'>About Us</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Mission</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Vision</li>
          
        </ul>
      </div>

      <div>
      <ul className='flex flex-col gap-2'>
          <li className='text-[16px] leading-6 tracking-[-0.5px] font-medium'>Contact us</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>FAQ’S</li>
          <li className='text-[16px] leading-6 tracking-[-0.5px]'>Help Center</li>
          
        </ul>
      </div>
     </div>

     <div className='flex justify-between py-5'>
      <div className='flex gap-6'>
        <p className='text-[12px] leading-4 tracking-[-0.5px]'>Terms and Conditions</p>
        <p className='text-[12px] leading-4 tracking-[-0.5px]'>Privacy Policy</p>
      </div>

      <div><p className='text-[12px] leading-4 tracking-[-0.5px]'>© 2023 Logo. All rights reserved.</p></div>
     </div>
    </footer>
  )
}

export default Buyersfooter