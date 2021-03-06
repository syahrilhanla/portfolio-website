import Head from "next/head";
import About from "../components/About";
import CallMe from "../components/CallMe";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Works from "../components/Works";

export default function Startup() {
	return (
		<div className="bg-[#0c2852] min-h-full">
			<Head>
				<title>Syahril Hanla</title>
				<meta name="description" content="Portfolio Website by Syahril Hanla" />
				<link rel="icon" href="/syahrilLogo-icon.png" />
			</Head>
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
