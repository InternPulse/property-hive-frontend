import TabItem from "./TabItems";

function TabBar() {
	const tabs = [
		{ label: "All", count: 232, isActive: true },
		{ label: "Unread", count: 23, isActive: false },
		{ label: "Read", count: 34, isActive: false },
	];

	return (
		<nav className='flex gap-4 items-center text-xl font-medium tracking-tighter leading-snug text-neutral-700'>
			{tabs.map((tab, index) => (
				<TabItem key={index} {...tab} />
			))}
		</nav>
	);
}

export default TabBar;
