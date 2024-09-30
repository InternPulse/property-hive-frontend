export default function Footer() {
  return (
    <footer>
      <div className="mx-10 mt-10 flex justify-between lg:mx-20 lg:mt-20">
        <div className="items-center justify-center">
          <img src="src/assets/logos/logo.png" alt="logo" className="w-32" />
          <p className="mt-3 space-y-3 text-base font-normal">
            Join a network of top real estate companies on our platform.
            Advertise <br /> your properties and elevate your business with a
            trusted partner.
          </p>
          <div className="mt-7 flex space-x-4">
            <img src="src/assets/icon/facebook.png" alt="facebook" />
            <img src="src/assets/icon/instagram.png" alt="insta" />
            <img src="src/assets/icon/linkedin.png" alt="linkedin" />
            <img src="src/assets/icon/x.png" alt="twitter" />
          </div>
        </div>
        <div className="mt-14 hidden space-x-20 md:flex">
          <div>
            <h1 className="text-xl font-semibold">Features</h1>
            <ul className="mt-3 space-y-3 text-base font-light text-[#515151]">
              <li>Comprehensive analytics</li>
              <li>Personalized landing page</li>
              <li>Intuitive interface</li>
              <li>Advance analytics</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Company</h1>
            <ul className="mt-3 space-y-3 text-base font-light text-[#515151]">
              <li>About company</li>
              <li>Contact us</li>
              <li>Careers</li>
            </ul>{" "}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 h-[1px] w-[79rem] bg-[#515151]"></div>
      <div className="mx-20 mt-3 flex justify-between text-[#7B7A7A]">
        <div className="flex gap-5">
          <h5 className="">Terms and Condition </h5>
          <h5>Privacy Policy</h5>
        </div>
        <p>Copyright 2024 Propertyhive</p>
      </div>
    </footer>
  );
}
