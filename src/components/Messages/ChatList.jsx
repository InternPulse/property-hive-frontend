import ChatItem from "./ChatItems";

const chatData = [
	{
		id: 1,
		name: "John James",
		message:
			"What is the size of the kitchen and What is the size of the kitchen and...",
		time: "8:41pm",
		unreadCount: 1,
	},
	{
		id: 2,
		name: "John James",
		message:
			"What is the size of the kitchen and What is the size of the kitchen and...",
		time: "8:41pm",
		unreadCount: 1,
	},
	{
		id: 3,
		name: "John James",
		message:
			"What is the size of the kitchen and What is the size of the kitchen and...",
		time: "8:41pm",
		unreadCount: 1,
	},
	{
		id: 4,
		name: "John James",
		message:
			"What is the size of the kitchen and What is the size of the kitchen and...",
		time: "8:41pm",
		unreadCount: 1,
	},
	{
		id: 5,
		name: "John James",
		message:
			"What is the size of the kitchen and What is the size of the kitchen and...",
		time: "8:41pm",
		unreadCount: 1,
	},
	{
		id: 6,
		name: "John James",
		message:
			"What is the size of the kitchen and What is the size of the kitchen and...",
		time: "8:41pm",
		unreadCount: 1,
	},
	{
		id: 7,
		name: "John James",
		message:
			"What is the size of the kitchen and What is the size of the kitchen and...",
		time: "8:41pm",
		unreadCount: 1,
	},
];

function ChatList() {
	return (
		<aside className='flex overflow-hidden gap-2 items-start h-full border-neutral-100 border-r-[3px] min-w-[240px] w-[365px]'>
			<section className='flex flex-col flex-1 shrink pt-2 pb-4 w-full bg-white basis-0 min-w-[240px]'>
				{chatData.map((chat) => (
					<ChatItem key={chat.id} {...chat} />
				))}
			</section>
		</aside>
	);
}

export default ChatList;
