import Navbar from "./components/NavBar";
import Toolbar from "./components/ToolBar";
import FormulaBar from "./components/FormulaBar";
import Spreadsheet from "./components/Spreadsheet";
import SheetTabs from "./components/SheetTabs";

function App() {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<Toolbar />
			<FormulaBar />
			<div className="flex-1 overflow-auto">
				<Spreadsheet />
			</div>
			{/* <SheetTabs /> */}
		</div>
	);
}

export default App;
