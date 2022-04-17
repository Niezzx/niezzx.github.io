import fackbook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
	const data = [
		["Features", "Link Shorting", "Branded Links", "Analytic"],
		["Resources", "Blog", "Developers", "Support"],
		["Company", "About", "Our Team", "Careers", "Contact"],
	];
	const links_1 = data[0].map((v) => <p key={v}>{v}</p>);
	const links_2 = data[1].map((v) => <p key={v}>{v}</p>);
	const links_3 = data[2].map((v) => <p key={v}>{v}</p>);

	return (
		<div className="footer">
			<div className="boost">
				<div>Boost Your links todays</div>
				<button>Get Started</button>
			</div>
			<div className="bottom">
				<div className="icon">Shortly</div>
				<div className="links">
					<div className="links-1">{links_1}</div>
					<div className="links-2">{links_2}</div>
					<div className="links-3">{links_3}</div>
				</div>
				<div className="social">
					<img src={fackbook} alt="facebook" />
					<img src={twitter} alt="twitter" />
					<img src={pinterest} alt="pinterest" />
					<img src={instagram} alt="instagram" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
