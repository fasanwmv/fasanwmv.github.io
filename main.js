
window.onload = function() {
	advantages = document.querySelectorAll(".advantage .title");
	for (let i = 0; i < advantages.length; i++) {
		img = document.createElement("img");
		img.src = "tick.svg";
		advantages[i].prepend(img);
	}
}
