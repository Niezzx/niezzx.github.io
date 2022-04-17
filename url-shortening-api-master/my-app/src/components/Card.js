import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

function Card() {
	const data = [
		{
			name: "brand",
			img: brand,
			title: "Brand Recognition",
			content: `Boost your brand recognition with each click.Generic links don't mean a thing. Branded links help instill confidence in your centent.`,
		},
		{
			name: "detailed",
			img: detailed,
			title: "Detailed Records",
			content: `Gain insights into who is clicking your links. Knowign when and where people engage with yoru content helps inform better decisions.`,
		},

		{
			name: "fully",
			img: fully,
			title: "Fully Customizable",
			content: `improve brand awareness and content discoverability through customizable links,supercharging audience engagement.`,
		},
	];

	const cardList = data.map((v) => {
		return (
			<div className="card" key={v.name}>
				<img src={v.img} alt={v.name} />
				<h3>{v.title}</h3>
				<span>{v.content}</span>
			</div>
		);
	});
	return <div className="cardList">{cardList}</div>;
}

export default Card;
