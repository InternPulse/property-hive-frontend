export default function Footer() {
	return (
		<footer>
			<div className=' flex  mx-10 lg:mx-20 justify-between  mt-10 lg:mt-20  '>
				<div className='items-center justify-center mx-auto'>
					<img src='src/assets/logos/logo.png' alt='logo' className='w-32' />
					<p className=' font-normal text-base mt-3 space-y-3'>
						Join a network of top real estate companies on our platform.
						Advertise <br /> your properties and elevate your business with a
						trusted partner.
					</p>
					<div className='flex space-x-4 mt-7'>
						<img src='src/assets/icon/facebook.png' alt='facebook' />
						<img src='src/assets/icon/instagram.png' alt='insta' />
						<img src='src/assets/icon/linkedin.png' alt='linkedin' />
						<img src='src/assets/icon/x.png' alt='twitter' />
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
			<div className='flex  mt-3 mx-20 justify-between text-[#7B7A7A]'>
				<div className='flex gap-5'>
					<h5 className=''>Terms and Condition </h5>
					<h5>Privacy Policy</h5>
				</div>
				<p>Copyright 2024 Propertyhive</p>
			</div>
		</footer>
	);
}
