import PropTypes from "prop-types";
import upload from '../../assets/Upload.png'
import { useEffect, useRef, useState } from "react";
import upload from "../../assets/Upload.png";
import { statesOfNigeria } from "./states";

const Form1 = ({ r, switchPage, set, error, isValid }) => {
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [index, setIndex] = useState(null);
  const [selectPropertyType, setSelectPropertyType] = useState("");
  const [propertyItem, setProperty] = useState(false);
  const [selectState, setSelectState] = useState("");
  const [selectLGA, setSelectLGA] = useState(false);
  const imageRef = useRef(HTMLImageElement);

  const handleClick = (i) => {
    document.getElementById("fileInput").click();
    setIndex(i);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setAddedPhotos((prev) => {
      const updatedPhotos = [...prev]; // Create a copy of the existing array
      // If an item exists at the given index, update it with the new file
      if (updatedPhotos[index]) {
        updatedPhotos.splice(index, 1, file); // Replace the item at the index with the new file
      } else {
        updatedPhotos.push(file); // If the index doesn't exist, push the new file to the array
      }
      return updatedPhotos;
    });
  };

  const handleInput = (e) => {
    if (e.target.checked) {
      setSelectPropertyType(e.target.value);
      setProperty(!propertyItem);
    }
  };

  const handleState = (e) => {
    if (e.target.checked) {
      setSelectState(e.target.value);
      setSelectLGA(!selectLGA);
    }
  };

  useEffect(() => {
    set("propertyImage", addedPhotos);
    set("propertyType", selectPropertyType);
    set("state", selectState);
  }, [set, addedPhotos, error, selectPropertyType, selectState]);

  return (
    <div>
      <div className="rounded-lg bg-white px-4 py-6 text-[#242828]">
        <h3 className="py-6 text-[24px] font-semibold leading-[32px] tracking-[-1px]">
          Property Information
        </h3>
        <div>
          <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
            Property Name *
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
            placeholder="Enter property name"
            {...r("propertyName", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Minimum length is 3" },
            })}
          />
          {error.propertyName && (
            <span className="text-red-500">{error.propertyName.message}</span>
          )}
        </div>

        <div className="mt-3 items-center gap-4 md:flex">
          <div className="relative basis-1/2">
            <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
              Property Type *
            </label>
            <input
              type="text"
              name=""
              id=""
              value={selectPropertyType}
              onClick={() => setProperty(!propertyItem)}
              {...r("propertyType", {
                required: { value: true, message: "This field is required" },
              })}
              placeholder="Select Property Type"
              className="w-full basis-1/2 rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
            />
            {error.propertyType && (
              <span className="text-red-500">{error.propertyType.message}</span>
            )}
            <fieldset
              className={` ${propertyItem ? "flex" : "hidden"} select-items absolute top-[90px] w-full flex-col rounded-lg border border-[#CED3D3] bg-white p-4 duration-200`}
            >
              <label className="mb-4 flex items-center">
                <input
                  type="radio"
                  onClick={handleInput}
                  name="propertyType"
                  value="House"
                  className="peer hidden"
                />
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">House</span>
              </label>

              <label className="mb-4 flex items-center">
                <input
                  type="radio"
                  onClick={handleInput}
                  name="propertyType"
                  value="Land"
                  className="peer hidden"
                />
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Land</span>
              </label>

              <label className="mb-4 flex items-center">
                <input
                  type="radio"
                  onClick={handleInput}
                  name="propertyType"
                  value="Commercial"
                  className="peer hidden"
                />
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                  <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                </div>
                <span className="ml-2 text-lg font-medium">Commercial</span>
              </label>
            </fieldset>
          </div>

          <div className="basis-1/2">
            <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
              Size (Square meters) *
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
              placeholder="Enter property size"
              {...r("size", {
                required: { value: true, message: "This field is required" },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter only numbers",
                },
              })}
            />
            {error.size && (
              <span className="text-red-500">{error.size.message}</span>
            )}
          </div>
        </div>

        <div className="mt-3 items-center gap-4 md:flex">
          <div className="basis-1/2">
            <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
              Bedrooms
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
              placeholder="Number of bedrooms"
              {...r("numberOfBedrooms", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter only numbers",
                },
              })}
            />
            {error.numberOfBedrooms && (
              <span className="text-red-500">
                {error.numberOfBedrooms.message}
              </span>
            )}
          </div>

          <div className="basis-1/2">
            <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
              Bathroom
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
              placeholder="Number of bathrooms"
              {...r("numberOfBathrooms", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter only numbers",
                },
              })}
            />
            {error.numberOfBathrooms && (
              <span className="text-red-500">
                {error.numberOfBathrooms.message}
              </span>
            )}
          </div>
        </div>

        <div className="mt-3">
          <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
            Keywords * (This will aid prospective buyers while searching)
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
            placeholder="Enter Keywords"
            {...r("keywords", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Minimum length is 3" },
            })}
          />
          {error.keywords && (
            <span className="text-red-500">{error.keywords.message}</span>
          )}
        </div>

        <div className="mt-3">
          <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
            Detailed Description *
          </label>
          <textarea
            type="text"
            className="h-[251px] w-full resize-none rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
            placeholder="Write about Property..."
            {...r("description", {
              required: { value: true, message: "This field is required" },
            })}
          ></textarea>
          {error.description && (
            <span className="text-red-500">{error.description.message}</span>
          )}
        </div>

        <div className="mt-3 items-center gap-4 md:flex">
          <div className="relative basis-1/2">
            <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
              State *
            </label>
            <input
              type="text"
              name=""
              id=""
              value={selectState}
              placeholder="Select state"
              onClick={() => setSelectLGA(!selectLGA)}
              className="w-full basis-1/2 rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
              {...r("state", {
                required: { value: true, message: "This field is required" },
              })}
            />
            {error.state && (
              <span className="text-red-500">{error.state.message}</span>
            )}
            <fieldset
              className={` ${selectLGA ? "flex" : "hidden"} select-items absolute top-[90px] h-[308px] w-full flex-col overflow-y-auto rounded-lg border border-[#CED3D3] bg-white p-4`}
            >
              {statesOfNigeria.map((state) => (
                <label key={state} className="mb-4 flex items-center">
                  <input
                    type="radio"
                    onClick={handleState}
                    name="propertyType"
                    value={state}
                    className="peer hidden"
                  />
                  <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-green-600 peer-checked:bg-green-500">
                    <span className="h-[12px] w-[12px] rounded-full bg-white peer-checked:bg-green-500"></span>
                  </div>
                  <span className="ml-2 text-lg font-medium">{state}</span>
                </label>
              ))}
            </fieldset>
          </div>

          <div className="basis-1/2">
            <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
              City *
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
              placeholder="Enter property size"
              {...r("city", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 3, message: "Minimum length is 3" },
              })}
            />
            {error.city && (
              <span className="text-red-500">{error.city.message}</span>
            )}
          </div>
        </div>

        <div className="mt-3">
          <label className="text-[20px] font-medium leading-[28px] tracking-[-0.75px]">
            Address *
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-[#CED3D3] px-[14px] py-[16px]"
            placeholder="Enter full address"
            {...r("address", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Minimum length is 3" },
            })}
          />
          {error.address && (
            <span className="text-red-500">{error.address.message}</span>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-white px-2 py-6 text-[#242828] md:px-4">
        <h3 className="py-5 text-[24px] font-semibold leading-[32px] tracking-[-1px] text-[#242828]">
          Upload Property Images *
        </h3>
        <div className="mx-auto grid place-content-center gap-[12px] md:w-[1033px] md:grid-cols-3">
          <div
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] md:w-[333.67px]"
            onClick={() => handleClick(0)}
          >
            {addedPhotos && addedPhotos[0] ? (
              <img
                src={URL.createObjectURL(addedPhotos[0])}
                alt=""
                ref={imageRef}
                className="h-full w-full object-cover"
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
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] md:w-[333.67px]"
            onClick={() => handleClick(1)}
          >
            {addedPhotos && addedPhotos[1] ? (
              <img
                src={URL.createObjectURL(addedPhotos[1])}
                alt=""
                className="h-full w-full object-cover"
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
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] md:w-[333.67px]"
            onClick={() => handleClick(2)}
          >
            {addedPhotos && addedPhotos[2] ? (
              <img
                src={URL.createObjectURL(addedPhotos[2])}
                alt=""
                className="h-full w-full object-cover"
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
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] md:w-[333.67px]"
            onClick={() => handleClick(3)}
          >
            {addedPhotos && addedPhotos[3] ? (
              <img
                src={URL.createObjectURL(addedPhotos[3])}
                alt=""
                className="h-full w-full object-cover"
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
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] md:w-[333.67px]"
            onClick={() => handleClick(4)}
          >
            {addedPhotos && addedPhotos[4] ? (
              <img
                src={URL.createObjectURL(addedPhotos[4])}
                alt=""
                className="h-full w-full object-cover"
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
            className="div-list h-[146px] w-full cursor-pointer rounded-md border border-dotted border-[#828E8E] bg-[#F5F6F6] md:w-[333.67px]"
            onClick={() => handleClick(5)}
          >
            {addedPhotos && addedPhotos[5] ? (
              <img
                src={URL.createObjectURL(addedPhotos[5])}
                alt=""
                className="h-full w-full object-cover"
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

      <div className="my-14 flex justify-end">
        <button
          onClick={() => {
            // e.preventDefault();
            if (isValid) {
              switchPage();
            }
          }}
          className="next-button w-[160px] rounded-lg bg-[#389294] px-[28px] py-[16px] text-[20px] font-medium leading-7 tracking-[-0.75px] text-[#FAFDFE] disabled:bg-[#CED3D3]"
        >
          Next
        </button>
      </div>
    </div>
  );
};
Form1.propTypes = {
  r: PropTypes.func,
  switchPage: PropTypes.func,
  isValid: PropTypes.bool,
  set: PropTypes.func,
  error: PropTypes.object,
};

export default Form1;
