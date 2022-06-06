import Image from "next/image";

const Works = () => {
	const workImages = [
		"workImg.jpeg",
		"realestate.jpg",
		"workImg.jpeg",
		"realestate.jpg",
		"workImg.jpeg",
		"realestate.jpg",
	];

	return (
		<div
			name='skills'
			className='bg-[#0c2852] min-h-screen text-gray-300 flex flex-col justify-center items-center text-center px-[8rem]'
		>
			<div className='flex justify-start flex-col sm:mt-3 mt-[6rem]'>
				<h1 className='text-4xl w-min font-medium border-b-4 border-pink-600 py-1'>
					Works
				</h1>
				<p className='text-xl font-light py-3 mb-6 text-left'>
					// These are the technologies I've worked with
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-3 gap-3 '>
					{workImages.map((image) => (
						<div className=''>
							{/* <Image
								src={`/${image}`}
								height={180}
								width={240}
								className="className='hover:bg-slate-300 duration-500 z-0 "
							/> */}
							<div
								className='cursor-pointer h-[300px] w-[300px] duration-1000'
								style={{
									backgroundImage: `url('/${image}')`,
									width: "240px",
									height: "180px",
									zIndex: 1,
								}}
							>
								<div className='flex hover:hidden h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center duration-1000'>
									<button>click me</button>
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
