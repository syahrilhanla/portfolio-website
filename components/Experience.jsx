import { useState } from "react";
import PraktisExperience from "./PraktisExperience";
import BirranExperience from "./BirranExperience";
import StartupBorneoExperience from "./StartupBorneoExperience";
import ExperienceTabs from "./ExperienceTabs";

const Experience = () => {
	const [activeTab, setActiveTab] = useState("praktis");
	const [tabKey, setTabKey] = useState(0);

	const handleTabChange = (tab) => {
		setActiveTab(tab);
		setTabKey((prev) => prev + 1); // force remount for animation
	};

	return (
		<div
			className="min-h-screen text-slate-300 border-none overflow-visible
      md:px-10 px-3 md:pb-0 pb-12 flex flex-col justify-center items-center"
			name="experience"
		>
			<div className="space-y-8 lg:max-w-3xl max-w-4xl mt-10 md:mt-0 max-h-96">
				<div className="flex items-center gap-3 mb-8">
					<span className="text-pink-400 text-2xl font-mono">03.</span>
					<h1 className="text-3xl md:text-4xl font-semibold text-slate-100 tracking-tight">
						Experience
					</h1>
					<div className="flex-1 border-b border-slate-700 ml-4" />
				</div>

				<div className="w-full grid md:grid-cols-[4fr_6fr] gap-4 mt-6">
					<ExperienceTabs
						activeTab={activeTab}
						setActiveTab={handleTabChange}
					/>

					<div className="max-h-[16rem] overflow-visible max-w-md text-sm md:text-base">
						<div
							key={tabKey}
							className="animate-fade-in transition-all duration-300"
						>
							{activeTab === "praktis" && <PraktisExperience />}
							{activeTab === "birran" && <BirranExperience />}
							{activeTab === "startup" && <StartupBorneoExperience />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;

// Add this to your global CSS (e.g., globals.css) if not using Tailwind's animate utilities:
/*
@keyframes fade-in {
  from { opacity: 0; transform: translateY(16px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in {
  animation: fade-in 0.3s;
}
*/
