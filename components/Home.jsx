import Introduction from "./Introduction";

const Home = () => {
	return (
		<div className='bg-[#0c2852] h-screen w-screen flex flex-col justify-center items-center'>
			<div className='w-[60%] md:w-[50%] '>
				<Introduction />
			</div>
		</div>
	);
};

export default Home;
