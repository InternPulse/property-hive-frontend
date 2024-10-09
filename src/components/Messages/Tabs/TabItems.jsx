function TabItem({ label, count, isActive }) {
	return (
		<div className='flex flex-col self-stretch px-1 my-auto rounded'>
			<div className='self-center'>{`${label} (${count})`}</div>
			{isActive && (
				<div className='flex w-full bg-teal-600 rounded-lg min-h-[4px]' />
			)}
		</div>
	);
}

export default TabItem;
