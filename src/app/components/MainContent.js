export default function MainPage() {
	return (
		<div className="bg-white p-16 h-full">
			{/* Input for Title */}
			<input
				className="text-3xl focus:outline-none focus:ring-0"
				style={{ border: "none", backgroundColor: "white" }}
				placeholder="New page title..."
			/>

			{/* Input for Main Content */}
			<textarea
				className="w-full h-full mt-4 focus:outline-none focus:ring-0"
				style={{ border: "none", backgroundColor: "white" }}
				placeholder="Start typing..."
			></textarea>
		</div>
	);
}
