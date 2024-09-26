import { EmblaCarousel } from "./carousel/Carousel";

const Features = () => {
	return (
		<div className='bg-[#FCFDFD] '>
			<div className=' mx-20 xl:mx-36 mt-10'>
				<EmblaCarousel />
				<div className=' flex flex-col text-center items-center justify-center '>
					<h1 className=' text-[#255A5D] p-5 font-semibold  text-4xl leading-12 lg:text-5xl '>
						Features
					</h1>
					<p className='text-[#4B5353] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl'>
						We’re committed to providing a comprehensive suite of features
						designed to elevate your experience and drive success.
					</p>
				</div>{" "}
				<div className='relative mt-40  '>
					<div className=' flex justify-between flex-col lg:flex-row space-y-7 '>
						<div className=' mt-24 lg:mt-44'>
							<h4 className='text-base md:text-base lg:text-base xl:text-lg font-light text-[#2B7376] bg-[#ECFFFF] p-1.5 text-center w-40  xl:w-[195px] border border-[#2B7376] rounded-full  '>
								Tailored Showcase
							</h4>
							<h1 className='font-bold text-2xl lg:text-3xl'>
								Personalized landing page
							</h1>
							<p className=' mt-3 font-normal text-base lg:text-xl text-[#242828] '>
								Create fully customized webpages that effectively showcase{" "}
								<br />
								your properties. Each page can be tailored to include <br />
								your company’s logo and color scheme, ensuring a cohesive and{" "}
								<br />
								branded experience. With integrated features like payment,{" "}
								<br />
								messaging and inquiry systems, client engagement is seamless and
								efficient.
							</p>
						</div>
						<div className=' bg-[#F5F6F6] border rounded-2xl shadow-2xl items-center justify-center flex p-7 flex-col space-y-3  w-[440px] lg:w-[480px] '>
							<img
								src='/src/assets/Landing-Page.png'
								className=' border'
								sizes={100}
							/>
							<img src='/src/assets/Featured-Section.png' className='border' />
						</div>
					</div>
					<div className=' flex justify-between flex-col lg:flex-row space-y-7 mt-20 '>
						<div className=' bg-[#F5F6F6] border rounded-2xl shadow-2xl items-center justify-center flex p-7 flex-col space-y-3  w-[400px] lg:w-[480px] '>
							<img
								src='/src/assets/Properties-section.png'
								className=' border'
							/>
							<img src='/src/assets/Top.png' className=' border' />
						</div>
						<div className=' mt-40'>
							<h4 className='text-base md:text-base lg:text-base xl:text-lg font-light text-[#2B7376] bg-[#ECFFFF] p-1.5 text-center w-48  xl:w-[195px] border border-[#2B7376] rounded-full  '>
								Effortless Navigation
							</h4>
							<h1 className='font-bold text-2xl lg:text-3xl'>
								Easy-to-Use Interface
							</h1>
							<p className=' mt-3 font-normal text-base lg:text-xl text-[#242828] '>
								Our platform is intuitively designed, enabling real estate
								<br /> companies to effortlessly create, manage, and handle
								<br />
								properties listing and transactions. No technical expertise is
								<br /> required—just a few clicks, and you are on your way to
								<br /> driving success.
							</p>
						</div>
					</div>
					<div className=' flex justify-between flex-col lg:flex-row space-y-7 mt-16 '>
						<div className=' mt-24 lg:mt-44'>
							<h4 className='text-base md:text-base lg:text-base xl:text-lg font-light text-[#2B7376] bg-[#ECFFFF] p-1.5 text-center w-40  xl:w-[195px] border border-[#2B7376] rounded-full  '>
								Tailored Showcase
							</h4>
							<h1 className='font-bold text-2xl lg:text-3xl'>
								Personalized landing page
							</h1>
							<p className=' mt-3 font-normal text-base lg:text-xl text-[#242828] '>
								Create fully customized webpages that effectively showcase{" "}
								<br />
								your properties. Each page can be tailored to include <br />
								your company’s logo and color scheme, ensuring a cohesive and{" "}
								<br />
								branded experience. With integrated features like payment,{" "}
								<br />
								messaging and inquiry systems, client engagement is seamless and
								efficient.
							</p>
						</div>
						<div className=' bg-[#F5F6F6] border rounded-2xl shadow-2xl items-center justify-center flex p-7 flex-col space-y-3  w-[400px] lg:w-[480px] '>
							<img src='/src/assets/Properties(1).png' className=' border' />
							<img src='/src/assets/Finances.png' className=' border' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
