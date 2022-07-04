import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const CallMe = () => {
	return (
		<div
			name="call me"
			className="bg-[#0c2852] min-h-fit text-gray-300 flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem] pb-10"
		>
			<ul className="flex flex-row">
				<li>
					<Link href="https://www.linkedin.com/in/syahril-hanla-45387220a/">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300"
						>
							<FaLinkedin size={30} />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://github.com/syahrilhanla">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300"
						>
							<FaGithub size={30} />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://www.instagram.com/syahrilhanla64/">
						<a target="_blank" className="w-full text-gray-300">
							<FaInstagram size={30} />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://api.whatsapp.com/send?phone=6282252613500">
						<a target="_blank" className="w-full text-gray-300">
							<FaWhatsapp size={30} />
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default CallMe;
