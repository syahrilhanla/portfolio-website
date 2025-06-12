import { useState } from "react";
import PraktisExperience from "./PraktisExperience";
import BirranExperience from "./BirranExperience";

const Experience = () => {
	const [activeTab, setActiveTab] = useState("praktis");
	return (
		<div
			className="min-h-screen text-slate-300 border-none overflow-visible
      md:px-10 px-3 md:pb-0 pb-12 flex flex-col justify-center items-center"
			name="experience"
		>
			<div className="space-y-8 lg:max-w-3xl max-w-5xl mt-10 md:mt-0 max-h-96">
				<h1 className="w-fit text-3xl text-white font-medium border-b-2 border-pink-600">
					Where I've Worked
				</h1>

				<div className="grid grid-cols-[4fr_6fr] gap-4 mt-6">
					<ul className="pl-0 list-none">
						<li
							onClick={() => {
								setActiveTab("praktis");
							}}
						>
							Praktis
						</li>
						<li
							onClick={() => {
								setActiveTab("universitas");
							}}
						>
							Universitas Lambung Mangkurat
						</li>
						<li
							onClick={() => {
								setActiveTab("birran");
							}}
						>
							Birran
						</li>
						<li
							onClick={() => {
								setActiveTab("startup");
							}}
						>
							Startup Borneo Foundation
						</li>
					</ul>

					<div className="min-h-[300px] overflow-visible">
						{activeTab === "praktis" && <PraktisExperience />}
						{activeTab === "birran" && <BirranExperience />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
