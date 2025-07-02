import SpreadsheetHeader from "./SpreadsheetHeader";

interface SpreadsheetProps {
	colWidths: number[];
	setColWidths: React.Dispatch<React.SetStateAction<number[]>>;
}

const Spreadsheet = ({ colWidths, setColWidths }: SpreadsheetProps) => {
	return (
		<div className="w-[99%]">
			<SpreadsheetHeader colWidths={colWidths} setColWidths={setColWidths} />
			{/* Data rows will come here next */}
		</div>
	);
};

export default Spreadsheet;
