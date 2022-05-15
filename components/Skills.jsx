import Image from "next/image";

const Skills = () => {
	return (
		<div
			name='skills'
			className='bg-[#0c2852] min-h-screen text-gray-300 flex flex-col justify-center items-center text-center'
		>
			<div className='flex flex-col items-center w-[80%] sm:-w-full'>
				<h1 className='text-4xl w-min font-medium border-b-4 border-pink-600 py-1'>
					Skills
				</h1>
				<p className='text-xl font-light py-3'>
					// These are the technologies I've worked with
				</p>
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
				<div className='px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<Image src={"/html.png"} width={72} height={72} />
					<p className='font-light'>HTML</p>
				</div>
				<div className='px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<Image src={"/css.png"} width={72} height={72} />
					<p className='font-light'>CSS</p>
				</div>
				<div className='px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<Image src={"/javascript.png"} width={72} height={72} />
					<p className='font-light'>JavaScript</p>
				</div>
				<div className='px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<Image src={"/react.png"} width={72} height={72} />
					<p className='font-light'>React</p>
				</div>
				<div className='px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<Image src={"/node.png"} width={72} height={72} />
					<p className='font-light'>Node.js</p>
				</div>
				<div className='px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<Image src={"/mongo.png"} width={72} height={72} />
					<p className='font-light'>Mongo</p>
				</div>
				<div className='px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<Image src={"/tailwind.png"} width={72} height={72} />
					<p className='font-light'>Tailwind</p>
				</div>
				<div className='px-4 py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<Image src={"/firebase.png"} width={72} height={72} />
					<p className='font-light'>Firebase</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
