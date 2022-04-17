import { useState, useEffect, useRef } from "react";

export default function List({ response }) {
	const [res, setRes] = useState([]);
	console.log(res);
	useEffect(() => {
		setRes((prev) => {
			return [...prev, response];
		});
	}, [response]);

	const resList = res.map((element) => {
		if (element.code) {
			return (
				<li key={element.code}>
					<p>{element["original_link"]}</p>
					<span>{element["short_link"]}</span>
					<button className="copyed">Copy</button>
				</li>
			);
		} else {
			return null;
		}
	});
	return <div>{resList}</div>;
}

/* <li key={props.result["original_link"]}>
				<p>{props.result["original_link"]}</p>
				<span>{props.result["short_link"]}</span>
				<button className="copyed">Copy</button>
	</li> */
