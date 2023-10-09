import "./globals.css";
// import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ Component, pageProps }) {
	return (
		<div className="flex h-full w-full p-6 rounded bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 h-screen">
			<Sidebar />
			<div className="flex flex-col flex-grow">
				<Navbar />
				<MainContent />
				{/* <Component {...pageProps} /> */}
			</div>
		</div>
	);
}
