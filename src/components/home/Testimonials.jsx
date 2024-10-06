import Testimonial from "./carousel/Testimonial";

const Testimonials = () => {
	return (
		<div className='relative bg-[#224A4D] w-full mt-10'>
			<div>
				<h1 className='text-[#FAFDFE] items-center text-center p-10 lg:text-5xl font-semibold '>
					Testimonials
				</h1>
				<Testimonial />
			</div>
		</div>
	);
};

export default Testimonials;
