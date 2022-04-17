import React, { useState } from "react";

import List from "./List";
import Card from "./Card";

export default function ShortenLink() {
	let initStyle = true;

	const [linkData, setLinkDate] = useState({ inputContent: "" });
	const [responseData, setResponseData] = useState({
		ok: true,
		result: "",
	});

	function handleChange(e) {
		setLinkDate({ inputContent: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		let url = `https://api.shrtco.de/v2/shorten?url=${linkData.inputContent}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (data.ok) setResponseData(data.result);
			})
			.catch(() => {
				return { ok: false };
			});
	}
	if (responseData.ok === false) initStyle = false;

	return (
		<div className="shortenLink">
			<form className="links" onSubmit={handleSubmit}>
				<input
					type="text"
					className={initStyle ? "" : "input-wrong-state"}
					placeholder="  Shorten a link here..."
					name="inputContent"
					onChange={handleChange}
					value={linkData.inputContent}
				/>
				{!initStyle && <p></p>}
				<button>Shorten It!</button>
			</form>
			<ul className="shortenUl">
				<List response={responseData} />
			</ul>
			<div className="advancedStatistics">
				<h1>Advanced Statistics</h1>
				<p>
					Track hwo your links are performing across the web with our advanced
					statistics dashboard.
				</p>
				<Card />
			</div>
		</div>
	);
}
