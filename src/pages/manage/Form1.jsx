import upload from '../../assets/Upload.png'
import { useEffect, useRef, useState } from "react";
import { statesOfNigeria } from "./states";
import PropTypes from 'prop-types';

const Form1 = ({r,switchPage,set,error,isValid}) => {
    const [addedPhotos,setAddedPhotos] = useState([]);
    const  [index,setIndex] = useState(null)
    const [selectPropertyType,setSelectPropertyType] = useState('');
    const [propertyItem,setProperty] = useState(false)
    const [selectState, setSelectState] = useState('');
    const [selectLGA, setSelectLGA] = useState(false);
    const imageRef = useRef(HTMLImageElement)
    
    const handleClick = (i) => {
        document.getElementById('fileInput').click(); 
        setIndex(i)
        
      };

      const handleImage =(e) =>{
        const file = e.target.files[0]; 
        setAddedPhotos(prev => {
          const updatedPhotos = [...prev]; // Create a copy of the existing array
          // If an item exists at the given index, update it with the new file
          if (updatedPhotos[index]) {
            updatedPhotos.splice(index, 1, file); // Replace the item at the index with the new file
          } else {
            updatedPhotos.push(file); // If the index doesn't exist, push the new file to the array
          }
          return updatedPhotos
        });
      }

      const handleInput = (e) =>{ 
          if(e.target.checked){
           setSelectPropertyType(e.target.value)
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
        set("propertyImage", addedPhotos)
        set('propertyType',selectPropertyType)
        set('state',selectState)
      },[set,addedPhotos,error,selectPropertyType,selectState])

  return (
    <div>
      <div className="text-[#242828] bg-white px-4 py-6 rounded-lg">
        <h3 className="font-semibold text-[24px] tracking-[-1px] leading-[32px] py-6">Property Information</h3>
        <div >
          <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Property Name *</label>
          <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter property name" {...r("propertyName",{required:{value:true,message:'This field is required'},minLength:{value:3,message:"Minimum length is 3"}})}/>
          {error.propertyName && <span className='text-red-500 '>{error.propertyName.message}</span>}
        </div>

          <div className="md:flex items-center gap-4 mt-3">
            <div className="basis-1/2 relative">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Property Type *</label>
            <input type="text" name="" id="" value={selectPropertyType}   onClick={()=> setProperty(!propertyItem)} {...r("propertyType",{required:{value:true,message:'This field is required'}})} placeholder='Select Property Type'  className='basis-1/2 border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg' />
            {error.propertyType && <span className='text-red-500 '>{error.propertyType.message}</span>}
            <fieldset className={` ${propertyItem ? ' flex ':' hidden '} duration-200 flex-col w-full absolute bg-white border border-[#CED3D3] select-items p-4 top-[90px]  rounded-lg`}>
                <label className="flex items-center mb-4">
                  <input type="radio"  onClick={ handleInput} name="propertyType" value="House" className="hidden peer" />
                  <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                    <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                  </div>
                  <span className="ml-2 text-lg font-medium">House</span>
                </label>

                <label className="flex items-center mb-4">
                  <input type="radio"  onClick={handleInput} name="propertyType" value="Land" className="hidden peer"/>
                  <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                    <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                  </div>
                  <span className="ml-2 text-lg font-medium">Land</span>
                </label>

                <label className="flex items-center mb-4">
                  <input type="radio"  onClick={handleInput} name="propertyType" value="Commercial" className="hidden peer" />
                  <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                    <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                  </div>
                  <span className="ml-2 text-lg font-medium">Commercial</span>
                </label>
            </fieldset>
            </div>

            <div className="basis-1/2">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Size (Square meters) *</label>
            <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter property size" {...r("size",{required:{value:true,message:'This field is required'},pattern:{
              value:/^[0-9]+$/,
              message: 'Please enter only numbers',
            }})}/>
            {error.size && <span className='text-red-500'>{error.size.message}</span>}
            </div> 
          </div>

          <div className="md:flex items-center gap-4 mt-3">
          <div className="basis-1/2">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Bedrooms</label>
            <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Number of bedrooms" {...r("numberOfBedrooms",{pattern:{
              value:/^[0-9]+$/,
              message: 'Please enter only numbers',
            }})}/>
            {error.numberOfBedrooms && <span className='text-red-500'>{error.numberOfBedrooms.message}</span>}
            </div>
              
            <div className="basis-1/2">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Bathroom</label>
            <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Number of bathrooms" {...r("numberOfBathrooms",{pattern:{
              value:/^[0-9]+$/,
              message: 'Please enter only numbers',
            }})}/>
          {error.numberOfBathrooms && <span className='text-red-500'>{error.numberOfBathrooms.message}</span>}
            </div>
          </div>
          
          <div className="mt-3">
          <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Keywords * (This will aid prospective buyers while searching)</label>
          <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter Keywords" {...r("keywords",{required:{value:true,message:'This field is required'},minLength:{value:3,message:"Minimum length is 3"}})}/>
          {error.keywords && <span className='text-red-500'>{error.keywords.message}</span>}
          </div>

          <div className="mt-3">
          <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Detailed Description *</label>
          <textarea type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg h-[251px] resize-none" placeholder="Write about Property..." {...r("description",{required:{value:true,message:'This field is required'}})}></textarea>
          {error.description && <span className='text-red-500'>{error.description.message}</span>}
          </div>

          <div className="md:flex items-center gap-4 mt-3">
            <div className="basis-1/2 relative">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">State *</label>
            <input type="text" name="" id="" value={selectState} placeholder='Select state'  onClick={()=> setSelectLGA(!selectLGA)}  className='basis-1/2 border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg' {...r("state",{required:{value:true,message:'This field is required'}})} />
            {error.state && <span className='text-red-500'>{error.state.message}</span>}
            <fieldset className={` ${selectLGA ? ' flex ':' hidden '} h-[308px] overflow-y-auto flex-col w-full absolute bg-white border border-[#CED3D3] select-items p-4 top-[90px]  rounded-lg`}>
              {statesOfNigeria.map((state) => (
                <label key={state} className="flex items-center mb-4">
                <input type="radio"  onClick={handleState} name="propertyType" value={state} className="hidden peer" />
                <div className="w-[24px] h-[24px] border-2 border-gray-300 rounded-full flex justify-center items-center peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="w-[12px] h-[12px] bg-white rounded-full peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">{state}</span>
              </label>
              ))}
         
         </fieldset>
            </div>

            <div className="basis-1/2">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">City *</label>
            <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter property size" {...r("city",{required:{value:true,message:'This field is required'},minLength:{value:3,message:"Minimum length is 3"}})}/>
            {error.city && <span className='text-red-500'>{error.city.message}</span>}
            </div>
          </div>

          <div  className="mt-3">
          <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Address *</label>
          <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter full address" {...r("address",{required:{value:true,message:'This field is required'},minLength:{value:3,message:"Minimum length is 3"}})}/>
          {error.address && <span className='text-red-500'>{error.address.message}</span>}
          </div>
      </div>

      <div className="text-[#242828] bg-white px-2 md:px-4 py-6 rounded-lg mt-6">
        <h3 className="font-semibold py-5 text-[24px] leading-[32px] tracking-[-1px] text-[#242828]">Upload Property Images *</h3>
        <div className="grid place-content-center md:grid-cols-3 gap-[12px] md:w-[1033px] mx-auto">
            <div className="div-list w-full md:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(0)}>
              {addedPhotos && addedPhotos[0]?
              <img src={URL.createObjectURL(addedPhotos[0])} alt="" ref={imageRef} className="w-full h-full object-cover" />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file"  name="" accept="image/*" onChange={handleImage}  className="w-full h-full outline-none invisible"   />
              </div>
            
              <div className="div-list w-full md:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(1)}>
              {addedPhotos  && addedPhotos[1]?
              <img src={URL.createObjectURL(addedPhotos[1])} alt="" className="w-full h-full object-cover" ref={imageRef} />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file" name="" accept="image/*" onChange={handleImage} className="w-full h-full outline-none invisible"    />
              </div>

              <div className="div-list w-full md:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(2)}>
              {addedPhotos  && addedPhotos[2]?
              <img src={URL.createObjectURL(addedPhotos[2])} alt="" className="w-full h-full object-cover" ref={imageRef} />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file" name="" accept="image/*" onChange={handleImage} className="w-full h-full outline-none invisible"    />
              </div>


              <div className="div-list w-full md:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(3)}>
              {addedPhotos  && addedPhotos[3]?
              <img src={URL.createObjectURL(addedPhotos[3])} alt="" className="w-full h-full object-cover" ref={imageRef} />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file" name="" accept="image/*" onChange={handleImage} className="w-full h-full outline-none invisible"    />
              </div>

              <div className="div-list w-full md:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(4)}>
              {addedPhotos  && addedPhotos[4]?
              <img src={URL.createObjectURL(addedPhotos[4])} alt="" className="w-full h-full object-cover" ref={imageRef} />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file" name="" accept="image/*" onChange={handleImage} className="w-full h-full outline-none invisible"    />
              </div>

              <div className="div-list w-full md:w-[333.67px] h-[146px] bg-[#F5F6F6]   border border-[#828E8E] border-dotted rounded-md cursor-pointer" onClick={()=>handleClick(5)}>
              {addedPhotos  && addedPhotos[5]?
              <img src={URL.createObjectURL(addedPhotos[5])} alt="" className="w-full h-full object-cover" ref={imageRef} />  
              :
              <div className="flex flex-col items-center py-[24px] px-[16px]">
                <div><img src={upload} alt="" /></div>
                <div><span className="text-[#224A4D] font-semibold text-[14px] tracking-[-0.5px] leading-[20px]">Click to upload</span><span className="text-[#475367] text-[14px] tracking-[-0.5px] leading-[20px]"> or drag and drop</span></div>
                <div><span className="text-[#828E8E] text-[12px] tracking-[-0.5px] leading-[16px]">PNG or JPG (max. 800x400px)</span></div>
              </div>
              }
              <input id="fileInput"  type="file" name="" accept="image/*" onChange={handleImage} className="w-full h-full outline-none invisible"    />
              </div>
           
        </div>
      </div>

        <div className="flex justify-end my-14">
          <button  onClick={ ()=>{
            // e.preventDefault();
            if(isValid){
                   switchPage()
            }
          }}  className="next-button py-[16px] px-[28px] rounded-lg w-[160px] text-[#FAFDFE] font-medium text-[20px] leading-7 tracking-[-0.75px]  disabled:bg-[#CED3D3] bg-[#389294] ">
            Next
          </button>
        </div>
        </div>
  )
}
 Form1.propTypes={
        r: PropTypes.func,
        switchPage:PropTypes.func,
        isValid:PropTypes.bool,
        set:PropTypes.func,
        error:PropTypes.object
}

export default Form1