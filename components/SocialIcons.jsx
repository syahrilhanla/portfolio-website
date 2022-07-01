import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const SocialIcons = ({ navbar }) => {
	return (
		<div
			className={
				navbar ? "hidden" : `hidden md:flex fixed flex-col top-[30%] left-2`
			}
		>
			<ul>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
					<Link href="https://www.linkedin.com/in/syahril-hanla-45387220a/">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</Link>
				</li>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
					<Link href="https://github.com/syahrilhanla">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300"
						>
							Github <FaGithub size={30} />
						</a>
					</Link>
				</li>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
					<Link href="https://www.instagram.com/syahrilhanla64/">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300"
						>
							Instagram <FaInstagram size={30} />
						</a>
					</Link>
				</li>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
					<Link href="/">
						<a className="flex justify-between items-center w-full text-gray-300">
							Email <HiOutlineMail size={30} />
						</a>
					</Link>
				</li>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300">
					<Link href="/">
						<a className="flex justify-between items-center w-full text-gray-300">
							Contact <BsPersonLinesFill size={30} />
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SocialIcons;
