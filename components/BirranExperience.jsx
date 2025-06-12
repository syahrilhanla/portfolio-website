import { BsCaretRight } from "react-icons/bs";

const BirranExperience = () => {
	return (
		<div className="grid gap-1.5">
			<h3 className="text-xl mb-1">
				<strong className="font-semibold">Manual QA Tester</strong> @{" "}
				<a
					className="text-pink-500 font-light"
					href="https://birran.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Birran
				</a>
			</h3>
			<p className="font-light mb-1 flex justify-between">
				<span className="text-sm text-slate-400">
					Banjarmasin, South Kalimantan (Remote)
				</span>
				Jun - Nov 2020
			</p>

			<ul className="list-none space-y-3">
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300 font-light leading-6">
						Performed <b className="font-semibold">manual testing</b> on{" "}
						<b className="font-semibold">Android</b> devices, used for
						submitting and managing <b className="font-semibold">PLN</b>{" "}
						(Perusahaan Listrik Negara) reports.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						<b className="font-semibold">Designed and executed test cases</b>,
						documented bugs using spreadsheets and internal tools, and{" "}
						<b className="font-semibold">
							worked with developers to verify fixes before deployment
						</b>
						.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						Participated in <b className="font-semibold">regression testing</b>,
						validating new features and ensuring previous functionalities
						remained intact.
					</p>
				</li>
				<li className="flex gap-2 pl-0 text-pink-400 cursor-auto">
					<span className="text-xs">
						<BsCaretRight />
					</span>
					<p className="-mt-1.5 text-slate-300  font-light leading-6">
						<b className="font-semibold">Collaborated</b> with product and
						engineering teams to clarify requirements and{" "}
						<b className="font-semibold">improve test coverage</b> based on user
						flows and edge cases.
					</p>
				</li>
			</ul>
		</div>
	);
};

export default BirranExperience;
