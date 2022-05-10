import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

import Image from "next/image";
const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	return (
		<div className='fixed h-[78px] w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
			<div className='ml-4'>
				<Image
					src={"/logo.png"}
					quality={75}
					width={48}
					height={48}
					alt={"logo"}
				/>
			</div>

			{/* Menu */}
			<ul className='hidden md:flex'>
				<li>Home</li>
				<li>About</li>
				<li>Experience</li>
				<li>Works</li>
				<li>Contact</li>
			</ul>

			{/* Hamburger */}
			<div className=' flex md:hidden z-10 cursor-pointer'>
				{navbar ? (
					<>
						<FaTimes onClick={() => setNavbar((prevValue) => !prevValue)} />
					</>
				) : (
					<FaBars onClick={() => setNavbar((prevValue) => !prevValue)} />
				)}
			</div>

			{/* Mobile Menu */}
			<ul
				className={`${
					!navbar
						? "hidden"
						: "absolute top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center h-screen w-screen"
				}`}
			>
				<li className='pb-3 text-3xl'>Home</li>
				<li className='pb-3 text-3xl'>About</li>
				<li className='pb-3 text-3xl'>Experience</li>
				<li className='pb-3 text-3xl'>Works</li>
				<li className='pb-3 text-3xl'>Contact</li>
			</ul>

			{/* social icons */}
			<div className='flex fixed flex-col top-[30%] left-2'>
				<ul>
					<li className='h-[60px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300'>
						<a
							href='/'
							className='flex justify-between items-center w-full text-gray-300'
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className='h-[60px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300'>
						<a
							href='/'
							className='flex justify-between items-center w-full text-gray-300'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='h-[60px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300'>
						<a
							href='/'
							className='flex justify-between items-center w-full text-gray-300'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='h-[60px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300'>
						<a
							href='/'
							className='flex justify-between items-center w-full text-gray-300'
						>
							Contact <BsPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
