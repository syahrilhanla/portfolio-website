import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const CallMe = () => {
	return (
		<div
			name="call me"
			className="min-h-fit text-gray-300 flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem] pb-10"
		>
			<ul className="flex flex-row">
				<li>
					<Link href="https://www.linkedin.com/in/syahril-hanla-45387220a/">
						<a
							target="_blank"
							className="flex justify-between items-center w-full"
						>
							<FaLinkedin size={30} className="hover:scale-110 transition-transform hover:text-white duration-300" />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://github.com/syahrilhanla">
						<a
							target="_blank"
							className="flex justify-between items-center w-full"
						>
							<FaGithub size={30} className="hover:scale-110 transition-transform hover:text-white duration-300" />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://www.instagram.com/syahrilhanla64/">
						<a target="_blank" className="w-full">
							<FaInstagram size={30} className="hover:scale-110 transition-transform hover:text-white duration-300" />
						</a>
					</Link>
				</li>
				<li>
					<Link href="https://api.whatsapp.com/send?phone=6282252613500">
						<a target="_blank" className="w-full">
							<FaWhatsapp size={30} className="hover:scale-110 transition-transform hover:text-white duration-300" />
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default CallMe;
