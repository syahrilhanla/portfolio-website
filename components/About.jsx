import Link from "next/link";
import { HiDownload } from "react-icons/hi";

const About = () => {
	return (
		<div
			className="min-h-screen text-slate-300 bg-[#0c2852] border-none
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
				<p className="font-light mt-4 md:mt-0">
					I'm passionate about building excellent software that improves the
					lives of those around me. I specialize in creating software for
					clients ranging from individuals and small businesses all the way to
					large enterprise corporations. What would you do if you had a software
					expert available at your fingertips?
				</p>
			</div>
			<div className="grid justify-center md:grid-cols-2 md:justify-items-end md:mr-8">
				<div>
					<Link href={"/Syahril Hanla_FrontendDev.pdf"}>
						<button className="flex flex-row justify-between items-center px-5 py-2 border border-white border-2 rounded-md text-white w-fit mt-4 font-light hover:bg-slate-300 hover:font-normal hover:text-slate-700 hover:border-bg-slate-700 duration-300">
							Download Resume
							<span className=" text-pink-500">
								<HiDownload />
							</span>
						</button>
					</Link>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default About;
