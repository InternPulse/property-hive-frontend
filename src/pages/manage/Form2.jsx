import PropTypes from "prop-types";
import upload from '../../assets/Upload.png'
import { useEffect, useRef, useState } from "react";
import upload from "../../assets/Upload.png";

const Form2 = ({ r, switchPage, set, error, isValid }) => {
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [duration, setDuration] = useState("");
  const [propertyItem, setProperty] = useState(false);
  const [selectState, setSelectState] = useState("");
  const [index, setIndex] = useState(null);
  const [selectLGA, setSelectLGA] = useState(false);
  const imageRef = useRef(HTMLImageElement);

  const handleClick = (i) => {
    document.getElementById("fileInput").click();
    setIndex(i);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setAddedPhotos((prev) => {
      const updatedPhotos = [...prev];
      if (updatedPhotos[index]) {
        updatedPhotos.splice(index, 1, file);
      } else {
        updatedPhotos.push(file);
      }
      return updatedPhotos;
    });
  };
  const handleInput = (e) => {
    if (e.target.checked) {
      setDuration(e.target.value);
      setProperty(!propertyItem);
    }
  };

  const handleState = (e) => {
    if (e.target.checked) {
      setSelectState(e.target.value);
      setSelectLGA(!selectLGA);
    }
  };



      useEffect(()=>{
        set('propertyDocument',addedPhotos)
        set('installment_duration',duration)
        set('payment_frequency',selectState)
      },[set,addedPhotos,duration,selectState])


  return (
    <div>
      <div className="rounded-lg bg-white px-4 py-6 text-[#242828]">
        <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-1px]">
          Pricing
        </h3>
        <div className="flex gap-3 py-5">
          <div className="flex h-[24px] w-[44px] cursor-pointer justify-end rounded-xl bg-[#4B5353] p-[2px]">
            <div className="size-5 rounded-full bg-white"></div>
          </div>
          <span className="text-[18px] font-medium leading-[24px] -tracking-[0.5px]">
            Installment Plan
          </span>
        </div>


        <div >
          <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Outright Payment Price (N) *</label>
          <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter outright payment amount" {...r("price",{required:true, pattern: {
            value: /^[0-9]+$/,
            message: 'Please enter only numbers',
          },})}/>
          {error.Outright_Payment_Price && <span className='text-red-500 '>{error.Outright_Payment_Price.message}</span>}
        </div>

          <div className="md:flex items-center gap-4 mt-3">
            <div className="basis-1/2">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Installment Payment Price (N)*</label>
            <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter Installment Price" {...r("installment_payment_price",{required:true, pattern: {
            value: /^[0-9]+$/,
            message: 'Please enter only numbers',
          },})}/>
          {error.Installment_Payment_Price && <span className='text-red-500 '>{error.Installment_Payment_Price.message}</span>}
            </div>

            <div className="basis-1/2">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Down Payment (₦)</label>
            <input type="text" className="border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg" placeholder="Enter down payment to activate installment" {...r("down_payment",{ pattern: {
            value: /^[0-9]+$/,
            message: 'Please enter only numbers',
          },})}/>
          {error.Down_Payment && <span className='text-red-500 '>{error.Down_Payment.message}</span>}
            </div>
          </div>
          
          <div className="md:flex items-center gap-4 mt-3">
            <div className="basis-1/2 relative">
            <label className=" font-medium text-[20px] tracking-[-0.75px] leading-[28px]">Installment duration (Months)</label>
            <input type="text" name="" id="" value={duration}  onClick={()=> setProperty(!propertyItem)} {...r("installment_duration")} placeholder='Select Property Type'  className='basis-1/2 border border-[#CED3D3] w-full py-[16px] px-[14px] rounded-lg' />
           
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

          <div className="relative basis-1/2">
            <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
              Payment Frequency (Months)
            </label>
            <input
              type="text"
              name=""
              id=""
              value={selectState}
              placeholder="Select state"
              onClick={() => setSelectLGA(!selectLGA)}
              className="w-full basis-1/2 rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
              {...r("payment_frequency")}
            />

            <fieldset
              className={` ${selectLGA ? "flex" : "hidden"} select-items absolute top-[90px] w-full flex-col rounded-lg border border-[#CED3D3] bg-white p-4`}
            >
              <label className="mb-4 flex items-center">
                <input
                  type="radio"
                  onClick={handleState}
                  name="propertyType"
                  value="Monthly"
                  className="peer hidden"
                />
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Monthly</span>
              </label>

              <label className="mb-4 flex items-center">
                <input
                  type="radio"
                  onClick={handleState}
                  name="propertyType"
                  value="Every 3 months"
                  className="peer hidden"
                />
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Every 3 months</span>
              </label>

              <label className="mb-4 flex items-center">
                <input
                  type="radio"
                  onClick={handleState}
                  name="propertyType"
                  value="Every 6 months"
                  className="peer hidden"
                />
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Every 6 months</span>
              </label>

              <label className="mb-4 flex items-center">
                <input
                  type="radio"
                  onClick={handleState}
                  name="propertyType"
                  value="Every 12 months"
                  className="peer hidden"
                />
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">
                  Every 12 months
                </span>
              </label>

              <label className="mb-4 flex items-center">
                <input
                  type="radio"
                  onClick={handleState}
                  name="propertyType"
                  value="Custom (Specify Frequency)"
                  className="peer hidden"
                />
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">
                  Custom (Specify Frequency)
                </span>
              </label>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-white px-4 py-6 text-[#242828]">
        <h3 className="py-5 text-[24px] font-semibold leading-[32px] tracking-[-1px] text-[#242828]">
          Upload Property Images *
        </h3>
        <div className="mx-auto grid gap-[12px] xl:w-[1033px] xl:grid-cols-3">
          <div
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] xl:w-[333.67px]"
            onClick={() => handleClick(0)}
          >
            {addedPhotos && addedPhotos[0] ? (
              <img
                src={URL.createObjectURL(addedPhotos[0])}
                alt=""
                ref={imageRef}
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center px-[16px] py-[24px]">
                <div>
                  <img src={upload} alt="" />
                </div>
                <div>
                  <span className="text-[14px] font-semibold leading-[20px] tracking-[-0.5px] text-[#224A4D]">
                    Click to upload
                  </span>
                  <span className="text-[14px] leading-[20px] tracking-[-0.5px] text-[#475367]">
                    {" "}
                    or drag and drop
                  </span>
                </div>
                <div>
                  <span className="text-[12px] leading-[16px] tracking-[-0.5px] text-[#828E8E]">
                    PNG or JPG (max. 800x400px)
                  </span>
                </div>
              </div>
            )}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              name=""
              onChange={handleImage}
              className="invisible h-full w-full outline-none"
            />
          </div>

          <div
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] xl:w-[333.67px]"
            onClick={() => handleClick(1)}
          >
            {addedPhotos && addedPhotos[1] ? (
              <img
                src={URL.createObjectURL(addedPhotos[1])}
                alt=""
                className="h-full w-full object-contain"
                ref={imageRef}
              />
            ) : (
              <div className="flex flex-col items-center px-[16px] py-[24px]">
                <div>
                  <img src={upload} alt="" />
                </div>
                <div>
                  <span className="text-[14px] font-semibold leading-[20px] tracking-[-0.5px] text-[#224A4D]">
                    Click to upload
                  </span>
                  <span className="text-[14px] leading-[20px] tracking-[-0.5px] text-[#475367]">
                    {" "}
                    or drag and drop
                  </span>
                </div>
                <div>
                  <span className="text-[12px] leading-[16px] tracking-[-0.5px] text-[#828E8E]">
                    PNG or JPG (max. 800x400px)
                  </span>
                </div>
              </div>
            )}
            <input
              id="fileInput"
              type="file"
              name=""
              accept="image/*"
              onChange={handleImage}
              className="invisible h-full w-full outline-none"
            />
          </div>

          <div
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] xl:w-[333.67px]"
            onClick={() => handleClick(2)}
          >
            {addedPhotos && addedPhotos[2] ? (
              <img
                src={URL.createObjectURL(addedPhotos[2])}
                alt=""
                className="h-full w-full object-contain"
                ref={imageRef}
              />
            ) : (
              <div className="flex flex-col items-center px-[16px] py-[24px]">
                <div>
                  <img src={upload} alt="" />
                </div>
                <div>
                  <span className="text-[14px] font-semibold leading-[20px] tracking-[-0.5px] text-[#224A4D]">
                    Click to upload
                  </span>
                  <span className="text-[14px] leading-[20px] tracking-[-0.5px] text-[#475367]">
                    {" "}
                    or drag and drop
                  </span>
                </div>
                <div>
                  <span className="text-[12px] leading-[16px] tracking-[-0.5px] text-[#828E8E]">
                    PNG or JPG (max. 800x400px)
                  </span>
                </div>
              </div>
            )}
            <input
              id="fileInput"
              type="file"
              name=""
              accept="image/*"
              onChange={handleImage}
              className="invisible h-full w-full outline-none"
            />
          </div>
        </div>
      </div>

      <div className="my-14 flex items-center justify-end gap-10">
        <button
          onClick={switchPage}
          className="next-button w-[160px] rounded-lg border border-[#389294] px-[28px] py-[16px] text-[20px] font-medium leading-7 tracking-[-0.75px] text-[#389294] disabled:bg-[#CED3D3]"
        >
          Back
        </button>

        <button
          type="submit"
          className="next-button w-[160px] rounded-lg bg-[#389294] px-[28px] py-[16px] text-[20px] font-medium leading-7 tracking-[-0.75px] text-[#FAFDFE] disabled:bg-[#CED3D3]"
        >
          Preview
        </button>
      </div>
    </div>
  );
};

Form2.propTypes = {
  r: PropTypes.func,
  switchPage: PropTypes.func,
  isValid: PropTypes.bool,
  set: PropTypes.func,
  error: PropTypes.object,
};

export default Form2;
