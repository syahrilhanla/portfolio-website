import Head from "next/head";
import About from "../components/About";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function Startup() {
	return (
		<div>
			<Head>
				<title>Syahril Hanla</title>
				<meta name='description' content='Portfolio Website by Syahril Hanla' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Home />
			<About />
			<Skills />
		</div>
	);
}
