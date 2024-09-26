import {useContext} from 'react'
import DisplayContext from '../../context/DispalyContext'
import sqm from '../../assets/Vector (7).png'

const Preview = () => {
    const {data} = useContext(DisplayContext)
    console.log(data)
 
  return (
    <div className='px-6 py-4 text-[#242828]'>
        <h3 className='leading-[32px] tracking-[-1px] font-semibold text-[24px]'>Preview</h3>
        <div>
            <div>
                <div>
                    <div className='rounded-t-2xl'><img src={URL.createObjectURL(data?.propertyImage[0])} alt="" className='w-[1088px] h-[585px] object-cover rounded-t-2xl'/></div>
                </div>

                <div className='my-4 flex gap-5'>
                    <div className='w-[164px] h-[108px] rounded-lg'><img src={URL.createObjectURL(data.propertyImage[0])} className='w-full h-full object-cover rounded-lg' alt="" /></div>
                    <div className='w-[164px] h-[108px] rounded-lg'><img src={URL.createObjectURL(data.propertyImage[1])} className='w-full h-full object-cover rounded-lg' alt="" /></div>
                    <div className='w-[164px] h-[108px] rounded-lg'><img src={URL.createObjectURL(data.propertyImage[2])} className='w-full h-full object-cover rounded-lg' alt="" /></div>
                    <div className='w-[164px] h-[108px] rounded-lg'><img src={URL.createObjectURL(data.propertyImage[3])} className='w-full h-full object-cover rounded-lg' alt="" /></div>
                    <div className='w-[164px] h-[108px] rounded-lg'><img src={URL.createObjectURL(data.propertyImage[4])} className='w-full h-full object-cover rounded-lg' alt="" /></div>
                    <div className='w-[164px] h-[108px] rounded-lg'><img src={URL.createObjectURL(data.propertyImage[5])} className='w-full h-full object-cover rounded-lg' alt="" /></div>
                </div>

            </div>

            <div>
                <span className='leading-[28px] tracking-[-0.75px]  text-[20px]'>{data.propertyType}</span>
                <h1 className='leading-[44px] tracking-[-1px] font-semibold text-[36px]'>{data.propertyName}</h1>
                <p className='leading-[32px] tracking-[-1px] font-medium text-[24px] flex items-center gap-2'><img src={sqm} alt="" /> {data.size} Sqm.</p>
            </div>

            <div>
                <h2 className='bg-[#255A5D] px-[16px] leading-[40px] tracking-[-1px] font-medium text-[32px] text-[#F5F6F6]'>Description</h2>
                <p className='px-[16px] font-medium text-justify leading-[32px] tracking-[-1px] text-[24px] '>{data.description}</p>
            </div>

            <div>
            <h2 className='bg-[#255A5D] px-[16px] leading-[40px] tracking-[-1px] font-medium text-[32px] text-[#F5F6F6]'>Location</h2>
            <ul className='flex gap-8'>
                <li><span className='leading-[32px] tracking-[-1px] font-semibold text-[24px]'>State :</span> <span className='leading-[32px] tracking-[-1px] font-medium text-[24px] text-justify'>{data.state}</span></li>
                <li><span className='leading-[32px] tracking-[-1px] font-semibold text-[24px]'>City :</span> <span className='leading-[32px] tracking-[-1px] font-medium text-[24px] text-justify'>{data.city}</span></li>
            </ul>
            <div><span className='leading-[32px] tracking-[-1px] font-semibold text-[24px]'>Address:</span> <span className='leading-[32px] tracking-[-1px] font-medium text-[24px] text-justify'>{data.address}</span></div>
            </div>

            <div>
            <h2 className='bg-[#255A5D] px-[16px] leading-[40px] tracking-[-1px] font-medium text-[32px] text-[#F5F6F6]'>Pricing</h2>
            <div>
                <div className='flex items-center gap-3'>
                    <span className='leading-[36px] tracking-[-1px] font-medium text-[28px] text-[#545D5D]'>Outright Price:</span> <span className='leading-[32px] tracking-[-1px] font-semibold text-[40px] text-[#2B7376] text-justify'>{data.Outright_Payment_Price}</span>
                </div>

                <div className='flex items-center gap-3'>
                    <span className='leading-[36px] tracking-[-1px] font-medium text-[28px] text-[#545D5D]'>Installment</span> <span className='leading-[32px] tracking-[-1px] font-semibold text-[40px] text-[#2B7376] text-justify'>{data.Installment_Payment_Price} {`(${data.duration})`}</span>
                </div>

                <div className='flex items-center gap-3'>
                    <span className='leading-[36px] tracking-[-1px] font-medium text-[28px] text-[#545D5D]'>Down Payment:</span> <span className='leading-[32px] tracking-[-1px] font-semibold text-[40px] text-[#2B7376] text-justify'>{data.Down_Payment}</span>
                </div>

                <div className='flex items-center gap-3'>
                    <span className='leading-[36px] tracking-[-1px] font-medium text-[28px] text-[#545D5D]'>Payment Frequency:</span> <span className='leading-[32px] tracking-[-1px] font-semibold text-[40px] text-[#2B7376] text-justify'>{data.payment_frequency} </span>
                </div>
            </div>
            </div>
        </div>

        <div className="flex justify-end my-14 items-center gap-10">
          <button className="next-button py-[16px] px-[28px] rounded-lg w-[160px] text-[#389294] font-medium text-[20px] leading-7 tracking-[-0.75px]  disabled:bg-[#CED3D3] border border-[#389294] ">
            Back
          </button>

          <button type='submit'  className="next-button py-[16px] px-[28px] rounded-lg w-[160px] text-[#FAFDFE] font-medium text-[20px] leading-7 tracking-[-0.75px]  disabled:bg-[#CED3D3] bg-[#389294] ">
              Proceed
          </button>
        </div>
    </div>
  )
}

export default Preview