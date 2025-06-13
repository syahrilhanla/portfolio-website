import Image from "next/image";
import useInView from "./useInView";

const skillsData = [
	{
		category: "Frontend",
		items: [
			{ name: "JavaScript (ES6+)", icon: "/javascript.png" },
			{ name: "TypeScript", icon: "/typescript.svg" },
			{ name: "React", icon: "/react.png" },
			{ name: "Next.js", icon: "/nextJS.svg" },
			{ name: "Vue.js", icon: "/Vue.js.svg" },
			{ name: "Tailwind CSS", icon: "/tailwind.png" },
		],
	},
	{
		category: "Backend",
		items: [
			{ name: "Node.js", icon: "/nodeJS.svg" },
			{ name: "Django", icon: "/django.svg" },
			{ name: "Laravel", icon: "/laravel.svg" },
			{ name: "Firebase", icon: "/firebase.png" },
		],
	},
	{
		category: "Database",
		items: [
			{ name: "MongoDB", icon: "/mongo.png" },
			{ name: "MySQL", icon: "/mysql.svg" },
			{ name: "PostgreSQL", icon: "/postgresql.svg" },
		],
	},
	{
		category: "Tools",
		items: [
			{ name: "Git", icon: "/git.svg" },
			{ name: "GitHub", icon: "/github.svg" },
			{ name: "GitLab", icon: "/gitlab.svg" },
			{ name: "Postman", icon: "/postman.svg" },
			{ name: "Vercel", icon: "/vercel.svg" },
			// { name: "Heroku", icon: "/heroku.svg" },
			{ name: "Figma", icon: "/figma.svg" },
		],
	},
];

const Skills = () => {
	const [ref, inView] = useInView();
	return (
		<section
			ref={ref}
			className={`min-h-screen flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem] py-12 relative transition-all duration-700 ease-out ${
				inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			}`}
			name="skills"
		>
			<div className="flex flex-col w-full max-w-5xl">
				<div className="flex items-center gap-3 mb-8">
					<span className="text-pink-400 text-2xl font-mono">03.</span>
					<h1 className="text-3xl md:text-4xl font-semibold text-slate-100 tracking-tight">
						Skills
					</h1>
					<div className="flex-1 border-b border-slate-700 ml-4" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full overflow-visible">
					{skillsData.map((cat) => (
						<div
							key={cat.category}
							className="bg-[#151e35] rounded-xl hover:z-30 shadow-lg p-6 flex flex-col items-center border border-slate-800 hover:shadow-pink-500/10 transition-shadow duration-300 overflow-visible"
						>
							<h2 className="text-2xl font-semibold text-pink-400 mb-4 tracking-wide w-full text-left pl-2">
								{cat.category}
							</h2>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full overflow-visible">
								{cat.items.map((item) => (
									<div
										key={item.name}
										className="flex flex-col items-center p-3 rounded-md bg-[#1a233a] shadow-md shadow-[#040c16]/30 hover:scale-105 hover:shadow-pink-400/30 duration-300 group relative z-10 overflow-visible"
									>
										<Image
											src={item.icon}
											width={48}
											height={48}
											alt={item.name}
											className="mb-2"
										/>
										<span className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-full bg-slate-900 text-xs text-slate-100 px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg border border-pink-300">
											{item.name}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
