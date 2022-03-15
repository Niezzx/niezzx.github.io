function validation() {
	let eValue = document.querySelector("#email").value;
	let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$^\w+()a/;
	let error = document.querySelector(".error");
	let errorMessage = document.querySelector(".errorMessage");

	if (eValue.match(reg)) {
		console.log("success");
	} else {
		error.classList.remove("active");
		errorMessage.classList.remove("active");
	}
}

const button = document.querySelector(".btn");
button.addEventListener("click", validation);
