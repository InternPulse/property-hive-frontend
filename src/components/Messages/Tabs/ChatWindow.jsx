import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import UserProfile from "./UserProfile";

const ChatWindow = ({ chat, onBack }) => {
	const messages = [
		{
			sender: "John James",
			time: "8:41pm",
			message: chat.message,
			isOutgoing: false,
		},
		{
			sender: "You",
			time: "8:51pm",
			message: "The kitchen is 200 sq ft and the master bedroom is 300 sq ft.",
			isOutgoing: true,
		},
		// Add other messages if needed
	];

	return (
		<main className='flex flex-wrap flex-1 size-full max-md:max-w-full'>
			<button onClick={onBack} className='text-blue-500 underline'>
				Back to Chat List
			</button>
			<section className='flex flex-col grow shrink min-w-[240px] w-[399px] max-md:max-w-full'>
				<div className='flex overflow-hidden gap-2 items-start px-4 pt-4 w-full font-medium tracking-tight bg-white h-[677px] max-md:max-w-full'>
					<div className='flex flex-col min-w-[240px] w-[403px]'>
						{messages.map((msg, index) => (
							<ChatMessage key={index} {...msg} />
						))}
					</div>
				</div>
				<ChatInput />
			</section>
			<UserProfile
				name={chat.name}
				phoneNumber='08040951697'
				avatarSrc='https://cdn.builder.io/api/v1/image/assets/TEMP/1d9b2dd044307ae31d883bf93dd670455242959b9a9c6d84ba13f006c4d30745?placeholderIfAbsent=true&apiKey=8d1b278604b64957a7acc99dcfcc2739'
			/>
		</main>
	);
};

export default ChatWindow;
