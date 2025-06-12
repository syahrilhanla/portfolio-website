import Image from "next/image";

const Skills = () => {
	return (
		<div
			name="skills"
			className="min-h-screen text-gray-300 flex flex-col justify-center items-center text-center md:px-[8rem] px-3 pb-7"
		>
			<div className="flex flex-col sm:-w-full">
				<h1 className="text-4xl w-min font-medium border-b-4 border-pink-600 py-1 ml-4">
					Skills
				</h1>
				<p className="text-xl text-left font-light pt-3 pb-5 px-4">
					# These are the technologies I've worked with
				</p>
				<div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/javascript.png"} width={64} height={64} />
						<p className="font-light">JavaScript (ES6+)</p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/typescript.svg"} width={64} height={64} />
						<p className="font-light">TypeScript</p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/react.png"} width={64} height={64} />
						<p className="font-light">React</p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/nextJS.svg"} width={64} height={64} />
						<p className="font-light">Next.js </p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/Vue.js.svg"} width={64} height={64} />
						<p className="font-light">Vue.js</p>	
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/django.svg"} width={64} height={64} />
						<p className="font-light">Django</p>	
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/laravel.svg"} width={64} height={64} />
						<p className="font-light">Laravel</p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/nodeJS.svg"} width={64} height={64} />
						<p className="font-light">Node.js</p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/mongo.png"} width={64} height={64} />
						<p className="font-light">MongoDB</p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/tailwind.png"} width={64} height={64} />
						<p className="font-light">Tailwind</p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/firebase.png"} width={64} height={64} />
						<p className="font-light">Firebase</p>
					</div>
					<div className="p-2 rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<Image src={"/git.svg"} width={64} height={64} />
						<p className="font-light">Git</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
