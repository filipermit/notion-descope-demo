export default function Navbar() {
	return (
		<header className="bg-white p-4 text-black flex justify-between items-center">
			{/* Left Side */}
			<div className="flex items-center">
				{/* Back Emoji */}
				<button className="mr-4">
					<span role="img" aria-label="back">
						⬅️
					</span>
				</button>

				{/* Forward Emoji */}
				<button className="mr-4">
					<span role="img" aria-label="forward">
						➡️
					</span>
				</button>

				{/* Placeholder for current title */}
				<span className="text-lg">Current Title</span>
			</div>

			{/* Right Side */}
			<div className="flex items-center">
				{/* Share */}
				<button className="mr-4">Share</button>

				{/* Updates */}
				<button className="mr-4">Updates</button>

				{/* Favorites */}
				<button className="mr-4">Favourites</button>

				{/* 3-dot horizontal menu */}
				<button>
					<span role="img" aria-label="menu">
						⋮
					</span>
				</button>
			</div>
		</header>
	);
}
