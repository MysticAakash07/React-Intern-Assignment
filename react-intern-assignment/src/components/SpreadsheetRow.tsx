import React from "react";

type Props = {
	data: any;
};

const SpreadsheetRow: React.FC<Props> = ({ data }) => {
	return (
		<div className="grid grid-cols-9 text-sm border-b hover:bg-gray-50">
			<div className="px-3 py-2 border-r">{data.jobRequest}</div>
			<div className="px-3 py-2 border-r">{data.submitted}</div>
			<div className="px-3 py-2 border-r">
				<span
					className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
						data.status
					)}`}
				>
					{data.status}
				</span>
			</div>
			<div className="px-3 py-2 border-r">{data.submitter}</div>
			<div className="px-3 py-2 border-r underline text-blue-600">
				{data.url}
			</div>
			<div className="px-3 py-2 border-r">{data.assigned}</div>
			<div className="px-3 py-2 border-r">{data.priority}</div>
			<div className="px-3 py-2 border-r">{data.dueDate}</div>
			<div className="px-3 py-2">{data.estValue}</div>
		</div>
	);
};

function getStatusColor(status: string) {
	if (status === "Complete") return "bg-green-100 text-green-700";
	if (status === "In-process") return "bg-yellow-100 text-yellow-700";
	if (status === "Blocked") return "bg-red-100 text-red-700";
	return "bg-gray-100 text-gray-700";
}

export default SpreadsheetRow;
