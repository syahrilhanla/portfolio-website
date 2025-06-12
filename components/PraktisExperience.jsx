import { BsCaretRight } from "react-icons/bs";

const PraktisExperience = () => {
	return (
		<div className="grid gap-1.5">
			<h3 className="text-base md:text-xl mb-1">
				<strong className="font-semibold">Frontend Engineer</strong> @{" "}
				<a
					className="text-pink-500 font-light"
					href="https://praktis.co"
					target="_blank"
					rel="noopener noreferrer"
				>
					Praktis
				</a>
			</h3>
			<p className="font-light mb-1 flex justify-between">
				<span className="text-sm text-slate-400">
					South Jakarta, DKI Jakarta (Hybrid)
				</span>
				2022 - 2025
			</p>

			<ul className="list-none space-y-3">
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300 font-light leading-6">
						Migrated multiple platforms from{" "}
						<b className="font-semibold">Vue.js</b> to scalable architecture
						using <b className="font-semibold">Next.js</b>,
						<b className="font-semibold">Typescript</b>,{" "}
						<b className="font-semibold">Tailwind CSS</b>, clean & reusable
						components, and <b className="font-semibold">MVVM architecture</b>{" "}
						to significantly improve development cycles and maintainability.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						Worked closely with{" "}
						<b className="font-semibold">cross-functional teams</b> — including
						Product, Design, QA, and other Engineers — to deliver high quality
						and user-centric features in <b className="font-semibold">Agile</b>{" "}
						development environment.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						Integrated <b className="font-semibold">REST APIs</b> and{" "}
						<b className="font-semibold">tRPC</b> for handling dynamic business
						logic, data visualization, and workflow execution with robust states
						and error management.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						Continuous development by bug fixes, feature updates, and unit tests
						to ensure high product quality
					</p>
				</li>
			</ul>
		</div>
	);
};

export default PraktisExperience;
