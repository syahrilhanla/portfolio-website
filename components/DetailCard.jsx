import Link from "next/link";

const DetailCard = ({
	techStack,
	description,
	repoAddress,
	projectAddress,
	title,
}) => (
	<div
		className="bg-slate-800 text-slate-200 md:h-fit md:w-full md:bottom-[-25%]
			 md:absolute max-w-[85vw] shadow-[0_-15px_15px_0px_rgba(0,0,0,0.3)]
		  left-0 py-2 rounded-sm md:group-hover:bottom-0 duration-500"
	>
		<h2 className="font-semibold text-2xl pb-2">{title}</h2>
		<h4 className="font-normal text-xl pb-2">Techstack:</h4>
		<div className="flex flex-wrap justify-evenly">
			{techStack.map((tech) => (
				<div
					className="grid grid-cols-1 place-items-center w-24"
					key={tech.name}
				>
					<img src={tech.img} width={36} height={36} />
					<p className="text-base font-light">{tech.name}</p>
				</div>
			))}
		</div>
		<div className="md:px-12 px-1 md:group-hover:visible md:invisible md:group-hover:block">
			<h4 className="font-normal text-xl">Description: </h4>
			<p className="text-base font-light">{description}</p>
		</div>
		<div className="pt-2 text-center md:hidden md:group-hover:block block">
			<Link href={projectAddress}>
				<a target={"_blank"}>
					<button
						className="text-center rounded-lg px-4 py-3 
						m-2 bg-white text-gray-700 text-xl font-normal
						 hover:text-pink-600 duration-300"
					>
						Demo
					</button>
				</a>
			</Link>
			<Link href={repoAddress}>
				<a target={"_blank"}>
					<button
						className="text-center rounded-lg px-4 py-3 m-2
						 bg-white text-gray-700 text-xl font-normal
						  hover:text-pink-600 duration-300"
					>
						Code
					</button>
				</a>
			</Link>
		</div>
	</div>
);

export default DetailCard;
