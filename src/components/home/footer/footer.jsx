import logo from '../../../assets/logos/logo.png'
import facebook from '../../../assets/icon/facebook.png'
import instagram from '../../../assets/icon/instagram.png'
import twitter from '../../../assets/icon/x.png'
import linkedIn from '../../../assets/icon/linkedin.png'
export default function Footer() {
	return (
		<footer>
			<div className=' flex  mx-10 lg:mx-20 justify-between  mt-10 lg:mt-20  '>
				<div className='items-center justify-center mx-auto'>
					<img src={logo} alt='logo' className='w-32' />
					<p className=' font-normal text-base mt-3 space-y-3'>
						Join a network of top real estate companies on our platform.
						Advertise <br /> your properties and elevate your business with a
						trusted partner.
					</p>
					<div className='flex space-x-4 mt-7'>
						<a href="https://web.facebook.com/profile.php?id=61566534966411" target='_blank'><img src={facebook} alt='facebook' /></a>
						<img src={instagram} alt='insta' />
						<a target='_blank' href="https://www.linkedin.com/posts/propertyhivehq_property-hive-activity-7249392696048439297-sbon?utm_source=share&utm_medium=member_android"><img src={linkedIn} alt='linkedin' /></a>
						<a href="https://www.linkedin.com/company/propertyhivehq/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt='twitter' /></a>
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
