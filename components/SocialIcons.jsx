import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialIcons = ({ navbar }) => {
	return (
		<div className={navbar ? "hidden" : `flex fixed flex-col top-[30%] left-2`}>
			<ul>
				<li className='h-[60px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300'>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/syahril-hanla-45387220a/'
						className='flex justify-between items-center w-full text-gray-300'
					>
						Linkedin <FaLinkedin size={30} />
					</a>
				</li>
				<li className='h-[60px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] duration-300'>
					<a
						target='_blank'
						href='https://github.com/syahrilhanla'
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
	);
};

export default SocialIcons;
