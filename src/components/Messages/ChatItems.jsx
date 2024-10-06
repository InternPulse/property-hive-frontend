function ChatItem({ name, message, time, unreadCount }) {
	return (
		<article className='flex gap-3 items-center py-1 w-full'>
			<div className='flex shrink-0 self-stretch my-auto w-1 bg-teal-600 rounded-none h-[102px]' />
			<div className='flex gap-1 items-start self-stretch my-auto min-w-[240px]'>
				<div className='flex gap-2 items-center px-px rounded-3xl bg-zinc-300 h-[51px] w-[51px]'>
					<img
						loading='lazy'
						src='https://cdn.builder.io/api/v1/image/assets/TEMP/bef5e240a444026fc9ef7f6a380801914fb3c581c3c830c9d0cffd84b1102f21?placeholderIfAbsent=true&apiKey=8d1b278604b64957a7acc99dcfcc2739'
						className='object-contain self-stretch my-auto w-3 aspect-square'
						alt=''
					/>
				</div>
				<div className='flex flex-col tracking-tight min-w-[240px] w-[272px]'>
					<div className='flex flex-col w-full'>
						<div className='flex flex-col w-full'>
							<div className='flex gap-10 justify-between items-center w-full'>
								<h3 className='self-stretch my-auto text-lg font-medium leading-none text-neutral-800 w-[183px]'>
									{name}
								</h3>
								<span className='gap-2 self-stretch p-1 my-auto text-sm font-semibold leading-none text-red-500 whitespace-nowrap bg-red-50 rounded-lg'>
									{unreadCount}
								</span>
							</div>
						</div>
						<p className='text-base font-medium leading-6 text-gray-500'>
							{message}
						</p>
					</div>
					<time className='gap-2 self-end text-base font-medium text-right text-gray-500 whitespace-nowrap'>
						{time}
					</time>
				</div>
			</div>
		</article>
	);
}

export default ChatItem;
