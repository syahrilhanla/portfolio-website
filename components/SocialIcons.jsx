import Link from "next/link";
import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialIcons = () => {
	const [isAtBottom, setIsAtBottom] = useState(false);

	// Function to check if the user is at the bottom of the page
	const checkBottom = () => {
		const scrollPosition = window.scrollY + window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		return scrollPosition >= documentHeight - 50; // Adjust threshold as needed
	};

	useEffect(() => {
		const handleScroll = () => {
			// console.log(checkBottom());
			setIsAtBottom(checkBottom());
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`${
				isAtBottom ? "opacity-0" : "opacity-100"
			} md:flex fixed flex-col top-1/2 left-2 -translate-y-1/2 z-40 transition-opacity duration-300`}
		>
			<ul>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-6rem] hover:ml-[-5px] duration-300">
					<Link href="https://www.linkedin.com/in/syahril-hanla">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300 hover:text-white"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</Link>
				</li>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-6rem] hover:ml-[-5px] duration-300">
					<Link href="https://github.com/syahrilhanla">
						<a
							target="_blank"
							className="flex justify-between items-center w-full text-gray-300 hover:text-white"
						>
							Github <FaGithub size={30} />
						</a>
					</Link>
				</li>
				<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-6rem] hover:ml-[-5px] duration-300">
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
					<li className="h-[60px] w-[150px] flex justify-between items-center ml-[-6rem] hover:ml-[-5px] duration-300">
						{/* <Link href="/"> */}
						<a className="flex justify-between items-center w-full text-gray-300 hover:text-white">
							Contact <BsPersonLinesFill size={30} />
						</a>
						{/* </Link> */}
					</li>
				</Scroll>
			</ul>
		</div>
	);
};

export default SocialIcons;
