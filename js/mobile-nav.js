// navigation javascript for mobile screen

const toggleBtn = document.querySelector(".mobile-toggle")
const navMenu = document.querySelector(".header-main")

// check for EventTarget, in this case toggleBtn is clicked
toggleBtn.addEventListener("click", () => {
	// alert("toggle: " + toggleBtn.style.display);
	// alert("nav: " + navMenu.style.display);
	
	toggleBtn.classList.toggle("active");
	navMenu.classList.toggle("active");
})