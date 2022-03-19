function getAdvice() {
	const xhr = new XMLHttpRequest();
	/* initialize request */
	xhr.open("GET", "https://api.adviceslip.com/advice");

	xhr.onload = () => {
		const data = JSON.parse(xhr.response);
		const element = document.querySelector("h5");
		element.children[0].innerHTML = data.slip.id;
		element.children[1].innerHTML = data.slip.advice;
	};

	xhr.send();
}

function message() {
	console.log("hello world");
}

const icon = document.querySelector(".icon");
icon.addEventListener("click", getAdvice);

icon.addEventListener("click", message);
