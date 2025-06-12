import DetailCard from "./DetailCard";
import workData from "./workData";

const Works = () => {
	return (
		<div
			name="works"
			className="min-h-screen text-gray-300 flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem] pb-7"
		>
			<div className="flex justify-start flex-col sm:mt-3 mt-[6rem] md:w-[70vw] w-[85vw]">
				<h1 className="text-4xl w-min font-medium border-b-4 border-pink-600 py-1">
					Works
				</h1>
				<p className="text-xl font-light py-3 mb-6 text-left">
					# These are some project I've been working with
				</p>

				<div className="flex flex-wrap">
					{workData.map((data) => (
						<div
							className="shadow-lg shadow-[#040c16] group container
							 rounded-md mx-auto md:relative flex items-end md:overflow-hidden
							 md:w-[400px] w-[100vw] bg-center bg-cover
							 bg-no-repeat md:min-h-[480px] min-h-[100vh] m-4"
							key={data.title}
							style={{ backgroundImage: `url(${data.imgURL})` }}
						>
							<DetailCard
								title={data.title}
								description={data.description}
								techStack={data.techStack}
								repoAddress={data.repoAddress}
								projectAddress={data.projectAddress}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Works;
