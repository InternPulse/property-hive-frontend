import cancel from '../assets/icons/Cancel.svg'
import successful from '../assets/icons/ep_success-filled.svg'
import { useNavigate } from 'react-router-dom'

const Successful = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/manage-properties')
    }
  return (
    <div className="bg-white w-[626px] h-[458px] shadow-2xl absolute z-10 rounded-[32px] ">
        <div className='flex justify-end w-full p-4'>
            <img src={cancel} alt="" onClick={handleClick} className=' cursor-pointer'/>
        </div>

        <div>
            <div className='flex justify-center'>
                <img src={successful} alt="" />
            </div>
            <h3 className='font-medium text-center leading-10 text-[32px] text-[#242828] tracking-[-1px] mt-4'>Property Successfully Added</h3>
        </div>
    </div>
  )
}

export default Successful