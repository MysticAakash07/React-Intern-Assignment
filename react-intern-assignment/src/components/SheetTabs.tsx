const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const SheetTabs = () => {
	return (
		<div className="flex border-t">
			{tabs.map((tab) => (
				<div
					key={tab}
					className="px-4 py-2 text-sm cursor-pointer border-r hover:bg-gray-100"
					onClick={() => console.log(`Switched to ${tab}`)}
				>
					{tab}
				</div>
			))}
			<div className="px-4 py-2 text-sm text-gray-400 cursor-pointer">＋</div>
		</div>
	);
};

export default SheetTabs;
