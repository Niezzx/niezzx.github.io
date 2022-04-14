import React from "react";
import illustrationWork from "../images/illustration-working.svg";
export default function Start() {
	return (
		<div className="start">
			<section>
				<h1>More than just shorter links</h1>
				<p>
					Build your brand's recognition and get detailed insights on how your
					links are performing
				</p>
				<button>Get Started</button>
			</section>

			<img
				className="illustration-work"
				src={illustrationWork}
				alt="illustration-work"
			/>
		</div>
	);
}
