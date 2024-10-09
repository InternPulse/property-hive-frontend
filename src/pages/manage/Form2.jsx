import upload from '../../assets/Upload.png'
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const Form2 = ({r,switchPage,set,error,isValid}) => {
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [duration,setDuration] = useState('');
    const [propertyItem,setProperty] = useState(false)
    const [selectState, setSelectState] = useState('');
    const  [index,setIndex] = useState(null)
    const [selectLGA, setSelectLGA] = useState(false);
    const imageRef = useRef(HTMLImageElement)
    
    const handleClick = (i) => {
        document.getElementById('fileInput').click(); 
        setIndex(i)
        
      };
    
      const handleImage =(e) =>{
        const file = e.target.files[0]; 
        setAddedPhotos(prev => {
          const updatedPhotos = [...prev]; 
          if (updatedPhotos[index]) {
            updatedPhotos.splice(index, 1, file); 
          } else {
            updatedPhotos.push(file); 
          }
          return updatedPhotos
        });
      }
      const handleInput = (e) =>{ 
        if(e.target.checked){
         setDuration(e.target.value)
         setProperty(!propertyItem)
        }
    }

    const handleState = (e) =>{ 
        if(e.target.checked){
         setSelectState(e.target.value)
         setSelectLGA(!selectLGA)
        }
    }


      useEffect(()=>{
        set('propertyDocument',addedPhotos)
        set('duration',duration)
        set('payment_frequency',selectState)
      },[set,addedPhotos,duration,selectState])

  return (
    <div >
          <div className="text-[#242828] bg-white px-4 py-6 rounded-lg">
        <h3 className="font-semibold text-[24px] tracking-[-1px] leading-[32px] ">Pricing</h3>
        <div className='flex gap-3 py-5'>
          <div className='w-[44px] cursor-pointer h-[24px] bg-[#4B5353] p-[2px] rounded-xl flex justify-end'>
            <div className=' size-5 rounded-full bg-white '></div> 
          </div>
          <span className='font-medium text-[18px] leading-[24px] -tracking-[0.5px]'>Installment Plan</span>
        </div>

        <div >
          <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Outright Payment Price (N) *</label>
          <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter outright payment amount" {...r("Outright_Payment_Price",{required:true, pattern: {
            value: /^[0-9]+$/,
            message: 'Please enter only numbers',
          },})}/>
          {error.Outright_Payment_Price && <span className='text-red-500 '>{error.Outright_Payment_Price.message}</span>}
        </div>

          <div className="md:flex items-center gap-4 mt-3">
            <div className="basis-1/2">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Installment Payment Price (N)*</label>
            <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter Installment Price" {...r("Installment_Payment_Price",{required:true, pattern: {
            value: /^[0-9]+$/,
            message: 'Please enter only numbers',
          },})}/>
          {error.Installment_Payment_Price && <span className='text-red-500 '>{error.Installment_Payment_Price.message}</span>}
            </div>

            <div className="basis-1/2">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Down Payment (₦)</label>
            <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter down payment to activate installment" {...r("Down_Payment",{ pattern: {
            value: /^[0-9]+$/,
            message: 'Please enter only numbers',
          },})}/>
          {error.Down_Payment && <span className='text-red-500 '>{error.Down_Payment.message}</span>}
            </div>
          </div>
          
          <div className="md:flex items-center gap-4 mt-3">
            <div className="basis-1/2 relative">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Installment duration (Months)</label>
            <input type="text" name="" id="" value={duration}  onClick={()=> setProperty(!propertyItem)} {...r("duration")} placeholder='Select Property Type'  className='basis-1/2 border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg' />
           
            <fieldset className={` ${propertyItem ? ' flex ':' hidden '} duration-200 flex-col w-full absolute bg-white border border-[#CED3D3] select-items p-4 top-[90px]  rounded-lg`}>
                <label className="flex items-center mb-4">
                  <input type="radio"  onClick={handleInput} name="duration" value="3 months" className="hidden peer" />
                  <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                    <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                  </div>
                  <span className="ml-2 text-lg font-medium">3 months</span>
                </label>

                <label className="flex items-center mb-4">
                  <input type="radio"  onClick={handleInput} name="duration" value="6 months" className="hidden peer"/>
                  <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                    <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                  </div>
                  <span className="ml-2 text-lg font-medium">6 months</span>
                </label>

                <label className="flex items-center mb-4">
                  <input type="radio"  onClick={handleInput} name="duration" value="12 months" className="hidden peer" />
                  <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                    <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                  </div>
                  <span className="ml-2 text-lg font-medium">12 months</span>
                </label>

                <label className="flex items-center mb-4">
                  <input type="radio"  onClick={handleInput} name="duration" value="Custom (Specify Months)" className="hidden peer" />
                  <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                    <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                  </div>
                  <span className="ml-2 text-lg font-medium">Custom (Specify Months)</span>
                </label>
            </fieldset>
            </div>

            <div className="basis-1/2 relative">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Payment Frequency (Months)</label>
            <input type="text" name="" id="" value={selectState} placeholder='Select state'  onClick={()=> setSelectLGA(!selectLGA)}  className='basis-1/2 border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg' {...r("payment_frequency")} />
            
            <fieldset className={` ${selectLGA ? ' flex ':' hidden '}  flex-col w-full absolute bg-white border border-[#CED3D3] select-items p-4 top-[90px]  rounded-lg`}>
             
                <label className="flex items-center mb-4">
                <input type="radio"  onClick={handleState} name="propertyType" value='Monthly' className="hidden peer" />
                <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Monthly</span>
              </label>
            
            <label className="flex items-center mb-4">
                <input type="radio"  onClick={handleState} name="propertyType" value='Every 3 months' className="hidden peer" />
                <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Every 3 months</span>
              </label>


              <label className="flex items-center mb-4">
                <input type="radio"  onClick={handleState} name="propertyType" value='Every 6 months' className="hidden peer" />
                <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Every 6 months</span>
              </label>

              <label className="flex items-center mb-4">
                <input type="radio"  onClick={handleState} name="propertyType" value='Every 12 months' className="hidden peer" />
                <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Every 12 months</span>
              </label>

              <label className="flex items-center mb-4">
                <input type="radio"  onClick={handleState} name="propertyType" value='Custom (Specify Frequency)' className="hidden peer" />
                <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Custom (Specify Frequency)</span>
              </label>
         
         </fieldset>
            </div>
          </div>
      </div>

      <div className="text-[#242828] bg-white px-4 py-6 rounded-lg mt-6">
        <h3 className="font-semibold py-5 text-[24px] leading-[32px] tracking-[-1px] text-[#242828]">Upload Property Images *</h3>
        <div className="grid xl:grid-cols-3 gap-[12px] xl:w-[1033px] mx-auto">
            <div className="div-list w-full xl:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(0)}>
              {addedPhotos && addedPhotos[0]?
              <img src={URL.createObjectURL(addedPhotos[0])} alt="" ref={imageRef} className="w-full h-full object-contain" />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file" accept="image/*" name="" onChange={handleImage} className="w-full h-full outline-none invisible"   />
              </div>
            
              <div className="div-list w-full xl:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(1)}>
              {addedPhotos  && addedPhotos[1]?
              <img src={URL.createObjectURL(addedPhotos[1])} alt="" className="w-full h-full object-contain" ref={imageRef} />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file" name="" accept="image/*" onChange={handleImage} className="w-full h-full outline-none invisible"   />
              </div>

              <div className="div-list w-full xl:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(2)}>
              {addedPhotos  && addedPhotos[2]?
              <img src={URL.createObjectURL(addedPhotos[2])} alt="" className="w-full h-full object-contain" ref={imageRef} />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file" name="" accept="image/*" onChange={handleImage} className="w-full h-full outline-none invisible"   />
              </div>


             
           
        </div>
      </div>

        <div className="flex justify-end my-14 items-center gap-10">
          <button onClick={switchPage}  className="next-button py-[16px] px-[28px] rounded-lg w-[160px] text-[#389294] font-medium text-[20px] leading-7 tracking-[-0.75px]  disabled:bg-[#CED3D3] border border-[#389294] ">
            Back
          </button>

          <button type='submit'  className="next-button py-[16px] px-[28px] rounded-lg w-[160px] text-[#FAFDFE] font-medium text-[20px] leading-7 tracking-[-0.75px]  disabled:bg-[#CED3D3] bg-[#389294] ">
              Preview
          </button>
        </div>
        </div>
  )
}

Form2.propTypes={
  r: PropTypes.func,
  switchPage:PropTypes.func,
  isValid:PropTypes.bool,
  set:PropTypes.func,
  error:PropTypes.object
}

export default Form2