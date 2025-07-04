import Navbar from "./components/NavBar";
import Toolbar from "./components/ToolBar";
import FormulaBar from "./components/FormulaBar";
import Spreadsheet from "./components/Spreadsheet";
import { useState } from "react";
import SpreadsheetHeader from "./components/SpreadsheetHeader";
import SpreadsheetFooter from "./components/SpreadsheetFooter";

function App() {
	const [colWidths, setColWidths] = useState<number[]>([
		30, // Index
		300, // Job Request
		150, // Submitted
		150, // Status
		150, // Submitter
		150, // URL
		150, // Assigned
		150, // Priority
		150, // Due Date
		150, // Est. Value
		150, // Add Column
	]);

	return (
		<div className="flex flex-col h-screen overflow-hidden">
			<Navbar />
			<Toolbar />

			<div className="flex-1 overflow-x-auto w-[99%] scrollbar-hide">
				<FormulaBar colWidths={colWidths} />
				<SpreadsheetHeader colWidths={colWidths} setColWidths={setColWidths} />
				<div
					className="overflow-y-auto mb-10"
					style={{ maxHeight: "calc(100vh - [total header height])" }}
				>
					<Spreadsheet colWidths={colWidths} />
				</div>
				<SpreadsheetFooter indexColWidth={colWidths[0]} />
			</div>
		</div>
	);
}

export default App;
