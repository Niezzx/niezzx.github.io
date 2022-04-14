import React from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import ShortenLink from "./components/ShortenLink";

export default function App() {
	return (
		<div className="app">
			<Header />
			<Start />
			<ShortenLink />
		</div>
	);
}
