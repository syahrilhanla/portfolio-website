import { useRef, useEffect, useState } from "react";

const tabList = [
	{ key: "praktis", label: "Praktis" },
	// { key: "universitas", label: "Universitas Lambung Mangkurat" },
	{ key: "birran", label: "Birran" },
	{ key: "startup", label: "Startup Borneo Foundation" },
];

const ExperienceTabs = ({ activeTab, setActiveTab }) => {
	const tabRefs = useRef([]);
	const [indicatorStyle, setIndicatorStyle] = useState({
		top: 0,
		height: 0,
		visible: false,
	});

	useEffect(() => {
		const idx = tabList.findIndex((tab) => tab.key === activeTab);
		const el = tabRefs.current[idx];
		if (el) {
			setIndicatorStyle({
				top: el.offsetTop,
				height: el.offsetHeight || 48, // fallback height
				visible: true,
			});
		}
	}, [activeTab]);

	return (
		<div className="relative flex flex-col">
			{indicatorStyle.visible && (
				<span
					className="absolute left-0 z-50 w-0.5 bg-pink-500 transition-all duration-300"
					style={{
						top: indicatorStyle.top,
						height: indicatorStyle.height,
					}}
				/>
			)}
			<ul className="pl-0 list-none flex flex-col">
				{tabList.map((tab, i) => (
					<li
						key={tab.key}
						onClick={() => setActiveTab(tab.key)}
						ref={(el) => (tabRefs.current[i] = el)}
						className={`relative px-4 py-2 text-sm md:text-base cursor-pointer transition-colors duration-300 
						${
							activeTab === tab.key
								? "text-pink-400 font-semibold bg-slate-800"
								: "hover:bg-slate-700 hover:text-pink-300 border-l-[2px] border-slate-800"
						}
					`}
						style={{ zIndex: 1 }}
					>
						{tab.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExperienceTabs;
