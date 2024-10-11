import { EmblaCarousel } from "./carousel/Carousel";
import landingPage from '../../assets/Featured Properties Section.svg';
import top from '../../assets/Top.svg';
import properties from '../../assets/Properties section.svg';
import image5 from '../../assets/Properties(1).png';
import image6 from '../../assets/Finances.png';

const Features = () => {
	return (
		<div className="bg-[#FCFDFD]">
			<div className="mx-5 md:mx-10 lg:mx-20 xl:mx-36 mt-10">
				<EmblaCarousel />
				<div className="flex flex-col text-center items-center justify-center">
					<h1 className="text-[#255A5D] p-5 font-semibold text-3xl sm:text-4xl lg:text-5xl">
						Features
					</h1>
					<p className="text-[#4B5353] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl mx-auto">
						We’re committed to providing a comprehensive suite of features
						designed to elevate your experience and drive success.
					</p>
				</div>

				{/* Feature Section 1 */}
				<div className="relative mt-16 lg:mt-32">
					<div className="flex flex-col lg:flex-row justify-between space-y-7 lg:space-y-0 lg:space-x-10">
						<div className="lg:w-1/2 space-y-5">
							<h4 className="text-base md:text-lg font-light text-[#2B7376] bg-[#ECFFFF] p-2 text-center w-40 md:w-48 border border-[#2B7376] rounded-full">
								Tailored Showcase
							</h4>
							<h1 className="font-bold text-2xl lg:text-3xl">
								Personalized landing page
							</h1>
							<p className="mt-3 font-normal text-sm sm:text-base lg:text-lg text-[#242828]">
								Create fully customized webpages that effectively showcase
								your properties. Each page can be tailored to include your
								company’s logo and color scheme, ensuring a cohesive and branded
								experience. With integrated features like payment, messaging,
								and inquiry systems, client engagement is seamless and
								efficient.
							</p>
						</div>
						<div className="bg-[#F5F6F6] border rounded-2xl shadow-2xl flex items-center justify-center p-7 flex-col space-y-3 w-full lg:w-[480px]">
							<img src={landingPage} className="w-full border object-cover" />
							<img src={top} className="w-full border" />
						</div>
					</div>

					{/* Feature Section 2 */}
					<div className="flex flex-col lg:flex-row justify-between space-y-7 lg:space-y-0 lg:space-x-10 mt-16 lg:mt-32">
						<div className="bg-[#F5F6F6] border rounded-2xl shadow-2xl flex items-center justify-center p-7 flex-col space-y-3 w-full lg:w-[480px]">
							<img src={properties} className="w-full border h-[244px] object-cover" />
							<img src={top} className="w-full border" />
						</div>
						<div className="lg:w-1/2 space-y-5">
							<h4 className="text-base md:text-lg font-light text-[#2B7376] bg-[#ECFFFF] p-2 text-center w-40 md:w-48 border border-[#2B7376] rounded-full">
								Effortless Navigation
							</h4>
							<h1 className="font-bold text-2xl lg:text-3xl">
								Easy-to-Use Interface
							</h1>
							<p className="mt-3 font-normal text-sm sm:text-base lg:text-lg text-[#242828]">
								Our platform is intuitively designed, enabling real estate
								companies to effortlessly create, manage, and handle property
								listings and transactions. No technical expertise is required—just a few clicks, and you are on your way to success.
							</p>
						</div>
					</div>

					{/* Feature Section 3 */}
					<div className="flex flex-col lg:flex-row justify-between space-y-7 lg:space-y-0 lg:space-x-10 mt-16 lg:mt-32">
						<div className="lg:w-1/2 space-y-5">
							<h4 className="text-base md:text-lg font-light text-[#2B7376] bg-[#ECFFFF] p-2 text-center w-40 md:w-48 border border-[#2B7376] rounded-full">
								Tailored Showcase
							</h4>
							<h1 className="font-bold text-2xl lg:text-3xl">
								Personalized landing page
							</h1>
							<p className="mt-3 font-normal text-sm sm:text-base lg:text-lg text-[#242828]">
								Create fully customized webpages that effectively showcase
								your properties. Each page can be tailored to include your
								company’s logo and color scheme, ensuring a cohesive and branded
								experience. With integrated features like payment, messaging,
								and inquiry systems, client engagement is seamless and
								efficient.
							</p>
						</div>
						<div className="bg-[#F5F6F6] border rounded-2xl shadow-2xl flex items-center justify-center p-7 flex-col space-y-3 w-full lg:w-[480px]">
							<img src={image5} className="w-full border" />
							<img src={image6} className="w-full border" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
