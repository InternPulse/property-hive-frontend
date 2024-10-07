import Phone from "../../assets/call.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/mdi_linkedin.png";
import Twitter from "../../assets/x.png";
import Camera from "../../assets/Vector.png";
import Photo from "../../assets/profile-picture.png";
import { useRef } from "react";

const Profile = () => {
  const fileRef = useRef(null);
  const handleFile = () => {
    fileRef.current.click();
  };
  return (
    <div className="flex min-h-screen bg-[#F5F6F6] p-11">
      <div className="mt-6 w-full rounded-lg bg-[#FCFDFD] p-6 shadow">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative h-24 w-24">
            <img
              className="h-full w-full rounded-full object-cover"
              src={Photo}
              alt="Profile"
            />
            <div
              onClick={handleFile}
              className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-[#389294] p-2"
            >
              <img className="w-5 text-[#fff]" src={Camera} alt="" />
              <input type="file" hidden ref={fileRef} />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-semibold">Dream Homes</h2>
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
            <div className="mt-1 flex items-center rounded-md border border-[#e2e8f0] p-2">
              <img className="mr-2 w-5 text-[#cbd5e0]" src={Phone} alt="" />
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
            <div className="border-[ #e2e8f0] mt-1 flex items-center rounded-md border p-2">
              <img className="mr-2 w-5 text-[#cbd5e0]" src={Phone} alt="" />
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
            <div className="mt-1 flex items-center rounded-md border border-[#e2e8f0] p-2">
              <img className="mr-2 w-5 text-[#cbd5e0]" src={Instagram} alt="" />
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
            <div className="mt-1 flex items-center rounded-md border border-[#e2e8f0] p-2">
              <img className="mr-2 w-5 text-[#cbd5e0]" src={Facebook} alt="" />
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
            <div className="mt-1 flex items-center rounded-md border border-[#e2e8f0] p-2">
              <img className="mr-2 w-5 text-[#cbd5e0]" src={Linkedin} alt="" />
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
            <div className="mt-1 flex items-center rounded-md border border-[#e2e8f0] p-2">
              <img className="mr-2 w-5 text-[#cbd5e0]" src={Twitter} alt="" />
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
  );
};

export default Profile;
