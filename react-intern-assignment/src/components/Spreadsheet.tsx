import { rows } from "../data/spreadsheetData";
import SpreadsheetHeader from "./SpreadsheetHeader";
import SpreadsheetRow from "./SpreadsheetRow";

const Spreadsheet = () => {
	return (
		<div>
			<SpreadsheetHeader />
			{rows.map((row, index) => (
				<SpreadsheetRow key={index} data={row} />
			))}
		</div>
	);
};

export default Spreadsheet;
