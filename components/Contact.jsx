import { useState } from "react";
import { FiMail } from "react-icons/fi";
import useInView from "./useInView";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [ref, inView] = useInView();

	const disableSubmit = () => {
		// Name: at least 3 non-whitespace chars
		if (name.trim().length < 3) return true;
		// Email: must match email regex
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email.trim())) return true;
		// Message: at least 3 non-whitespace chars
		if (message.trim().length < 3) return true;
		return false;
	};

	return (
		<section
			ref={ref}
			name="contact"
			className={`min-h-screen flex flex-col justify-center items-center text-center bg-inherit md:px-[8rem] px-[2rem] py-12 relative transition-all duration-300 ease-out ${
				inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			}`}
		>
			<div className="flex items-center gap-3 mb-8 w-full max-w-3xl mx-auto">
				<span className="text-pink-400 text-2xl font-mono">05.</span>
				<h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight text-left">
					Contact
				</h2>
				<div className="flex-1 border-b border-slate-700 ml-4" />
			</div>
			<div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
				<div className="md:w-1/2 w-full flex flex-col justify-center items-start text-left">
					<p className="text-slate-300 text-lg font-light mb-4">
						Feel free to reach out for collaboration, questions, or just to say
						hi.
						<br />
						<a
							href="mailto:syahrilhanla5@gmail.com"
							className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold transition mb-6"
						>
							<span className="flex gap-2 items-center mt-2 text-pink-400 font-mono text-base">
								<FiMail className="text-xl" />
								syahrilhanla5@gmail.com
							</span>
						</a>
					</p>
				</div>
				{/* Right: Form */}
				<div className="md:w-1/2 w-full flex flex-col items-center justify-center">
					<form
						method="POST"
						action="https://getform.io/f/f4b8a254-2df3-4de4-b96e-d5df8773d5f4"
						className="w-full bg-[#181f33] rounded-xl shadow-lg border border-slate-800 p-8 flex flex-col gap-5"
						target="_blank"
					>
						<input
							type="text"
							placeholder="Name"
							name="name"
							className="bg-[#1e263d] border border-slate-700 rounded-full py-2 px-3 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-pink-500 transition duration-200 shadow-sm"
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							className="bg-[#1e263d] border border-slate-700 rounded-full py-2 px-3 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-pink-500 transition duration-200 shadow-sm"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							name="message"
							rows="6"
							placeholder="Message"
							className="bg-[#1e263d] border border-slate-700 rounded-2xl py-2 px-3 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-pink-500 transition duration-200 shadow-sm resize-none"
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<button
							type="submit"
							className="w-full mt-2 text-white bg-pink-500 hover:bg-pink-600 rounded-full 
								py-2 transition duration-200 shadow-md text-sm font-semibold
								disabled:bg-pink-300 disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={disableSubmit()}
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
