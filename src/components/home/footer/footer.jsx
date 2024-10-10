import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BiX } from 'react-icons/bi';

export default function Footer() {
	return (
		<footer>
			<div className=' flex  mx-10 lg:mx-20 justify-between mt-7 lg:mt-16  '>
				<div>
					<img src='/logos/2.svg' alt='logo'/>
					<p className=' font-normal text-base mt-3 space-y-3'>
						Join a network of top real estate companies on our platform.
						Advertise <br /> your properties and elevate your business with a
						trusted partner.
					</p>

					<div className='flex space-x-4 mt-7'>
						<a href="https://web.facebook.com/profile.php?id=61566534966411" target="_blank" rel="noopener noreferrer">
							<FaFacebookF className="text-teal-700" size={20} />
						</a>
						<a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
							<FaInstagram className="text-teal-700" size={20} />
						</a>
						<a href="https://www.linkedin.com/company/propertyhivehq/" target="_blank" rel="noopener noreferrer">
							<FaLinkedinIn className="text-teal-700" size={20} />
						</a>

						<a href="https://x.com/PropertyHiveHq" target="_blank" rel="noopener noreferrer">
							<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="text-teal-700" // Apply deep teal color
							width="20" // Size of the icon
							height="20"
							>
							<path d="M23.636 0L14.157 10.157 24 23.636 14.157 14.157 0 24 10.157 14.157 0 .364l9.515 9.515L24 0z" />
							</svg>
						</a>
						{/* <a href="https://x.com/PropertyHiveHq" target="_blank" rel="noopener noreferrer">
							<FaTwitter className="text-teal-700" size={20} />
						</a> */}
					</div>
				</div>
				
				<div className='md:flex space-x-20 mt-14 hidden '>
					<div>
						<h1 className='font-semibold text-xl '>Features</h1>
						<ul className='mt-3 space-y-3 font-light text-base text-[#515151]'>
							<li>Comprehensive analytics</li>
							<li>Personalized landing page</li>
							<li>Intuitive interface</li>
							<li>Advance analytics</li>
						</ul>
					</div>
					<div>
						<h1 className='font-semibold text-xl'>Company</h1>
						<ul className='mt-3 space-y-3 font-light text-base text-[#515151]'>
							<li>About company</li>
							<li>Contact us</li>
							<li>Careers</li>
						</ul>{" "}
					</div>
				</div>
			</div>
			<div className='bg-[#515151] w-[79rem] mt-10 h-[1px] mx-auto'></div>
			<div className='flex  mt-3 mx-20 px-12 justify-between text-[#7B7A7A]'>
				<div className='flex gap-5'>
					<h5 className=''>Terms and Condition </h5>
					<h5>Privacy Policy</h5>
				</div>
				<p>Copyright 2024 Propertyhive</p>
			</div>
		</footer>
	);
}
