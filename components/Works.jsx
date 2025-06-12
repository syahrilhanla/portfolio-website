import workData from "./workData";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Works = () => {
	return (
		<section
			name="works"
			className="min-h-screen text-gray-300 flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem] pb-7"
		>
			<div className="flex flex-col sm:mt-3 mt-[6rem] w-full max-w-5xl">
				<div className="flex items-center gap-3 mb-8">
					<span className="text-pink-400 text-2xl font-mono">05.</span>
					<h1 className="text-3xl md:text-4xl font-semibold text-slate-100 tracking-tight">
						Projects
					</h1>
					<div className="flex-1 border-b border-slate-700 ml-4" />
				</div>
				<div className="flex flex-col gap-16 w-full">
					{workData.map((data, idx) => (
						<div
							key={data.title}
							className="relative flex flex-col md:flex-row items-center md:items-stretch bg-transparent group"
						>
							{/* Image section */}
							<div className="md:w-7/12 w-full h-64 md:h-[340px] rounded-lg overflow-hidden shadow-lg border border-slate-800 bg-[#181f33] relative group-hover:scale-[1.03] group-hover:shadow-pink-500/30 transition-all duration-300">
								<div
									className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition duration-300"
									style={{ backgroundImage: `url(${data.imgURL})` }}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#181f33]/90 via-[#181f33]/60 to-transparent" />
							</div>
							{/* Content section - floating card */}
							<div className="md:w-8/12 w-full flex flex-col justify-center md:items-end items-center md:pl-0 md:pr-8 mt-6 md:mt-0 relative z-10">
								<div
									className="w-full md:w-[90%] bg-[#10182b] bg-opacity-95 rounded-lg shadow-xl p-6 md:p-8 flex flex-col items-start md:items-end text-left md:text-right border border-slate-800 md:-ml-24 md:mr-0 md:-translate-x-16 group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-300"
									style={{
										marginTop: "-3rem",
										boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
									}}
								>
									<span className="text-pink-400 text-sm font-mono mb-2 md:mb-0 md:self-end">
										Featured Project
									</span>
									<h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 md:mb-2">
										{data.title}
									</h2>
									<div className="bg-[#181f33] rounded-md p-4 mb-4 shadow text-slate-200 text-sm font-light w-full md:w-auto">
										{data.description}
									</div>
									<div className="flex flex-wrap gap-3 mb-4 md:justify-end">
										{data.techStack?.map((tech) => (
											<span
												key={tech.name || tech}
												className="text-xs font-mono tracking-wide text-slate-300 bg-slate-800 px-3 py-1 rounded-md border border-slate-700"
											>
												{tech.name || tech}
											</span>
										))}
									</div>
									<div className="flex gap-4 mt-2 md:justify-end">
										{data.repoAddress && (
											<a
												href={data.repoAddress}
												target="_blank"
												rel="noopener noreferrer"
												className="text-slate-400 hover:text-pink-400 text-xl transition-colors"
												aria-label="GitHub Repository"
											>
												<FiGithub />
											</a>
										)}
										{data.projectAddress && (
											<a
												href={data.projectAddress}
												target="_blank"
												rel="noopener noreferrer"
												className="text-slate-400 hover:text-pink-400 text-xl transition-colors"
												aria-label="Live Demo"
											>
												<FiExternalLink />
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Works;
