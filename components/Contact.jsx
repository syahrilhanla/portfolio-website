const Contact = () => {
	return (
		<div
			name="contact"
			className="bg-[#0c2852] min-h-screen flex flex-col justify-center items-center text-center md:px-[8rem] px-[2rem]"
		>
			<form
				method="POST"
				action="https://getform.io/f/f4b8a254-2df3-4de4-b96e-d5df8773d5f4"
				className="flex flex-col max-w-[600px] w-full py-4 text-left font-light"
				target="_blank"
			>
				<div className="pb-8">
					<p className="text-4xl font-semibold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4 text-lg">
						# Submit the form below or shoot me an email -
						syahrilhanla5@gmail.com
					</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2 rounded-md placeholder-gray-500"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6] rounded-md placeholder-gray-500"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#ccd6f6] p-2 rounded-md placeholder-gray-500"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button
					className="text-white border-2 hover:bg-pink-600
				 hover:border-pink-600 px-4 py-3 my-4 mx-auto
				  flex items-center rounded-md duration-150"
				>
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
