import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Image from "next/image";
const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const [isAtTop, setIsAtTop] = useState(true);
	const [hasBeenInView, setHasBeenInView] = useState(false);
	const lastScrollY = useRef(0);
	const navRef = useRef();

	// Effect to handle scroll events and update the navbar visibility
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY.current) {
				// Scrolling down
				setShowNavbar(false);
			} else {
				// Scrolling up
				setShowNavbar(true);
			}
			lastScrollY.current = window.scrollY;
			setIsAtTop(window.scrollY === 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			// Cleanup the event listener on component unmount
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setHasBeenInView(true);
			},
			{ threshold: 0.1 }
		);
		if (navRef.current) observer.observe(navRef.current);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (navbar) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [navbar]);

	const setMobileNavbar = () => {
		if (!navbar) {
			return "md:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen ml-[-110%] duration-500";
		} else
			return "md:hidden absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen duration-500";
	};

	return (
		<div
			ref={navRef}
			className={`fixed h-[78px] w-full flex justify-between items-center px-2 bg-opacity-95 shadow-lg text-gray-300 z-30
		${showNavbar ? "translate-y-0" : "-translate-y-full"}
		transition-transform duration-300
		${isAtTop ? "shadow-none translate-y-2 bg-inherit" : "shadow-lg bg-[#0e1629]"}
		transition-all duration-1000 ease-out
		${hasBeenInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
		>
			<div className="ml-1">
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
					<Link to="about" smooth={true} duration={500} className="text-sm">
						<span className="text-pink-400 font-mono">01. </span>About
					</Link>
				</li>
				<li>
					<Link
						to="experience"
						smooth={true}
						duration={500}
						className="text-sm"
					>
						<span className="text-pink-400 font-mono">02. </span>Experience
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500} className="text-sm">
						<span className="text-pink-400 font-mono">03. </span>Skills
					</Link>
				</li>
				<li>
					<Link to="works" smooth={true} duration={500} className="text-sm">
						<span className="text-pink-400 font-mono">04. </span>Projects
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500} className="text-sm">
						<span className="text-pink-400 font-mono">05. </span>Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div className=" flex md:hidden z-30 cursor-pointer">
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
						to="experience"
						smooth={true}
						duration={500}
						onClick={() => setNavbar((prevValue) => !prevValue)}
					>
						Experience
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
		</div>
	);
};

export default Navbar;
