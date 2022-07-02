import Image from "next/image";

const Skills = () => {
	return (
		<div
			name="skills"
			className="bg-[#0c2852] min-h-screen text-gray-300 flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem] pb-7"
		>
			<div className="flex flex-col sm:-w-full mt-7">
				<h1 className="text-4xl w-min font-medium border-b-4 border-pink-600 py-1">
					Skills
				</h1>
				<p className="text-xl font-light py-3">
					# These are the technologies I've worked with
				</p>
				<div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/javascript.png"} width={72} height={72} />
						<p className="font-light">JavaScript (ES6)</p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/typescript.svg"} width={72} height={72} />
						<p className="font-light">TypeScript</p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/laravel.svg"} width={72} height={72} />
						<p className="font-light">Laravel</p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/react.png"} width={72} height={72} />
						<p className="font-light">React</p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/nextJS.svg"} width={72} height={72} />
						<p className="font-light">Next.js </p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/node.png"} width={72} height={72} />
						<p className="font-light">Node.js</p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/mongo.png"} width={72} height={72} />
						<p className="font-light">MongoDB</p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/tailwind.png"} width={72} height={72} />
						<p className="font-light">Tailwind</p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/firebase.png"} width={72} height={72} />
						<p className="font-light">Firebase</p>
					</div>
					<div className="px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/git.svg"} width={72} height={72} />
						<p className="font-light">Git</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
