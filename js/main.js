function darkMode() {
	const icon = document.getElementById("darkmode");
	const body = document.body;
	const logo = document.getElementById("logo");
	const desc = document.getElementById("desc");

	if (icon.className === "far fa-moon") {
		icon.className = "fas fa-moon";
		body.className = "darkmode";
		logo.className = "darkmodeLogo";
		desc.className = "darkmodeDesc";
	} else {
		icon.className = "far fa-moon";
		body.removeAttribute("class");
		logo.removeAttribute("class");
		desc.removeAttribute("class");
	}
}
