function darkMode() {
	const body = document.body;
	const icon = document.getElementById("darkmode");
	const logo = document.getElementById("logo");
	const desc = document.getElementById("desc");

	if (icon.className === "far fa-moon") {
		icon.className = "fas fa-moon";
		body.className = "darkmode";
		logo.className = "darkmodeLogo";
		desc.className = "darkmodeDesc";
		particlesJS.load('particles-js', 'js/particlesconfig.json', function() {
			console.log('callback - particles.js config loaded');
		});
	} else {
		icon.className = "far fa-moon";
		body.removeAttribute("class");
		logo.removeAttribute("class");
		desc.removeAttribute("class");
		particlesJS.load('particles-js', 'js/particlesconfigLight.json', function() {
			console.log('callback - particles.js light config loaded');
		});
	}
}

particlesJS.load('particles-js', 'js/particlesconfig.json', function() {
	console.log('callback - particles.js config loaded');
});
