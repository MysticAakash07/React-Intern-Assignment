import BriefCase from "../assets/Briefcase.svg";
import Calendar from "../assets/Calendar.svg";
import { MdExpandCircleDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import emoji from "../assets/Emoji.svg";
import { MdOutlineExpandMore } from "react-icons/md";

export const columns = [
	{
		label: "Job Request",
		icon1: <img src={BriefCase} className="w-5 " />,
		icon2: <MdOutlineExpandMore className="text-[#bcbcbc] text-lg" />,
	},
	{
		label: "Submitted",
		icon1: <img src={Calendar} className="w-5 " />,
		icon2: <MdOutlineExpandMore className="text-[#bcbcbc] text-lg" />,
	},
	{
		label: "Status",
		icon1: <MdExpandCircleDown className="text-[#bcbcbc] text-lg" />,
		icon2: <MdOutlineExpandMore className="text-[#bcbcbc] text-lg" />,
	},
	{
		label: "Submitter",
		icon1: <FaUser className="text-[#bcbcbc] text-lg" />,
		icon2: <MdOutlineExpandMore className="text-[#bcbcbc] text-lg" />,
	},
	{
		label: "URL",
		icon1: <FaGlobe className="text-[#bcbcbc] text-lg" />,
		icon2: <MdOutlineExpandMore className="text-[#bcbcbc] text-lg" />,
	},
	{
		label: "Assigned",
		bgColor: "#D2E0D4",
		icon1: <img src={emoji} className="w-5" />,
	},
	{ label: "Priority", bgColor: "#EAE3FC" },
	{ label: "Due Date", bgColor: "#EAE3FC" },
	{ label: "Est. Value", bgColor: "#FFE9E0" },
	{},
];

export const rows = [
	{
		jobRequest: "Launch social media campaign for product",
		submitted: "15-11-2024",
		status: "In-process",
		submitter: "Aisha Patel",
		url: "www.aishapatel.com",
		assigned: "Sophie Choudhury",
		priority: "Medium",
		dueDate: "20-11-2024",
		estValue: "₹6,200,000",
	},
	{
		jobRequest: "Update press kit for company redesign",
		submitted: "28-10-2024",
		status: "Need to start",
		submitter: "Irfan Khan",
		url: "www.irfankhan.com",
		assigned: "Tejas Pandey",
		priority: "High",
		dueDate: "30-10-2024",
		estValue: "₹3,500,000",
	},
	{
		jobRequest: "Finalize user testing feedback for application",
		submitted: "05-12-2024",
		status: "In-process",
		submitter: "Mark Johnson",
		url: "www.markjohnson.com",
		assigned: "Rachel Lee",
		priority: "Medium",
		dueDate: "10-12-2024",
		estValue: "₹4,750,000",
	},
	{
		jobRequest: "Design financial report for Q4",
		submitted: "10-01-2025",
		status: "Complete",
		submitter: "Emily Green",
		url: "www.emilygreen.com",
		assigned: "Tom Wright",
		priority: "Low",
		dueDate: "15-01-2025",
		estValue: "₹5,900,000",
	},
	{
		jobRequest: "Prepare financial report for Q4",
		submitted: "25-01-2025",
		status: "Blocked",
		submitter: "Jessica Brown",
		url: "www.jessicabrown.com",
		assigned: "Kevin Smith",
		priority: "Low",
		dueDate: "30-01-2025",
		estValue: "₹2,800,000",
	},
	{},
	{},
];
