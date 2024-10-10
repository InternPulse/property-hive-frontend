import Phone from "../../assets/icons/call.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/icons/xrp-(xrp).png";
import Camera from "../../assets/Vector (8).png";
import Photo from "../../assets/d0c5631a6f06dc4b91454afafa7145d7.jpeg";
import { useRef } from "react";

const Profile = () => {
  const fileRef = useRef(null);
  const handleFile = () => {
    fileRef.current.click()
  }
  return (
    <div className="p-11 min-h-screen flex bg-[#F5F6F6]">
    <div className="mt-6 bg-[#FCFDFD] p-6 rounded-lg shadow w-full">
      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <img
            className="w-full h-full rounded-full object-cover"
            src={Photo}
            alt="Profile"
          />
          <div onClick={handleFile} className="absolute cursor-pointer bottom-0 right-0 bg-[#389294] p-2 rounded-full">
            <img className="text-[#fff] w-5" src={Camera} alt="" />
            <input type="file" hidden ref={fileRef} />
          </div>
        </div>
        <h2 className="text-xl font-semibold mt-4">Dream Homes</h2>
      </div>

      {/* Contact Form */}
      <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone1"
            className="block text-sm font-medium text-[#4a5568]"
          >
            Phone number 1 *
          </label>
          <div className="mt-1 flex items-center border border-[#e2e8f0] rounded-md p-2">
            <img className="text-[#cbd5e0] mr-2 w-5" src={Phone} alt="" />
            <input
              id="phone1"
              type="text"
              className="flex-1 border-none outline-none"
              placeholder="Enter Phone number"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone2"
            className="block text-sm font-medium text-[#4a5568]"
          >
            Phone number 2
          </label>
          <div className="mt-1 flex items-center border border-[ #e2e8f0] rounded-md p-2">
            <img className="text-[#cbd5e0] mr-2 w-5" src={Phone} alt="" />
            <input
              id="phone2"
              type="text"
              className="flex-1 border-none outline-none"
              placeholder="Enter Phone number"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="instagram"
            className="block text-sm font-medium text-[#4a5568]"
          >
            Instagram
          </label>
          <div className="mt-1 flex items-center border border-[#e2e8f0] rounded-md p-2">
            <img className="text-[#cbd5e0] mr-2 w-5" src={Instagram} alt="" />
            <input
              id="instagram"
              type="text"
              className="flex-1 border-none outline-none"
              placeholder="Handle"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="facebook"
            className="block text-sm font-medium text-[#4a5568]"
          >
            Facebook
          </label>
          <div className="mt-1 flex items-center border border-[#e2e8f0] rounded-md p-2">
            <img className="text-[#cbd5e0] mr-2 w-5" src={Facebook} alt="" />
            <input
              id="facebook"
              type="text"
              className="flex-1 border-none outline-none"
              placeholder="Handle"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-[#4a5568]"
          >
            LinkedIn
          </label>
          <div className="mt-1 flex items-center border border-[#e2e8f0] rounded-md p-2">
            <img className="text-[#cbd5e0] mr-2 w-5" src={Linkedin} alt="" />
            <input
              id="linkedin"
              type="text"
              className="flex-1 border-none outline-none"
              placeholder="Handle"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="twitter"
            className="block text-sm font-medium text-[#4a5568]"
          >
            Twitter
          </label>
          <div className="mt-1 flex items-center border border-[#e2e8f0] rounded-md p-2">
            <img className="text-[#cbd5e0] mr-2 w-5" src={Twitter} alt="" />
            <input
              id="twitter"
              type="text"
              className="flex-1 border-none outline-none"
              placeholder="Handle"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Profile