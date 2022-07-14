import Image from "next/image";
import Link from "next/link";

const Works = () => {
	const workImages = [
		{
			imgURL: "cyberani.png",
			title: "CyberAni",
			repoAddress: "https://github.com/syahrilhanla/cyberani",
			projectAddress: "https://cyberani.vercel.app/",
			description:
				"CyberAni is a free anime streaming platform built with React, Next.js,and TailwindCSS. It is a private project for educational purposes only. Thanks to @riimuru for the API.",
			techStack: [
				{
					img: "/react.png",
					name: "React",
				},
				{
					img: "/nextJS.svg",
					name: "Next.js",
				},
				{
					img: "/tailwind.png",

					name: "TailwindCSS",
				},
			],
		},
		{
			imgURL: "ia-statistics.png",
			title: "I/A Statistics",
			repoAddress: "https://github.com/syahrilhanla/proyek-skripsi",
			projectAddress: "https://ia-statistics.vercel.app/",
			description:
				"CyberAni is a free anime streaming platform built with React, Next.js,and TailwindCSS. It is a private project for educational purposes only. Thanks to @riimuru for the API.",
			techStack: [
				{
					img: "/react.png",
					name: "React",
				},
				{
					img: "/nextJS.svg",
					name: "Next.js",
				},
				{
					img: "/tailwind.png",

					name: "TailwindCSS",
				},
			],
		},
		{
			imgURL: "shopping-cart.png",
			title: "Redux Shopping Cart",
			repoAddress: "https://github.com/syahrilhanla/shopping-cart",
			projectAddress: "https://syahrilhanla.github.io/shopping-cart/",
			description:
				"CyberAni is a free anime streaming platform built with React, Next.js,and TailwindCSS. It is a private project for educational purposes only. Thanks to @riimuru for the API.",
			techStack: [
				{
					img: "/react.png",
					name: "React",
				},
				{
					img: "/nextJS.svg",
					name: "Next.js",
				},
				{
					img: "/tailwind.png",
					name: "TailwindCSS",
				},
			],
		},

		// {
		// 	imgURL: "laragigs.png",
		// 	title: "Laragigs",
		// 	repoAddress: "https://github.com/syahrilhanla/learn-laravel",
		// 	projectAddress: "/",
		// },
	];

	const DetailCard = () => (
		<div
			className="bg-slate-800 text-slate-200 md:h-fit md:w-full md:bottom-[-25%]
			 md:absolute w-[85vw]
		  left-0 py-2 rounded-sm md:group-hover:bottom-0 duration-300"
		>
			<h2 className="font-semibold text-2xl">CyberAni</h2>
			<h4 className="font-normal text-xl">Techstack:</h4>
			<div className="flex flex-wrap justify-evenly">
				<div className="grid grid-cols-1 place-items-center w-24">
					<img src={"/react.png"} width={36} height={36} />
					<p className="text-base font-light">React</p>
				</div>
				<div className="grid grid-cols-1 place-items-center w-24">
					<img src={"/nextJS.svg"} width={36} height={36} />
					<p className="text-base font-light">Next.js</p>
				</div>
				<div className="grid grid-cols-1 place-items-center w-24">
					<img src={"/tailwind.png"} width={36} height={36} />
					<p className="text-base font-light">TailwindCSS</p>
				</div>
			</div>
			<div className="px-3 md:group-hover:visible md:invisible md:group-hover:block">
				<h4 className="font-normal text-xl">Description: </h4>
				<p className="text-base font-light">
					CyberAni is a free anime streaming platform built with React, Next.js,
					and TailwindCSS. It is a private project for educational purposes
					only. Thanks to @riimuru for the API.
				</p>
			</div>
		</div>
	);

	return (
		<div
			name="works"
			className="bg-[#0c2852] min-h-screen text-gray-300 flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem] pb-7"
		>
			<div className="flex justify-start flex-col sm:mt-3 mt-[6rem] md:w-[70vw] w-[85vw]">
				<h1 className="text-4xl w-min font-medium border-b-4 border-pink-600 py-1">
					Works
				</h1>
				<p className="text-xl font-light py-3 mb-6 text-left">
					# These are some project I've been working with
				</p>

				<div className="flex flex-wrap">
					{workImages.map((image) => (
						<div
							className="shadow-lg shadow-[#040c16] group container
							 rounded-md mx-auto md:relative flex items-end md:overflow-hidden
							 md:w-[400px] w-[100vw] bg-no-repeat bg-center bg-cover min-h-[480px] m-4"
							key={image.title}
							style={{ backgroundImage: `url(${image.imgURL})` }}
						>
							<DetailCard />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Works;
