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
		left: 0,
		height: 0,
		width: 0,
		visible: false,
		isVertical: true,
	});

	useEffect(() => {
		const idx = tabList.findIndex((tab) => tab.key === activeTab);
		const el = tabRefs.current[idx];
		if (el) {
			const isVertical = window.matchMedia("(min-width: 768px)").matches;
			setIndicatorStyle({
				top: isVertical ? el.offsetTop : el.offsetTop + el.offsetHeight - 2,
				left: isVertical ? 0 : el.offsetLeft,
				height: isVertical ? el.offsetHeight : 2,
				width: isVertical ? 2 : el.offsetWidth,
				visible: true,
				isVertical,
			});
		}
	}, [activeTab]);

	// Listen for resize to update indicator orientation
	useEffect(() => {
		const handleResize = () => {
			const idx = tabList.findIndex((tab) => tab.key === activeTab);
			const el = tabRefs.current[idx];
			if (el) {
				const isVertical = window.matchMedia("(min-width: 768px)").matches;
				setIndicatorStyle({
					top: isVertical ? el.offsetTop : el.offsetTop + el.offsetHeight - 2,
					left: isVertical ? 0 : el.offsetLeft,
					height: isVertical ? el.offsetHeight : 2,
					width: isVertical ? 2 : el.offsetWidth,
					visible: true,
					isVertical,
				});
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [activeTab]);

	return (
		<div className="relative flex md:flex-col flex-row w-full md:w-auto">
			{indicatorStyle.visible && (
				<span
					className={`absolute z-10 bg-pink-500 rounded transition-all duration-300`}
					style={{
						top: indicatorStyle.top,
						left: indicatorStyle.left,
						height: indicatorStyle.height,
						width: indicatorStyle.width,
					}}
				/>
			)}
			<ul className="pl-0 list-none flex md:flex-col flex-row w-full md:w-auto">
				{tabList.map((tab, i) => (
					<li
						key={tab.key}
						onClick={() => setActiveTab(tab.key)}
						ref={(el) => (tabRefs.current[i] = el)}
						className={`relative px-4 py-2 text-sm md:text-base cursor-pointer transition-colors duration-300 whitespace-nowrap
						${
							activeTab === tab.key
								? "text-pink-400 font-semibold bg-slate-800"
								: "hover:bg-slate-700 hover:text-pink-300 border-b-[2px] md:border-b-0 md:border-l-[2px] border-slate-800"
						}
						w-full md:w-auto text-center md:text-left`}
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
