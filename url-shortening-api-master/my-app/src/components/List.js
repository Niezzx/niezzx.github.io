import React, { useState, useEffect } from "react";

export default function List(props) {
	const propsList = [];
	if (props.result) {
		let res = (
			<li key={props.result["original_link"]}>
				<p>{props.result["original_link"]}</p>
				<span>{props.result["short_link"]}</span>
				<button className="copyed">Copy</button>
			</li>
		);
		propsList.push(res);
	}
	console.log(propsList);
	return (
		<div>
			{propsList.map((v) => (
				<div>{v}</div>
			))}
		</div>
	);
}
