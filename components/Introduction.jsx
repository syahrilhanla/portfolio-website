import { HiArrowNarrowRight } from "react-icons/hi";

const Introduction = () => {
	return (
		<div className='flex flex-col'>
			<p className='text-red-700 font-medium text-lg'>Hi, my name is</p>
			<h1 className='text-white text-5xl font-bold mt-[-10px]'>
				Syahril Hanla
			</h1>
			<h1 className='text-slate-500 text-5xl font-bold mb-3'>
				I'm a Full Stack Developer.
			</h1>
			<p className='text-slate-400 text-sm'>
				I'm a full-stack developer specializing in building (and occasionally
				designing) exceptional digital experiences. Currently, I'm focused on
				building responsive full-stack web applications.
			</p>

			<button className='flex flex-row justify-between items-center px-5 py-2 border border-white border-2 rounded-md text-white w-[9rem] mt-4 font-light hover:bg-slate-300 hover:font-normal hover:text-slate-700 hover:border-bg-slate-700 duration-300'>
				View Work <HiArrowNarrowRight />
			</button>
		</div>
	);
};

export default Introduction;
