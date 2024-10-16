import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="px-5 py-10 bg-gray-100">
			<div className="flex flex-col lg:flex-row justify-between mx-auto max-w-7xl">
				{/* Left section: Logo and description */}
				<div className="lg:w-1/2 space-y-5">
					<img src="/logos/2.svg" alt="logo" className="h-10 w-auto" />
					<p className="text-gray-700">
						Join a network of top real estate companies on our platform. Advertise your properties and elevate your business with a trusted partner.
					</p>
					{/* Social Icons */}
					<div className="flex space-x-4 mt-5">
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
					</div>
				</div>

				{/* Right section: Features and Company */}
				<div className="mt-10 lg:mt-0 lg:flex lg:w-1/2 lg:justify-between space-y-10 lg:space-y-0">
					<div>
						<h1 className="font-semibold text-lg text-gray-900">Features</h1>
						<ul className="mt-3 space-y-2 text-gray-600">
							<li>Comprehensive analytics</li>
							<li>Personalized landing page</li>
							<li>Intuitive interface</li>
							<li>Advanced analytics</li>
						</ul>
					</div>
					<div>
						<h1 className="font-semibold text-lg text-gray-900">Company</h1>
						<ul className="mt-3 space-y-2 text-gray-600">
							<li>About company</li>
							<li>Contact us</li>
							<li>Careers</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className="bg-gray-400 h-px my-8 mx-auto max-w-7xl"></div>

			{/* Footer Bottom */}
			<div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-7xl text-gray-600 space-y-4 md:space-y-0">
				<div className="flex space-x-4">
					<a href="#" className="hover:underline">Terms and Conditions</a>
					<a href="#" className="hover:underline">Privacy Policy</a>
				</div>
				<p>&copy; 2024 Propertyhive</p>
			</div>
		</footer>
	);
}
