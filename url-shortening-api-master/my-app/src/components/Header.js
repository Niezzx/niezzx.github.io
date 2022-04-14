export default function Header() {
	let navData = ["Shortly", "Features", "Pricing", "Resources"];

	const navList = navData.map((element) => (
		<p className={`nav--${element}`} key={element}>
			{element}
		</p>
	));

	return (
		<div className="header">
			<div className="nav">{navList}</div>
			<div className="register">
				<button className="login">Login</button>
				<button className="sign-up">Sign-up</button>
			</div>
		</div>
	);
}
