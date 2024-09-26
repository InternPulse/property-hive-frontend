import ChatList from "./ChatList";
import ContactView from "./Contact/ContactView";
import MyComponent from "./Tabs/MyComponent";

const Messages = () => {
	return (
		<div>
			<div>
				<div>
					<MyComponent />
				</div>
				<div className='flex'>
					<ChatList />
					<div className='hidden md:flex'>
						<ContactView />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
