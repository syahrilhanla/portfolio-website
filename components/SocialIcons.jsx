import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

const SocialIcons = ({ navbar }) => {
	return (
		<div
			className={
				navbar
					? "hidden"
					: `hidden md:flex fixed flex-col top-1/2 left-2 -translate-y-1/2`
			}
		>
			<ul>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
					<Link href="https://www.linkedin.com/in/syahril-hanla">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300 hover:text-white"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</Link>
				</li>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
					<Link href="https://github.com/syahrilhanla">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300 hover:text-white"
						>
							Github <FaGithub size={30} />
						</a>
					</Link>
				</li>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
					<Link href="https://www.instagram.com/syahrilhanla64/">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300 hover:text-white"
						>
							Instagram <FaInstagram size={30} />
						</a>
					</Link>
				</li>
				<Scroll to="contact" smooth={true} duration={500}>
					<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
						<Link href="/" target={"_blank"}>
							<a
								target="_blank"
								className="flex justify-between items-center w-full text-gray-300 hover:text-white"
							>
								Contact <BsPersonLinesFill size={30} />
							</a>
						</Link>
					</li>
				</Scroll>
			</ul>
		</div>
	);
};

export default SocialIcons;
