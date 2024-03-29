import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Introduction = () => {
	return (
		<div className="flex flex-col min-h-screen w-[80%] md:w-[70%] justify-center">
			<p className="text-pink-600 font-medium text-lg md:mt-0 mt-24 mb-2">
				Hi, my name is
			</p>
			<h1 className="text-white text-5xl font-bold mt-[-10px]">
				Syahril Hanla
			</h1>
			<h1 className="text-slate-500 text-5xl font-bold mb-3">
				Im a Full Stack Developer.
			</h1>
			<p className="text-slate-400 md:text-base text-base">
				Im a full-stack developer specializing in building (and occasionally
				designing) exceptional digital experiences. Currently, Im focused on
				building responsive full-stack web applications.
			</p>

			<Link to="works" smooth={true} duration={500}>
				<button className="flex flex-row justify-between items-center px-5 py-2 border border-white rounded-md text-white w-[9rem] mt-4 font-light hover:bg-slate-300 hover:font-normal hover:text-slate-700 hover:border-bg-slate-700 duration-300 group">
					View Works
					<span className="group-hover:rotate-90 duration-300 text-pink-500">
						<HiArrowNarrowRight />
					</span>
				</button>
			</Link>
		</div>
	);
};

export default Introduction;
