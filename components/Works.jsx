import Link from "next/link";

const Works = () => {
	const workImages = [
		{
			imgURL: "workImg.jpeg",
			title: "Title 1",
		},
		{
			imgURL: "realestate.jpg",
			title: "Title 2",
		},
		{
			imgURL: "workImg.jpeg",
			title: "Title 3",
		},
		{
			imgURL: "realestate.jpg",
			title: "Title 4",
		},
		{
			imgURL: "workImg.jpeg",
			title: "Title 5",
		},
		{
			imgURL: "realestate.jpg",
			title: "Title 6",
		},
	];

	return (
		<div
			name="skills"
			className="bg-[#0c2852] min-h-screen text-gray-300 flex flex-col justify-center items-center text-center px-[8rem]"
		>
			<div className="flex justify-start flex-col sm:mt-3 mt-[6rem]">
				<h1 className="text-4xl w-min font-medium border-b-4 border-pink-600 py-1">
					Works
				</h1>
				<p className="text-xl font-light py-3 mb-6 text-left">
					These are the technologies I've worked with
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
					{workImages.map((image) => (
						<div
							style={{ backgroundImage: `url(${image.imgURL})` }}
							className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-[16rem]"
							key={image.title}
						>
							<div className="opacity-0 group-hover:opacity-100">
								<span className="text-2xl font-bold text-white tracking-wider sm:p-4">
									{image.title}
								</span>
								<div className="pt-8 text-center">
									<Link href="/">
										<a>
											<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
												Demo
											</button>
										</a>
									</Link>
									<Link href="/">
										<a>
											<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
												Code
											</button>
										</a>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Works;
