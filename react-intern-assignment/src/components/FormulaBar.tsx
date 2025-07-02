import { PiLinkSimpleHorizontalLight } from "react-icons/pi";
import { SlRefresh } from "react-icons/sl";
import Arrow_Split_Gray from "../assets/Arrow_Split_Gray.svg";
import Arrow_Split from "../assets/Arrow _Split.svg";
import { GoPlus } from "react-icons/go";

interface FormulaBarProps {
	colWidths: number[];
}

function FormulaBar({ colWidths }: FormulaBarProps) {
	return (
		<div className="flex border-b w-[99%] ">
			<div
				className="px-2 py-1 text-sm text-gray-700 truncate border border-[#eeeeee]"
				style={{ width: colWidths[0] }}
			></div>
			<div
				className="flex px-2 py-1 text-sm truncate gap-2 items-center bg-[#e2e2e2] border border-[#eeeeee]"
				style={{
					width: colWidths[1] + colWidths[2] + colWidths[3] + colWidths[4],
				}}
			>
				<div className="flex items-center gap-1 bg-[#eeeeee] py-1 px-1.5 rounded-md border border-[#eeeeee]">
					<PiLinkSimpleHorizontalLight className="text-blue-700 text-lg" />
					<span className="text-gray-500">Q3 Financial Overview</span>
				</div>
				<SlRefresh className="text-red-500 " />
			</div>
			<div
				className="px-2 py-1 text-sm text-gray-700 truncate border border-[#eeeeee]"
				style={{ width: colWidths[5] }}
			></div>
			<div
				className=" flex px-2 py-1 text-sm text-gray-600 truncate items-center bg-[#d2e0d4] justify-center gap-1 border border-[#eeeeee]"
				style={{ width: colWidths[6] }}
			>
				<img src={Arrow_Split_Gray} className="w-5" />
				<span className="font-[500] tracking-wide">ABC</span>
				<span
					className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-1"
					style={{ lineHeight: "1" }}
				>
					...
				</span>
			</div>
			<div
				className="px-2 py-1 text-sm text-gray-600 truncate flex items-center justify-center gap-1 bg-[#DCCFFC] border border-[#eeeeee]"
				style={{ width: colWidths[7] + colWidths[8] }}
			>
				<img src={Arrow_Split} className="w-5" />
				<span className="font-[500] tracking-wide">Answer a question</span>
				<span
					className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-1"
					style={{ lineHeight: "1" }}
				>
					...
				</span>
			</div>
			<div
				className="px-2 py-1 text-sm text-gray-700 truncate border border-[#eeeeee] flex items-center justify-center bg-[#fac2af] gap-1"
				style={{ width: colWidths[9] }}
			>
				<img src={Arrow_Split} className="w-5" />
				<span className="font-[500] tracking-wide">Extract</span>
				<span
					className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-1"
					style={{ lineHeight: "1" }}
				>
					...
				</span>
			</div>
			<div
				className="px-2 py-1 text-sm text-gray-700 truncate border border-[#eeeeee] bg-[#eeeeee] flex items-center justify-center"
				style={{ width: colWidths[10] }}
			>
				<GoPlus className="text-3xl" />
			</div>
		</div>
	);
}

export default FormulaBar;
