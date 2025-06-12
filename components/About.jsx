import { HiDownload } from "react-icons/hi";

const About = () => {
	return (
		<div
			className="min-h-screen text-slate-300 border-none
			  md:px-10 px-3 md:pb-0 pb-12 flex flex-col justify-center items-center"
			name="about"
		>
			<div className="md:grid grid-cols-2 gap-x-8 w-[80%] mt-10 md:mt-0">
				<span className="md:flex justify-end">
					<h1 className="w-min text-3xl text-white font-medium border-b-2 border-pink-600">
						About
					</h1>
				</span>
				<div></div>
				<h2 className="text-4xl font-semibold md:text-right">
					Hi. Im Syahril, nice to meet you. Please take a look around.
				</h2>
				<p className="font-light mt-4 md:mt-0 text-slate-300">
					I'm passionate about building excellent software that improves the
					lives of those around me. I specialize in creating software for
					clients ranging from individuals and small businesses all the way to
					large enterprise corporations. What would you do if you had a software
					expert available at your fingertips?
				</p>
			</div>
			<div className="grid justify-center md:grid-cols-2 md:justify-items-end md:mr-8">
				<div>
					<a href={"/Resume__Syahril_Hanla.pdf"} target="_blank" rel="noreferrer">
						<button className="flex flex-row justify-between items-center 
							px-5 py-2 border border-white rounded-md text-white 
							mt-4 font-light hover:bg-slate-300 w-[13rem]
							 hover:text-slate-700  duration-300">
							Download Resume
							<span className=" text-pink-500">
								<HiDownload />
							</span>
						</button>
					</a>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default About;
