import Head from "next/head";
import About from "../components/About";
import CallMe from "../components/CallMe";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Works from "../components/Works";
import SocialIcons from "../components/SocialIcons";
import Experience from "../components/Experience";
import { Pointer } from "../components/magicui/pointer";

export default function Startup() {
	return (
		<div className="bg-[#0f172a] min-h-full">
			<Head>
				<title>Syahril Hanla | Software Engineer</title>
				<meta name="description" content="Portfolio Website by Syahril Hanla" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
				/>
				<meta name="theme-color" content="#0f172a" />
				<meta name="author" content="Syahril Hanla" />
				<meta name="keywords" content="Syahril Hanla, Portfolio, Software Engineer, Full Stack Developer, Frontend Developer, Backend Developer, Web Developer, Frontend Engineer" />
				<meta name="robots" content="index, follow" />
				<meta property="og:title" content="Syahril Hanla - Portfolio" />
				<meta property="og:description" content="Portfolio Website by Syahril Hanla" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://syahrilhanla.vercel.app" />

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Pointer className="fill-pink-600/80" />

			<SocialIcons />
			<Navbar />
			<Home />
			<About />
			<Experience />
			<Skills />
			<Works />
			<Contact />
			<CallMe />
		</div>
	);
}
