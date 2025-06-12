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
				I'm a software engineer with over 3 years of experience building responsive, user-focused web applications. I have a strong foundation in modern JavaScript frameworks and UI/UX best practices, and I enjoy turning complex problems into elegant, scalable solutions. Currently, I'm expanding my skills in backend technologies and cloud infrastructure, aiming to transition into a full stack engineering role. I'm passionate about continuous learning and excited to contribute to teams that value innovation and growth.
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
