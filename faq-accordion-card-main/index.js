const div = document.getElementsByTagName("h3");
const img = document.querySelectorAll(".question-bar > img");
const p = document.getElementsByTagName("p");

const n = document.querySelectorAll(".question-bar").length;

for (i = 0; i < n; i++) {
	document.querySelectorAll(".question-bar")[i].addEventListener("click", function () {
		console.log(this.id);
		document.querySelectorAll("img")[this.id - 1].classList.toggle("collapse-state");
		document.querySelectorAll("p")[this.id - 1].classList.toggle("show-state");
	});
}
