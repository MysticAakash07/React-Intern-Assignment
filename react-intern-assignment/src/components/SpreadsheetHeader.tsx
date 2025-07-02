import { columns } from "../data/spreadsheetData";
const SpreadsheetHeader = () => {
	return (
		<div className="grid grid-cols-9 text-sm bg-gray-100 border-b font-medium">
			{columns.map((col) => (
				<div key={col} className="px-3 py-2 border-r truncate">
					{col}
				</div>
			))}
		</div>
	);
};

export default SpreadsheetHeader;
