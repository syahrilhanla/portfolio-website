import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { AuroraText } from "./magicui/aurora-text";

const Introduction = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<div
			className={`flex flex-col min-h-screen w-[80%] md:w-[70%] justify-center transition-all duration-300 ease-out ${
				show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			}`}
		>
			<p className="text-pink-600 font-medium text-lg md:mt-0 mt-24 mb-2">
				Hi, my name is
			</p>
			<h1 className="text-slate-200 text-5xl font-bold mt-[-10px]">
				Syahril Hanla
			</h1>
			<h1 className="text-slate-500 text-5xl font-bold mb-3">
				<AuroraText>Software Engineer.</AuroraText>
			</h1>
			<p className="text-slate-300 md:text-base max-w-lg text-base flex-wrap font-light">
				I'm a software engineer with 3+ years of experience specializing in
				frontend development. I'm now expanding my skills in backend and cloud
				technologies to become a full stack developer.
			</p>

			<Link to="works" smooth={true} duration={500}>
				<button
					className="flex flex-row text-sm justify-between items-center px-5 py-2 border border-slate-200 rounded-md text-slate-200 
					w-[9rem] mt-4 hover:bg-slate-200 hover:scale-105  hover:text-slate-900/80 hover:border-bg-slate-700 duration-300 group"
				>
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
