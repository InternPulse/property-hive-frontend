import React from "react";
import ContactImage from "./ContactImage";
import ContactMessage from "./ContactMessage";

function ContactView() {
	return (
		<main className='flex overflow-hidden flex-col justify-center items-center px-20 py-60 text-4xl font-medium tracking-tighter leading-10 text-center text-teal-900 bg-white min-w-[240px] w-[716px] max-md:px-5 max-md:py-24 max-md:max-w-full'>
			<div className='flex flex-col max-w-full w-[435px]'>
				<ContactImage />
				<ContactMessage />
			</div>
		</main>
	);
}

export default ContactView;
