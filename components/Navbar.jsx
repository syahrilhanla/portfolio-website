import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Image from "next/image";
import SocialIcons from "./SocialIcons";
const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const setMobileNavbar = () => {
		if (!navbar) {
			return "md:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen ml-[-110%] duration-500";
		} else
			return "md:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen duration-500";
	};

	return (
		<div className="fixed h-[78px] w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
			<div className="ml-4">
				<Image
					src={"/syahrilLogo.png"}
					quality={75}
					width={86}
					height={86}
					alt={"logo"}
				/>
			</div>

			{/* Menu */}
			<ul className="hidden md:flex">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="works" smooth={true} duration={500}>
						Works
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div className=" flex md:hidden z-10 cursor-pointer">
				{navbar ? (
					<>
						<FaTimes onClick={() => setNavbar((prevValue) => !prevValue)} />
					</>
				) : (
					<FaBars onClick={() => setNavbar((prevValue) => !prevValue)} />
				)}
			</div>

			{/* Mobile Menu */}
			<ul className={setMobileNavbar()}>
				<li className="pb-3 text-3xl">
					<Link
						to="home"
						smooth={true}
						duration={500}
						onClick={() => setNavbar((prevValue) => !prevValue)}
					>
						Home
					</Link>
				</li>
				<li className="pb-3 text-3xl">
					<Link
						onClick={() => setNavbar((prevValue) => !prevValue)}
						to="about"
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="pb-3 text-3xl">
					<Link
						to="skills"
						smooth={true}
						duration={500}
						onClick={() => setNavbar((prevValue) => !prevValue)}
					>
						Skills
					</Link>
				</li>
				<li className="pb-3 text-3xl">
					<Link
						to="works"
						smooth={true}
						duration={500}
						onClick={() => setNavbar((prevValue) => !prevValue)}
					>
						Works
					</Link>
				</li>
				<li className="pb-3 text-3xl">
					<Link
						to="contact"
						smooth={true}
						duration={500}
						onClick={() => setNavbar((prevValue) => !prevValue)}
					>
						Contact
					</Link>
				</li>
			</ul>

			<SocialIcons navbar={navbar} />
		</div>
	);
};

export default Navbar;
