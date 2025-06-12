import { BsCaretRight } from "react-icons/bs";

const StartupBorneoExperience = () => {
	return (
		<div className="grid gap-1.5 min-h-full">
			<h3 className="text-base md:text-xl mb-1 lg:whitespace-nowrap lg:max-w-0">
				<strong className="font-semibold">Frontend Developer</strong> (Intern) @{" "}
				<a
					className="text-pink-500 font-light"
					href="https://www.instagram.com/startupborneo.id/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Startup Borneo Foundation
				</a>
			</h3>
			<p className="font-light mb-1 flex justify-between">
				<span className="text-sm text-slate-400">
					Banjarbaru, South Kalimantan
				</span>
				Aug - Jun 2020
			</p>

			<ul className="list-none space-y-3">
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300 font-light leading-6">
						Developed an e-Learning platform prototype for government's (MoECRT)
						project using <b className="font-semibold">WordPress</b>.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						Built and integrated UI components using{" "}
						<b className="font-semibold">HTML</b>,{" "}
						<b className="font-semibold">CSS</b>, and{" "}
						<b className="font-semibold">JavaScript</b> for customizability.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						Created a course: "JavaScript for Beginners" for one of the content
						on the platform.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						Gained hands-on experience in frontend development, component
						design, and team-based delivery in a real-world project.
					</p>
				</li>
			</ul>
		</div>
	);
};

export default StartupBorneoExperience;
