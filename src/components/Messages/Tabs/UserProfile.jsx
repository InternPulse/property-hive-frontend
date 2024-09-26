const UserProfile = ({ name, phoneNumber, avatarSrc }) => {
	return (
		<aside className='flex grow shrink gap-2 justify-center items-start px-4 py-12 h-full text-lg font-medium tracking-tight leading-none bg-white border-l-[3px] border-neutral-100 min-w-[240px] text-neutral-600 w-[211px]'>
			<div className='flex flex-col w-[232px]'>
				<img
					loading='lazy'
					src={avatarSrc}
					alt={`${name}'s profile picture`}
					className='object-contain self-center max-w-full aspect-[0.99] rounded-[300px] w-[139px]'
				/>
				<div className='flex flex-col mt-2 w-full'>
					<div className='w-full text-center'>{name}</div>
					<div className='flex gap-1 items-center self-center mt-1 whitespace-nowrap'>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/cad26a796f46deb1e304d730870586db1e9fa9d7f26c4ab3cb0212b3a15876b7?placeholderIfAbsent=true&apiKey=8d1b278604b64957a7acc99dcfcc2739'
							alt=''
							className='object-contain shrink-0 self-stretch my-auto aspect-[0.95] w-[19px]'
						/>
						<div className='self-stretch my-auto'>{phoneNumber}</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default UserProfile;
