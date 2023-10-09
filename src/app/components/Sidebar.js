"use client";

import { useState } from "react";

export default function Sidebar() {
	const [showProjects, setShowProjects] = useState(false);
	const [showTeams, setShowTeams] = useState(false);
	const [showTools, setShowTools] = useState(false);

	return (
		<aside className="bg-gray-200 w-64 p-4 text-black h-100% text-sm">
			<div className="flex justify-between items-center cursor-pointer pt-2 flex-col">
				<div className="flex w-full">
					<div className="h-6 mb-4 mr-2">
						<div className="w-3 h-3 bg-red-500 rounded-full"></div>
					</div>
					<div className="h-6 mb-4 mr-2">
						<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
					</div>
					<div className="h-6 mb-4 mr-2">
						<div className="w-3 h-3 bg-green-500 rounded-full"></div>
					</div>
				</div>
				<div className="w-full">
					<div className="font-bold">💼 Filip's Notion</div>
					<div className="text-gray-400 text-sm">filip@permit.io</div>
				</div>
				<div className="flex">
					<svg
						className="w-4 h-4 text-black"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M4.293 7.293a1 1 0 011.414 0L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
			<div className="mt-4">
				<div className="flex items-center mb-2">🔍 Search</div>
				<div className="flex items-center mb-2">🛎️ Updates</div>
				<div className="flex items-center mb-2">👥 All teamspaces</div>
				<div className="flex items-center mb-2">⚙️ Settings and members</div>
				<div className="flex items-center mb-2">➕ New Page</div>
			</div>
			<div className="mt-8">
				<h3 className="font-semibold text-lg mb-2">Workspace</h3>

				<div>
					<div
						className="flex justify-between cursor-pointer"
						onClick={() => console.log("clicked")}
					>
						📚 Projects
						<span>{showProjects ? "-" : "+"}</span>
					</div>
					{showProjects && (
						<ul className="pl-4">
							<li>🍎 Apple</li>
							<li>🍌 Banana</li>
							<li>🍒 Cherry</li>
							<li>🍇 Grape</li>
						</ul>
					)}
				</div>

				<div className="mt-2">
					<div
						className="flex justify-between cursor-pointer"
						onClick={() => setShowTeams(!showTeams)}
					>
						🤝 Teams
						<span>{showTeams ? "-" : "+"}</span>
					</div>
					{showTeams && (
						<ul className="pl-4">
							<li>🚀 Rocket</li>
							<li>🛠️ Tool</li>
							<li>🎨 Paint</li>
							<li>🎧 Music</li>
						</ul>
					)}
				</div>

				<div className="mt-2">
					<div
						className="flex justify-between cursor-pointer"
						onClick={() => setShowTools(!showTools)}
					>
						🛠️ Tools
						<span>{showTools ? "-" : "+"}</span>
					</div>
					{showTools && (
						<ul className="pl-4">
							<li>🌈 Rainbow</li>
							<li>📚 Book</li>
							<li>🔧 Wrench</li>
							<li>💡 Idea</li>
						</ul>
					)}
				</div>
			</div>
		</aside>
	);
}
