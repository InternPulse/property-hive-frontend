import React from 'react'
import success from '../../assets/icons/Success Icon.svg'
import cancel from '../../assets/icons/Cancel (1).svg'
import { useNavigate } from 'react-router-dom'


const PurchaseSuccessful = () => {
    const navigate = useNavigate()
    
   const  handleClick = () =>{
        navigate('/properties/buyers/')
   }
  return (
    <div className='relative'>
        <div className='w-[736px] h-[400px] shadow-md rounded-[32px] absolute left-[50%] -top-[50%] -translate-x-[50%] translate-y-[50%]'>
            <div className='absolute right-0 cursor-pointer w-fit' onClick={handleClick} >
                <img src={cancel} alt="" />
            </div>
            <div className='flex justify-center'> 
                 <img src={success} alt="" />
                 </div>
            <p className='font-medium tracking-[-1px] text-center leading-[36px] text-[28px]'>Payment Successful</p>
        </div>
    </div>
  )
}

export default PurchaseSuccessful