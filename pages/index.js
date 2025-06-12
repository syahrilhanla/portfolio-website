import Head from "next/head";
import About from "../components/About";
import CallMe from "../components/CallMe";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Works from "../components/Works";
import SocialIcons from "../components/SocialIcons";

export default function Startup() {
	return (
		<div className="bg-[#0f172a] min-h-full">
			<Head>
				<title>Syahril Hanla</title>
				<meta name="description" content="Portfolio Website by Syahril Hanla" />
				<link rel="icon" href="/syahrilLogo-icon.png" />
			</Head>
			<SocialIcons />
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Works />
			<Contact />
			<CallMe />
		</div>
	);
}
