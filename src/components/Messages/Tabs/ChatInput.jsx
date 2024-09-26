const ChatInput = () => {
	return (
		<form className='flex flex-col justify-center px-2 py-4 w-full bg-white border-neutral-100 border-t-[3px] max-md:max-w-full'>
			<div className='flex gap-10 justify-between items-center p-2 w-full rounded-lg bg-neutral-100 min-h-[48px] max-md:max-w-full'>
				<label htmlFor='messageInput' className='sr-only'>
					Write a message
				</label>
				<input
					type='text'
					id='messageInput'
					className='flex-grow self-stretch my-auto text-xl tracking-tighter leading-snug text-gray-500 bg-transparent border-none outline-none'
					placeholder='Write a Message...'
				/>
				<div className='flex gap-3.5 items-center self-stretch my-auto'>
					<button type='button' aria-label='Attach file'>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/335199d95e5a0c83232a13f344869eb860cc043dc71b66801cbed4cf4d1405f6?placeholderIfAbsent=true&apiKey=8d1b278604b64957a7acc99dcfcc2739'
							alt=''
							className='object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]'
						/>
					</button>
					<button
						type='submit'
						aria-label='Send message'
						className='flex gap-1.5 justify-center items-center self-stretch px-1.5 my-auto w-8 h-8 bg-gray-400 rounded-2xl min-h-[32px]'>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/d19b247fa50a9c7a11e7eccdecf7484065007dfa359c9f5f29b8846c1938d82c?placeholderIfAbsent=true&apiKey=8d1b278604b64957a7acc99dcfcc2739'
							alt=''
							className='object-contain self-stretch my-auto w-5 aspect-square'
						/>
					</button>
				</div>
			</div>
		</form>
	);
};

export default ChatInput;
