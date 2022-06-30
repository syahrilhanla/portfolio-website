import Link from "next/link";

const Works = () => {
	const workImages = [
		{
			imgURL: "shopping-cart.png",
			title: "Redux Shopping Cart",
			repoAddress: "https://github.com/syahrilhanla/shopping-cart",
			projectAddress: "/",
		},
		{
			imgURL: "ia-statistics.png",
			title: "I/A Statistics",
			repoAddress: "https://github.com/syahrilhanla/proyek-skripsi",
			projectAddress: "https://ia-statistics.vercel.app/",
		},
		{
			imgURL: "book-app.png",
			title: "My Book List",
			repoAddress: "https://github.com/syahrilhanla/App-Buku",
			projectAddress: "/",
		},
	];

	return (
		<div
			name="skills"
			className="bg-[#0c2852] min-h-screen text-gray-300 flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem] pb-7"
		>
			<div className="flex justify-start flex-col sm:mt-3 mt-[6rem]">
				<h1 className="text-4xl w-min font-medium border-b-4 border-pink-600 py-1">
					Works
				</h1>
				<p className="text-xl font-light py-3 mb-6 text-left">
					# These are some project I've been working with
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
					{workImages.map((image) => (
						<div
							style={{ backgroundImage: `url(${image.imgURL})` }}
							className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div max-w-[16rem]"
							key={image.title}
						>
							<div className="opacity-0 group-hover:opacity-100">
								<span className="text-2xl font-bold text-white tracking-wider sm:p-4">
									{image.title}
								</span>
								<div className="pt-8 text-center">
									<Link href={image.projectAddress}>
										<a target={"_blank"}>
											<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
												Demo
											</button>
										</a>
									</Link>
									<Link href={image.repoAddress}>
										<a target={"_blank"}>
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
