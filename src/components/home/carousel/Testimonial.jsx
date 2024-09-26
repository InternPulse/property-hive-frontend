import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024, // Tablet
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600, // Mobile
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className='max-w-7xl mx-auto p-10'>
			<div className='mt-5'>
				<Slider {...settings}>
					{data.map((d, index) => (
						<div key={index} className='px-4'>
							{" "}
							{/* Add padding between slides */}
							<div className='bg-[#F3FAF9] w-96 h-80 text-[#203F41] rounded-3xl mx-auto'>
								<div className='flex mx-5 items-center mt-10 gap-5 p-5'>
									<img src={d.img} alt={`${d.name} profile`} />
									<div>
										<h2 className='font-semibold text-2xl'>{d.name}</h2>
										<p className='font-light'>{d.position}</p>
									</div>
								</div>
								<div className='mx-5 font-normal text-xl'>
									<p>{d.review}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

const data = [
	{
		name: "Esv. Amelia Joseph",
		position: "Principal Partner",
		img: "/src/assets/carousel/Ellipse-80.png",
		review:
			"The user-friendly interface and  targeted marketing tools helped us attract serious buyers and grow our business effortlessly.",
	},
	{
		name: "Joseph Ronald",
		position: "CEO, DreamHomes",
		img: "/src/assets/carousel/Ellipse-80(1).png",
		review:
			"The seamless customization features allowed us to showcase our properties with our unique branding, making it easier to build trust with clients.",
	},
	{
		name: "Esv. Amelia Joseph",
		position: "Principal Partner",
		img: "/src/assets/carousel/Ellipse-80(2).png",
		review:
			"With real-time financial tracking and advanced analytics, we’ve been able to make data-driven decisions.",
	},
];

export default Testimonial;
